// src/chatbotConfig.js
import { createChatBotMessage } from "react-chatbot-kit";
import React from "react";
import OrderOptions from "./components/OrderOptions";

const config = {
  botName: "FoodBot",
  initialMessages: [createChatBotMessage("Hi! How can I assist you today?", { widget: "orderOptions" })],
  customComponents: {
    // Replaces the default header
    header: () => <div style={{ backgroundColor: '#f5f5f5', padding: '5px', borderRadius: '3px' }}>FoodBot</div>,
  },
  widgets: [
    {
      widgetName: "orderOptions",
      widgetFunc: (props) => <OrderOptions {...props} />,
    },
  ],
};

export default config;
