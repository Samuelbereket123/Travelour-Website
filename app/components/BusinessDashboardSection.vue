<template>
  <section id="business" class="biz-section section-spacing">
    <div class="shell">
      <div class="biz-header">
        <p class="eyebrow">
          The Business Dashboard · One Job: Prove Demand
        </p>
        <h2 class="biz-main-title font-display">
          Supply pays. Consumers browse for free.<br />
          <span class="gold-text-gradient">Every screen proves your ROI.</span>
        </h2>
        <p class="biz-subtitle font-sans">
          No vague impressions or click fraud. Track exactly who is viewing your business, tapping your WhatsApp, calling your desk, and booking your rooms or tables in real time.
        </p>
      </div>

      <!-- Dashboard Features 3-Column Grid -->
      <div class="dashboard-pillars-grid">
        <!-- 01 Demand Funnel -->
        <div class="dash-card glass-panel glass-edge">
          <div class="dash-icon-box">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F5C042" stroke-width="2">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <span class="dash-tag font-mono">DEMAND FUNNEL</span>
          <h3 class="dash-card-title font-display">Search to WhatsApp Clicks</h3>
          <p class="dash-card-desc font-sans">
            Live 30-day analytics tracking search impressions, profile opens, and direct contact taps. Know the exact day and time high-intent visitors reach out.
          </p>
          <ul class="dash-bullets font-mono">
            <li>Search appearances breakdown</li>
            <li>Direct WhatsApp & Call conversion</li>
            <li>CSV export for internal audits</li>
          </ul>
        </div>

        <!-- 02 Leads & Reservations Inbox -->
        <div class="dash-card glass-panel glass-edge">
          <div class="dash-icon-box">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10E7A2" stroke-width="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </div>
          <span class="dash-tag font-mono">LEADS & RESERVATIONS</span>
          <h3 class="dash-card-title font-display">Direct Enquiry Inbox</h3>
          <p class="dash-card-desc font-sans">
            Structured lead inbox (New, Responded, Closed). For dining venues: reservations inbox with party sizes, custom blackout dates, and auto-confirm rules.
          </p>
          <ul class="dash-bullets font-mono">
            <li>Zero commissions or booking taxes</li>
            <li>Direct customer phone & details</li>
            <li>Custom blackout dates & hours</li>
          </ul>
        </div>

        <!-- 03 Geofenced Ads & Offers -->
        <div class="dash-card glass-panel glass-edge">
          <div class="dash-icon-box">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F5C042" stroke-width="2">
              <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
              <line x1="8" y1="2" x2="8" y2="18"></line>
              <line x1="16" y1="6" x2="16" y2="22"></line>
            </svg>
          </div>
          <span class="dash-tag font-mono">GEOFENCED OFFERS</span>
          <h3 class="dash-card-title font-display">Proximity Passes</h3>
          <p class="dash-card-desc font-sans">
            Compose targeted promotions with geofence radiuses around Downtown, Marina, or Palm. App raises at most one subtle alert per day when users are nearby.
          </p>
          <ul class="dash-bullets font-mono">
            <li>Included ads-credit allowance</li>
            <li>No coupon codes — show digital pass</li>
            <li>Operator moderation quality check</li>
          </ul>
        </div>
      </div>

      <!-- Invite-Only Joining Pipeline -->
      <div class="pipeline-section glass-panel">
        <div class="pipeline-header">
          <div class="pipeline-tag-wrap">
            <span class="verified-badge font-mono">SUPPLY IS INVITE ONLY</span>
            <span class="font-mono text-muted text-xs">NO SCRAPED OR UNVETTED ENTRIES</span>
          </div>
          <h3 class="pipeline-title font-display">
            How a Business Joins Travelour
          </h3>
          <p class="pipeline-desc font-sans">
            To preserve user trust, businesses cannot sign up freely without operator verification. Every member passes our 7-step onboarding pipeline:
          </p>
        </div>

        <div class="pipeline-steps-track">
          <div v-for="(step, idx) in pipelineSteps" :key="step.title" class="pipeline-step-node">
            <div class="step-num font-mono">0{{ idx + 1 }}</div>
            <div class="step-label font-display">{{ step.title }}</div>
            <div class="step-info font-sans">{{ step.desc }}</div>
          </div>
        </div>

        <div class="pipeline-footer-row">
          <div class="membership-info font-mono">
            <span class="text-gold">FLAT ANNUAL MEMBERSHIP:</span> Invoiced outside app · Includes listing + monthly ads credit allowance.
          </div>
          <NuxtLink to="/business" class="btn btn-primary">
            <span>Request Invitation</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const pipelineSteps = [
  { title: 'Prospect', desc: 'Identified by Travelour team' },
  { title: 'Contacted', desc: 'Direct discovery call' },
  { title: 'Negotiated', desc: 'Terms & membership tier' },
  { title: 'Signed', desc: 'Official signed agreement' },
  { title: 'Invited', desc: 'Dedicated door at /{slug}' },
  { title: 'KYC & Profile', desc: 'Trade license review & menu/rates build' },
  { title: 'Live', desc: 'Published to consumer app' }
]
</script>

