const express = require("express");
const { sendToWebhook } = require("./util/webhook");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const PORT = process.env.PORT || 4747;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    req.io = io;
    next();
});

io.on('connection', (sock) => {
    console.log(`User connected: ${sock.id}`);

    sock.on("list-contacts", (data) => {
        //webhook
        sendToWebhook("get-contacts", { contacts: data });
    });

    sock.on('disconnect', () => {
        console.log(`User disconnected: ${sock.id}`);
    });
});

app.use(require("./routes"));

server.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));