<template>
  <section id="app-showcase" class="app-section section-spacing">
    <div class="shell">
      <div class="app-header">
        <p class="eyebrow">
          The Consumer Experience · iOS, Android & Web
        </p>
        <h2 class="app-main-title font-display">
          Engineered for Dubai.<br />
          <span class="gold-text-gradient">Five tabs. Zero friction.</span>
        </h2>
        <p class="app-subtitle font-sans">
          One unified Expo app that connects you directly to verified venues and verified professionals. No middleman fees, no scraped spam, and instant WhatsApp or call access.
        </p>
      </div>

      <div class="showcase-split-layout">
        <!-- Interactive Controls (Left / Top on mobile) -->
        <div class="controls-column">
          <!-- View Switcher (5 Tabs vs Listing Detail) -->
          <div class="view-mode-toggle glass-panel">
            <button
              type="button"
              class="view-mode-btn"
              :class="{ 'active': activeViewMode === 'tabs' }"
              @click="activeViewMode = 'tabs'"
            >
              <span>5 Core Tabs</span>
            </button>
            <button
              type="button"
              class="view-mode-btn"
              :class="{ 'active': activeViewMode === 'listing' }"
              @click="activeViewMode = 'listing'"
            >
              <span>Verified Listing Detail</span>
              <span class="view-tag-gold font-mono">LIVE PREVIEW</span>
            </button>
          </div>

          <!-- When in Tabs Mode -->
          <div v-if="activeViewMode === 'tabs'" class="tabs-feature-list">
            <div
              v-for="(tab, i) in appTabs"
              :key="tab.name"
              class="tab-feature-card glass-panel"
              :class="{ 'selected': currentAppTab === i }"
              @click="currentAppTab = i"
            >
              <div class="tab-card-header">
                <span class="tab-number font-mono">0{{ i + 1 }}</span>
                <h4 class="tab-name font-display">{{ tab.name }} Tab</h4>
                <span v-if="currentAppTab === i" class="tab-indicator-dot"></span>
              </div>
              <p class="tab-summary font-sans">{{ tab.description }}</p>
              <div class="tab-elements font-mono">
                <span v-for="elem in tab.elements" :key="elem" class="elem-chip">
                  {{ elem }}
                </span>
              </div>
            </div>
          </div>

          <!-- When in Listing Detail Mode -->
          <div v-else class="listing-feature-panel glass-panel">
            <div class="listing-info-badge-row">
              <p class="eyebrow">KYC Signed Business · Demand Tracked</p>
            </div>

            <h3 class="listing-heading font-display">Rich Detail Pages Built for Direct Action</h3>
            <p class="listing-text font-sans">
              Unlike generic directory pages, every Travelour listing carries verified data specific to that industry, backed by human editorial notes:
            </p>

            <ul class="listing-points-list font-sans">
              <li>
                <strong>Labelled Photo Sections</strong> with high-res full-screen inspection.
              </li>
              <li>
                <strong>Tiered Facts</strong> structured as <em>"Essentials"</em>, <em>"Stand Out"</em>, and <em>"Good to Know"</em>.
              </li>
              <li>
                <strong>Vertical Custom Block</strong>: printed-style menus (Eat), room rates (Stays), doctors roster (Health), course prospectuses (Education), or store maps (Explore).
              </li>
              <li>
                <strong>Direct Contact Bar</strong>: WhatsApp, direct telephone call, structured enquiry, or navigation directions.
              </li>
            </ul>

            <div class="demand-note glass-panel">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-butter)" stroke-width="2">
                <line x1="18" y1="20" x2="18" y2="10"></line>
                <line x1="12" y1="20" x2="12" y2="4"></line>
                <line x1="6" y1="20" x2="6" y2="14"></line>
              </svg>
              <span class="demand-text font-sans">
                Every tap on WhatsApp, Call, or Enquire is logged in real-time to the merchant's demand dashboard.
              </span>
            </div>
          </div>
        </div>

        <!-- Interactive Phone Mockup (Right) -->
        <div class="mockup-column">
          <div class="phone-mockup-frame">
            <!-- iPhone Notch / Island -->
            <div class="phone-island">
              <div class="camera-lens"></div>
            </div>

            <!-- Phone Screen View -->
            <div class="phone-mockup-screen">
              <!-- If viewing Tabs -->
              <div v-if="activeViewMode === 'tabs'" class="phone-screen-tabs">
                <!-- Status bar -->
                <div class="mock-status-bar font-mono">
                  <span>9:41</span>
                  <span>5G · 100%</span>
                </div>

                <!-- Tab 1: Home -->
                <div v-if="currentAppTab === 0" class="tab-screen-body">
                  <div class="mock-hero">
                    <span class="mock-tag font-mono">DUBAI GATEWAY</span>
                    <h5 class="mock-title font-display">Welcome to Dubai</h5>
                    <div class="mock-search-bar">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a0a6b5" stroke-width="2">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      </svg>
                      <span>Search 6 verticals, guide, jobs...</span>
                    </div>
                  </div>

                  <!-- 3x2 Verticals Grid -->
                  <div class="mock-section-title font-mono">EXPLORE VERTICALS</div>
                  <div class="mock-verticals-grid">
                    <div class="mock-grid-btn">
                      <span class="grid-num font-mono">01</span>
                      <span>Explore</span>
                    </div>
                    <div class="mock-grid-btn">
                      <span class="grid-num font-mono">02</span>
                      <span>Eat</span>
                    </div>
                    <div class="mock-grid-btn">
                      <span class="grid-num font-mono">03</span>
                      <span>Stays</span>
                    </div>
                    <div class="mock-grid-btn">
                      <span class="grid-num font-mono">04</span>
                      <span>Health</span>
                    </div>
                    <div class="mock-grid-btn">
                      <span class="grid-num font-mono">05</span>
                      <span>Education</span>
                    </div>
                    <div class="mock-grid-btn">
                      <span class="grid-num font-mono">06</span>
                      <span>Talent</span>
                    </div>
                  </div>

                  <!-- Popular Rail -->
                  <div class="mock-section-title font-mono">POPULAR VERIFIED</div>
                  <div class="mock-horizontal-cards">
                    <div class="mock-h-card">
                      <div class="h-card-badge font-mono">VERIFIED</div>
                      <div class="h-card-name">Zuma Dubai</div>
                      <div class="h-card-sub">DIFC · Japanese Dining</div>
                    </div>
                    <div class="mock-h-card">
                      <div class="h-card-badge font-mono">HOTEL</div>
                      <div class="h-card-name">The Lana</div>
                      <div class="h-card-sub">Marasi Bay Marina</div>
                    </div>
                  </div>
                </div>

                <!-- Tab 2: Guide -->
                <div v-else-if="currentAppTab === 1" class="tab-screen-body">
                  <div class="mock-header-pill">
                    <span class="font-mono text-gold text-xs">DUBAI HANDBOOK</span>
                  </div>
                  <div class="guide-subject-chips">
                    <span class="active">Emergency</span>
                    <span>Salik Tolls</span>
                    <span>Culture</span>
                    <span>Settling In</span>
                  </div>
                  <div class="mock-card-list">
                    <div class="mock-guide-card">
                      <div class="guide-badge font-mono">CRITICAL</div>
                      <div class="guide-title font-display">Emergency Response 999 & 998</div>
                      <div class="guide-excerpt">Instant GPS dispatch protocols across Dubai.</div>
                    </div>
                    <div class="mock-guide-card">
                      <div class="guide-badge font-mono">DRIVING</div>
                      <div class="guide-title font-display">Salik RFID & SMS Parking</div>
                      <div class="guide-excerpt">Gate fee breakdown and 7275 SMS parking codes.</div>
                    </div>
                  </div>
                </div>

                <!-- Tab 3: Offers -->
                <div v-else-if="currentAppTab === 2" class="tab-screen-body">
                  <div class="mock-header-pill">
                    <span class="font-mono text-emerald text-xs">GEOFENCED PASSES</span>
                  </div>
                  <div class="mock-offer-pass glass-edge">
                    <div class="pass-tag font-mono">SHOW AT VENUE · NO CODES</div>
                    <div class="pass-venue">CÉ LA VI Dubai</div>
                    <div class="pass-benefit">Complimentary Chef's Dessert with Dinner</div>
                    <div class="pass-status font-mono"><span class="pulse-emerald-dot"></span>PASS ACTIVE NOW</div>
                  </div>
                  <div class="mock-offer-pass">
                    <div class="pass-tag font-mono">MEMBER BENEFIT</div>
                    <div class="pass-venue">Talise Spa Madinat</div>
                    <div class="pass-benefit">20% Weekday Hydrotherapy Experience</div>
                    <div class="pass-status font-mono">AVAILABLE 10AM - 6PM</div>
                  </div>
                </div>

                <!-- Tab 4: Saved -->
                <div v-else-if="currentAppTab === 3" class="tab-screen-body">
                  <div class="mock-header-pill">
                    <span class="font-mono text-gold text-xs">DEVICE SAVED PLACES</span>
                  </div>
                  <div class="saved-item-row">
                    <div class="saved-title">Alserkal Avenue Galleries</div>
                    <div class="saved-tag font-mono">Explore · Al Quoz</div>
                  </div>
                  <div class="saved-item-row">
                    <div class="saved-title">Dr. Sophia Al-Khatib</div>
                    <div class="saved-tag font-mono">Health · Cardiology DHA</div>
                  </div>
                  <div class="saved-item-row">
                    <div class="saved-title">Nord Anglia International</div>
                    <div class="saved-tag font-mono">Education · Al Barsha</div>
                  </div>
                </div>

                <!-- Tab 5: Profile & Talent -->
                <div v-else-if="currentAppTab === 4" class="tab-screen-body">
                  <div class="profile-avatar-wrap">
                    <div class="profile-avatar">MA</div>
                    <div class="profile-name font-display">Mohammed Al Maktoum</div>
                    <div class="profile-role font-mono">RESIDENT · TALENT MEMBER</div>
                  </div>
                  <div class="profile-actions-list font-mono">
                    <div class="profile-row"><span>Verified Talent Profile</span><span class="talent-active-tag">ACTIVE</span></div>
                    <div class="profile-row"><span>Moderated Jobs Feed</span><span>14 New</span></div>
                    <div class="profile-row"><span>App Settings</span><span>→</span></div>
                  </div>
                </div>

                <!-- Bottom 5 Tab Bar with Vector SVG Icons -->
                <div class="phone-bottom-nav">
                  <div class="nav-tab-item" :class="{ 'active': currentAppTab === 0 }" @click="currentAppTab = 0">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                    <span>Home</span>
                  </div>
                  <div class="nav-tab-item" :class="{ 'active': currentAppTab === 1 }" @click="currentAppTab = 1">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                    <span>Guide</span>
                  </div>
                  <div class="nav-tab-item" :class="{ 'active': currentAppTab === 2 }" @click="currentAppTab = 2">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m20.59 13.41-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>
                    <span>Offers</span>
                  </div>
                  <div class="nav-tab-item" :class="{ 'active': currentAppTab === 3 }" @click="currentAppTab = 3">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m19 21-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
                    <span>Saved</span>
                  </div>
                  <div class="nav-tab-item" :class="{ 'active': currentAppTab === 4 }" @click="currentAppTab = 4">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    <span>Profile</span>
                  </div>
                </div>
              </div>

              <!-- If viewing Listing Detail View -->
              <div v-else class="phone-screen-listing">
                <div class="mock-status-bar font-mono">
                  <span>9:41</span>
                  <span>5G · 100%</span>
                </div>

                <!-- Listing Media Header -->
                <div class="listing-mock-hero">
                  <img src="/images/vertical_eat.jpg" alt="Restaurant detail" class="listing-mock-img" />
                </div>

                <div class="listing-mock-body">
                  <h4 class="detail-title font-display">L'Ami Dave Dubai</h4>
                  <p class="detail-category font-mono">EAT · FRENCH FINE DINING · DOWNTOWN</p>

                  <!-- Editorial Verdict -->
                  <div class="verdict-card glass-panel">
                    <span class="verdict-label font-mono">EDITORIAL VERDICT</span>
                    <p class="verdict-quote font-sans">
                      "Exceptional classic French cuisine overlooking the Dubai Opera. Quiet, intimate, and consistently brilliant."
                    </p>
                  </div>

                  <!-- Tiered Facts -->
                  <div class="tiered-facts-block font-sans">
                    <div class="fact-row">
                      <span class="fact-label font-mono">ESSENTIALS</span>
                      <span class="fact-val">Daily 12:00 PM to 11:30 PM · Valet Available</span>
                    </div>
                    <div class="fact-row">
                      <span class="fact-label font-mono">STAND OUT</span>
                      <span class="fact-val">Private dining room for 14 · Sommelier pairing</span>
                    </div>
                    <div class="fact-row">
                      <span class="fact-label font-mono">GOOD TO KNOW</span>
                      <span class="fact-val">Smart elegant dress code · Advance booking advised</span>
                    </div>
                  </div>

                  <!-- Sticky Action Bar -->
                  <div class="mock-contact-bar">
                    <button type="button" class="action-btn-whatsapp font-mono">
                      <span>WhatsApp</span>
                    </button>
                    <button type="button" class="action-btn-call font-mono">
                      <span>Call</span>
                    </button>
                    <button type="button" class="action-btn-enquire font-mono">
                      <span>Enquire</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeViewMode = ref<'tabs' | 'listing'>('tabs')
