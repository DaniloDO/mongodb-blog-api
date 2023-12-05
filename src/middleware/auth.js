import jwt from "jsonwebtoken";

export const authentication = (req, res, next) => {

    let cookieHeader = req.headers['cookie'];

    if(cookieHeader !== undefined) {
        let cookieToken = cookieHeader.split('=')[1];
        console.log(cookieToken);
        jwt.verify(cookieToken, 'secretKey', (err, decodedToken) => {
            if(err) {
                console.log(err.message);
                res.status(403).send('Forbidden access');
            }
            else {
                console.log(decodedToken);
                next()
            }
        })
    }

    else {
        res.status(403).send('Please login');
    }
}