import express from "express"
import cors from "cors"
import { Server } from "socket.io"
import helmet from "helmet"
import router from "./app/router"

const app = express()

app.use(express.json());
app.use(cors())
app.use(helmet())

// application routes
app.use("/api/v1", router)

app.get("/", (req, res) => {
    res.send("Server is running...")
})

export default app;