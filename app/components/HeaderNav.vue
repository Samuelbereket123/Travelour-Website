<template>
  <header
    class="floating-header-wrapper"
    role="banner"
  >
    <!-- Floating Pill Island Navbar -->
    <div
      :class="[
        'floating-navbar',
        { 'is-scrolled': isScrolled },
        { 'menu-expanded': mobileMenuOpen }
      ]"
    >
      <!-- Left: White circular badge with clean Home icon -->
      <NuxtLink
        to="/"
        class="brand-badge"
        aria-label="Travelour Home"
        @click="closeAllMenus"
      >
        <svg
          class="home-icon"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2.2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path d="M3 10.5L12 3l9 7.5V20a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-5a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9.5z" />
        </svg>
      </NuxtLink>

      <!-- Center: Clean Desktop Navigation Links -->
      <nav class="desktop-nav-links" aria-label="Primary navigation">
        <NuxtLink
          to="/solutions"
          class="nav-item"
          :class="{ 'active': $route.path === '/solutions' }"
        >
          Solutions
        </NuxtLink>

        <NuxtLink
          to="/about"
          class="nav-item"
          :class="{ 'active': $route.path === '/about' }"
        >
          About
        </NuxtLink>

        <!-- Business & Talent Dropdown Island (Rock-solid Hover Shield) -->
        <div
          class="nav-dropdown-wrapper"
          :class="{ 'is-open': dropdownOpen }"
        >
          <button
            type="button"
            class="nav-item nav-item-dropdown"
            :class="{
              'active': $route.path === '/business' || $route.path === '/talent',
              'is-open': dropdownOpen
            }"
            aria-haspopup="true"
            :aria-expanded="dropdownOpen"
            @click="toggleDropdown"
          >
            <span>Business &amp; Talent</span>
            <svg
              class="chevron-icon"
              width="11"
              height="11"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>

          <!-- Minimalist Luxury Dropdown Menu -->
          <div
            class="nav-dropdown-panel"
            role="menu"
            aria-label="Business & Talent navigation"
          >
            <div class="nav-dropdown-inner">
              <NuxtLink
                to="/business"
                class="nav-drop-item"
                :class="{ 'active': $route.path === '/business' }"
                role="menuitem"
                @click="closeAllMenus"
              >
                <span>Business</span>
                <svg class="drop-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </NuxtLink>

              <div class="nav-drop-divider" aria-hidden="true"></div>

              <NuxtLink
                to="/talent"
                class="nav-drop-item"
                :class="{ 'active': $route.path === '/talent' }"
                role="menuitem"
                @click="closeAllMenus"
              >
                <span>Talent</span>
                <svg class="drop-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </NuxtLink>
            </div>
          </div>
        </div>

        <NuxtLink
          to="/contact"
          class="nav-item"
          :class="{ 'active': $route.path === '/contact' }"
        >
          Contact Us
        </NuxtLink>
      </nav>

      <!-- Right: Butter Pill CTA Button -->
      <NuxtLink
        to="/download"
        class="pill-cta-btn"
        aria-label="Download the App"
        @click="closeAllMenus"
      >
        <span>Download the App</span>
      </NuxtLink>

      <!-- Mobile Menu Toggle Button -->
      <button
        type="button"
        class="mobile-menu-trigger"
        :class="{ 'active': mobileMenuOpen }"
        :aria-expanded="mobileMenuOpen"
        aria-label="Toggle navigation menu"
        @click="toggleMobileMenu"
      >
        <span class="hamburger-bar top"></span>
        <span class="hamburger-bar bottom"></span>
      </button>
    </div>

    <!-- Mobile Dynamic Island Glass Dropdown -->
    <transition name="dropdown-slide">
      <div
        v-if="mobileMenuOpen"
        class="mobile-dropdown-container"
        @click.stop
      >
        <div class="mobile-dropdown-glass">
          <nav class="mobile-menu-list">
            <NuxtLink
              to="/"
              class="mobile-menu-item"
              :class="{ 'active': $route.path === '/' }"
              @click="closeMobileMenu"
            >
              <div class="item-icon-box">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                </svg>
              </div>
              <div class="item-text">
                <span class="item-title">Home</span>
              </div>
            </NuxtLink>

            <NuxtLink
              to="/solutions"
              class="mobile-menu-item"
              :class="{ 'active': $route.path === '/solutions' }"
              @click="closeMobileMenu"
            >
              <div class="item-icon-box">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </div>
              <div class="item-text">
                <span class="item-title">Solutions</span>
              </div>
            </NuxtLink>

            <NuxtLink
              to="/about"
              class="mobile-menu-item"
              :class="{ 'active': $route.path === '/about' }"
              @click="closeMobileMenu"
            >
              <div class="item-icon-box">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
              </div>
              <div class="item-text">
                <span class="item-title">About</span>
              </div>
            </NuxtLink>

            <NuxtLink
              to="/business"
              class="mobile-menu-item"
              :class="{ 'active': $route.path === '/business' }"
              @click="closeMobileMenu"
            >
              <div class="item-icon-box">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="12" y1="1" x2="12" y2="23"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <div class="item-text">
                <span class="item-title">Business</span>
              </div>
            </NuxtLink>

            <NuxtLink
              to="/talent"
              class="mobile-menu-item"
              :class="{ 'active': $route.path === '/talent' }"
              @click="closeMobileMenu"
            >
              <div class="item-icon-box gold">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                </svg>
              </div>
              <div class="item-text">
                <span class="item-title">Talent</span>
              </div>
            </NuxtLink>

            <a
              href="/#guide"
              class="mobile-menu-item"
              @click="closeMobileMenu"
            >
              <div class="item-icon-box">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                </svg>
              </div>
              <div class="item-text">
                <span class="item-title">Dubai Guide</span>
              </div>
            </a>

            <NuxtLink
              to="/contact"
              class="mobile-menu-item"
              :class="{ 'active': $route.path === '/contact' }"
              @click="closeMobileMenu"
            >
              <div class="item-icon-box">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div class="item-text">
                <span class="item-title">Contact Us</span>
              </div>
            </NuxtLink>
          </nav>

          <div class="mobile-dropdown-bottom">
            <NuxtLink
              to="/download"
              class="btn-full-cta"
              @click="closeMobileMenu"
            >
              <span>Download the App</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isScrolled = ref(false)
