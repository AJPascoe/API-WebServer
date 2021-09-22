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

  exports.updateFilms = async (req, res) => {
  try {
    await Film.updateOne(
      { name: req.body.filter },
      { $set: { watched: req.body.update } }
    );
    res.status(200).send({ message: "Film Updated" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.deleteFilms = async (req, res) => {
  try {
    await Film.deleteOne({ name: req.params.name });
    res.status(200).send({ message: "Film Deleted" });
  } catch (error) {
    res.status(500).send(error);
  }
};

  exports.addUser = async (req, res) =>{
      try {
          const user = new User(req.body);
          await user.save();
          res.status(200).send(user);
      } catch (error) {
          res.status(500).send(error);
      }
  };


  exports.findUser = async (req, res) =>{
      try {
          res.status(200).send(req.user);
      } catch (error) {
          res.status(502).send(error);
      }
  };


  

// exports.tom =(req, res)=>{
//     const name = req.body.name
//     console.log(res);
//     res.send({message: `${name} smells`});
// };

// exports.contact =(req, res)=>{
//     const name = req.body.name
//     res.send({message: `Hi ${name} you can contact us via ...`});
// };