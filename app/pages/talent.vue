<template>
  <div class="page-talent">
    <!-- Talent Hero -->
    <section class="talent-hero section-spacing hero-sail">
      <div class="shell">
        <p class="eyebrow">
          TRAVELOUR TALENT & MODERATED JOBS
        </p>
        <h1 class="talent-hero-title font-display">
          A real Dubai labour market.<br />
          <span class="talent-hero-title-accent">No ghost jobs. No recruiter cuts.</span>
        </h1>
        <p class="talent-hero-subtitle font-sans">
          Whether you have just landed in Dubai or have been building your career here for years: create your verified profile, pay one flat annual fee ($29), and connect directly with licensed employers.
        </p>

        <div class="talent-cta-row">
          <NuxtLink to="/download" class="btn btn-primary">
            <span>Join Talent Hub in App</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </NuxtLink>
          <span class="font-sans text-on-sail text-xs font-semibold">$29.00 / 12-MONTH LISTING</span>
        </div>
      </div>
    </section>

    <!-- Talent Breakdown Grid -->
    <section class="talent-details-section section-spacing">
      <div class="shell">
        <div class="talent-grid">
          <div class="talent-info-card glass-panel glass-edge">
            <span class="info-tag font-sans">STEP 01</span>
            <h3 class="info-title font-display">Create Your Profile</h3>
            <p class="info-desc font-sans">
              Enter your professional credentials, portfolio links, UAE residency status, languages, and core specializations across tech, dining, hospitality, healthcare, or corporate sectors.
            </p>
          </div>

          <div class="talent-info-card glass-panel glass-edge">
            <span class="info-tag font-sans">STEP 02</span>
            <h3 class="info-title font-display">Native Stripe Flat Fee</h3>
            <p class="info-desc font-sans">
              Pay the transparent flat fee ($29/yr or AED equivalent) directly in the mobile app through Apple Pay, Google Pay, or card. The only money that moves through the product today.
            </p>
          </div>

          <div class="talent-info-card glass-panel glass-edge">
            <span class="info-tag font-sans">STEP 03</span>
            <h3 class="info-title font-display">Direct Employer Visibility</h3>
            <p class="info-desc font-sans">
              Once approved, your verified profile appears in the Talent directory. Employers browse, review, and contact you directly via WhatsApp or email with zero recruiter commissions.
            </p>
          </div>

          <div class="talent-info-card glass-panel glass-edge">
            <span class="info-tag font-sans">STEP 04</span>
            <h3 class="info-title font-display">Moderated Jobs Feed</h3>
            <p class="info-desc font-sans">
              Browse openings posted directly by Travelour member businesses. Every job post is operator-moderated to ensure verified wages, legal UAE contracts, and zero fake recruitment ads.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Bottom CTA -->
    <DownloadCtaSection />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Talent & Jobs | Travelour Dubai Gateway',
  meta: [
    {
      name: 'description',
      content: 'Join the Travelour Talent Directory. Verified professional profile for a flat $29 annual fee, with direct access to licensed Dubai employers and moderated jobs.'
    }
  ]
})
</script>

<style scoped>
.page-talent {
  padding-top: var(--nav-height);
  background-color: var(--color-background);
}

.talent-hero {
  padding-top: 4rem;
  padding-bottom: 4rem;
  border-bottom: 1px solid rgba(5, 57, 73, 0.2);
}

.talent-hero-title {
  font-size: clamp(2.5rem, 5.5vw, 4.4rem);
  font-weight: 300;
  line-height: 1.1;
  color: var(--color-on-sail);
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  letter-spacing: -0.03em;
}

.talent-hero-title-accent {
  font-weight: 700;
  color: var(--color-on-sail);
}

.talent-hero-subtitle {
  font-size: 1.15rem;
  line-height: 1.65;
  color: var(--color-on-sail);
  opacity: 0.92;
  max-width: 48rem;
  margin-bottom: 2.5rem;
}

.talent-cta-row {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.talent-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 640px) {
  .talent-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .talent-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.talent-info-card {
  padding: 2.5rem 1.85rem;
  border-radius: var(--radius-card);
  display: flex;
  flex-direction: column;
}

.info-tag {
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  color: var(--color-primary);
  margin-bottom: 0.75rem;
}

.info-title {
  font-size: 1.35rem;
  font-weight: 400;
  color: var(--color-foreground);
  margin-bottom: 0.85rem;
}

.info-desc {
  font-size: 0.9rem;
  line-height: 1.65;
  color: var(--color-muted-foreground);
}
</style>
