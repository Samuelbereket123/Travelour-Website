<template>
  <section id="download-cta" class="download-cta-section">
    <!-- Night Dubai Skyline Background Layer -->
    <div class="cta-bg-wrapper" aria-hidden="true">
      <img
        src="/images/pexels-maria-charizani-3542905-5577693.jpg"
        alt="Dubai Downtown skyline at night featuring Burj Khalifa"
        class="cta-bg-image"
        loading="lazy"
      />
      <!-- Multi-gradient scrim for editorial readability and smooth transitions -->
      <div class="cta-bg-overlay"></div>
    </div>

    <!-- Centered Content -->
    <div class="shell cta-shell">
      <p class="eyebrow cta-eyebrow">
        START EXPLORING DUBAI TODAY
      </p>

      <h2 class="cta-title font-display">
        <span class="cta-title-line">One app. Zero guesswork.</span>
        <span class="cta-title-accent">Welcome to Dubai.</span>
      </h2>

      <p class="cta-subtitle font-sans">
        Find verified places and professionals, master how the city works with the Dubai Guidebook, and contact the right people directly via WhatsApp and phone.
      </p>

      <div class="cta-buttons-row">
        <NuxtLink to="/download" class="btn btn-primary cta-primary-btn">
          <span>Get the App</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </NuxtLink>

        <NuxtLink to="/business" class="cta-secondary-btn">
          <span>Join Directory</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </NuxtLink>
      </div>

      <!-- Platform availability pills -->
      <div class="platform-badges font-sans">
        <span class="platform-chip">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.84c.61-.75 1.04-1.8 1.01-2.84-.96.04-2.09.64-2.73 1.39-.56.64-1.05 1.7-1.01 2.74 1.07.08 2.12-.54 2.73-1.29z"/>
          </svg>
          iOS App Store
        </span>
        <span class="platform-chip">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3.609 1.814L13.793 12 3.61 22.186a2.023 2.023 0 0 1-.22-.303V2.117c.07-.11.144-.212.22-.303zm11.39 11.39l2.766 2.766-12.38 7.073 9.614-9.839zm2.766-2.766l-2.766 2.766-9.614-9.84 12.38 7.074zm1.187 1.187l3.66 2.09c.87.497.87 1.31 0 1.808l-3.66 2.09-2.22-2.22 2.22-2.22z"/>
          </svg>
          Google Play Store
        </span>
        <span class="platform-chip">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          </svg>
          Progressive Web App
        </span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.download-cta-section {
  position: relative;
  overflow: hidden;
  text-align: center;
  padding-top: 8rem;
  padding-bottom: 8.5rem;
  background-color: var(--color-background);
  color: #ffffff;
  border-top: 1px solid rgba(143, 233, 255, 0.16);
  border-bottom: 1px solid rgba(143, 233, 255, 0.16);
}

/* Background Media & Overlays */
.cta-bg-wrapper {
  position: absolute;
  inset: 0;
  z-index: 1;
  overflow: hidden;
  pointer-events: none;
}

.cta-bg-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 38%;
  transform: scale(1.02);
  filter: brightness(0.92) contrast(1.06);
}

.cta-bg-overlay {
  position: absolute;
  inset: 0;
  background:
    /* Top seamless fade from prior section */
    linear-gradient(180deg, var(--color-background) 0%, rgba(4, 32, 40, 0.72) 18%, transparent 40%),
    /* Bottom seamless fade into footer */
    linear-gradient(0deg, #042028 0%, rgba(4, 32, 40, 0.75) 20%, transparent 44%),
    /* Centered radial vignette ensuring crisp legibility and luxurious depth */
    radial-gradient(ellipse 75% 70% at 50% 50%, rgba(2, 18, 24, 0.88) 0%, rgba(2, 18, 24, 0.72) 55%, rgba(2, 18, 24, 0.42) 100%);
}

@media (max-width: 768px) {
  .download-cta-section {
    padding-top: 5rem;
    padding-bottom: 5.5rem;
  }

  .cta-bg-overlay {
    background:
      linear-gradient(180deg, var(--color-background) 0%, rgba(4, 32, 40, 0.85) 20%),
      linear-gradient(180deg, rgba(2, 18, 24, 0.88) 0%, rgba(2, 18, 24, 0.78) 60%, #042028 100%);
  }
}

/* Shell content */
.cta-shell {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cta-eyebrow {
  margin-bottom: 1.5rem;
  color: var(--color-sail-light);
  font-weight: 700;
  letter-spacing: 0.14em;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.cta-eyebrow::before {
  content: "";
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: var(--color-butter);
  box-shadow: 0 0 10px rgba(255, 216, 64, 0.6);
}

.cta-title {
  font-family: var(--font-display);
  font-size: clamp(2.6rem, 5.8vw, 4.8rem);
  font-weight: 300;
  line-height: 1.05;
  color: #ffffff;
  margin-bottom: 1.5rem;
  letter-spacing: -0.035em;
  max-width: 52rem;
  text-shadow: 0 4px 24px rgba(0, 0, 0, 0.45);
}

.cta-title-line {
  display: block;
  color: #ffffff;
}

.cta-title-accent {
  display: block;
  font-weight: 700;
  color: var(--color-butter);
  text-shadow: 0 4px 30px rgba(255, 216, 64, 0.35);
}

.cta-subtitle {
  font-family: var(--font-sans);
  font-size: clamp(1.05rem, 1.8vw, 1.25rem);
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.9);
  max-width: 44rem;
  margin-bottom: 2.75rem;
  font-weight: 400;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}

.cta-buttons-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
  margin-bottom: 3rem;
}

.cta-primary-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1.05rem 2.4rem;
  font-family: var(--font-sans);
  font-size: 0.92rem;
  text-transform: none;
  letter-spacing: 0.01em;
  background-color: var(--color-butter);
  color: var(--color-ink);
  font-weight: 700;
  border-radius: var(--radius-pill);
  box-shadow: 0 4px 20px rgba(255, 216, 64, 0.35);
  border: 1px solid var(--color-butter-hover);
  transition: all 0.25s cubic-bezier(0.2, 0.8, 0.2, 1);
  text-decoration: none;
}

.cta-primary-btn:hover {
  background-color: var(--color-butter-hover);
  color: var(--color-ink);
  box-shadow: 0 6px 28px rgba(255, 216, 64, 0.55);
  transform: translateY(-2px);
}

.cta-secondary-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-family: var(--font-sans);
  font-size: 0.92rem;
  font-weight: 600;
  text-transform: none;
  letter-spacing: 0.01em;
  padding: 1.05rem 2.2rem;
  border-radius: var(--radius-pill);
  background: rgba(255, 255, 255, 0.12);
  color: #ffffff;
  border: 1.5px solid rgba(255, 255, 255, 0.32);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  transition: all 0.25s cubic-bezier(0.2, 0.8, 0.2, 1);
  text-decoration: none;
  white-space: nowrap;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.25);
}

.cta-secondary-btn:hover {
  background: rgba(255, 255, 255, 0.25);
  color: #ffffff;
  border-color: rgba(255, 255, 255, 0.6);
  transform: translateY(-2px);
  box-shadow: 0 6px 22px rgba(0, 0, 0, 0.4);
}

/* Platform chips */
.platform-badges {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.85rem;
}

.platform-chip {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.5rem 1.15rem;
  border-radius: var(--radius-pill);
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: rgba(255, 255, 255, 0.92);
  font-size: 0.74rem;
  letter-spacing: 0.06em;
  font-weight: 600;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.platform-chip:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.35);
  color: #ffffff;
  transform: translateY(-1px);
}
</style>
