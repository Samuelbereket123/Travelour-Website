<template>
  <section id="hero" class="hero-container">
    <!-- Night Dubai Skyline Background Layer -->
    <div class="hero-bg" aria-hidden="true">
      <img
        src="/images/pexels-maria-charizani-3542905-5577693.jpg"
        alt="Dubai Downtown skyline at night featuring Burj Khalifa"
        class="hero-bg-img"
      />
      <!-- Multi-gradient scrim for editorial readability and bottom fade -->
      <div class="hero-bg-overlay"></div>
    </div>

    <!-- Clean Minimalist Hero Content -->
    <div class="shell hero-content">
      <div class="hero-text-block">
        <p class="eyebrow hero-eyebrow">
          The Dubai Gateway App · Trust &amp; Know-How
        </p>

        <h1 class="hero-title">
          <span class="hero-title-line">Dubai's Everyday</span>
          <span class="hero-title-line hero-title-accent">Gateway Super App.</span>
        </h1>

        <p class="hero-description">
          One trusted platform connecting verified businesses, verified talent, and practical know-how across Dubai. Built for visitors, new arrivals, residents, and employers.
        </p>

        <!-- CTA Row -->
        <div class="hero-cta-group">
          <NuxtLink to="/download" class="btn btn-primary btn-hero-primary">
            <span>Get the App</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </NuxtLink>

          <NuxtLink to="/business" class="btn-hero-secondary">
            <span>Join Directory</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Dubai Night Skyline Hero Section
</script>

<style scoped>
.hero-container {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--color-background);
  overflow: hidden;
  padding-top: calc(var(--nav-height) + 3.5rem);
  padding-bottom: 4rem;
}

@media (min-width: 768px) {
  .hero-container {
    padding-top: calc(var(--nav-height) + 4rem);
    padding-bottom: 5rem;
  }
}

/* Background Image & Vignette Overlays */
.hero-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  overflow: hidden;
  pointer-events: none;
}

.hero-bg-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 32%;
  transform: scale(1.02);
  filter: brightness(0.92) contrast(1.06);
}

.hero-bg-overlay {
  position: absolute;
  inset: 0;
  /* Top blend, strong left text contrast mask, and bottom section transition */
  background:
    linear-gradient(180deg, rgba(4, 32, 40, 0.72) 0%, rgba(4, 32, 40, 0.15) 22%),
    linear-gradient(90deg, rgba(2, 18, 24, 0.92) 0%, rgba(2, 18, 24, 0.8) 42%, rgba(2, 18, 24, 0.45) 70%, rgba(2, 18, 24, 0.18) 100%),
    linear-gradient(0deg, var(--color-background) 0%, rgba(5, 42, 53, 0.8) 12%, transparent 35%);
}

@media (max-width: 768px) {
  .hero-bg-overlay {
    background:
      linear-gradient(180deg, rgba(4, 32, 40, 0.8) 0%, rgba(4, 32, 40, 0.45) 25%),
      linear-gradient(180deg, rgba(2, 18, 24, 0.82) 0%, rgba(2, 18, 24, 0.7) 60%, var(--color-background) 100%);
  }
}

/* Hero Content */
.hero-content {
  position: relative;
  z-index: 10;
  width: 100%;
}

.hero-text-block {
  max-width: 52rem;
}

.hero-eyebrow {
  margin-bottom: 1.5rem;
  color: var(--color-sail-light);
  font-weight: 700;
  letter-spacing: 0.14em;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.hero-eyebrow::before {
  background-color: var(--color-butter);
  box-shadow: 0 0 10px rgba(255, 216, 64, 0.6);
}

.hero-title {
  font-family: var(--font-display);
  font-size: clamp(2.8rem, 6.8vw, 5.6rem);
  font-weight: 300;
  line-height: 0.96;
  letter-spacing: -0.035em;
  color: #ffffff;
  margin-bottom: 1.75rem;
  text-shadow: 0 4px 24px rgba(0, 0, 0, 0.4);
}

.hero-title-line {
  display: block;
  color: #ffffff;
}

.hero-title-accent {
  font-weight: 700;
  color: var(--color-butter);
  text-shadow: 0 4px 30px rgba(255, 216, 64, 0.35);
}

.hero-description {
  font-size: clamp(1.05rem, 1.8vw, 1.25rem);
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.9);
  max-width: 44rem;
  margin-bottom: 2.75rem;
  font-weight: 400;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}

/* CTA Group */
.hero-cta-group {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.25rem;
}

.btn-hero-primary {
  padding: 1.05rem 2.4rem;
  font-family: var(--font-sans);
  font-size: 0.92rem;
  text-transform: none;
  letter-spacing: 0.01em;
  background-color: var(--color-butter);
  color: var(--color-ink);
  font-weight: 700;
  box-shadow: 0 4px 20px rgba(255, 216, 64, 0.35);
  border: 1px solid var(--color-butter-hover);
}

.btn-hero-primary:hover {
  background-color: var(--color-butter-hover);
  color: var(--color-ink);
  box-shadow: 0 6px 28px rgba(255, 216, 64, 0.55);
  transform: translateY(-2px);
}

.btn-hero-secondary {
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

.btn-hero-secondary:hover {
  background: rgba(255, 255, 255, 0.25);
  color: #ffffff;
  border-color: rgba(255, 255, 255, 0.6);
  transform: translateY(-2px);
  box-shadow: 0 6px 22px rgba(0, 0, 0, 0.4);
}
</style>
