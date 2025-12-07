require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "x-csrf-token"],
  exposedHeaders:["Set-Cookie"]
};

app.use(cors(corsOptions)); 
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "BookHive Backend Running..." });
});

// ROUTES
const authRoutes = require("./routes/authRoutes");
const bookRoutes = require("./routes/bookRoutes");
const borrowRoutes = require("./routes/borrowRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/borrow", borrowRoutes);

// START SERVER
app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});
