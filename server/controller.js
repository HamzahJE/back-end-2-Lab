const houses=require("./db.json")


let globalId=4
module.exports={
    getHouses:(req,res) =>{
        res.status(200).send(houses);
    }, 

    deleteHouse:(req,res) =>{
        let {id} = req.params
        let index = houses.findIndex(house => +house.id === +id)
        if(index === -1){
            res.status(400).send(`user not found`)
        } else {
            houses.splice(index,1)
            res.status(200).send(houses)
        }
    },
    createHouse:(req,res) =>{
        const { address, price, imageURL } = req.body;
        let newHouse = {
          id: globalId,
          address,
          price,
          imageURL,
        };
        houses.push(newHouse);
        res.status(200).send(houses);
        globalId++;
    }, 
    updateHouse:(req,res) =>{
    let {id} = req.params
    let {type} = req.body
    let index = houses.findIndex(house => +house.id === +id)
    if(index === -1){
        res.status(400).send(`user not found`)
    } else if(houses[index].price === 1 && type === 'minus'){
        res.status(400).send(`cannot go below 1`)
    } else if(type === 'plus') {
        houses[index].price++
        res.status(200).send(houses)
    } else if( type === 'minus') {
        houses[index].price--
        res.status(200).send(houses)
    } else {
        res.sendStatus(400)
    }
  }
}


