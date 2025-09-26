import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* Hero Section */}
        <div className={styles.hero}>
          <div className={styles.logoContainer}>
            <div className={styles.brainEmoji}>🧠</div>
            <h1 className={styles.title}>NeuroTunes</h1>
          </div>
          <p className={styles.tagline}>
            AI-Powered Mood Analysis & Music Discovery
          </p>
          <p className={styles.description}>
            Share your thoughts and let our AI understand your emotions. 
            Get personalized music recommendations powered by Gemini AI and Spotify.
          </p>
        </div>

        {/* Features Section */}
        <div className={styles.features}>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>🎭</div>
            <h3 className={styles.featureTitle}>Mood Analysis</h3>
            <p className={styles.featureDesc}>
              Advanced AI powered by Google Gemini analyzes your text to understand your emotional state
            </p>
          </div>
          
          <div className={styles.feature}>
            <div className={styles.featureIcon}>🎵</div>
            <h3 className={styles.featureTitle}>Smart Music Discovery</h3>
            <p className={styles.featureDesc}>
              Get personalized music recommendations from Spotify based on your current mood
            </p>
          </div>
          
          <div className={styles.feature}>
            <div className={styles.featureIcon}>🎧</div>
            <h3 className={styles.featureTitle}>Seamless Playback</h3>
            <p className={styles.featureDesc}>
              Connect with Spotify to create playlists and enjoy your mood-matched music instantly
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className={styles.ctaSection}>
          <Link href="/currentmood" className={styles.primaryCta}>
            🚀 Start Mood Analysis
          </Link>
          <Link href="/spotify" className={styles.secondaryCta}>
            🎶 Explore Spotify Features
          </Link>
        </div>

        {/* Tech Stack */}
        <div className={styles.techStack}>
          <p className={styles.techLabel}>Powered by</p>
          <div className={styles.techIcons}>
            <div className={styles.techItem}>
              <span className={styles.techEmoji}>🤖</span>
              <span>Google Gemini</span>
            </div>
            <div className={styles.techItem}>
              <span className={styles.techEmoji}>🎧</span>
              <span>Spotify API</span>
            </div>
            <div className={styles.techItem}>
              <span className={styles.techEmoji}>⚡</span>
              <span>Next.js</span>
            </div>
          </div>
        </div>
      </main>
      
      <footer className={styles.footer}>
        <p className={styles.footerText}>
          Experience the future of mood-based music discovery
        </p>
        <div className={styles.footerLinks}>
          <Link href="/currentmood" className={styles.footerLink}>
            Mood Analysis
          </Link>
          <Link href="/spotify" className={styles.footerLink}>
            Spotify Integration
          </Link>
        </div>
      </footer>
    </div>
  );
}
