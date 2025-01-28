# 📚 Lista de Facultades CRUD

![Next.js](https://img.shields.io/badge/Next.js-14.2.5-black)
![MySQL](https://img.shields.io/badge/MySQL-8.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-38B2AC)

---

## 📋 Table of Contents

- Overview
- Features
- Tech Stack
- Prerequisites
- Installation
- Database Setup
- Environment Variables
- Project Structure
- API Endpoints
- Contributing

## 🎯 Overview

A web application for managing university faculties. This project provides a complete CRUD (Create, Read, Update, Delete) interface for faculty management with a modern and responsive design.

## ✨ Features

- ✅ Create new faculties with images
- 📖 View list of all faculties
- 🔄 Update faculty information
- 🗑️ Delete faculties
- 📱 Responsive design for all devices
- 🖼️ Image upload support
- 🌐 RESTful API integration

## 🛠 Tech Stack

| Technology    | Purpose                         |
|--------------|----------------------------------|
| Next.js 14   | Frontend & Backend Framework     |
| MySQL        | Database                         |
| Tailwind CSS | Styling                          |
| Docker       | Containerization                 |
| Cloudinary   | Image Storage                    |

## 📋 Prerequisites

- Node.js ≥ 18
- Docker & Docker Compose
- MySQL 8.0
- npm or bun

## 🚀 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/list-faculties-CRUD.git

# Navigate to project directory
cd list-faculties-CRUD

# Install dependencies
npm install

# Start Docker containers in development mode
docker-compose up web-dev -d

# Start Docker containers in production mode
docker-compose up web-prod -d

# Initialize database
docker exec -i db_facultades mysql -u adm -padm facultades < database/db.sql

# Run development server
npm run dev
```

## 💾 Database Setup

The database schema includes:

```sql
CREATE TABLE faculties (
    id          int primary key auto_increment,
    name        varchar(100) not null,
    description text,
    path_img    VARCHAR(255)
);
```

## 🔐 Environment Variables

Create a `.env` file with:

```env
DB_HOST=localhost
DB_USER=adm
DB_PASSWORD=adm
DB_DATABASE=facultades
DB_PORT=3306
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
NEXT_PUBLIC_BACKEND_URL=localhost:3000

```

## 📁 Project Structure

``` notes
list-faculties-CRUD/
├── src/
│   ├── app/             # Next.js pages
│   ├── components/      # React components
│   └── libs/           # Utilities and configurations
├── database/           # Database scripts
├── docker/            # Docker configuration
└── public/            # Static assets
```

## 🔄 API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/faculties` | GET | Get all faculties |
| `/api/faculties` | POST | Create new faculty |
| `/api/faculties/:id` | GET | Get faculty by ID |
| `/api/faculties/:id` | PUT | Update faculty |
| `/api/faculties/:id` | DELETE | Delete faculty |

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Next.js Documentation
- Tailwind CSS Documentation
- MySQL Documentation
- Docker Documentation

---
Made using Next.js and MySQL
