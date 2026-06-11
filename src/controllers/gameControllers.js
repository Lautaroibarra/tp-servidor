import { Game } from "../models/GameModel.js";

const getGames = async (req, res) => {
  try {
    const userLogged = req.userLogged
    const filterGames = await Game.find({ userId: userLogged.id }, { userId: 0 })
    res.json({
      success: true,
      data: filterGames,
      message: "Games fetched successfully"
    })
  } catch (error) {
    res.status(500).json({ success: false, error: "Error fetching games" })
  }
}

const getGame = async (req, res) => {
  try {
    const id = req.params.id
    const foundGame = await Game.findById(id, { userId: 0 })
    if (!foundGame) res.status(404).json({ error: "Not found" })
    res.json(foundGame)
  } catch (error) {
    res.status(400).json({ error: "Invalid ID format" })
  }
}

const createGame = async (req, res) => {
  try {
    const body = req.body
    const userLogged = req.userLogged

    const newGame = await Game.create({
      name: body.name,
      price: body.price,
      category: body.category,
      stock: body.stock,
      available: body.stock > 0,
      userId: userLogged.id
    })

    newGame.save()

    // destructuring para eliminar el userId del objeto gameo y quedarnos con el resto de la data
    const { userId, ...publicDataGame } = newGame.toObject()

    res.json({
      success: true,
      data: publicDataGame,
      message: "Game created successfully"
    })
  } catch (error) {
    res.status(500).json({ success: false, error: "Error creating game" })
  }
}

const updateGame = async (req, res) => {
  try {
    const id = req.params.id
    const body = req.body

    const updatedGame = await Game.findByIdAndUpdate(id, { ...body, available: body.stock > 0 }, { new: true, projection: { userId: 0 } })

    if (!updatedGame) {
      return res.status(404).json({ success: false, error: "Game not found" })
    }

    res.json({
      success: true,
      data: updatedGame,
      message: "Game updated successfully"
    })
  } catch (error) {
    res.status(400).json({ success: false, error: "Invalid ID format" })
  }
}

const deleteGame = async (req, res) => {
  try {
    const { id } = req.params

    const deletedGame = await Game.findByIdAndDelete(id)

    if (!deletedGame) {
      return res.status(404).json({ success: false, error: "Game not found" })
    }

    const game = deletedGame.toObject()
    delete game.userId

    const publicDataGame = { ...deletedGame }

    res.json({ success: true, data: game, message: "Game deleted successfully" })
  } catch (error) {
    res.status(400).json({ success: false, error: "Invalid ID format" })
  }
}

export { getGames, getGame, createGame, updateGame, deleteGame }
