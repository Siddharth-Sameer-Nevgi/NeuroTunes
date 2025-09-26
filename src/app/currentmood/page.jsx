'use client';

import { useState } from 'react';
import axios from 'axios';
import styles from './mood.module.css';

export default function MoodAnalyzer() {
  const [message, setMessage] = useState('');
  const [mood, setMood] = useState('');
  const [genre, setGenre] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function analyzeMood() {
    setLoading(true);
    setError('');
    setMood('');
    setGenre('');

    try {
      const res = await axios.post("/api/users/currentmood", { message });
      setMood(res.data.mood);
      setGenre(res.data.genre);
    } catch (err) {
      console.error("Client Error:", err);
      setError("Failed to analyze mood.");
    } finally {
      setLoading(false);
    }
  }

  const clearAnalysis = () => {
    setMessage('');
    setMood('');
    setGenre('');
    setError('');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>NeuroTunes</h1>
      <p className={styles.subtitle}>Discover your mood through AI-powered text analysis</p>

      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message here..."
        className={styles.textarea}
        rows={4}
      />

      <div className={styles.buttonGroup}>
        <button
          onClick={analyzeMood}
          disabled={loading || !message.trim()}
          className={styles.primaryButton}
        >
          {loading ? 'Analyzing...' : 'Analyze Mood'}
        </button>
        <button onClick={clearAnalysis} className={styles.secondaryButton} disabled={loading}>
          🗑️ Clear
        </button>
      </div>

      {error && <div className={styles.error}> {error}</div>}

      {mood && genre && (
        <div className={styles.result}>
          <h3> Detected Mood:</h3>
          <p className={styles.mood}>{mood}</p>
          <h3> Suggested Music Genre:</h3>
          <p className={styles.mood}>{genre}</p>
        </div>
      )}
    </div>
  );
}