const currentAppTab = ref(0)

const appTabs = [
  {
    name: 'Home',
    description: 'A photo hero, intelligent search pill across 6 verticals and jobs, 3x2 directory grid, live offers carousel, and Popular & Near You rails.',
    elements: ['Hero Search', '3x2 Verticals Grid', 'Live Offers Carousel', 'Near You Geofence']
  },
  {
    name: 'Guide',
    description: 'The Dubai Handbook. Subject cards for emergency, driving/tolls, culture and residency, city updates, neighbourhood guides, and curated arrival journeys.',
    elements: ['Emergency 999/998', 'Salik & Tolls', 'Culture & Laws', '48h Journeys']
  },
  {
    name: 'Offers',
    description: 'Live offers from member businesses. Users show the pass at the venue with zero coupon codes required. A single foreground check triggers at most one local alert a day.',
    elements: ['Zero Codes', 'Geofenced Alert', 'Digital Pass', 'Exclusive Perks']
  },
  {
    name: 'Saved',
    description: 'Places, journeys, and verified contacts the user bookmarked. Kept securely on device for instant offline access in Dubai.',
    elements: ['Offline Access', 'Local Storage', 'Custom Itinerary', 'Zero Tracking']
  },
  {
    name: 'Profile & Talent',
    description: 'User account, confirmed reservations, and direct entry to the Talent Hub for verified professionals and Dubai job seekers.',
    elements: ['Account Security', 'Talent Directory Hub', 'Job Applications', 'KYC Status']
  }
]
</script>

