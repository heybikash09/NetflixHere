import jwt from "jsonwebtoken"
import { ENV_VARS } from "../config/envVars.js"

export const generateDefaultToken=(userId,res)=>{
    const token=jwt.sign({userId},ENV_VARS.JWT_SECRET,{expiresIn:"15d"})
    res.cookie("jwt-netflix",token,{
        maxAge:15*24*60*60*1000, //Time in mili second 
        httpOnly:true, //prevent xss attacks cross-site scripting attacks , make it not be accessed by Js
        sameSite:"None", // allow cross-site cookies
        secure:"true"
    })

    return token;
}