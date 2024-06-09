// src/ActionProvider.js
import { createChatBotMessage } from "react-chatbot-kit";

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  handleOrderStatus = () => {
    const message = this.createChatBotMessage("To check your order status, please go to the 'My Orders' section and select the order you want to track.");
    this.updateChatbotState(message);
  };

  handleCancelOrder = () => {
    const message = this.createChatBotMessage("To cancel your order, please go to the 'My Orders' section, select the order you want to cancel, and click on the 'Cancel Order' button.");
    this.updateChatbotState(message);
  };

  handleModifyOrder = () => {
    const message = this.createChatBotMessage("To modify your order, please go to the 'My Orders' section, select the order you want to modify, and click on the 'Modify Order' button. Note that modifications can only be made before the order is processed.");
    this.updateChatbotState(message);
  };

  handleTrackOrder = () => {
    const message = this.createChatBotMessage("To track your order, please go to the 'My Orders' section, select the order you want to track, and you will see the tracking information.");
    this.updateChatbotState(message);
  };

  updateChatbotState = (message) => {
    this.setState(prevState => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider;
