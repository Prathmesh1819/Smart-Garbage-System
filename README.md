# ♻️ Smart Garbage Management System

A modern web-based Smart Garbage Management System that enables citizens to report overflowing garbage bins and helps municipal authorities efficiently monitor, manage, and resolve waste collection requests. The system provides a simple reporting interface for users and an admin dashboard for tracking and managing complaints.

## 🌐 Live Demo

**Website:** https://smart-garbage-system-pi.vercel.app/

---

## 📸 Preview

<img width="1408" height="757" alt="Screenshot 2026-07-23 at 22 49 02" src="https://github.com/user-attachments/assets/42d595f3-9735-4361-a51f-bf361d4e1728" />

<img width="1408" height="768" alt="Screenshot 2026-07-23 at 22 50 19" src="https://github.com/user-attachments/assets/70dc37b2-b110-48b5-8867-773a90755316" />

Example:

```
assets/home-page.png
assets/report-page.png
assets/admin-dashboard.png
```

---

## ✨ Features

### 👤 User Features

- Report overflowing garbage bins
- Upload images of garbage locations
- Submit location details
- Easy-to-use reporting interface
- Responsive design for all devices
- Fast complaint submission

### 🛠️ Admin Features

- Secure admin login
- View all submitted complaints
- Monitor reported garbage locations
- Manage complaint records
- Real-time data updates using Firebase

---

## 🛠️ Tech Stack

### Frontend

- HTML5
- CSS3
- JavaScript (ES6)

### Backend & Database

- Firebase Authentication (Optional)
- Firebase Firestore Database

### Deployment

- Vercel

---

## 📂 Project Structure

```
Smart-Garbage-System/
│
├── index.html
├── report.html
├── admin.html
├── admin-login.html
├── firebase.js
├── script.js
├── style.css
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Prathmesh1819/Smart-Garbage-System.git
```

### 2. Navigate to the project

```bash
cd Smart-Garbage-System
```

### 3. Configure Firebase

Create a Firebase project and enable:

- Firestore Database
- Authentication (if required)

Update the Firebase configuration in:

```javascript
firebase.js
```

Example:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "..."
};
```

### 4. Run the Project

Open `index.html` in your browser or use VS Code Live Server.

---

## 📱 Application Workflow

1. User visits the website.
2. Reports an overflowing garbage bin.
3. Uploads an image and location details.
4. Complaint is stored in Firebase.
5. Admin logs into the dashboard.
6. Admin views and manages all reported complaints.

---

## 💡 Future Enhancements

- 📍 GPS-based automatic location detection
- 🗺️ Interactive Google Maps integration
- 🔔 Email & SMS notifications
- 📸 Camera capture support
- 👥 User authentication
- 📊 Analytics dashboard
- 📱 Progressive Web App (PWA)
- 🤖 AI-based garbage image detection
- 🚛 Waste collection scheduling
- 📈 Complaint status tracking

---

## 📱 Responsive Design

The application is optimized for:

- Desktop
- Laptop
- Tablet
- Mobile Devices

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository

2. Create a new branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Add new feature"
```

4. Push to GitHub

```bash
git push origin feature-name
```

5. Create a Pull Request

---

## 👨‍💻 Author

**Prathmesh Dharashivkar**

GitHub: https://github.com/Prathmesh1819

---

## ⭐ Support

If you found this project useful, please consider giving it a ⭐ on GitHub.

Your support motivates me to build more open-source projects.

---

## 📄 License

This project is licensed under the MIT License.
