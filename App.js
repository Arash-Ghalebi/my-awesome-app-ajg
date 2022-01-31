// Simple web app for practicing advanced GitHub actions such as branches, tags, and releases.
const express = require('express')
const app = express()
// Simple Hello World Node App
const APP_PORT = process.env.APP_PORT || 3000; app.get('/', (req, res) => {
    res.send('Hello World!')
}); app.listen(APP_PORT, () => {
    console.log('Running app at port:${APP_PORT}')
})