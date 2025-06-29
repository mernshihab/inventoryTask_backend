import express from "express"; // optional, but okay to keep
import config from "./config/config.js";
import app from "./app.js"; // ✅ you forgot this import

async function main() {
  try {
    app.listen(config.PORT, () => {
      console.log(`🚀 Server is running on port ${config.PORT}`);
    });
  } catch (error) {
    console.error("Server failed to start:", error);
  }
}

main();
