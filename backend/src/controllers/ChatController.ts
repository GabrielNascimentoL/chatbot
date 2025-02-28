import { Request, Response } from "express";
import Chat from "../models/Chat";

export const create = async (req: Request, res: Response) => {
  const { title, content } = req.body;
  

  try {
    const chat = await Chat.create({
      title,
      userId: req.user.id
    });

    res.status(201).json(chat);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const index = async (req: Request, res: Response) => {
  try {
    const chats = await Chat.findAll();
    res.status(201).json(chats);
  } catch (error) {
    res.status(400).json(error);
  }
};
