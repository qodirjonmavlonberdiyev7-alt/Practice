const express = require("express")
const cors = require("cors")
const dataRouter = require("./router/data.routes")
require("dotenv").config()

const app = express()
const PORT = process.env.PORT || 3000
app.use(express.json())
app.use(cors())


app.get("/", (req,res) => {
    res.status(200).json({
        message: "Salom bolalar"
    })
})

//router
app.use(dataRouter)

app.listen(PORT, () => {
    console.log("Server is running at: " + PORT);
})