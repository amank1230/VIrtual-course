import mongoose from "mongoose";

const connectDb = async () => {
    let x = "mongodb+srv://amank27092002_db_user:U2r3sYwdWNYZ9RYh@cluster0.oegayoa.mongodb.net/LMS"
    try {
        await mongoose.connect(x)
        console.log("DB connected")
    } catch (error) {
        console.log("DB error")
    }
}
export default connectDb
