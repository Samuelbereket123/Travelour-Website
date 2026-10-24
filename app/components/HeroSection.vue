<template>
  <section id="hero" class="hero-container">
    <!-- Cinematic Background Image with Night Gradient -->
    <div class="hero-media-wrapper">
      <img
        src="/images/dubai_skyline_hero.jpg"
        alt="Dubai skyline at dusk with glowing city light trails"
        class="hero-media-bg"
        loading="eager"
        fetchpriority="high"
      />
      <div class="hero-gradient-overlay" aria-hidden="true"></div>
      <div class="hero-vignette" aria-hidden="true"></div>
      <!-- Ambient Gold Glow Orb -->
      <div class="ambient-glow-orb glow-top-left" aria-hidden="true"></div>
    </div>

    <!-- Hero Content -->
    <div class="shell hero-content">
      <div class="hero-text-block">
        <p class="eyebrow hero-eyebrow">
          The Dubai Gateway App · Trust & Know-How
        </p>

        <h1 class="hero-title">
          <span class="hero-title-line">Dubai's Everyday</span>
          <span class="hero-title-line gold-text-gradient">Gateway Super App.</span>
        </h1>

        <p class="hero-description">
          One trusted platform connecting verified businesses, verified talent, and practical know-how across Dubai. Built for visitors, new arrivals, residents, and employers.
        </p>

        <!-- CTA Row -->
        <div class="hero-cta-group">
          <NuxtLink to="/download" class="btn btn-primary btn-hero-primary">
            <span>Download App</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </NuxtLink>

          <NuxtLink to="/business" class="btn-link-gold">
            <span>Partner With Us</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </NuxtLink>

          <div class="free-badge-wrapper">
            <span class="verified-badge">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              100% Free for Consumers
            </span>
          </div>
        </div>

        <!-- The Six Verticals & Guide Pill Selector (Matching MELA hero card rails) -->
        <div class="hero-verticals-strip">
          <div class="verticals-scroll">
            <a
              v-for="vertical in verticals"
              :key="vertical.id"
              :href="`#vertical-${vertical.id}`"
              class="glass-pill vertical-pill"
            >
              <span class="pill-icon" :style="{ color: vertical.color }">
                <component :is="vertical.icon" />
              </span>
              <span class="pill-label">{{ vertical.name }}</span>
              <span class="pill-tag">{{ vertical.tag }}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { h } from 'vue'

const verticals = [
  {
    id: 'explore',
    name: 'Explore',
    tag: 'Attractions & Tours',
    color: '#F5C042',
    icon: () => h('svg', { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 2 }, [
      h('circle', { cx: 12, cy: 12, r: 10 }),
      h('polygon', { points: '16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76' })
    ])
  },
  {
    id: 'eat',
    name: 'Eat',
    tag: 'Menus & WhatsApp',
    color: '#F5C042',
    icon: () => h('svg', { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 2 }, [
      h('path', { d: 'M18 2l-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8' }),
      h('path', { d: 'M15 15l-7.7-7.7a4.2 4.2 0 0 0-6 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15z' }),
      h('line', { x1: 2, y1: 22, x2: 8.5, y2: 15.5 })
    ])
  },
  {
    id: 'stays',
    name: 'Stays',
    tag: 'Hotels & Rates',
    color: '#F5C042',
    icon: () => h('svg', { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 2 }, [
      h('path', { d: 'M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8' }),
      h('path', { d: 'M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4' }),
      h('line', { x1: 12, y1: 4, x2: 12, y2: 10 })
    ])
  },
  {
    id: 'health',
    name: 'Health',
    tag: 'Doctors Roster',
    color: '#10E7A2',
    icon: () => h('svg', { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 2 }, [
      h('path', { d: 'M22 12h-4l-3 9L9 3l-3 9H2' })
    ])
  },
  {
    id: 'education',
    name: 'Education',
    tag: 'Schools & Courses',
    color: '#F5C042',
    icon: () => h('svg', { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 2 }, [
      h('path', { d: 'M22 10v6M2 10l10-5 10 5-10 5z' }),
      h('path', { d: 'M6 12v5c3 3 9 3 12 0v-5' })
    ])
  },
  {
    id: 'talent',
    name: 'Talent',
    tag: 'Verified Profiles & Jobs',
    color: '#10E7A2',
    icon: () => h('svg', { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 2 }, [
      h('path', { d: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' }),
      h('circle', { cx: 9, cy: 7, r: 4 }),
      h('path', { d: 'M22 21v-2a4 4 0 0 0-3-3.87' }),
      h('path', { d: 'M16 3.13a4 4 0 0 1 0 7.75' })
    ])
  },
  {
    id: 'guide',
    name: 'Dubai Guide',
    tag: 'Tolls, Laws & Journeys',
    color: '#F5C042',
    icon: () => h('svg', { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 2 }, [
      h('path', { d: 'M4 19.5A2.5 2.5 0 0 1 6.5 17H20' }),
      h('path', { d: 'M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z' })
    ])
  }
]
</script>

<style scoped>
.hero-container {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: var(--color-surface);
  overflow: hidden;
  padding-top: calc(var(--nav-height) + 2rem);
  padding-bottom: 3.5rem;
}

@media (min-width: 768px) {
  .hero-container {
    padding-bottom: 5rem;
  }
}

/* Hero Media & Overlays */
.hero-media-wrapper {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero-media-bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 30%;
  transform: scale(1.03);
  animation: subtleZoom 25s ease-in-out infinite alternate;
}

@keyframes subtleZoom {
  0% { transform: scale(1.02); }
  100% { transform: scale(1.08); }
}

.hero-gradient-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, 
    rgba(0, 0, 0, 0.75) 0%, 
    rgba(0, 0, 0, 0.4) 35%, 
    rgba(0, 0, 0, 0.7) 70%, 
    #000000 100%
  );
}

