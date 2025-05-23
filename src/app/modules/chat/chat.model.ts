
import { model, Schema } from 'mongoose';
import { IChatMessage } from './chat.interface';

const chatSchema = new Schema<IChatMessage>(
    {
        senderId: {
            type: String,
            required: true,
            trim: true
        },
        receiverId: {
            type: String,
            required: true,
            trim: true
        },
        content: {
            type: String,
            required: true,
            trim: true
        },
    },
    {
        timestamps: true,
        versionKey: false
    }
);

export const ChatMessage = model<IChatMessage>('ChatMessage', chatSchema);
