var mongoose = require('mongoose');
//create our friendSchema
var MsgSchema = new mongoose.Schema({
	user_name: String,
	msg: String
});
mongoose.model('Messages', MsgSchema);