.hero-vignette {
  position: absolute;
  inset: 0;
  box-shadow: inset 0 0 150px rgba(0, 0, 0, 0.8);
}

.glow-top-left {
  top: 15%;
  left: -10rem;
  width: 36rem;
  height: 36rem;
  background: radial-gradient(circle, rgba(245, 192, 66, 0.15) 0%, rgba(245, 192, 66, 0) 70%);
}

/* Hero Content */
.hero-content {
  position: relative;
  z-index: 10;
  width: 100%;
}

.hero-text-block {
  max-width: 58rem;
}

.hero-eyebrow {
  margin-bottom: 1.5rem;
}

.hero-title {
  font-family: var(--font-display);
  font-size: clamp(2.8rem, 7.5vw, 5.8rem);
  font-weight: 300;
  line-height: 0.95;
  letter-spacing: -0.035em;
  color: var(--color-foreground);
  margin-bottom: 1.75rem;
}

.hero-title-line {
  display: block;
}

.hero-description {
  font-size: clamp(1rem, 1.8vw, 1.25rem);
  line-height: 1.6;
  color: var(--color-muted-foreground);
  max-width: 44rem;
  margin-bottom: 2.5rem;
  font-weight: 400;
}

/* CTA Group */
.hero-cta-group {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 3.5rem;
}

.btn-hero-primary {
  padding: 1rem 2.25rem;
  font-size: 0.8rem;
}

.free-badge-wrapper {
  margin-left: 0.5rem;
}

/* Verticals Pill Strip */
.hero-verticals-strip {
  width: 100%;
  margin-top: 1rem;
}

.verticals-scroll {
  display: flex;
  gap: 0.85rem;
  overflow-x: auto;
  padding-bottom: 0.75rem;
  scrollbar-width: none;
}

.verticals-scroll::-webkit-scrollbar {
  display: none;
}

.vertical-pill {
  flex-shrink: 0;
  cursor: pointer;
  text-decoration: none;
  background: rgba(14, 17, 24, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.vertical-pill:hover {
  background: rgba(245, 192, 66, 0.1);
  border-color: rgba(245, 192, 66, 0.4);
}

.pill-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.pill-label {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: var(--color-foreground);
  font-weight: 600;
}

.pill-tag {
  font-family: var(--font-sans);
  font-size: 0.7rem;
  color: var(--color-muted-foreground);
  padding-left: 0.35rem;
  border-left: 1px solid rgba(255, 255, 255, 0.15);
}
</style>
