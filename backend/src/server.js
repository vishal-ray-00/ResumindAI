import "dotenv/config";
import app from "./app.js";
import connectDB from "./db/database.js";

const PORT = process.env.PORT || 5000;
    
connectDB()
    .then(async () => {
        app.listen(PORT, () => {
            console.log(`server running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log("MongoDB connection Failed !! ", error);
    });
