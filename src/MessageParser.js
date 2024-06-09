// src/MessageParser.js
class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase();
  
      if (lowerCaseMessage.includes("order status")) {
        this.actionProvider.handleOrderStatus();
      } else if (lowerCaseMessage.includes("cancel order")) {
        this.actionProvider.handleCancelOrder();
      } else if (lowerCaseMessage.includes("modify order")) {
        this.actionProvider.handleModifyOrder();
      } else if (lowerCaseMessage.includes("track order")) {
        this.actionProvider.handleTrackOrder();
      } else {
        const message = this.createChatBotMessage("I'm not sure how to help with that. Could you please rephrase?");
        this.updateChatbotState(message);
      }
    }
  }
  
  export default MessageParser;
  