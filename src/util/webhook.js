const api = require("axios");

module.exports = {
    async sendToWebhook(type, data) {
        const body = {
            type: type,
            data: data
        }

        await api.post("https://webhook.site/e081da65-ceab-4a36-af25-0d1083c843c6", body);
    }
}