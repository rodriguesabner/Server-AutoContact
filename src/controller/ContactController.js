const {sendToWebhook} = require("../util/webhook");

module.exports = {
    async create(req, res) {
        const {app_id: APP_ID} = req.headers;
        const {contacts} = req.body;

        if (!APP_ID)
            return res.status(400).json({status: "Error", message: "Param app_id in header is required"})

        if (!contacts || contacts.length <= 0)
            return res.status(400).json({status: "Error", message: "Param contacts is required"})

        //webhook
        await sendToWebhook("new-contact", {APP_ID: APP_ID, contact: contacts});

        req.io.emit("new-contact", {APP_ID: APP_ID, contacts: contacts});
        return res.status(200).json({contacts})
    },
    async list(req, res) {
        const {app_id} = req.headers;

        if (!app_id)
            return res.status(400).json({status: "Error", message: "Param app_id in header is required"})

        req.io.emit("get-contacts", {APP_ID: app_id});
        return res.status(200).json({status: "Success", message: "Retrieving contact list..."})
    }
}