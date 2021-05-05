const api = require("axios");

module.exports = {
    sendToWebhook(type, data) {
        const body = {
            type: type,
            data: data
        }

        api.post("https://webhook.site/e081da65-ceab-4a36-af25-0d1083c843c6", body);
    }
}