<style scoped>
.app-section {
  background-color: var(--color-surface);
  border-top: 1px solid var(--color-line);
}

.app-header {
  max-width: 52rem;
  margin-bottom: 3.5rem;
}

.app-main-title {
  font-size: clamp(2.2rem, 4.5vw, 3.6rem);
  font-weight: 300;
  line-height: 1.1;
  color: var(--color-foreground);
  margin-top: 1rem;
  margin-bottom: 1.25rem;
  letter-spacing: -0.03em;
}

.app-subtitle {
  font-size: 1.05rem;
  line-height: 1.65;
  color: var(--color-muted-foreground);
}

/* Split layout */
.showcase-split-layout {
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  align-items: center;
}

@media (min-width: 1024px) {
  .showcase-split-layout {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    gap: 4rem;
  }
}

.controls-column {
  width: 100%;
}

@media (min-width: 1024px) {
  .controls-column {
    width: 55%;
  }
}

.mockup-column {
  width: 100%;
  display: flex;
  justify-content: center;
}

@media (min-width: 1024px) {
  .mockup-column {
    width: 42%;
    position: sticky;
    top: calc(var(--nav-height) + 1.5rem);
  }
}

/* View Mode Switcher */
.view-mode-toggle {
  display: flex;
  padding: 0.35rem;
  border-radius: var(--radius-pill);
  gap: 0.5rem;
  margin-bottom: 2rem;
  width: fit-content;
}

