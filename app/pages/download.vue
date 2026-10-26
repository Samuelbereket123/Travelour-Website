<template>
  <div class="page-download">
    <section class="download-hero section-spacing hero-sail">
      <div class="shell download-shell">
        <p class="eyebrow">
          GET THE TRAVELOUR MOBILE APP
        </p>
        <h1 class="download-title font-display">
          Your Dubai gateway<br />
          <span class="download-title-accent">in your pocket.</span>
        </h1>
        <p class="download-subtitle font-sans">
          One Expo app available natively on iOS, Android, and the web. Free for consumers forever. Zero advertisements, zero spam, and instant direct connection.
        </p>

        <!-- Download Cards Grid -->
        <div class="download-platforms-grid">
          <!-- iOS -->
          <div class="download-card glass-panel glass-edge">
            <div class="platform-icon">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.84c.61-.75 1.04-1.8 1.01-2.84-.96.04-2.09.64-2.73 1.39-.56.64-1.05 1.7-1.01 2.74 1.07.08 2.12-.54 2.73-1.29z"/>
              </svg>
            </div>
            <h3 class="platform-name font-display">Apple iOS</h3>
            <p class="platform-req font-sans">REQUIRES iOS 16.0 OR LATER</p>
            <p class="platform-desc font-sans">
              Optimized for iPhone with Apple Pay for Talent checkout and native push alerts for live geofenced passes.
            </p>
            <a href="#" class="btn btn-primary w-full" @click.prevent="showToast('App Store build link will be linked on store launch')">
              <span>App Store</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>
          </div>

          <!-- Android -->
          <div class="download-card glass-panel glass-edge">
            <div class="platform-icon">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.793 12 3.61 22.186a2.023 2.023 0 0 1-.22-.303V2.117c.07-.11.144-.212.22-.303zm11.39 11.39l2.766 2.766-12.38 7.073 9.614-9.839zm2.766-2.766l-2.766 2.766-9.614-9.84 12.38 7.074zm1.187 1.187l3.66 2.09c.87.497.87 1.31 0 1.808l-3.66 2.09-2.22-2.22 2.22-2.22z"/>
              </svg>
            </div>
            <h3 class="platform-name font-display">Google Play</h3>
            <p class="platform-req font-sans">REQUIRES ANDROID 10.0 OR LATER</p>
            <p class="platform-desc font-sans">
              Fast, battery-optimized foreground location checks ensuring zero unnecessary background drain.
            </p>
            <a href="#" class="btn btn-primary w-full" @click.prevent="showToast('Google Play build will be linked on store launch')">
              <span>Google Play</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>
          </div>

          <!-- Web PWA -->
          <div class="download-card glass-panel glass-edge">
            <div class="platform-icon">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </div>
            <h3 class="platform-name font-display">Instant Web App</h3>
            <p class="platform-req font-sans">RUNS ON ANY MODERN BROWSER</p>
            <p class="platform-desc font-sans">
              Instant web access without installing an app file. Perfect for tourists booking from desktop or hotel Wi-Fi.
            </p>
            <a href="#" class="btn btn-secondary w-full" @click.prevent="showToast('Opening progressive web portal')">
              <span>Launch Web App</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>
          </div>
        </div>

        <div v-if="toastMessage" class="toast-popup font-sans">
          {{ toastMessage }}
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

useHead({
  title: 'Download App | Travelour Dubai Gateway',
  meta: [
    {
      name: 'description',
      content: 'Download the Travelour app on iOS, Android, and web. Free for consumers with direct WhatsApp access and verified Dubai directory.'
    }
  ]
})

const toastMessage = ref('')

const showToast = (msg: string) => {
  toastMessage.value = msg
  setTimeout(() => {
    toastMessage.value = ''
  }, 4000)
}
</script>

<style scoped>
.page-download {
  padding-top: var(--nav-height);
  background-color: var(--color-background);
  min-height: 80vh;
}

.download-hero {
  padding-top: 5rem;
  padding-bottom: 6rem;
  border-bottom: 1px solid rgba(143, 233, 255, 0.16);
}

.download-shell {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.download-title {
  font-size: clamp(2.5rem, 6vw, 4.6rem);
  font-weight: 300;
  line-height: 1.05;
  color: #ffffff;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  letter-spacing: -0.03em;
  max-width: 50rem;
  text-shadow: 0 4px 24px rgba(0, 0, 0, 0.4);
}

.download-title-accent {
  font-weight: 700;
  color: var(--color-butter);
  text-shadow: 0 4px 30px rgba(255, 216, 64, 0.35);
}

.download-subtitle {
  font-size: 1.15rem;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.9);
  max-width: 44rem;
  margin-bottom: 3.5rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}

.download-platforms-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  width: 100%;
  max-width: 64rem;
}

@media (min-width: 768px) {
  .download-platforms-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.download-card {
  padding: 3rem 2rem;
  border-radius: var(--radius-card);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: rgba(255, 255, 255, 0.45);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(5, 57, 73, 0.2);
  box-shadow: 0 10px 30px rgba(5, 57, 73, 0.12);
  transition: all 0.3s ease;
}

.download-card:hover {
  background: rgba(255, 255, 255, 0.65);
  border-color: var(--color-on-sail);
  transform: translateY(-3px);
}

.platform-icon {
  margin-bottom: 1.25rem;
  color: var(--color-on-sail);
}

.platform-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-on-sail);
  margin-bottom: 0.35rem;
}

.platform-req {
  font-size: 0.65rem;
  letter-spacing: 0.15em;
  color: var(--color-on-sail);
  opacity: 0.85;
  font-weight: 700;
  margin-bottom: 1.25rem;
}

.platform-desc {
  font-size: 0.88rem;
  line-height: 1.6;
  color: var(--color-on-sail);
  opacity: 0.92;
  margin-bottom: 2rem;
  flex: 1;
}

.w-full {
  width: 100%;
}

.toast-popup {
  position: fixed;
  bottom: 2rem;
  background: var(--color-primary);
  color: #000;
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius-pill);
  font-size: 0.8rem;
  font-weight: 600;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.8);
  z-index: 100;
  animation: slideUp 0.3s ease;
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
