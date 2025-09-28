import express from "express";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";   // <-- import cors

dotenv.config();

const app = express();
console.log("DEBUG EMAIL_USER:", process.env.EMAIL_USER);
console.log("DEBUG EMAIL_PASS:", process.env.EMAIL_PASS ? "loaded ✅" : "missing ❌");


// ✅ Allow frontend requests
app.use(cors({
  origin: "http://localhost:8080", // allow your frontend
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"]
}));

app.use(bodyParser.json());

// Email route
app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  console.log("🔑 Using email:", process.env.EMAIL_USER);

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Message from ${name} (${email})`,
      text: message,
    });

    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("❌ Email error:", error);
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
});

app.listen(5000, () => {
  console.log("✅ Backend running at http://localhost:5000");
});
