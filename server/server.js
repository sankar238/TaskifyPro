const app = require("./app");
const connectDB = require("./config/connect_db");
const PORT = process.env.PORT || 5050;


const startServer = async () => {
    try {
        await connectDB()
        app.listen(PORT, () => {
            console.log(`server is running at ${PORT}`)
        })
    } catch (err) {
        console.log(err)
    }
}
startServer();
