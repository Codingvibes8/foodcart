 import {isAdmin} from "../auth/[...nextauth]/route.js";
import {User} from "../../../models/User.js";
import mongoose from "mongoose";

export async function GET() {
    await   mongoose.connect(process.env.MONGO_URL);
  if (await isAdmin()) {
    const users = await User.find();
    return Response.json(users);
  } else {
    return Response.json([]);
  }
}