const mobileMenuOpen = ref(false)
const dropdownOpen = ref(false)

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value
}

const handleScroll = () => {
  if (typeof window !== 'undefined') {
    isScrolled.value = window.scrollY > 20
  }
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

const closeAllMenus = () => {
  closeMobileMenu()
  dropdownOpen.value = false
}

// Close dropdown or mobile menu on outside click
const handleGlobalClick = (event: MouseEvent) => {
  const target = event.target as HTMLElement
  if (mobileMenuOpen.value && !target.closest('.floating-header-wrapper')) {
    closeMobileMenu()
  }
  if (dropdownOpen.value && !target.closest('.nav-dropdown-wrapper')) {
    dropdownOpen.value = false
  }
}

// Close menus on ESC key
const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    if (dropdownOpen.value) dropdownOpen.value = false
    if (mobileMenuOpen.value) closeMobileMenu()
  }
}

// Automatically close menus when navigating
watch(() => route.fullPath, () => {
  closeAllMenus()
})

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  document.addEventListener('click', handleGlobalClick)
  document.addEventListener('keydown', handleKeyDown)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('click', handleGlobalClick)
  document.removeEventListener('keydown', handleKeyDown)
})
</script>

<style scoped>
.floating-header-wrapper {
  position: fixed;
  top: 1.25rem;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  z-index: 1000;
  pointer-events: none;
  padding: 0 1rem;
}

/* Floating Pill Navbar */
.floating-navbar {
  pointer-events: auto;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 5px 6px;
  background: rgba(5, 42, 53, 0.92);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(143, 233, 255, 0.22);
  border-radius: 9999px;
  box-shadow: 
    0 18px 38px -6px rgba(2, 24, 30, 0.72),
    0 4px 14px -2px rgba(2, 24, 30, 0.45),
    inset 0 1px 0 rgba(143, 233, 255, 0.15);
  transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
  max-width: 100%;
}

@media (min-width: 860px) {
  .floating-navbar {
    gap: 1.1rem;
  }
}

.floating-navbar.is-scrolled {
  background: rgba(4, 32, 40, 0.96);
  border-color: rgba(143, 233, 255, 0.28);
  box-shadow: 
    0 22px 44px -6px rgba(2, 24, 30, 0.85),
    0 6px 18px -2px rgba(2, 24, 30, 0.6),
    inset 0 1px 0 rgba(143, 233, 255, 0.2);
}

/* Left: White circular brand badge with Home icon */
.brand-badge {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #ffffff;
  color: #053949;
  flex-shrink: 0;
  text-decoration: none;
  transition: transform 0.22s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.2s ease, background-color 0.2s ease, color 0.2s ease;
  box-shadow: 0 2px 10px rgba(5, 42, 53, 0.25);
}

.brand-badge:hover {
  transform: scale(1.08);
  background: var(--color-butter);
  color: var(--color-ink);
  box-shadow: 0 4px 16px rgba(255, 216, 64, 0.4);
}