<style scoped>
.biz-section {
  background-color: #06080b;
  border-top: 1px solid var(--color-line);
}

.biz-header {
  max-width: 52rem;
  margin-bottom: 4rem;
}

.biz-main-title {
  font-size: clamp(2.2rem, 4.5vw, 3.6rem);
  font-weight: 300;
  line-height: 1.1;
  color: var(--color-foreground);
  margin-top: 1rem;
  margin-bottom: 1.25rem;
  letter-spacing: -0.03em;
}

.biz-subtitle {
  font-size: 1.05rem;
  line-height: 1.65;
  color: var(--color-muted-foreground);
}

/* 3-Column Grid */
.dashboard-pillars-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.75rem;
  margin-bottom: 4rem;
}

@media (min-width: 768px) {
  .dashboard-pillars-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.dash-card {
  padding: 2.25rem 1.75rem;
  border-radius: var(--radius-card);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.dash-card:hover {
  transform: translateY(-4px);
  border-color: rgba(245, 192, 66, 0.4);
}

.dash-icon-box {
  width: 44px;
  height: 44px;
  border-radius: var(--radius-tile);
  background: rgba(245, 192, 66, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
}

.dash-tag {
  font-size: 0.68rem;
  letter-spacing: 0.2em;
  color: var(--color-primary);
  margin-bottom: 0.65rem;
}

.dash-card-title {
  font-size: 1.35rem;
  font-weight: 500;
  color: var(--color-foreground);
  margin-bottom: 0.85rem;
  line-height: 1.25;
}

.dash-card-desc {
  font-size: 0.88rem;
  line-height: 1.6;
  color: var(--color-muted-foreground);
  margin-bottom: 1.5rem;
  flex: 1;
}

.dash-bullets {
  list-style: none;
  font-size: 0.72rem;
  color: var(--color-muted-foreground);
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  border-top: 1px solid var(--color-line);
  padding-top: 1rem;
}

.dash-bullets li::before {
  content: "→ ";
  color: var(--color-primary);
}

/* Pipeline Section */
.pipeline-section {
  padding: 2.5rem 2rem;
  border-radius: var(--radius-card);
}

@media (min-width: 768px) {
  .pipeline-section {
    padding: 3.5rem 3rem;
  }
}

.pipeline-header {
  margin-bottom: 2.5rem;
}

.pipeline-tag-wrap {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.85rem;
}

.text-muted {
  color: var(--color-muted-subtle);
}

.text-xs {
  font-size: 0.7rem;
}

.pipeline-title {
  font-size: clamp(1.6rem, 2.8vw, 2.4rem);
  font-weight: 400;
  color: var(--color-foreground);
  margin-bottom: 0.65rem;
}

.pipeline-desc {
  font-size: 0.95rem;
  color: var(--color-muted-foreground);
  max-width: 44rem;
}

.pipeline-steps-track {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-bottom: 3rem;
}

@media (min-width: 640px) {
  .pipeline-steps-track {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .pipeline-steps-track {
    grid-template-columns: repeat(7, 1fr);
    gap: 0.75rem;
  }
}

.pipeline-step-node {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-tile);
  padding: 1.25rem 1rem;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: all 0.25s ease;
}

.pipeline-step-node:hover {
  background: rgba(245, 192, 66, 0.06);
  border-color: rgba(245, 192, 66, 0.35);
}

.step-num {
  font-size: 0.7rem;
  color: var(--color-primary);
  margin-bottom: 0.5rem;
}

.step-label {
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-foreground);
  margin-bottom: 0.35rem;
}

.step-info {
  font-size: 0.75rem;
  color: var(--color-muted-foreground);
  line-height: 1.4;
}

.pipeline-footer-row {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  border-top: 1px solid var(--color-line);
  padding-top: 2rem;
  align-items: flex-start;
}

@media (min-width: 768px) {
  .pipeline-footer-row {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}

.membership-info {
  font-size: 0.75rem;
  color: var(--color-muted-foreground);
  letter-spacing: 0.05em;
  max-width: 40rem;
}

.text-gold {
  color: var(--color-primary);
  font-weight: 600;
}
</style>
