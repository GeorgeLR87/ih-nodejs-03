// index.js

// 1. IMPORTACIONES
const express 		= require("express")
const app			= express()
const hbs			= require("hbs")

require("dotenv").config()


// 2. MIDDLEWARES
app.use(express.static('public'))

app.set("views", __dirname + "/views")
app.set("view engine", "hbs")

hbs.registerPartials(__dirname + "/views/partials")


// 3. RUTAS
app.get("/", (req, res) => {
	res.render("index")
})

app.get("/players", (req, res) => {
	res.render("players")
})

app.get("/teams", (req, res) => {
	res.render("teams")
})





// 4. SERVIDOR
app.listen(process.env.PORT, () => {
	console.log(`Servidor activo en puerto ${process.env.PORT}`)
})