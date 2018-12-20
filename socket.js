var server = require('http').Server();

var Redis = require('ioredis');
var redis = new Redis();

// Create a new Socket.io instance
var io = require('socket.io')(server);

redis.psubscribe('*');

redis.on('pmessage', function (pattern, channel, message) {
    message = JSON.parse(message);

    // Pass data to Socket.io every time we get a new message from Redis
    // "channel + ':' + message.event" is a unique channel id to broadcast to
    //
    // message.data corresponds to the $data variable in the MessageSent event
    // in Laravel
    io.emit(channel + ':' + message.event, message.data);
});

var participants = [];

io.on('connect', function (socket) {
    var username = socket.handshake.query.username;

    // Push the user to the array
    participants.push(username);

    // The "participants" array is now included in the message
    io.emit('user-joined', { username: username, participants: participants });

    socket.on('disconnect', function (socket) {
        // Remove the user to the array
        participants.splice(participants.indexOf(username), 1);

        // The "participants" array is now included in the message
        io.emit('user-left', { username: username, participants: participants });
    });
});

server.listen(3001);

// Just to be sure it's working
console.log('Server started on 3001');
