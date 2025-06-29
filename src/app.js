import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import routes from "./routes/index.js"; // Clean route loader

dotenv.config();

const app = express();

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(express.json());

// Static folder for uploads (if needed)
app.use("/uploads", express.static("uploads"));

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "API is running...",
  });
});

// Use API routes
app.use("/api", routes);

export default app;
