import express from "express";
import authRoutes from "./routes/auth";
import chatsRoutes from "./routes/chats";
import { authenticateJWT } from "./middlewares/authenticate";

const app = express();
const PORT = 8000;

app.use(express.json());
app.use("/auth", authRoutes);
app.use("/chats", authenticateJWT, chatsRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
