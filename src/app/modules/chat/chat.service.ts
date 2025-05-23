import { ChatMessage } from './chat.model';
import { IChatMessage } from './chat.interface';

const saveMessage = async (payload: IChatMessage) => {
    const message = await ChatMessage.create(payload);
    return message;
};

const getMessagesHistory = async (user1: string, user2: string) => {
    const history = await ChatMessage.find({
        $or: [
            { sender: user1, receiver: user2 },
            { sender: user2, receiver: user1 },
        ],
    }).sort({ createdAt: 1 });
    return history;
};

export const ChatService = {
    saveMessage,
    getMessagesHistory,
};