.view-mode-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.65rem 1.4rem;
  border-radius: var(--radius-pill);
  font-family: var(--font-mono);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--color-muted-foreground);
  transition: all 0.2s ease;
}

.view-mode-btn.active {
  background: var(--color-primary);
  color: var(--color-primary-foreground);
  font-weight: 600;
  box-shadow: 0 0 20px rgba(245, 192, 66, 0.3);
}

.view-tag-gold {
  font-size: 0.6rem;
  padding: 0.15rem 0.4rem;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.2);
  color: #000;
}

/* Tabs list */
.tabs-feature-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.tab-feature-card {
  padding: 1.5rem;
  border-radius: var(--radius-card);
  cursor: pointer;
  transition: all 0.25s ease;
}

.tab-feature-card:hover {
  background: rgba(255, 255, 255, 0.07);
  transform: translateX(4px);
}

.tab-feature-card.selected {
  border-color: var(--color-primary);
  background: rgba(245, 192, 66, 0.06);
  box-shadow: inset 0 0 0 1px var(--color-primary);
}

.tab-card-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
}

.tab-number {
  font-size: 0.75rem;
  color: var(--color-primary);
}

.tab-name {
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--color-foreground);
}

.tab-indicator-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-primary);
  box-shadow: 0 0 10px var(--color-primary);
  margin-left: auto;
}

