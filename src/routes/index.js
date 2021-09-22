const {Router} = require ("express");
const helloRouter = Router();
const { addFilm, findFilms, updateFilms, deleteFilms, addUser, findUser } = require ("../controllers");
const { testMiddle, hashPassword, decryptPassword } = require("../middleware");

helloRouter.get("/film", findFilms);
helloRouter.post("/film", testMiddle, addFilm);
helloRouter.put("/film", updateFilms);
helloRouter.delete("/film", deleteFilms);


helloRouter.post("/user",hashPassword, addUser);
helloRouter.post("/user/login", decryptPassword, findUser);


// helloRouter.get("/contact", findFilms);
// helloRouter.post("/contact", addFilm);
// helloRouter.put("/contact", updateFilms);
// helloRouter.delete("/contact", deleteFilms);

// helloRouter.get("/user/contact", contact);
// helloRouter.post("/user/contact", contact);
// helloRouter.put("/user/contact", contact);
// helloRouter.delete("/user/contact", contact);




module.exports = helloRouter;