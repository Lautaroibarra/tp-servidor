import { Router } from "express";
import { getGames, getGame, createGame, updateGame, deleteGame } from "../controllers/gameControllers.js";

const GameRouter = Router()

GameRouter.get("/", getGames)
GameRouter.get("/:id", getGame)
GameRouter.post("/", createGame)
GameRouter.put("/:id", updateGame)
GameRouter.delete("/:id", deleteGame)

export { GameRouter }




