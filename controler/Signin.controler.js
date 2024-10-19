
import users from '../models/signup.js'
import bcryptjs from 'bcryptjs';
import './signup.controler.js'
const signin = async (req,res)=>{
    try {
        const {email,password} = req.body;
        const user = await users.findOne({email});
        if(!user){
            return res.status(400).json({error: 'User not found'});
        }
        const match = await bcryptjs.compare(password, user.password);
        console.log(user.password);
        console.log(password);
        if(!match){
            return res.status(400).json({error: 'Invalid password'});
        }
        res.status(200).json({message: 'User successfully login!'});
    } catch (error) {
        res.status(500).json({message:"interval server error"});
    }
}
export default signin;