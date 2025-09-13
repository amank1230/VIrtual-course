import mongoose from "mongoose";

const MONGO_URI = "mongodb+srv://amank27092002_db_user:U2r3sYwdWNYZ9RYh@cluster0.oegayoa.mongodb.net/LMS";

const connectDb = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("✅ DB connected");
    } catch (error) {
        console.error("❌ DB error:", error.message);
    }
};

export default connectDb;
