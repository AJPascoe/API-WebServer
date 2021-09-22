exports.testMiddle = (req, res, next) =>{
    try {
        console.log(req.body)
        req.user = "Andy"
        next();
    } catch (error) {
        res.status(500).send(error);
    }
}