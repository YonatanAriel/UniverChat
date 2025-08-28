# UniverChat 🌐

A real-time multilingual chat application that breaks down language barriers by automatically translating messages between users speaking different languages. Connect with people worldwide in your preferred language while they read your messages in theirs.

## ✨ Features

### 🔥 Core Functionality

- **Real-time Chat**: Instant messaging powered by Socket.IO
- **Automatic Translation**: Messages are automatically translated to each user's preferred language
- **Multi-language Support**: Support for 27+ languages including English, Arabic, Chinese, French, German, Japanese, Spanish, Hebrew, and more
- **Anonymous & Authenticated Chat**: Choose between anonymous chatting or create an account for a personalized experience
- **User Authentication**: Secure sign-up and sign-in with profile photos
- **Language Preferences**: Set and update your preferred language anytime

### 🎨 User Experience

- **Modern UI**: Beautiful gradient backgrounds with responsive design
- **Translation Status**: Real-time indicators showing translation progress
- **Show/Hide Original**: Toggle between translated and original message text
- **Error Handling**: Graceful fallbacks when translation services are unavailable
- **Mobile Responsive**: Optimized for both desktop and mobile devices

### 🛠️ Technical Features

- **TypeScript**: Full type safety and better developer experience
- **React 18**: Modern React with hooks and concurrent features
- **Socket.IO**: Real-time bidirectional communication
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Form Validation**: Robust form handling with React Hook Form
- **Local Storage**: Persistent user preferences and session management
- **Error Boundaries**: Comprehensive error handling and recovery

## 🏗️ Tech Stack

### Frontend

- **React 18** - UI library with modern hooks
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Socket.IO Client** - Real-time communication
- **React Router** - Client-side routing
- **React Hook Form** - Form validation and handling
- **Axios** - HTTP client for API requests

### Backend Integration

- **Socket.IO** - Real-time messaging
- **REST API** - User authentication and translation services
- **Translation API** - Message translation capabilities

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- pnpm, npm, or yarn
- Backend server running on `http://localhost:4000`

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/YonatanAriel/UniverChat.git
   cd UniverChat
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start the development server**

   ```bash
   pnpm start
   # or
   npm run start
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

### Build for Production

```bash
pnpm build
# or
npm run build
```

The built files will be in the `dist` directory.

## 🎯 Usage

### Anonymous Chat

1. Visit the welcome page
2. Enter your name
3. Select your preferred language
4. Start chatting with others worldwide

### Authenticated Chat

1. Sign up with a username, password, and optional profile photo
2. Set your preferred language during registration
3. Sign in to access your personalized chat experience
4. Update your language preference anytime from the navbar

### Translation Features

- Messages automatically translate to your preferred language
- View original text by toggling the "Show Original" option
- Translation status indicators show the progress of message translation
- Fallback to original text if translation fails

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── layout/         # Layout components (Navbar, Layout)
│   └── ui/             # UI components (ChatBox, Message, etc.)
├── context/            # React Context for state management
├── hooks/              # Custom React hooks
├── pages/              # Page components (Home, SignIn, SignUp)
├── routes/             # Routing configuration
├── services/           # API calls and external services
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
└── config/             # Configuration files
```

## 🌍 Supported Languages

Arabic, Bulgarian, Chinese, Czech, Danish, Dutch, English, Finnish, French, German, Greek, Hebrew, Hindi, Hungarian, Indonesian, Italian, Japanese, Korean, Norwegian, Polish, Portuguese, Russian, Spanish, Swedish, Thai, Turkish, Ukrainian, Vietnamese

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

## 🔗 Related Documentation

- [Translation System Documentation](TRANSLATION_SYSTEM.md) - Detailed technical documentation of the translation system
- [Translation Implementation Status](TRANSLATION_IMPLEMENTATION_STATUS.md) - Current implementation status and completed features

## 👨‍💻 Author

**Yonatan Ariel** - [YonatanAriel](https://github.com/YonatanAriel)

---

_UniverChat - Breaking language barriers, connecting the world_ 🌐💬
