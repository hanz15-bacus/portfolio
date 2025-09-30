from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.core.mail import send_mail
from django.conf import settings
from .models import ContactMessage
from .serializers import ContactMessageSerializer
import logging

logger = logging.getLogger(__name__)

@api_view(['POST'])
def send_contact_email(request):
    """
    Handle contact form submissions and send email
    """
    serializer = ContactMessageSerializer(data=request.data)
    
    if serializer.is_valid():
        # Save to database
        contact_message = serializer.save()
        
        # Prepare email content
        first_name = serializer.validated_data['first_name']
        last_name = serializer.validated_data['last_name']
        email = serializer.validated_data['email']
        subject = serializer.validated_data['subject']
        message = serializer.validated_data['message']
        
        # Email subject
        email_subject = f"Portfolio Contact: {subject}"
        
        # Email body
        email_body = f"""
You have received a new message from your portfolio contact form.

From: {first_name} {last_name}
Email: {email}
Subject: {subject}

Message:
{message}

---
This message was sent from your portfolio contact form.
Message ID: {contact_message.id}
Received at: {contact_message.created_at.strftime('%Y-%m-%d %H:%M:%S')}
        """
        
        try:
            # Send email
            send_mail(
                email_subject,
                email_body,
                settings.DEFAULT_FROM_EMAIL,
                [settings.RECIPIENT_EMAIL],
                fail_silently=False,
            )
            
            # Send auto-reply to the sender
            auto_reply_subject = "Thank you for contacting me!"
            auto_reply_body = f"""
Hi {first_name},

Thank you for reaching out! I have received your message and will get back to you as soon as possible, typically within 24 hours.

Your message:
Subject: {subject}
{message}

Best regards,
Hanz Chester V. Bacus

---
This is an automated response. Please do not reply to this email.
            """
            
            send_mail(
                auto_reply_subject,
                auto_reply_body,
                settings.DEFAULT_FROM_EMAIL,
                [email],
                fail_silently=True,  # Don't fail if auto-reply fails
            )
            
            logger.info(f"Contact email sent successfully from {email}")
            
            return Response(
                {
                    'message': 'Email sent successfully!',
                    'data': serializer.data
                },
                status=status.HTTP_200_OK
            )
            
        except Exception as e:
            logger.error(f"Failed to send email: {str(e)}")
            # Still keep the message in database even if email fails
            return Response(
                {
                    'message': 'Message saved but email delivery failed. Please try contacting directly.',
                    'error': str(e)
                },
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
    
    return Response(
        {
            'message': 'Invalid data',
            'errors': serializer.errors
        },
        status=status.HTTP_400_BAD_REQUEST
    )