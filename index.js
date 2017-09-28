const app=require('express')();
const http=require('http').Server(app)
const User=require('./chatUser');
const Room=require('./room');
const io=require('socket.io')(http)
app.get('/',function (req,res) {
    res.sendFile(__dirname + '/index.html')
})

var onlineUsers=[];

io.on('connection',function (socket) {
    console.log("A user connected");

    socket.on('initChat',function (data) {

        onlineUsers[socket.id]=data
        console.log(data +" has joined")
        console.log("online users",onlineUsers)
        new User({
            userName:data
        }).save(function (error,success) {
            console.log(success)
        })

    })
    socket.on('disconnect',function () {
        var user= onlineUsers[socket.id]
        io.emit('disconnect',user+" user disconnected");
        console.log(user+" user disconnected");
        delete onlineUsers[socket.id]
    })

    socket.on('chat message',function (message) {
      message.user=onlineUsers[socket.id]
        io.emit('chat message',message);


    })

    socket.on('base 64',function (data) {
        socket.emit('sendImage',data.file);
    })
})



http.listen(3005,function () {
    console.log("listening on 3000")
})