# 🧠 NeuroTunes - AI-Powered Mood Analysis & Music Discovery

<div align="center">



**Discover your emotions through AI-powered text analysis and get personalized music recommendations**

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![Google Gemini](https://img.shields.io/badge/Google-Gemini_AI-4285f4?style=flat-square&logo=google)](https://ai.google.dev/)
[![Spotify API](https://img.shields.io/badge/Spotify-API-1ed760?style=flat-square&logo=spotify)](https://developer.spotify.com/)

</div>

## ✨ Features

### 🎭 **AI Mood Analysis**
- **Advanced Text Analysis** using Google Gemini AI
- **Sentiment Analysis** (Positive, Negative, Neutral)
- **Mood-based Recommendations** for activities and music
- **Real-time Processing** with beautiful UI feedback

### 🎵 **Spotify Integration**
- **OAuth Authentication** for secure Spotify account access
- **Playlist Management** - view, create, and manage playlists
- **Music Search** across Spotify's vast catalog
- **Track Preview** with built-in audio player
- **Personalized Recommendations** based on detected mood

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- A Google AI Studio account for Gemini API
- A Spotify Developer account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Siddharth-Sameer-Nevgi/NeuroTunes.git
   cd NeuroTunes
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   
   Add your API keys to `.env.local`:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```
## 🏗️ Project Structure

```
src/
├── app/
│   ├── currentmood/         # Mood analysis page
│   │   ├── page.jsx        # Main mood analyzer component
│   │   └── mood.module.css # Mood page styles
│   ├── spotify/            # Spotify integration
│   │   ├── page.js         # Spotify features
│   │   └── spotify.module.css
│   ├── api/
│   │   └── users/
│   │       └── currentmood/ # API endpoints
│   ├── globals.css         # Global styles
│   ├── layout.js           # Root layout
│   ├── page.js            # Homepage
│   └── page.module.css    # Homepage styles
└── public/                # Static assets
```

## 🛠️ Technologies Used

### Frontend
- **Next.js 15** - React framework with App Router
- **React 19** - UI library with latest features
- **CSS Modules** - Scoped styling solution
- **Axios** - HTTP client for API calls

### AI & APIs
- **Google Gemini AI** - Advanced language model for mood analysis
- **Spotify Web API** - Music data and streaming integration
- **@google/generative-ai** - Official Gemini SDK

<img width="1864" height="892" alt="image" src="https://github.com/user-attachments/assets/f0339166-7391-4af5-8958-96f4b956d28f" />

<img width="1894" height="882" alt="image" src="https://github.com/user-attachments/assets/5dd41e4f-77d2-4dd4-a13b-e4a1dc976de6" />

