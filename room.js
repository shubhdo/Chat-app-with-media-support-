var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var roomschema = new Schema({

	senderName: {
		type: String
	},
	
	receiverName: {
		type: String
	},
	createdAt: {
		type: Date,
		default: new Date()
	}
})

var Room = mongoose.model('Room', roomschema,'Room');

module.exports = Room;