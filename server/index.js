const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const {
    getHouses, 
    createHouse, 
    deleteHouses, 
    updateHouse
} = require('./controller');



app.get('/api/houses', getHouses);
app.post('/api/houses', createHouse);
app.put('/api/houses/:id', updateHouse);
app.delete('/api/houses/:id', deleteHouses);

app.listen(4004, () => console.log(`running on 4004`))