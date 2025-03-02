import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const server = createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

app.use(cors());
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Connect to MongoDB
mongoose
  .connect("mongodb+srv://decentpohthmi767:191224@cluster0.0yj01.mongodb.net/portfolio", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Define Mongoose Schema
const emailSchema = new mongoose.Schema({ email: { type: String, unique: true, required: true } });
const Email = mongoose.model("Email", emailSchema);

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "public")));

// Save email to MongoDB or return download link if it exists
app.post("/save-email", async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: "Email is required" });

  try {
    // Check if email exists
    const existingEmail = await Email.findOne({ email });
    if (existingEmail) {
      return res.status(200).json({ message: "Email already exists", download: true });
    }

    // Save new email
    const newEmail = new Email({ email });
    await newEmail.save();

    res.status(201).json({ message: "Email saved successfully", download: true });
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("sendMessage", (message) => {
    io.emit("receiveMessage", message); // Broadcast message to everyone
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
