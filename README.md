# 🎯 Quiz Website

An interactive full-stack quiz platform where users can **register**, **log in**, **take quizzes**, and **create their own quizzes**. Users can also view **leaderboards**, check their **quiz history**, and track their **scores** over time. Built to be responsive, user-friendly, and easy to expand.
## 🚀 Features

- 👤 User registration and login  
- 🧠 Play quizzes and get instant scores
- ✍️ Create Custom Quizzes  
- 📊 View Quiz History and Performance  
- 🏆 Leaderboard to See Top Scores 
## 🛠️ Tech Stack

### 🔹 Frontend
- React.js  
### 🔹 Backend
- Spring Boot (Java)  
- RESTful API

### 🔹 Database
- MySQL (for storing users, quizzes, results)


## 📁 Folder Structure

Quiz-Master/
├── backend/
│ ├── src/
│ │ ├── controllers/
│ │ ├── services/
│ │ ├── repositories/
│ │ └── config/
│ └── application.properties
├── frontend/
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── App.js
│ │ └── index.js
└── README.md


---

## ⚙️ Getting Started

### 🧾 Prerequisites

- Node.js and npm  
- Java 17 or above  
- Maven    
- MySQL Workbench (optional)

---

### 🖥️ Backend Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/student-shrestarai/quiz-website.git
   cd Quiz-Master/backend
   ```

2.Create a MySQL Database
CREATE DATABASE quizdb;

3.Configure your application.properties
spring.datasource.url=jdbc:mysql://localhost:3306/quizdb
spring.datasource.username=your-username
spring.datasource.password=your-password
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect
⚠️ Note: Replace your-username and your-password with your actual MySQL credentials. Do not commit real passwords to GitHub.

4.Run the Backend
mvn spring-boot:run

### 🌐 Frontend Setup
1.Open a new terminal and go to the frontend folder:
cd ../frontend
2.Install dependencies:
npm install
3.Start the development server:
npm start

🌟 Future Enhancements
⏳ Timer for each quiz
📈 Question-wise analytics
🖼️ Support for image-based questions

🙋‍♀️ Author
Shresta Rai
MCA Student | Full Stack Developer
GitHub: student-shrestarai

