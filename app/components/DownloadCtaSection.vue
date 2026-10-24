<template>
  <section id="download-cta" class="download-cta-section">
    <!-- Background Image with Ambient Glow and Fades -->
    <div class="cta-bg-wrapper">
      <img
        src="/images/travelour_app_showcase.jpg"
        alt="Travelour Dubai App Interface"
        class="cta-bg-image"
        loading="lazy"
      />
      <div class="cta-top-fade" aria-hidden="true"></div>
      <div class="cta-bottom-fade" aria-hidden="true"></div>
      <div class="cta-dark-wash" aria-hidden="true"></div>
    </div>

    <!-- Centered Content -->
    <div class="shell cta-shell">
      <p class="eyebrow cta-eyebrow">
        START EXPLORING DUBAI TODAY
      </p>

      <h2 class="cta-title font-display">
        One app. Zero guesswork.<br />
        <span class="gold-text-gradient">Welcome to Dubai.</span>
      </h2>

      <p class="cta-subtitle font-sans">
        Find verified places and professionals, master how the city works with the Dubai Guidebook, and contact the right people directly via WhatsApp and phone.
      </p>

      <div class="cta-buttons-row">
        <NuxtLink to="/download" class="glass-pill cta-glass-btn">
          <span>Download the App</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </NuxtLink>

        <NuxtLink to="/business" class="btn btn-primary cta-primary-btn">
          <span>List on Travelour</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </NuxtLink>
      </div>

      <!-- Platform availability pills -->
      <div class="platform-badges font-mono">
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
  padding-bottom: 8rem;
  background-color: #000;
}

/* Background Media & Overlays */
.cta-bg-wrapper {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.cta-bg-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  opacity: 0.35;
  filter: blur(1px);
}

.cta-top-fade {
  position: absolute;
  inset-x: 0;
  top: 0;
  height: 12rem;
  background: linear-gradient(180deg, #000000 0%, transparent 100%);
  pointer-events: none;
}

.cta-bottom-fade {
  position: absolute;
  inset-x: 0;
  bottom: 0;
  height: 12rem;
  background: linear-gradient(0deg, #000000 0%, transparent 100%);
  pointer-events: none;
}

.cta-dark-wash {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  pointer-events: none;
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
  margin-bottom: 1.25rem;
}

.cta-title {
  font-size: clamp(2.5rem, 6vw, 4.8rem);
  font-weight: 300;
  line-height: 1.05;
  color: var(--color-foreground);
  margin-bottom: 1.5rem;
  letter-spacing: -0.03em;
  max-width: 52rem;
}

.cta-subtitle {
  font-size: clamp(1rem, 1.8vw, 1.2rem);
  line-height: 1.6;
  color: var(--color-muted-foreground);
  max-width: 42rem;
  margin-bottom: 2.75rem;
}

.cta-buttons-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
  margin-bottom: 3rem;
}

.cta-glass-btn {
  padding: 1rem 2.25rem;
  font-size: 0.82rem;
  font-weight: 600;
  color: #fff;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.18);
}

.cta-glass-btn:hover {
  background: rgba(255, 255, 255, 0.16);
  border-color: rgba(255, 255, 255, 0.35);
  transform: translateY(-2px);
}

.cta-primary-btn {
  padding: 1rem 2.25rem;
  font-size: 0.82rem;
}

/* Platform chips */
.platform-badges {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
}

.platform-chip {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.45rem 1rem;
  border-radius: var(--radius-pill);
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.09);
  color: var(--color-muted-foreground);
  font-size: 0.72rem;
  letter-spacing: 0.1em;
}
</style>
