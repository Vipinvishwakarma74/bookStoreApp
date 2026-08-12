### 📚 BookStore App

A full-stack "Book Store web application" built using React, Node.js, Express.js, and MongoDB. The application provides a clean and responsive interface for browsing books and demonstrates full-stack development with a REST API and MongoDB database.

### ✨ Features

* 📚 Browse available books
* 🔍 Book listing and information
* 📱 Responsive user interface
* 🎨 Modern UI using Tailwind CSS
* ⚛️ React-based frontend
* 🚀 Node.js and Express.js backend
* 🍃 MongoDB database integration
* 🔗 Frontend and backend API integration
* 📄 About and Contact pages

### 🛠️ Tech Stack

## Frontend

* React.js
* Vite
* Tailwind CSS
* JavaScript
* React Icons

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

## Tools

* Git
* GitHub
* VS Code

### 📁 Project Structure

```text
bookStoreApp/
│
├── Backend/
│   ├── controller/
│   ├── model/
│   ├── routes/
│   ├── index.js
│   └── package.json
│
├── Frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── home/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   └── package.json
│
└── README.md
```

### 🚀 Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/Vipinvishwakarma74/bookStoreApp.git
```
### 2. Go to the project directory

```bash
cd bookStoreApp
```

### 3. Setup Backend

```bash
cd Backend
npm install
```

Create a `.env` file inside the `Backend` folder:

```env
MONGO_URI=your_mongodb_connection_string
PORT=4001
```

Then start the backend:

```bash
npm run dev
```

The backend will run on:

```text
http://localhost:4001
```

### 4. Setup Frontend

Open another terminal:

```bash
cd Frontend
npm install
npm run dev
```

The frontend will run on the URL shown by Vite, usually:

```text
http://localhost:5173
```

### 🗄️ MongoDB

This project uses MongoDB as the database.

Make sure MongoDB is running and your connection string is correctly configured in the backend `.env` file.

**Do not upload `.env` to GitHub**, because it may contain private database credentials.

📸 Screenshots

Add screenshots of your application here:

```text
screenshots/
├── home.png
├── books.png
└── contact.png
```

You can add them to this README later using:

```markdown
![Home Page](screenshots/home.png)
```

🔗 GitHub Repository

[BookStore App](https://github.com/Vipinvishwakarma74/bookStoreApp)

### 👨‍💻 Author

**Vipin Vishwakarma**

GitHub: [@Vipinvishwakarma74](https://github.com/Vipinvishwakarma74)

### 📄 License

This project is created for learning and development purposes.
