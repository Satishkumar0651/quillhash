const jwt = require('jsonwebtoken');
module.exports= function (req , res, next){
    const token = req.header('x-auth-token');
    if(!token)return res.send("Request Denied")

    try {
        const decode =jwt.verify(token,"thisisascerectkey");
        req.user=decode;
        next();
    } catch (error) {
        res.send("Invalid Token");
    }

}
