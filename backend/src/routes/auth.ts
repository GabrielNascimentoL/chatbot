import { Router } from 'express';
import { login, register } from '../controllers/AuthController';
import { authenticateJWT } from '../middlewares/authenticate';
import { validateLogin, validateRegister } from '../validations/auth';

const router = Router();

router.post("/register", validateRegister, register);
router.post("/login", validateLogin, login);
router.get("/", authenticateJWT, (req, res) => {
  return res.json({ message: "Token is valid" });
});

export default router;
