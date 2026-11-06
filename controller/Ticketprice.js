const express = require("express");
const mongoose = require("mongoose");

const CalculateTicketPrice = (req,res) => {
    user.findOne({ email: req.body.email }).then(user => {
        if(!user) {
            return res.status(400).json({ message: "User not found" });
        }
        const { source, destination, busType } = req.body;
        if(!source || !destination || !busType) {
            return res.status(400).json({ message: "Please provide source, destination and busType" });
        }
        let price = 0;
        if(busType === "AC") {
            price = 1000;
        } else if(busType === "Non-AC") {
            price = 500;
        }
        else if(busType === "Sleeper") {
            price = 1500;
        }
        return res.status(200).json({ price });
    }
)};

module.exports = { calculateTicketPrice };
