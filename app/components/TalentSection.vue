<template>
  <section id="talent" class="talent-section section-spacing">
    <div class="shell">
      <div class="talent-split-grid">
        <!-- Left Content -->
        <div class="talent-left-col">
          <p class="eyebrow">
            Talent Vertical & Jobs Hub
          </p>
          <h2 class="talent-title font-display">
            A real labour market.<br />
            <span class="gold-text-gradient">One flat fee. Zero agency cuts.</span>
          </h2>

          <p class="talent-desc font-sans">
            Dubai's job market is flooded with ghost vacancies and scraper bots. Travelour Talent is a verified ecosystem where qualified professionals pay a transparent annual flat fee to be visible directly to licensed Dubai employers.
          </p>

          <div class="pricing-card glass-panel glass-edge">
            <div class="pricing-badge font-mono">12-MONTH LISTING PASS</div>
            <div class="pricing-price-row">
              <span class="price-val font-display">$29</span>
              <span class="price-unit font-mono">/ YEAR (OR AED EQUIVALENT)</span>
            </div>
            <p class="pricing-explainer font-sans">
              Paid securely in the app via native Stripe sheet. No subscription lock-in, no recruiter commissions deducted from your salary.
            </p>
            <ul class="pricing-perks font-mono">
              <li><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Verified profile badge & direct employer reach</li>
              <li><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Access to moderated, verified Dubai job openings</li>
              <li><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Direct WhatsApp & email contact from hiring managers</li>
            </ul>
            <NuxtLink to="/talent" class="btn btn-primary w-fit mt-4">
              <span>Join Talent Directory</span>
            </NuxtLink>
          </div>
        </div>

        <!-- Right Side: Dual Audiences (Talent vs Employers) -->
        <div class="talent-right-col">
          <div class="audience-card glass-panel">
            <div class="audience-header">
              <span class="audience-tag font-mono">FOR PROFESSIONALS</span>
              <span class="audience-num font-mono">01</span>
            </div>
            <h3 class="audience-title font-display">Get Discovered By Licensed UAE Employers</h3>
            <p class="audience-body font-sans">
              Create your verified profile with portfolio highlights, certifications, and visa availability. When employers search your vertical, they connect with you directly.
            </p>
            <div class="audience-tags font-mono">
              <span>Software & Tech</span>
              <span>Hospitality & Chefs</span>
              <span>Healthcare & Doctors</span>
              <span>Finance & Legal</span>
            </div>
          </div>

          <div class="audience-card glass-panel">
            <div class="audience-header">
              <span class="audience-tag font-mono">FOR EMPLOYERS</span>
              <span class="audience-num font-mono">02</span>
            </div>
            <h3 class="audience-title font-display">Search Verified Talent & Post Moderated Jobs</h3>
            <p class="audience-body font-sans">
              Member businesses get full talent search as a member perk. Post openings to a moderated jobs feed that reaches active, verified candidates already in or relocating to Dubai.
            </p>
            <div class="audience-tags font-mono">
              <span>Zero Placement Cut</span>
              <span>Operator Moderation</span>
              <span>Instant Contact</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.talent-section {
  background-color: var(--color-background);
  border-top: 1px solid var(--color-line);
}

.talent-split-grid {
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
}

@media (min-width: 1024px) {
  .talent-split-grid {
    flex-direction: row;
    align-items: center;
    gap: 4rem;
  }
}

.talent-left-col {
  width: 100%;
}

@media (min-width: 1024px) {
  .talent-left-col {
    width: 50%;
  }
}

.talent-title {
  font-size: clamp(2.2rem, 4.2vw, 3.4rem);
  font-weight: 300;
  line-height: 1.1;
  color: var(--color-foreground);
  margin-top: 1rem;
  margin-bottom: 1.25rem;
  letter-spacing: -0.03em;
}

.talent-desc {
  font-size: 1.05rem;
  line-height: 1.65;
  color: var(--color-muted-foreground);
  margin-bottom: 2rem;
}

/* Pricing Card */
.pricing-card {
  padding: 2.25rem;
  border-radius: var(--radius-card);
  display: flex;
  flex-direction: column;
}

.pricing-badge {
  font-size: 0.68rem;
  letter-spacing: 0.2em;
  color: var(--color-primary);
  margin-bottom: 0.75rem;
}

.pricing-price-row {
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}

.price-val {
  font-size: 3.2rem;
  font-weight: 300;
  line-height: 1;
  color: var(--color-foreground);
}

.price-unit {
  font-size: 0.72rem;
  letter-spacing: 0.15em;
  color: var(--color-muted-foreground);
}

.pricing-explainer {
  font-size: 0.88rem;
  line-height: 1.55;
  color: var(--color-muted-foreground);
  margin-bottom: 1.25rem;
}

.pricing-perks {
  list-style: none;
  font-size: 0.75rem;
  color: var(--color-foreground);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.w-fit {
  width: fit-content;
}

.mt-4 {
  margin-top: 1rem;
}

/* Right Col */
.talent-right-col {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
}

@media (min-width: 1024px) {
  .talent-right-col {
    width: 50%;
  }
}

.audience-card {
  padding: 2.25rem;
  border-radius: var(--radius-card);
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
}

.audience-card:hover {
  transform: translateY(-3px);
  border-color: rgba(245, 192, 66, 0.3);
}

.audience-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;
}

.audience-tag {
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  color: var(--color-primary);
  text-transform: uppercase;
}

.audience-num {
  font-size: 0.75rem;
  color: var(--color-muted-subtle);
}

.audience-title {
  font-size: 1.35rem;
  font-weight: 500;
  color: var(--color-foreground);
  margin-bottom: 0.75rem;
  line-height: 1.25;
}

.audience-body {
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--color-muted-foreground);
  margin-bottom: 1.5rem;
}

.audience-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.audience-tags span {
  font-size: 0.68rem;
  padding: 0.3rem 0.65rem;
  border-radius: var(--radius-pill);
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: var(--color-muted-foreground);
}
</style>
