const express = require('express');

const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
    }
    catch(error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

const Login = async (req,res) => {
    try {
        const { username, email, password } = req.body;
        if(!username || !email || !password) {
            return res.status(400).json({ message: "Please provide username, email and password" });
        }else{
            return user.findOne({ email }).then(user => {
                if(!user) {
                    return res.status(400).json({ message: "User not found" });
                }else{
                    if(user.password !== password) {
                        return res.status(400).json({ message: "Invalid password" });
                    }else{
                        return res.status(200).json({ message: "Login successful" });
                    }
                }
        })
        
    }
}
    catch(error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = {register, Login};
