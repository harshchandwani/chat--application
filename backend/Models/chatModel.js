// chatName
// isGroupChat
// users
// latestMessage
// groupAdmin

//THIS ALL IS FOR THE ALL THE LISTOF CONTACT ON THE LEFT SIDE
const mongoose = require('mongoose')
const chatModel = mongoose.Schema(
    {
        chatName: {type: String, trim: true},
        isGroupChat: {type: Boolean, default: false},
        users: [{
            type: mongooose.Schema.ObjectId,
            ref: "User",
        }
    ],
    
    latestMessage: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message",
    },

    groupAdmin: {
        type: mongoose.Schema.Types.ObjectId,
    },
},
    {
        timestamps: true,

    }

);

const Chat = mongoose.model("Chat", chatModel);
module.exports = Chat;