import express from "express";
import { ChatMessageRoutes } from "../modules/chat/chat.route";

const router = express.Router();

const moduleRoutes = [
    {
        path: "/chat",
        route: ChatMessageRoutes
    }
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router;