.brand-badge:active {
  transform: scale(0.96);
}

.home-icon {
  display: block;
  width: 19px;
  height: 19px;
}

/* Desktop Links */
.desktop-nav-links {
  display: none;
  align-items: center;
  gap: 0.2rem;
}

@media (min-width: 860px) {
  .desktop-nav-links {
    display: flex;
  }
}

.nav-item {
  font-family: var(--font-sans);
  font-size: 0.86rem;
  font-weight: 480;
  letter-spacing: -0.01em;
  color: #a1a1aa;
  padding: 0.45rem 0.9rem;
  border-radius: 9999px;
  transition: all 0.2s cubic-bezier(0.2, 0.8, 0.2, 1);
  position: relative;
  text-decoration: none;
  white-space: nowrap;
}

.nav-item:hover {
  color: #ffffff;
  background: rgba(255, 255, 255, 0.08);
}

.nav-item.active {
  color: var(--color-butter);
  background: rgba(255, 216, 64, 0.14);
  font-weight: 600;
}

/* Dropdown Wrapper & Unbreakable Safety Cushion */
.nav-dropdown-wrapper {
  position: relative;
  display: inline-flex;
  align-items: center;
}

/* Generous invisible bridge that prevents cursor departure while traversing to menu */
.nav-dropdown-wrapper::after {
  content: "";
  position: absolute;
  top: -4px;
  bottom: -130px;
  left: -40px;
  right: -40px;
  pointer-events: none;
  z-index: 1040;
}

.nav-dropdown-wrapper:hover::after,
.nav-dropdown-wrapper.is-open::after {
  pointer-events: auto;
}

.nav-item-dropdown {
  background: transparent;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
}

.chevron-icon {
  transition: transform 0.2s cubic-bezier(0.2, 0.8, 0.2, 1);
  opacity: 0.7;
}

.nav-dropdown-wrapper:hover .chevron-icon,
.nav-dropdown-wrapper.is-open .chevron-icon {
  opacity: 1;
  transform: rotate(180deg);
}

.nav-dropdown-wrapper:hover .nav-item-dropdown,
.nav-dropdown-wrapper.is-open .nav-item-dropdown {
  color: #ffffff;
  background: rgba(255, 255, 255, 0.08);
}

/* Minimalist Luxury Dropdown Panel */
.nav-dropdown-panel {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(-4px);
  padding-top: 10px;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.18s cubic-bezier(0.16, 1, 0.3, 1), transform 0.18s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.18s ease;
  z-index: 1050;
}

/* Native CSS hover & JS toggle - 100% glitch-free */
.nav-dropdown-wrapper:hover .nav-dropdown-panel,
.nav-dropdown-wrapper.is-open .nav-dropdown-panel {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
  transform: translateX(-50%) translateY(0);
}

/* Inner styled glass card */
.nav-dropdown-inner {
  min-width: 172px;
  background: rgba(4, 30, 38, 0.96);
  backdrop-filter: blur(28px) saturate(190%);
  -webkit-backdrop-filter: blur(28px) saturate(190%);
  border: 1px solid rgba(143, 233, 255, 0.2);
  border-radius: 1rem;
  box-shadow: 
    0 20px 40px -8px rgba(2, 20, 26, 0.85),
    0 6px 16px -2px rgba(2, 20, 26, 0.5),
    inset 0 1px 0 rgba(143, 233, 255, 0.16);
  padding: 0.35rem;
  display: flex;
  flex-direction: column;
}

.nav-drop-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.6rem 0.85rem;
  border-radius: 0.75rem;
  font-family: var(--font-sans);
  font-size: 0.86rem;
  font-weight: 500;
  color: #cbd5e1;
  text-decoration: none;
  transition: all 0.18s cubic-bezier(0.2, 0.8, 0.2, 1);
  letter-spacing: -0.01em;
}

.drop-arrow {
  opacity: 0.35;
  transform: translateX(-2px);
  transition: all 0.18s ease;
  color: var(--color-sail-light);
}

.nav-drop-item:hover {
  background: rgba(255, 255, 255, 0.08);
  color: #ffffff;
}

.nav-drop-item:hover .drop-arrow {
  opacity: 1;
  transform: translateX(1px);
  color: var(--color-butter);
}

.nav-drop-item.active {
  background: rgba(255, 216, 64, 0.12);
  color: var(--color-butter);
  font-weight: 600;
}

.nav-drop-item.active .drop-arrow {
  opacity: 1;
  color: var(--color-butter);
}

