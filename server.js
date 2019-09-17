const express = require('express')

const app = express()

app.use(express.static('public'))

app.use((req, res) => {
    res.sendFile(__dirname + '/public/404.html')
});

const port = process.env.PORT || 8080
app.listen(port, function() {
    console.log('Running on http://localhost:' + port)
});