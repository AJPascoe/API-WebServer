exports.helloWorld = (req, res)=>{
    res.send("Tom&Jerry Says Hello World!");

}

exports.tom =(req, res)=>{
    const name = req.body.name
    console.log(res);
    res.send({message: `${name} smells`});
};

exports.contact =(req, res)=>{
    const name = req.body.name
    res.send({message: `Hi ${name} you can contact us via ...`});
};