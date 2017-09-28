var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var chatSchema = new Schema({

	

    roomId:{
		type:String
	},
	senderName :{
		type: String
	},
    receiverName: {
    	type: String
    },
    messageType:{
    	type:String
    },
    media: String,

    timeStamp:{
		type: Date,
		default:Date.now()
	}
});


module.exports = mongoose.model('ChatHistory',chatSchema,'ChatHistory');



