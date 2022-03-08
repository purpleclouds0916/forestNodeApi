const express = require('express')
const app = express() 
const port = 3000

app.use(express.json())

app.use(express.static(__dirname + "/public"));
app.post('/booklog', (req, res) => {
    const booklog = req.body
    res.json({
        "ok": true,
        "booklog": booklog
    })
})
app.get('http://localhost:3000', (req, res) => {
    res.json({
        "ok": true
    })
})

app.listen(port, () => {
    console.log(`Listening on port at http://localhost:${port}`)
})