.tab-summary {
  font-size: 0.88rem;
  line-height: 1.6;
  color: var(--color-muted-foreground);
  margin-bottom: 0.85rem;
}

.tab-elements {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.elem-chip {
  font-size: 0.68rem;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.05);
  color: var(--color-muted-foreground);
}

/* Listing Feature Panel */
.listing-feature-panel {
  padding: 2.5rem;
  border-radius: var(--radius-card);
}

.listing-info-badge-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}

.text-gold {
  color: var(--color-primary);
  letter-spacing: 0.15em;
}

.text-emerald {
  color: var(--color-emerald);
}

.listing-heading {
  font-size: 1.6rem;
  font-weight: 400;
  color: var(--color-foreground);
  margin-bottom: 1rem;
}

.listing-text {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--color-muted-foreground);
  margin-bottom: 1.5rem;
}

.listing-points-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.listing-points-list li {
  position: relative;
  padding-left: 1.5rem;
  font-size: 0.88rem;
  line-height: 1.55;
  color: var(--color-muted-foreground);
}

.listing-points-list li::before {
  content: "→";
  position: absolute;
  left: 0;
  color: var(--color-primary);
  font-weight: bold;
}

.listing-points-list li strong {
  color: var(--color-foreground);
}

.demand-note {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.25rem;
  border-radius: var(--radius-tile);
  border: 1px solid rgba(245, 192, 66, 0.25);
  background: rgba(245, 192, 66, 0.04);
}

.demand-text {
  font-size: 0.82rem;
  color: var(--color-primary);
  line-height: 1.45;
}

/* Phone Mockup Frame Inside */
.phone-island {
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #062b36;
  position: relative;
  z-index: 20;
}

.camera-lens {
  width: 75px;
  height: 14px;
  background: #042028;
  border-radius: 10px;
}

.mock-status-bar {
  display: flex;
  justify-content: space-between;
  padding: 0.4rem 1rem;
  font-size: 0.65rem;
  color: #a0a6b5;
}

.tab-screen-body {
  padding: 0.85rem 1rem;
  flex: 1;
}

.mock-hero {
  background: linear-gradient(180deg, rgba(245, 192, 66, 0.15) 0%, rgba(0, 0, 0, 0.4) 100%);
  border: 1px solid rgba(245, 192, 66, 0.2);
  border-radius: var(--radius-tile);
  padding: 1.2rem 1rem;
  margin-bottom: 1rem;
}

.mock-tag {
  font-size: 0.6rem;
  letter-spacing: 0.2em;
  color: var(--color-primary);
}

