<template>
  <div class="page-business">
    <!-- Business Hero -->
    <section class="biz-hero section-spacing hero-sail">
      <div class="shell">
        <p class="eyebrow">
          TRAVELOUR FOR MEMBER BUSINESSES
        </p>
        <h1 class="biz-hero-title font-display">
          Stop paying for cold clicks.<br />
          <span class="biz-hero-title-accent">Prove demand with verified visitors.</span>
        </h1>
        <p class="biz-hero-subtitle font-sans">
          Travelour is the Dubai gateway app. Consumers use it for free, and member businesses pay a flat annual membership to be listed, discovered, and contacted directly via WhatsApp and telephone.
        </p>

        <div class="biz-hero-cta">
          <a href="#invite-form" class="btn btn-primary">
            <span>Apply For Membership</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>
          <span class="biz-cta-note font-sans">Invite only · KYC verified</span>
        </div>
      </div>
    </section>

    <!-- Why Travelour Dashboard Wins -->
    <section class="biz-deep-dive section-spacing">
      <div class="shell">
        <div class="deep-dive-grid">
          <!-- Item 1: Demand Band -->
          <div class="dive-card glass-panel glass-edge">
            <span class="dive-tag font-mono">01 · ANALYTICS</span>
            <h3 class="dive-title font-display">The Demand Band</h3>
            <p class="dive-desc font-sans">
              Track search appearances, listing views, and high-intent contact clicks with a 30-day trend. You know exactly which arrivals are exploring your menu, rates, or clinic roster.
            </p>
            <div class="dive-metric font-mono">
              <span class="metric-accent">100% Measurable</span>
              <span>Direct WhatsApp & Call Logging</span>
            </div>
          </div>

          <!-- Item 2: Leads & Reservations -->
          <div class="dive-card glass-panel glass-edge">
            <span class="dive-tag font-mono">02 · ENQUIRIES</span>
            <h3 class="dive-title font-display">Leads & Reservations Inbox</h3>
            <p class="dive-desc font-sans">
              An organized enquiry inbox (New, Responded, Closed). For restaurants: a full reservations inbox with rules for seating hours, party size thresholds, blackout dates, and auto-confirm.
            </p>
            <div class="dive-metric font-mono">
              <span class="metric-accent">Zero Commission</span>
              <span>Direct Customer Relationship</span>
            </div>
          </div>

          <!-- Item 3: Geofenced Offers -->
          <div class="dive-card glass-panel glass-edge">
            <span class="dive-tag font-mono">03 · PROXIMITY</span>
            <h3 class="dive-title font-display">Geofenced Offers</h3>
            <p class="dive-desc font-sans">
              Compose targeted venue passes with custom geofences and schedules. The app raises a subtle notification when verified users are near your venue. No discount codes needed. Users simply show the pass.
            </p>
            <div class="dive-metric font-mono">
              <span class="metric-accent">Ad Credits Included</span>
              <span>1 Local Alert / Day Limit</span>
            </div>
          </div>

          <!-- Item 4: Hiring & Jobs -->
          <div class="dive-card glass-panel glass-edge">
            <span class="dive-tag font-mono">04 · RECRUITMENT</span>
            <h3 class="dive-title font-display">Talent Search & Job Board</h3>
            <p class="dive-desc font-sans">
              Member businesses search verified talent and post moderated jobs as an included perk. Tap directly into candidates who have verified credentials and are ready to work in Dubai.
            </p>
            <div class="dive-metric font-mono">
              <span class="metric-accent">No Agency Fees</span>
              <span>Verified Candidates Only</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Request Invitation Form -->
    <section id="invite-form" class="biz-form-section section-spacing">
      <div class="shell">
        <div class="form-container glass-panel glass-edge">
          <div class="form-header">
            <p class="eyebrow">MEMBERSHIP APPLICATION</p>
            <h2 class="form-title font-display">Request an Invitation to Travelour</h2>
            <p class="form-subtitle font-sans">
              Supply is invite-only. Fill out your details below and a Travelour partnership operator will contact you within 24 hours.
            </p>
          </div>

          <form class="application-form" @submit.prevent="submitForm">
            <div class="form-grid">
              <div class="form-field">
                <label class="form-label font-mono">BUSINESS NAME</label>
                <input
                  v-model="form.businessName"
                  type="text"
                  placeholder="e.g. Zuma Dubai or The Lana Hotel"
                  class="form-input"
                  required
                />
              </div>

              <div class="form-field">
                <label class="form-label font-mono">PRIMARY VERTICAL</label>
                <select v-model="form.vertical" class="form-select font-mono" required>
                  <option value="" disabled selected>Select Vertical</option>
                  <option value="eat">Eat (Restaurant / Café / Dining)</option>
                  <option value="stays">Stays (Hotel / Serviced Apartment)</option>
                  <option value="explore">Explore (Tours / Malls / Real Estate)</option>
                  <option value="health">Health (Clinic / Hospital / Wellness)</option>
                  <option value="education">Education (School / University / Academy)</option>
                </select>
              </div>

              <div class="form-field">
                <label class="form-label font-mono">CONTACT PERSON NAME</label>
                <input
                  v-model="form.contactName"
                  type="text"
                  placeholder="Your full name"
                  class="form-input"
                  required
                />
              </div>

              <div class="form-field">
                <label class="form-label font-mono">WORK EMAIL</label>
                <input
                  v-model="form.email"
                  type="email"
                  placeholder="name@business.com"
                  class="form-input"
                  required
                />
              </div>

              <div class="form-field">
                <label class="form-label font-mono">PHONE / WHATSAPP NUMBER</label>
                <input
                  v-model="form.phone"
                  type="tel"
                  placeholder="+971 50 123 4567"
                  class="form-input"
                  required
                />
              </div>

              <div class="form-field">
                <label class="form-label font-mono">DUBAI NEIGHBOURHOOD / LOCATION</label>
                <input
                  v-model="form.location"
                  type="text"
                  placeholder="e.g. DIFC, Downtown, Palm Jumeirah"
                  class="form-input"
                  required
                />
              </div>
            </div>

            <div class="form-submit-row">
              <button type="submit" class="btn btn-primary" :disabled="submitted">
                <span v-if="!submitted">Submit Application</span>
                <span v-else style="display: inline-flex; align-items: center; gap: 0.4rem;">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Application Received
                </span>
              </button>
              <span v-if="submitted" class="success-msg font-mono">
                Thank you! A Travelour operator will review your application and reach out shortly.
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

