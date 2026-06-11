import { Schema, model } from "mongoose"

const gameSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, default: 0 },
  tags: { type: String, default: "Sin tags" },
  rating: { type: String, default: "Sin rating"},
  plataform: { type: String, default: "sin plataforma espeficada"},
  stock: { type: Number, default: 0 },
  available: { type: Boolean, default: false },
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true }
}, {
  versionKey: false,
  timestamps: true
})

const Game = model("Game", gameSchema)

export { Game }


