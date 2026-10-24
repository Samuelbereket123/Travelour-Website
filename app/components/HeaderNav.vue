<template>
  <header
    :class="[
      'fixed-header',
      { 'scrolled': isScrolled || mobileMenuOpen }
    ]"
    role="banner"
  >
    <div class="shell header-inner">
      <!-- Brand Link -->
      <NuxtLink to="/" class="brand-link" aria-label="Travelour Home">
        <div class="brand-symbol">
          <svg viewBox="0 0 36 36" fill="none" class="brand-icon">
            <path d="M18 3L4 12V24L18 33L32 24V12L18 3Z" stroke="#F5C042" stroke-width="2" stroke-linejoin="round"/>
            <path d="M18 9L9 15V21L18 27L27 21V15L18 9Z" fill="rgba(245, 192, 66, 0.15)" stroke="#F5C042" stroke-width="1.5"/>
            <circle cx="18" cy="18" r="3.5" fill="#F5C042"/>
          </svg>
        </div>
        <div class="brand-text-group">
          <span class="brand-name">TRAVELOUR</span>
          <span class="brand-tag">DUBAI GATEWAY</span>
        </div>
      </NuxtLink>

      <!-- Desktop Navigation: Streamlined 3 Core Links -->
      <nav class="desktop-nav" aria-label="Primary navigation">
        <NuxtLink
          to="/solutions"
          class="nav-link"
          :class="{ 'active': $route.path === '/solutions' }"
        >
          Six Verticals
        </NuxtLink>
        <a
          href="/#guide"
          class="nav-link"
        >
          Dubai Guide
        </a>
        <NuxtLink
          to="/business"
          class="nav-link"
          :class="{ 'active': $route.path === '/business' }"
        >
          For Businesses
        </NuxtLink>
      </nav>

      <!-- Action Buttons -->
      <div class="header-actions">
        <NuxtLink to="/download" class="btn btn-primary btn-header">
          <span>Download App</span>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </NuxtLink>

        <!-- Mobile Menu Toggle Button -->
        <button
          type="button"
          class="mobile-toggle-btn"
          :aria-expanded="mobileMenuOpen"
          aria-label="Toggle navigation menu"
          @click="toggleMobileMenu"
        >
          <svg v-if="!mobileMenuOpen" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="4" y1="6" x2="20" y2="6"></line>
            <line x1="4" y1="12" x2="20" y2="12"></line>
            <line x1="4" y1="18" x2="20" y2="18"></line>
          </svg>
          <svg v-else width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Drawer -->
    <div v-if="mobileMenuOpen" class="mobile-drawer">
      <div class="shell mobile-drawer-inner">
        <nav class="mobile-nav-links">
          <NuxtLink to="/solutions" class="mobile-nav-link" @click="closeMobileMenu">
            <span class="mono-num">01</span>
            <span>Six Verticals</span>
          </NuxtLink>
          <a href="/#guide" class="mobile-nav-link" @click="closeMobileMenu">
            <span class="mono-num">02</span>
            <span>The Dubai Guide</span>
          </a>
          <NuxtLink to="/business" class="mobile-nav-link" @click="closeMobileMenu">
            <span class="mono-num">03</span>
            <span>For Businesses</span>
          </NuxtLink>
        </nav>

        <div class="mobile-drawer-footer">
          <NuxtLink to="/download" class="btn btn-primary w-full" @click="closeMobileMenu">
            <span>Download Consumer App</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const mobileMenuOpen = ref(false)

const handleScroll = () => {
  if (typeof window !== 'undefined') {
    isScrolled.value = window.scrollY > 20
  }
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
  if (typeof document !== 'undefined') {
    document.body.style.overflow = mobileMenuOpen.value ? 'hidden' : ''
  }
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
  if (typeof document !== 'undefined') {
    document.body.style.overflow = ''
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.fixed-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: var(--nav-height);
  transition: all 0.35s cubic-bezier(0.2, 0.8, 0.2, 1);
  background: transparent;
}

.fixed-header.scrolled {
  background: rgba(0, 0, 0, 0.88);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.8);
}

.header-inner {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Brand Link */
.brand-link {
  display: flex;
  align-items: center;
  gap: 0.85rem;
}

.brand-symbol {
  width: 38px;
  height: 38px;
  border-radius: var(--radius-tile);
  border: 1px solid rgba(245, 192, 66, 0.3);
  background: rgba(245, 192, 66, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  flex-shrink: 0;
}

.brand-icon {
  width: 100%;
  height: 100%;
}

.brand-text-group {
  display: flex;
  flex-direction: column;
}

.brand-name {
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  color: var(--color-foreground);
  line-height: 1.1;
}

.brand-tag {
  font-family: var(--font-mono);
  font-size: 0.6rem;
  letter-spacing: 0.22em;
  color: var(--color-primary);
  text-transform: uppercase;
}

/* Desktop Nav */
.desktop-nav {
  display: none;
  align-items: center;
  gap: 2.5rem;
}

@media (min-width: 1024px) {
  .desktop-nav {
    display: flex;
  }
}

.nav-link {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--color-muted-foreground);
  position: relative;
  padding: 0.5rem 0;
}

.nav-link:hover,
.nav-link.active {
  color: var(--color-foreground);
}

.nav-link.active {
  color: var(--color-primary);
}

.nav-link::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background-color: var(--color-primary);
  transition: width 0.25s ease;
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
}

/* Header Actions */
.header-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.btn-header {
  padding: 0.7rem 1.4rem;
  font-size: 0.7rem;
}

.btn-ghost-header {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: var(--color-muted-foreground);
  padding: 0.6rem 1rem;
  border-radius: var(--radius-pill);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.2s ease;
}

.btn-ghost-header:hover {
  color: var(--color-foreground);
  border-color: rgba(255, 255, 255, 0.25);
  background: rgba(255, 255, 255, 0.04);
}

.d-none-sm {
  display: none;
}

@media (min-width: 768px) {
  .d-none-sm {
    display: inline-flex;
  }
}

/* Mobile Toggle */
.mobile-toggle-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: var(--radius-tile);
  border: 1px solid var(--color-line);
  color: var(--color-foreground);
  background: rgba(255, 255, 255, 0.04);
  transition: all 0.2s ease;
}

@media (min-width: 1024px) {
  .mobile-toggle-btn {
    display: none;
  }
}

.mobile-toggle-btn:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

/* Mobile Drawer */
.mobile-drawer {
  position: fixed;
  top: var(--nav-height);
  left: 0;
  right: 0;
  bottom: 0;
  height: calc(100vh - var(--nav-height));
  background: #000000;
  border-top: 1px solid var(--color-line);
  overflow-y: auto;
  padding-top: 2rem;
  padding-bottom: 3rem;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

.mobile-drawer-inner {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.mobile-nav-links {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.mobile-nav-link {
  display: flex;
  align-items: baseline;
  gap: 1.25rem;
  font-family: var(--font-display);
  font-size: 1.6rem;
  font-weight: 300;
  color: var(--color-foreground);
  padding-bottom: 0.75rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}

.mobile-nav-link:hover {
  color: var(--color-primary);
  padding-left: 0.5rem;
}

.mono-num {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  color: var(--color-primary);
}

.mobile-drawer-footer {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  margin-top: 2.5rem;
}

.w-full {
  width: 100%;
}
</style>
