import jwt from 'jsonwebtoken';


 const generateToken = (userId , res) => {


    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: '15d'
    });

    res.cookie('token', token, {
        httpOnly: true,
        maxAge: 30 * 24 * 60 * 60 * 1000,
        sameSite: "strict"
    });
}

export default generateToken;