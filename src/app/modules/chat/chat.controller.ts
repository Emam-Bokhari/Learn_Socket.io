import { ApiError } from "../../errors/ApiError";
import { asyncHandler } from "../../utils/asyncHandler";
import { sendResponse } from "../../utils/sendResponse";
import { ChatService } from "./chat.service";

// const saveMessageController = asyncHandler(async (req, res) => {
//     const messageData = req.body;
//     const message = await ChatService.saveMessage(messageData)
//     sendResponse(res, {
//         success: true,
//         statusCode: 200,
//         message: "Message send successfully",
//         data: message
//     })
// })

const getMessagesController = asyncHandler(async (req, res) => {
    const user1 = req.params.user1;
    const user2 = req.params.user2;

    if (!user1 || !user2) {
        throw new ApiError(404, "User 1 and user 2 is required")
    }
    const messages = await ChatService.getMessagesHistory(user1, user2);
    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: 'Messages retrieved successfully',
        data: messages,
    });
});

export const ChatController = {
    // saveMessageController,
    getMessagesController,
};