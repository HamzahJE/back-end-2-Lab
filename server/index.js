//bringing packages in
const express = require('express')
const cors = require('cors')
const {getHouses, deleteHouse, createHouse, updateHouse} = require('./controller')

//initialising new app with express
const app = express()

//middleware
app.use(express.json())
app.use(cors())





// getAllHouses 
app.get('/api/houses',getHouses)

// deleteHousegit in
app.delete('/api/houses',deleteHouse)


// createHouse
app.post('/api/houses',createHouse)

// updateHouse
app.put('/api/houses',updateHouse)



const SERVER_PORT=4040
app.listen(SERVER_PORT, () => console.log(`Server running on ${SERVER_PORT}`))