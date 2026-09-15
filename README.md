# 🚀 ResumindAI — AI Powered Resume Analyzer

ResumindAI is a full-stack AI-powered Resume Analyzer that helps users evaluate and improve their resumes for Applicant Tracking Systems (ATS).

Users can create an account, securely upload their resume as a PDF, receive an AI-generated ATS analysis, and get actionable feedback including strengths, missing keywords, suggestions, and improvement areas.

The application uses a React frontend, Node.js/Express backend, MongoDB for persistent data storage, Cloudinary for resume file storage, and OpenRouter for AI-powered analysis.

---

# ✨ Features

## 🔐 Authentication

- User registration
- User login
- Password hashing using bcrypt
- JWT-based authentication
- Protected frontend routes
- Protected backend API routes
- Logout functionality
- User-specific resume access

---

## 📄 Resume Upload

- Upload resume PDFs
- File validation
- 5 MB file size limit
- Multipart form-data upload
- Temporary server-side file handling
- PDF text extraction on the backend
- Resume files stored securely using Cloudinary

---

## 🔁 Duplicate Resume Detection

ResumindAI prevents unnecessary re-analysis of the same resume.

Each uploaded PDF is processed using a SHA-256 hash.

```txt
Upload Resume
      ↓
Generate SHA-256 Hash
      ↓
Check user's existing resumes
      ↓
   ┌──┴──┐
   ↓     ↓
Exists  New
   ↓     ↓
Return  Store Resume
Existing    ↓
Analysis  AI Analysis
