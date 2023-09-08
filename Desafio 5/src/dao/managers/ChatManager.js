import { messageModel } from "../models/message.model.js";

class ChatManager {
    async getMessages() {
        //return await messageModel.find().lean();
        return await messageModel.find()
    }

    async createMessage(message) {
        return await messageModel.create(message);
    }
}

export default ChatManager;