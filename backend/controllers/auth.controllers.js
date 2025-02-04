import bcrypt from 'bcryptjs';

export const signup = async (req, res) => {

    try {
        const { fullname, email, password, confirmPassword } = req.body;
                if(!fullname || !email || !password || !confirmPassword){
                    return res.status(400).json({msg: "All fields are required"});
                }
                if(password.length < 6){
                    return res.status(400).json({msg: "Password must be atleast 6 characters long"});
                }

                if(password !== confirmPassword){
                    return res.status(400).json({msg: "Password and Confirm Password do not match"});
                }

                const userExist = await UserActivation.findOne({email});
                if (userExist) {
                  return res
                    .status(400)
                    .json({ msg: "User with this email already exists" });
                }

               const hashedPassword = await bcrypt.hash(password, 12);

                const newUser = new User({
                    fullname,
                    email,
                    password: hashedPassword
                });

                if (newUser) {
      
      await newUser.save();
      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
       
      });
   
    } } catch (error) {
        console.log("Error in signup controller", error);
     res.status(500).json({ error: "Internal server error" });
        
    }










}