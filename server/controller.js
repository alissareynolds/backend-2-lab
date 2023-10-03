const houses = require('./db.json');
let globalID = 4; 

module.exports = {
getHouses: (req, res) => {
    res.status(200).send(houses);
    },
deleteHouses: (req, res) => {
    let index = houses.findIndex(house => house.id === +req.params.id); // if the houses id is equal to the req id then it deletes the house
    houses.splice(index, 1);
    res.status(200).send(houses);
    },
createHouse: (req, res) => {
    let {id, address, price, imageURL} = req.body; // making a new variable called address and setting it equal to whatevers in the body 
    let newHouse = {
        id: globalID,
        address, 
        price, 
        imageURL
    }
    houses.push(newHouse);
    res.status(200).send(houses);
    globalID++;
    }, 
updateHouse: (req, res) => {
    let {id} = req.params; 
    let {type} = req.body; 
    let index = houses.findIndex(house => +house.id === +id)

    if (type === 'plus') {
        houses[index].price += 10000;
        res.status(200).send(houses);
    } else if (type === 'minus') {
        houses[index].price -= 10000;
        res.status(200).send(houses);
    } else {
        res.status(400).send("error");
    }
    }
}
// req.body is what comes from the axios request
// the req is all of the info from the axios request bundled up in a little object 
// the req is what we are sending and the res is what we are getting back 