<template>
  <section id="download-cta" class="download-cta-section bg-sail">
    <!-- Background Image with Ambient Sail Overlay -->
    <div class="cta-bg-wrapper">
      <img
        src="/images/travelour_app_showcase.jpg"
        alt="Travelour Dubai App Interface"
        class="cta-bg-image"
        loading="lazy"
      />
      <div class="cta-sail-tint" aria-hidden="true"></div>
    </div>

    <!-- Centered Content -->
    <div class="shell cta-shell">
      <p class="eyebrow cta-eyebrow">
        START EXPLORING DUBAI TODAY
      </p>

      <h2 class="cta-title font-display">
        One app. Zero guesswork.<br />
        <span class="cta-title-bold">Welcome to Dubai.</span>
      </h2>

      <p class="cta-subtitle font-sans">
        Find verified places and professionals, master how the city works with the Dubai Guidebook, and contact the right people directly via WhatsApp and phone.
      </p>

      <div class="cta-buttons-row">
        <NuxtLink to="/download" class="btn btn-primary cta-primary-btn">
          <span>Get the App</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </NuxtLink>

        <NuxtLink to="/business" class="btn-sail-secondary cta-secondary-btn">
          <span>Join Directory</span>
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
  background: var(--gradient-sail);
  color: var(--color-on-sail);
}

/* Background Media & Overlays */
.cta-bg-wrapper {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}

.cta-bg-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  opacity: 0.08;
  mix-blend-mode: multiply;
}

.cta-sail-tint {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(143, 233, 255, 0.25) 0%, rgba(18, 88, 110, 0.45) 100%);
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
  color: var(--color-on-sail);
  font-weight: 700;
}

.cta-eyebrow::before {
  background-color: var(--color-on-sail);
}

.cta-title {
  font-size: clamp(2.5rem, 6vw, 4.8rem);
  font-weight: 300;
  line-height: 1.05;
  color: var(--color-on-sail);
  margin-bottom: 1.5rem;
  letter-spacing: -0.03em;
  max-width: 52rem;
}

.cta-title-bold {
  font-weight: 700;
  color: var(--color-on-sail);
}

.cta-subtitle {
  font-size: clamp(1rem, 1.8vw, 1.2rem);
  line-height: 1.6;
  color: var(--color-on-sail);
  opacity: 0.92;
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

.cta-primary-btn {
  padding: 1rem 2.25rem;
  font-size: 0.82rem;
  background-color: var(--color-butter);
  color: var(--color-ink);
  font-weight: 700;
  box-shadow: 0 4px 18px rgba(5, 57, 73, 0.25);
}

.cta-primary-btn:hover {
  background-color: var(--color-butter-hover);
  color: var(--color-ink);
  box-shadow: 0 6px 24px rgba(5, 57, 73, 0.35);
  transform: translateY(-2px);
}

.cta-secondary-btn {
  padding: 1rem 2.25rem;
  font-size: 0.82rem;
  background: rgba(255, 255, 255, 0.35);
  color: var(--color-on-sail);
  border: 1.5px solid var(--color-on-sail);
  box-shadow: 0 2px 10px rgba(5, 57, 73, 0.1);
}

.cta-secondary-btn:hover {
  background: var(--color-on-sail);
  color: var(--color-sail-light);
  border-color: var(--color-on-sail);
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(5, 57, 73, 0.25);
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
  background: rgba(255, 255, 255, 0.45);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(5, 57, 73, 0.2);
  color: var(--color-on-sail);
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  font-weight: 600;
}
</style>
