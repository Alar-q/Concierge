module.exports = socket => {
    socket.on("join-conversation", async conversation => {
        const { user } = socket.request;

        const Participants = require('../../models/modelsManager').models.Participant;

        const info = {conversation: conversation.id, user: user.id};

        const exists = await Participants.findOne(info);
        if(exists)
            return console.log(`Participant already exists `, exists)

        const p = new Participants(info);

        try{
            await p.save();
        }catch(e){
            console.log(e)
        }

        console.log(`join socket(${socket.id}) to room`, conversation)
    })

    socket.on("send-message", async (message) => {
        const { user } = socket.request;

        const Messages = require('../../models/modelsManager').models.Message;
        const Notifications = require('../../models/modelsManager').models.Notification;
        const Participants = require('../../models/modelsManager').models.Participant;

        /**
         * Нужно не только тупое сохранение сделать, но и изменение
         * */

        console.log(`socket(${socket.id}) send message(${message}) of type ${message.type}`);

        const m = message.id ?
            await Messages.findById(message.id) :
            new Messages({
                sender: user.id,
                ...message
            });

        if(!m) return;

        try {
            if(m.type === 'text'){
                m.text = message.text;
            }
            else if(m.type === 'choice'){
                m.choice.selectedServices = message.choice.selectedServices;
                m.choice.submitted = true;

            }
            // А когда файл?
            await m.save();
        }catch(e){
            console.log(e);
        }

        const ps = await Participants.find({conversation: message.conversation});

        try {
            await Promise.all(ps.map(async p => {
                return await new Notifications({
                    type: 'message',
                    message: m.id,
                    user: p.user,
                }).save();
            }))
        } catch (e) {
            console.log(e);
        }

    })

    socket.on('delete-notifications', async (notifications) => {
        const Notifications = require('../../models/modelsManager').models.Notification;

        const ids = notifications.map(n => n.id);
        const ns = await Notifications.find({ '_id': { $in: ids } })

        await Promise.all(ns.map(async n => {
            await n.deepDelete();
        }))
    })
}

/*
▄───▄
█▀█▀█
█▄█▄█
─███──▄▄
─████▐█─█
─████───█
─▀▀▀▀▀▀▀
*/