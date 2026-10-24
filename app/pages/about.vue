<template>
  <div class="page-about">
    <section class="about-hero section-spacing">
      <div class="shell">
        <p class="eyebrow">
          OUR MISSION & CHARTER
        </p>
        <h1 class="about-title font-display">
          Building the trusted gateway<br />
          <span class="gold-text-gradient">to the city of the future.</span>
        </h1>
        <p class="about-subtitle font-sans">
          Dubai receives millions of tourists, business leaders, medical visitors, students, and new residents every year. Yet their arrival experience is fragmented across dozens of unverified apps, cold search engines, and noisy WhatsApp chats. Travelour was built to fix that.
        </p>
      </div>
    </section>

    <!-- Manifesto Comparison Section -->
    <section class="about-manifesto-section section-spacing">
      <div class="shell">
        <div class="manifesto-grid">
          <div class="manifesto-side old-way glass-panel">
            <span class="manifesto-tag font-mono">THE OLD WAY</span>
            <h3 class="manifesto-heading font-display">Scraped Maps & Cluttered Feeds</h3>
            <ul class="manifesto-list font-sans">
              <li>Open, unverified business submissions where anyone can post fake numbers</li>
              <li>Scraped, outdated menus, missing prices, and closed locations</li>
              <li>Ghost job postings that harvest candidate resumes without hiring</li>
              <li>Zero guidance on how Dubai actually functions (Salik tolls, tenancy laws, emergency)</li>
              <li>Anonymous trolls and unverified reviews gaming algorithms</li>
            </ul>
          </div>

          <div class="manifesto-side new-way glass-panel glass-edge">
            <span class="manifesto-tag-gold font-mono">THE TRAVELOUR WAY</span>
            <h3 class="manifesto-heading font-display">Signed Trust & Living Know-How</h3>
            <ul class="manifesto-list font-sans">
              <li>100% of member businesses pass legal KYC review and sign an official agreement</li>
              <li>Direct WhatsApp and phone access with zero middleman commissions</li>
              <li>Verified talent directory with a transparent flat fee and moderated jobs</li>
              <li>A living handbook explaining emergency services, driving, tolls, and settling laws</li>
              <li>Sign-in required to maintain accountability and measurable demand for businesses</li>
            </ul>
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
  title: 'About & Trust Manifesto | Travelour Dubai Gateway',
  meta: [
    {
      name: 'description',
      content: 'Learn why Travelour was built: to replace fragmented directories and unverified maps with one trusted gateway for everyone arriving or living in Dubai.'
    }
  ]
})
</script>

<style scoped>
.page-about {
  padding-top: var(--nav-height);
  background-color: var(--color-background);
}

.about-hero {
  padding-top: 4rem;
  padding-bottom: 4rem;
  border-bottom: 1px solid var(--color-line);
}

.about-title {
  font-size: clamp(2.5rem, 5.5vw, 4.4rem);
  font-weight: 300;
  line-height: 1.1;
  color: var(--color-foreground);
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  letter-spacing: -0.03em;
}

.about-subtitle {
  font-size: 1.15rem;
  line-height: 1.65;
  color: var(--color-muted-foreground);
  max-width: 48rem;
}

.manifesto-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
}

@media (min-width: 1024px) {
  .manifesto-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.manifesto-side {
  padding: 3rem 2.5rem;
  border-radius: var(--radius-card);
  display: flex;
  flex-direction: column;
}

.manifesto-tag {
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  color: #ff6b6b;
  margin-bottom: 1rem;
}

.manifesto-tag-gold {
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  color: var(--color-primary);
  margin-bottom: 1rem;
}

.manifesto-heading {
  font-size: 1.8rem;
  font-weight: 400;
  color: var(--color-foreground);
  margin-bottom: 1.75rem;
}

.manifesto-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.manifesto-list li {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--color-muted-foreground);
  position: relative;
  padding-left: 1.5rem;
}

.old-way li::before {
  content: "—";
  position: absolute;
  left: 0;
  color: #ff6b6b;
  font-family: var(--font-mono);
  font-weight: 600;
}

.new-way li::before {
  content: "+";
  position: absolute;
  left: 0;
  color: var(--color-primary);
  font-family: var(--font-mono);
  font-weight: 700;
}
</style>