.mock-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0.35rem 0 0.85rem;
}

.mock-search-bar {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0.5rem 0.75rem;
  border-radius: var(--radius-pill);
  font-size: 0.7rem;
  color: #707788;
}

.mock-section-title {
  font-size: 0.65rem;
  letter-spacing: 0.18em;
  color: #707788;
  margin: 1rem 0 0.5rem;
}

.mock-verticals-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.4rem;
}

.mock-grid-btn {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 0.55rem 0.25rem;
  border-radius: 8px;
  text-align: center;
  font-size: 0.68rem;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
}

.grid-num {
  font-size: 0.55rem;
  color: var(--color-primary);
  letter-spacing: 0.1em;
}

.talent-active-tag {
  font-size: 0.65rem;
  padding: 0.15rem 0.45rem;
  border-radius: 4px;
  background: rgba(16, 231, 162, 0.12);
  color: var(--color-emerald);
  border: 1px solid rgba(16, 231, 162, 0.3);
  letter-spacing: 0.1em;
}

.mock-horizontal-cards {
  display: flex;
  gap: 0.5rem;
}

.mock-h-card {
  flex: 1;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  padding: 0.75rem;
}

.h-card-badge {
  font-size: 0.55rem;
  color: var(--color-emerald);
}

.h-card-name {
  font-size: 0.82rem;
  font-weight: 600;
  margin: 0.2rem 0;
}

.h-card-sub {
  font-size: 0.62rem;
  color: #707788;
}

/* Phone bottom nav */
.phone-bottom-nav {
  display: flex;
  justify-content: space-around;
  border-top: 1px solid rgba(143, 233, 255, 0.12);
  background: #062b36;
  padding: 0.5rem 0;
  font-family: var(--font-mono);
  font-size: 0.6rem;
}

.nav-tab-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.15rem;
  color: #707788;
  cursor: pointer;
}

.nav-tab-item.active {
  color: var(--color-primary);
}

.nav-icon {
  font-size: 0.9rem;
}

/* Listing View inside Mockup */
.phone-screen-listing {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.listing-mock-hero {
  position: relative;
  width: 100%;
  height: 170px;
}

.listing-mock-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.listing-mock-overlay {
  position: absolute;
  top: 10px;
  left: 10px;
}

.listing-mock-body {
  padding: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.detail-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.detail-category {
  font-size: 0.62rem;
  letter-spacing: 0.15em;
  color: var(--color-primary);
  margin-bottom: 0.85rem;
}

.verdict-card {
  padding: 0.75rem;
  border-radius: 8px;
  border-left: 2px solid var(--color-primary);
  margin-bottom: 1rem;
}

.verdict-label {
  font-size: 0.58rem;
  letter-spacing: 0.18em;
  color: var(--color-primary);
  display: block;
  margin-bottom: 0.25rem;
}

.verdict-quote {
  font-size: 0.75rem;
  font-style: italic;
  color: #d0d6e5;
  line-height: 1.4;
}

.tiered-facts-block {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.fact-row {
  display: flex;
  flex-direction: column;
  font-size: 0.72rem;
}

.fact-label {
  font-size: 0.58rem;
  letter-spacing: 0.15em;
  color: #707788;
}

.fact-val {
  color: #fff;
}

.mock-contact-bar {
  margin-top: auto;
  display: flex;
  gap: 0.4rem;
  padding-top: 0.75rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.action-btn-whatsapp {
  flex: 1.5;
  background: var(--color-whatsapp);
  color: #fff;
  border-radius: var(--radius-pill);
  padding: 0.5rem;
  font-size: 0.68rem;
  font-weight: 600;
  text-align: center;
}

.action-btn-call {
  flex: 1;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  border-radius: var(--radius-pill);
  padding: 0.5rem;
  font-size: 0.68rem;
  text-align: center;
}

.action-btn-enquire {
  flex: 1.2;
  background: var(--color-primary);
  color: #000;
  border-radius: var(--radius-pill);
  padding: 0.5rem;
  font-size: 0.68rem;
  font-weight: 600;
  text-align: center;
}
</style>
