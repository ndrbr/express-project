import express from "express";
import * as friendsController from "../controllers/friends.controller.js";

export const friendsRouter = express.Router();

friendsRouter.use((req, res, next) => {
  console.log(`ip address: ${req.ip}`);
  next();
});

friendsRouter.post("/", friendsController.postFriend);
friendsRouter.get("/", friendsController.getFriends);
friendsRouter.get("/:friendId", friendsController.getFriend);
