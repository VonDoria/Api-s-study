const cors = require('cors')
const express = require('express')
const axios = require('axios')
const app = express()

app.use(cors())


app.get('/teste', async (req, res) => {

    try {

        const response = await axios('https://jsonplaceholder.typicode.com/users')
        return res.json(response.data)

    } catch (error) {
        console.log('fail')
    }
})


app.get('/mais', async (req, res) => {

    try {

        const response = await axios('https://jsonplaceholder.typicode.com/users')
        return res.json('response.data')

    } catch (error) {
        console.log('fail')
    }
})


app.listen('4567')