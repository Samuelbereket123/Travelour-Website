<template>
  <section id="hero" class="hero-container hero-sail">
    <!-- Clean Minimalist Hero Content on Pure Sail Gradient -->
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
// Clean Hero Section
</script>

<style scoped>
.hero-container {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--gradient-sail);
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
  color: var(--color-on-sail);
  font-weight: 700;
  letter-spacing: 0.24em;
}

.hero-eyebrow::before {
  background-color: var(--color-on-sail);
}

.hero-title {
  font-family: var(--font-display);
  font-size: clamp(2.8rem, 6.8vw, 5.6rem);
  font-weight: 300;
  line-height: 0.96;
  letter-spacing: -0.035em;
  color: var(--color-on-sail);
  margin-bottom: 1.75rem;
}

.hero-title-line {
  display: block;
  color: var(--color-on-sail);
}

.hero-title-accent {
  font-weight: 700;
  color: var(--color-on-sail);
}

.hero-description {
  font-size: clamp(1.05rem, 1.8vw, 1.25rem);
  line-height: 1.65;
  color: var(--color-on-sail);
  opacity: 0.92;
  max-width: 44rem;
  margin-bottom: 2.75rem;
  font-weight: 400;
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
  font-size: 0.84rem;
  background-color: var(--color-butter);
  color: var(--color-ink);
  font-weight: 700;
  box-shadow: 0 4px 18px rgba(5, 57, 73, 0.25);
  border: 1px solid rgba(5, 57, 73, 0.15);
}

.btn-hero-primary:hover {
  background-color: var(--color-butter-hover);
  color: var(--color-ink);
  box-shadow: 0 6px 24px rgba(5, 57, 73, 0.35);
  transform: translateY(-2px);
}

.btn-hero-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-family: var(--font-mono);
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  padding: 1.05rem 2.2rem;
  border-radius: var(--radius-pill);
  background: rgba(255, 255, 255, 0.35);
  color: var(--color-on-sail);
  border: 1.5px solid var(--color-on-sail);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  transition: all 0.25s cubic-bezier(0.2, 0.8, 0.2, 1);
  text-decoration: none;
  white-space: nowrap;
  box-shadow: 0 2px 10px rgba(5, 57, 73, 0.1);
}

.btn-hero-secondary:hover {
  background: var(--color-on-sail);
  color: var(--color-sail-light);
  border-color: var(--color-on-sail);
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(5, 57, 73, 0.25);
}
</style>
