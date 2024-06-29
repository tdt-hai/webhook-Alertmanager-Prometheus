const axios = require('axios');
async function sendToLine(header, message) {
    await axios({
        method: 'post',
        url: 'https://notify-api.line.me/api/notify',
        data: {
            'message': `${message}`
        },
        headers: {
            'Authorization': `${header}`,
            'Content-Type': "application/x-www-form-urlencoded"
        }
    })
}
module.exports = {sendToLine}