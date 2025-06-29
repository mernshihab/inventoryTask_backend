# Inventory Task Backend

This is the backend API built with **Node.js**, **Express**, and **Prisma ORM** for managing product and category data.

---

## 🚀 Features

- Product & Category CRUD
- Image upload with Multer
- MySQL + Prisma ORM
- Modern RESTful structure

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory and include the following:

```env
# Local MySQL DB
DATABASE_URL="mysql://root:@localhost:3306/inventory"

# Remote MySQL DB
DATABASE_URL="mysql://avnadmin:AVNS_sLpR8MMu7Pqkrwlh1zL@shihab-portfolio-shihab.g.aivencloud.com:13277/inventory?ssl-mode=REQUIRED"

# App port
PORT=5000

🔧 Setup & Installation
Clone the repository:

bash
Copy
Edit
git clone https://github.com/your-username/inventoryTask_backend.git
cd inventoryTask_backend
Install dependencies:

bash
Copy
Edit
npm install
Generate Prisma client:

bash
Copy
Edit
npx prisma generate
Run the server in development mode:

bash
Copy
Edit
npm run dev
Or to run in production:

bash
Copy
Edit
npm start
