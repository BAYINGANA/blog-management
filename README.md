# 📝 Blog Management System (Node.js)

## 🚦 Quick Overview
A simple, interactive CLI tool to manage blog posts using clean OOP design in Node.js. Add, view, and search posts—all from your terminal.

---

## ⚡ Features
- ➕ Add new blog posts
- 📋 List all posts
- 🔍 Search by post ID
- 👤 Filter by author
- 🆕 See the latest posts

---

## 🛠 Tech Stack
- JavaScript (ES6+)
- Node.js
- CLI via `readline`
- Object-Oriented Programming

---

## 📁 Structure
```
blog-management/
├── oop/
│   ├── BlogPost.js      # BlogPost class
│   ├── BlogManager.js   # BlogManager class
│   └── index.js         # OOP exports
├── test.js              # CLI entry point
└── README.md            # Docs
```

---

## 🏗️ Main Classes
- **BlogPost:** Represents a single post (`id`, `title`, `content`, `author`, `createdAt`).
- **BlogManager:** Manages posts (add, list, search, filter, recent).

---

## 🚀 Getting Started
1. **Install Node.js**
2. **Run the app:**
   ```bash
   node test.js
   ```
3. **Follow the menu prompts to manage your blog!**

---

## ✨ Author
Divine Gihozo Bayingana  
_Built for the Code2Connect Fellowship Pre-Interview Challenge_