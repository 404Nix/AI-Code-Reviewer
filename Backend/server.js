import dotenv from 'dotenv';
dotenv.config();
import app from "./src/app.js";

app.listen(process.env.PORT, () => {
    console.log(`server is ready on ${process.env.PORT}`)
})