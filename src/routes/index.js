const {Router} = require ("express");
const helloRouter = Router();
const { tom, contact } = require ("../controllers");

helloRouter.get("/tom", tom);
helloRouter.post("/tom", tom);
helloRouter.put("./tom", tom);
helloRouter.delete("./tom", tom);


helloRouter.get("/contact", contact);
helloRouter.post("/contact", contact);
helloRouter.put("/contact", contact);
helloRouter.delete("/contact", contact);

helloRouter.get("/user/contact", contact);
helloRouter.post("/user/contact", contact);
helloRouter.put("/user/contact", contact);
helloRouter.delete("/user/contact", contact);




module.exports = helloRouter;