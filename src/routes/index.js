const {Router} = require ("express");
const helloRouter = Router();
const { tom, contact, addFilm, findFilms, updateFilms, deleteFilms } = require ("../controllers");

helloRouter.get("/tom", findFilms);
helloRouter.post("/tom", addFilm);
helloRouter.put("/tom", updateFilms);
helloRouter.delete("/tom", deleteFilms);


helloRouter.get("/contact", contact);
helloRouter.post("/contact", contact);
helloRouter.put("/contact", contact);
helloRouter.delete("/contact", contact);

helloRouter.get("/user/contact", contact);
helloRouter.post("/user/contact", contact);
helloRouter.put("/user/contact", contact);
helloRouter.delete("/user/contact", contact);




module.exports = helloRouter;