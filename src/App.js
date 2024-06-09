// src/App.js
import React from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "./chatbotConfig";
import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Food Delivery App</h1>
      </header>
      <main>
        <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider} />
      </main>
    </div>
  );
}

export default App;