useHead({
  title: 'For Businesses | Travelour Member Portal',
  meta: [
    {
      name: 'description',
      content: 'Partner with Travelour. Prove demand with real verified visitors, direct WhatsApp enquiries, and geofenced offers across Dubai.'
    }
  ]
})

const form = ref({
  businessName: '',
  vertical: '',
  contactName: '',
  email: '',
  phone: '',
  location: ''
})

const submitted = ref(false)

const submitForm = () => {
  submitted.value = true
}
</script>

<style scoped>
.page-business {
  padding-top: var(--nav-height);
  background-color: var(--color-background);
}

.biz-hero {
  padding-top: 4rem;
  padding-bottom: 4rem;
  border-bottom: 1px solid rgba(5, 57, 73, 0.2);
}

.biz-hero-title {
  font-size: clamp(2.5rem, 5.5vw, 4.4rem);
  font-weight: 300;
  line-height: 1.1;
  color: var(--color-on-sail);
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  letter-spacing: -0.03em;
}

.biz-hero-title-accent {
  font-weight: 700;
  color: var(--color-on-sail);
}

.biz-hero-subtitle {
  font-size: 1.15rem;
  line-height: 1.65;
  color: var(--color-on-sail);
  opacity: 0.92;
  max-width: 48rem;
  margin-bottom: 2.5rem;
}

.biz-hero-cta {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.biz-cta-note {
  font-size: 0.85rem;
  color: var(--color-on-sail);
  opacity: 0.85;
  font-weight: 600;
}

/* Deep dive */
.deep-dive-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 768px) {
  .deep-dive-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.dive-card {
  padding: 2.75rem 2.25rem;
  border-radius: var(--radius-card);
  display: flex;
  flex-direction: column;
}

.dive-tag {
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  color: var(--color-primary);
  margin-bottom: 0.85rem;
}

.dive-title {
  font-size: 1.6rem;
  font-weight: 400;
  color: var(--color-foreground);
  margin-bottom: 0.85rem;
}

.dive-desc {
  font-size: 0.95rem;
  line-height: 1.65;
  color: var(--color-muted-foreground);
  margin-bottom: 2rem;
  flex: 1;
}

.dive-metric {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.72rem;
  border-top: 1px solid var(--color-line);
  padding-top: 1.25rem;
  color: var(--color-muted-subtle);
}

.metric-accent {
  color: var(--color-primary);
  font-weight: 600;
}

/* Form Container */
.form-container {
  padding: 3rem 2rem;
  border-radius: var(--radius-card);
  max-width: 54rem;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .form-container {
    padding: 4rem 3.5rem;
  }
}

.form-header {
  margin-bottom: 2.5rem;
}

.form-title {
  font-size: clamp(1.8rem, 3.2vw, 2.6rem);
  font-weight: 300;
  color: var(--color-foreground);
  margin: 0.5rem 0 0.75rem;
}

.form-subtitle {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--color-muted-foreground);
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

@media (min-width: 640px) {
  .form-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-label {
  font-size: 0.68rem;
  letter-spacing: 0.18em;
  color: var(--color-muted-foreground);
}

.form-input, .form-select {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: var(--radius-tile);
  padding: 0.85rem 1rem;
  color: #fff;
  font-size: 0.9rem;
  outline: none;
  transition: all 0.2s ease;
}

.form-input:focus, .form-select:focus {
  border-color: var(--color-primary);
  background: rgba(255, 255, 255, 0.07);
  box-shadow: 0 0 15px rgba(245, 192, 66, 0.2);
}

.form-select option {
  background: var(--color-surface);
  color: #fff;
}

.form-submit-row {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
}

@media (min-width: 640px) {
  .form-submit-row {
    flex-direction: row;
    align-items: center;
  }
}

.success-msg {
  font-size: 0.78rem;
  color: var(--color-emerald);
}
</style>
