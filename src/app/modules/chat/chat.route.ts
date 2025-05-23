import express from "express";
import { ChatController } from "./chat.controller";

const router = express.Router();

// router.post('/messages', ChatController.saveMessageController);

router.get('/messages/:user1/:user2', ChatController.getMessagesController);

export const ChatMessageRoutes = router;