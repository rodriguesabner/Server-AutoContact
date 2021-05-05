const { sendToWebhook } = require("../util/webhook");

module.exports = {
    async create(req, res) {
        const { contacts } = req.body;

        //webhook
        sendToWebhook("new-contact", { contact: contacts });

        req.io.emit("new-contact", { contacts: contacts });
        return res.status(200).json({ contacts })
    },
    async list(req, res) {
        req.io.emit("get-contacts", null);
        return res.status(200).json({ status: "Success", message: "Retrieving contact list..." })
    }
}