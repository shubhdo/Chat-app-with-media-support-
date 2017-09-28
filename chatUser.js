var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userschema = new Schema({

	
	userName: {
		type: String
	}
});

var chatUsers = mongoose.model('ChatUsers', userschema,'ChatUsers');

module.exports = chatUsers;
