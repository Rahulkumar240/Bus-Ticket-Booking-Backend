const mongoose = require("mongooose");

const BookTicketsSchema = new mongoose.Schema({
    Username:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    distance:{
        type:Number
    }
    ,travelClass:{
        type:String,
        required:true
    },
    travelDate:{
        type:Date,
        required:true
    },
    busName:{
        type:String,
        required:true
    },
    farePrice:{
        TicketPrice:Number,
        AcClassTicketPrice:Number,
        SleeperClassTicketPrice:Number,
        serviceFee:Number,
        GST:Number,
        totalPrice:Number
    }

});

const BookTickets = mongoose.model("BookTickets", BookTicketsSchema);

module.exports = {BookTickets};