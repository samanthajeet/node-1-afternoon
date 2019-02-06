
let messages = [];
let id = 0;
let displayName = ''


module.exports = {
    create: (req,res) => {
        const {text, time, name} = req.body;
        messages.push({id, name, text, time});
        id++;
        res.status(200).send(messages)
    },

    read: (req, res) => {
        res.status(200).send(messages)
        console.log(res)
    },

    update: (req, res) => {
        const {text} = req.text;
        const updateID = req.params.id
        const messageIndex = messages.findIndex((message) => message.id === updateID);
        let message = messages[ messageIndex ];

        messages[ messageIndex ] = {
            id: message.id,
            text: text || message.text,
            time: message.time
        }
        res.status(200).send(messages)
    },

    delete: (req, res) => {
        const deleteID = req.params.id;
        messageIndex = messages.findIndex( (message) => message.id === deleteID );
        messages.splice(messageIndex, 1);
        res.status(200).send(messages)
    }
}

