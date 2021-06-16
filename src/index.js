const {config} = require("dotenv");
const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const PORT = process.env.PORT || 4747;
const {sendToWebhook} = require("./util/webhook")

config();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use((req, res, next) => {
    req.io = io;
    next();
});

io.on('connection', (sock) => {
    console.log(`User connected: ${sock.id}`);
    sock.emit("client_first_access", {socket_id: sock.id})

    sock.on("list-contacts", async (data) => {
        console.log(data);
        await sendToWebhook("get-contacts", {contacts: data});
    });

    sock.on('disconnect', () => {
        console.log(`User disconnected: ${sock.id}`);
    });

});

exports.socket = io;
app.use(require("./routes"));

server.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));