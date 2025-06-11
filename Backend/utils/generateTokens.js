import jwt from "jsonwebtoken"
import { ENV_VARS } from "../config/envVars.js"

export const generateDefaultToken = (userId, res) => {
    try {
        const token = jwt.sign({ userId }, ENV_VARS.JWT_SECRET, { expiresIn: "15d" });
        if (res && typeof res.cookie === "function") {
            res.cookie("jwt-netflix", token, {
                maxAge: 15 * 24 * 60 * 60 * 1000, // Time in milliseconds
                httpOnly: true, // Prevent XSS attacks
                sameSite: "None", // CSRF protection
                secure: true
            });
        } else {
            throw new Error("Response object is invalid or missing.");
        }
        return token;
    } catch (error) {
        console.error("Error generating token:", error);
        throw error;
    }
}