.nav-drop-divider {
  height: 1px;
  background: rgba(143, 233, 255, 0.1);
  margin: 0.2rem 0.4rem;
}

/* Butter Pill CTA Button */
.pill-cta-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  line-height: 1;
  background: var(--color-butter);
  color: var(--color-ink);
  border-radius: 9999px;
  font-family: var(--font-sans);
  font-size: 0.85rem;
  font-weight: 700;
  padding: 0 1.25rem;
  text-decoration: none;
  white-space: nowrap;
  letter-spacing: -0.01em;
  transition: all 0.2s cubic-bezier(0.2, 0.8, 0.2, 1);
  box-shadow: 0 2px 10px rgba(255, 216, 64, 0.35);
  flex-shrink: 0;
}

.pill-cta-btn:hover {
  background: var(--color-butter-hover);
  color: var(--color-ink);
  transform: translateY(-0.5px);
  box-shadow: 0 4px 16px rgba(255, 216, 64, 0.55);
}

.pill-cta-btn:active {
  transform: translateY(0) scale(0.98);
}

/* Mobile Toggle */
.mobile-menu-trigger {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #ffffff;
  cursor: pointer;
  transition: all 0.2s ease;
  flex-shrink: 0;
}

@media (min-width: 860px) {
  .mobile-menu-trigger {
    display: none;
  }
}

.mobile-menu-trigger:hover {
  background: rgba(255, 255, 255, 0.14);
  border-color: rgba(255, 255, 255, 0.25);
}

.hamburger-bar {
  display: block;
  width: 15px;
  height: 1.5px;
  background-color: #ffffff;
  border-radius: 2px;
  transition: transform 0.25s ease, opacity 0.25s ease;
}

.mobile-menu-trigger.active .hamburger-bar.top {
  transform: translateY(2.75px) rotate(45deg);
}

.mobile-menu-trigger.active .hamburger-bar.bottom {
  transform: translateY(-2.75px) rotate(-45deg);
}

/* Mobile Dropdown Container */
.mobile-dropdown-container {
  position: absolute;
  top: calc(100% + 0.65rem);
  left: 50%;
  transform: translateX(-50%);
  width: calc(100vw - 2rem);
  max-width: 400px;
  pointer-events: auto;
}

.mobile-dropdown-glass {
  background: rgba(5, 42, 53, 0.96);
  backdrop-filter: blur(28px) saturate(190%);
  -webkit-backdrop-filter: blur(28px) saturate(190%);
  border: 1px solid rgba(143, 233, 255, 0.22);
  border-radius: 1.5rem;
  box-shadow: 
    0 24px 48px -10px rgba(2, 24, 30, 0.85),
    0 8px 24px -4px rgba(2, 24, 30, 0.6),
    inset 0 1px 0 rgba(143, 233, 255, 0.18);
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.mobile-menu-list {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.mobile-menu-item {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  padding: 0.65rem 0.85rem;
  border-radius: 1rem;
  color: #e4e4e7;
  text-decoration: none;
  transition: all 0.2s ease;
}

.mobile-menu-item:hover {
  background: rgba(255, 255, 255, 0.08);
  color: #ffffff;
}

.mobile-menu-item.active {
  background: rgba(255, 216, 64, 0.14);
  color: var(--color-butter);
}

.mobile-menu-item.active .item-title {
  color: var(--color-butter);
  font-weight: 600;
}

.mobile-menu-item.active .item-icon-box {
  background: var(--color-butter);
  color: var(--color-ink);
}

.item-icon-box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 0.65rem;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: var(--color-primary);
  flex-shrink: 0;
}

.item-icon-box.gold {
  color: var(--color-butter);
}

.item-text {
  display: flex;
  flex-direction: column;
}

.item-title {
  font-family: var(--font-sans);
  font-size: 0.92rem;
  font-weight: 500;
  color: #ffffff;
  line-height: 1.2;
}

.mobile-dropdown-bottom {
  margin-top: 0.4rem;
  padding-top: 0.65rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.btn-full-cta {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 9999px;
  background: var(--color-butter);
  color: var(--color-ink);
  font-family: var(--font-sans);
  font-size: 0.85rem;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.2s ease;
  box-shadow: 0 4px 14px rgba(255, 216, 64, 0.35);
}

.btn-full-cta:hover {
  background: var(--color-butter-hover);
}

/* Transition Animations */
.dropdown-slide-enter-active,
.dropdown-slide-leave-active {
  transition: opacity 0.25s cubic-bezier(0.16, 1, 0.3, 1), transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.dropdown-slide-enter-from,
.dropdown-slide-leave-to {
  opacity: 0;
  transform: translate(-50%, -10px) scale(0.97);
}
</style>
