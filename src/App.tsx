import "./App.css";
// import { useEffect } from "react";
// import { getAudio } from "./services/apiCalls";
import Layout from "./components/layout/Layout";
import ContextProvider from "./context/ContextProvider";

function App() {
  // useEffect(() => {
  //   getAudio("Hello, world!", "en-us", "0");
  // }, []);

  return (
    <ContextProvider>
      <Layout />
    </ContextProvider>
  );
}
export default App;

// צאט וידויים אנונימי שאפשר לספר לכולם מה שרוצים
//צאט שאתה יכול לכתוב בשפה שלך וזה יתרגם  את ההודעה לשפה של מי שמדבר איתך

//schummar-translate,Twilio
// Certainly! Building a multilingual chat app that automatically translates messages between users speaking different languages is an exciting challenge. Let’s break it down:

// Language Detection:
// Use a language detection library (e.g., langdetect for Python) to identify the language of each incoming message.
// You can also use pre-trained models or APIs (e.g., Google Cloud Translation API) for language detection.
// Translation:
// When a user sends a message, translate it to the recipient’s preferred language.
// Use an external translation service (e.g., Google Translate API, DeepL API, or Microsoft Translator) to perform the translation.
// Store both the original and translated messages in your database.
// Real-Time Communication:
// Set up real-time communication using WebSocket (e.g., Socket.io).
// When a user sends a message, emit it via WebSocket to all connected clients.
// On the server, detect the sender’s language, translate the message, and broadcast the translated message to other users.
// User Preferences:
// Allow users to set their preferred language during registration or in their profile settings.
// Store the preferred language in your database for each user.
// Displaying Messages:
// In the chat interface, display the translated message to the recipient.
// You can also show the original message alongside the translation for clarity.
// Error Handling:
// Handle cases where the language detection fails or the translation service encounters errors.
// Provide fallbacks (e.g., showing the original message) when necessary.
// Here’s a high-level overview of how you can implement this with your chosen stack:

// Frontend (React):
// Create chat components (input, message display, etc.).
// Use WebSocket (Socket.io) to send and receive messages.
// Display translated messages based on the recipient’s language preference.
// Backend (Express.js):
// Set up WebSocket communication.
// Detect the sender’s language using a language detection library.
// Translate messages using an external translation service.
// Broadcast translated messages to connected clients.
// Database (Better SQLite3):
// Store messages with both original and translated content.
// Remember to handle edge cases (e.g., users switching languages mid-conversation) and choose a reliable translation service.
//  Good luck with your multilingual chat app! 🌐🗣️
