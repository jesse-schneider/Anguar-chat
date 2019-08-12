module.exports = {
    connect: function(io, PORT) {

        //output when connection begins
        io.on('connection', (socket) => {
            console.log(`User connection on port ${PORT}: ${socket.id}`);

            //emit incoming message to all sockets 
            socket.on('message', (message) => {
                io.emit('message', message);
            })
        });

    }
}