const {Film, User} = require("../models");

// exports.helloWorld = (req, res)=>{
//     res.send("Tom&Jerry Says Hello World!");

// }

exports.addFilm = async (req, res) => {
    try {
        console.log(rq.user);
        const film = new Film(req.body)
        await film.save();
        res.status(200).send({film: film, message: "Successfully added film"})
    } catch (error) {
        res.status(500).send({err: error});
    }
};

exports.findFilms = async (req, res) =>{
    try {
        const list = await Film.find({});
        res.status(200).send({allFilms: list});
    } catch (error) {
        res.status(500).send({err:error});
    }
};

exports.updateFilms = async (updateObj) => {
    try {
        await Film.updateOne(
            { name: updateObj.filter },
            { $set: {like:updateObj.like} }
          );
          res.status(200).send({updateFilms: updateFilms, message: "Film Suscessfly updated" });
    } catch (error) {
        res.status(500).send({err:error});
    }

  };
    
  exports.deleteFilms = async (deleteObj) => {
      try {
        await Film.deleteOne({ name: deleteObj.filter });
        res.status(200).send({deleteFilms: deleteFilms, message: "Film Deleted"});
      } catch (error) {
        res.status(500).send({err:error});
      }
   
  };

  exports.addUser = async (req, res) =>{
      try {
          const user = new User(req.body);
          await user.save();
      } catch (error) {
          
      }
  }


  

// exports.tom =(req, res)=>{
//     const name = req.body.name
//     console.log(res);
//     res.send({message: `${name} smells`});
// };

// exports.contact =(req, res)=>{
//     const name = req.body.name
//     res.send({message: `Hi ${name} you can contact us via ...`});
// };