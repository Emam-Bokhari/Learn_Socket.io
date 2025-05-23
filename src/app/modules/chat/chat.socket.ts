import { Server } from "socket.io";
import colors from 'colors';
import { ApiError } from "../../errors/ApiError";
import { ChatService } from "./chat.service";

export const chatSocket = (io: Server) => {
    io.on("connection", (socket) => {
        console.log(colors.blue(`📶 A user connected: ${socket.id}
            `));

        // join room for private messages
        socket.on('join_room', (room: string) => {
            socket.join(room)
            console.log(colors.green(` ${socket.id} joined room: ${room}`));
        })

        // send and save messages
        socket.on("send_message", async (data: any) => {
            try {
                const { room, messageData } = data;

                if (!messageData.senderId || !messageData.receiverId || !messageData.content) {
                    throw new ApiError(400, "Invalid message data from client")
                }

                // save to mongodb
                const savedMessage = await ChatService.saveMessage(messageData)

                if (room) {
                    socket.to(room).emit("received_message", savedMessage)
                } else {
                    io.emit("received_message", savedMessage)
                }

            } catch (err) {
                console.error(colors.red(` Error in send message: ${err}`));
            }
        })


    })
}