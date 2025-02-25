const express = require("express")
const app = express()
const port = 9000

app.use("/", (req, res) => {
    res.json({ message: "hello from vercel" })
})



app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})