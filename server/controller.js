const houses=require("./db.json")

module.exports={
    getHouses:(req,res) =>{
        res.status(200).send(houses);
    }, 
    deleteHouse:(req,res) =>{
        res.status(200).send(houses);

    },
    createHouse:(req,res) =>{
        res.status(200).send(houses);

    }, 
    updateHouse:(req,res) =>{
        res.statnous(200).send(houses);

    }
}