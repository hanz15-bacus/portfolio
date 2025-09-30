from django.contrib import admin
from .models import ContactMessage

@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ['first_name', 'last_name', 'email', 'subject', 'created_at', 'is_read']
    list_filter = ['is_read', 'created_at']
    search_fields = ['first_name', 'last_name', 'email', 'subject', 'message']
    readonly_fields = ['created_at']
    list_per_page = 20
    
    fieldsets = (
        ('Contact Information', {
            'fields': ('first_name', 'last_name', 'email')
        }),
        ('Message Details', {
            'fields': ('subject', 'message')
        }),
        ('Status', {
            'fields': ('is_read', 'created_at')
        }),
    )
    
    def mark_as_read(self, request, queryset):
        queryset.update(is_read=True)
    mark_as_read.short_description = "Mark selected messages as read"
    
    def mark_as_unread(self, request, queryset):
        queryset.update(is_read=False)
    mark_as_unread.short_description = "Mark selected messages as unread"
    
    actions = [mark_as_read, mark_as_unread]