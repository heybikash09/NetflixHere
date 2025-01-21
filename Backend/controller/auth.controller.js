import { User } from "../models/user.model.js"


export async function signup(req, res) {
    try {
        const { username, password, email } = req.body
        if (!email || !username || !password)
            return res.status(402).json({ status: 'All field has to be filled !!' })

        const emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

        if (!emailReg.test(email))
            return res.status(400).json({ status: false, message: 'email is not valid' })

        if (await User.findOne({ username: username }))
            return res.status(400).json({ status: false, message: 'username already exist !!!' })

        if (await User.findOne({ username: email }))
            return res.status(400).json({ status: false, message: 'email address already exist !!!' })

        if (!password.length > 6)
            return res.status(400).json({ status: false, message: 'password has less than 6 character !!' })

        const newUser = new User(
            {
                username,
                password,
                email
            }
        )
        //to save the data in data base
        await newUser.save()
        return res.status(201).json({ status: "Sucess !!!",user:{...newUser._doc,password:""} })
    } catch (err) {
        return res.status(500).json({ status: false, message: err.message })
    }

}

export async function login(req, res) {
    
    res.send("Heyy im login !!!")
}
export async function logout(req, res) {
    res.send("Heyy im logout !!!")
}