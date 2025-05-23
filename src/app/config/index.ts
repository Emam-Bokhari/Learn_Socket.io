import path from "path"
import dotenv from "dotenv"

dotenv.config({ path: path.join(process.cwd(), ".env") })

export default {
    mongodb_url: process.env.MONGODB_URL,
    port: process.env.PORT,
    ip_address: process.env.IP_ADDRESS,
}