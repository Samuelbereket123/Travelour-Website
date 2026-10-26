<template>
  <footer class="site-footer">
    <div class="shell">
      <div class="footer-top-grid">
        <!-- Brand Info -->
        <div class="footer-brand-col">
          <NuxtLink to="/" class="footer-brand-link">
            <div class="brand-text-group">
              <span class="brand-name">TRAVELOUR</span>
              <span class="brand-tag">DUBAI GATEWAY</span>
            </div>
          </NuxtLink>

          <p class="footer-brand-desc font-sans">
            The Dubai gateway app. Giving visitors, new arrivals, and residents one trusted place to find verified businesses and talent, learn how the city works, and contact the right people directly.
          </p>

          <div class="location-badge font-sans">
            <span class="pulse-emerald"></span>
            <span>DIFC, Dubai, United Arab Emirates</span>
          </div>
        </div>

        <!-- Col 1: Verticals -->
        <div class="footer-nav-col">
          <h4 class="footer-col-title font-sans">SIX VERTICALS</h4>
          <ul class="footer-links-list font-sans">
            <li><NuxtLink to="/solutions#explore">Explore (Tours & Malls)</NuxtLink></li>
            <li><NuxtLink to="/solutions#eat">Eat (Menus & WhatsApp)</NuxtLink></li>
            <li><NuxtLink to="/solutions#stays">Stays (Hotels & Rates)</NuxtLink></li>
            <li><NuxtLink to="/solutions#health">Health (Doctors Roster)</NuxtLink></li>
            <li><NuxtLink to="/solutions#education">Education (Schools & Courses)</NuxtLink></li>
            <li><NuxtLink to="/talent">Talent (Verified & Jobs)</NuxtLink></li>
          </ul>
        </div>

        <!-- Col 2: The Guide -->
        <div class="footer-nav-col">
          <h4 class="footer-col-title font-sans">DUBAI GUIDEBOOK</h4>
          <ul class="footer-links-list font-sans">
            <li><a href="/#guide">Emergency Numbers (999/998)</a></li>
            <li><a href="/#guide">Salik Tolls & SMS Parking</a></li>
            <li><a href="/#guide">Dubai Culture, Modesty & Laws</a></li>
            <li><a href="/#guide">Settling In (Emirates ID & Ejari)</a></li>
            <li><a href="/#guide">First 48 Hours Journey</a></li>
            <li><a href="/#guide">Medical Visitor Blueprint</a></li>
          </ul>
        </div>

        <!-- Col 3: Businesses & Talent -->
        <div class="footer-nav-col">
          <h4 class="footer-col-title font-sans">BUSINESS & PLATFORM</h4>
          <ul class="footer-links-list font-sans">
            <li><NuxtLink to="/business">Business Membership</NuxtLink></li>
            <li><NuxtLink to="/business">Demand Analytics Dashboard</NuxtLink></li>
            <li><NuxtLink to="/business">Proximity Passes & Offers</NuxtLink></li>
            <li><NuxtLink to="/talent">Talent Listing ($29/yr)</NuxtLink></li>
            <li><NuxtLink to="/about">Trust & KYC Charter</NuxtLink></li>
            <li><NuxtLink to="/contact">Partner with Travelour</NuxtLink></li>
          </ul>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="footer-bottom-bar">
        <div class="copyright font-sans">
          © 2026 Travelour Digital LLC. All rights reserved. The Dubai Gateway App.
        </div>
        <div class="legal-links font-sans">
          <NuxtLink to="/about">Privacy Policy</NuxtLink>
          <NuxtLink to="/about">Terms of Service</NuxtLink>
          <NuxtLink to="/about">KYC Compliance</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  background-color: #042028;
  border-top: 1px solid rgba(143, 233, 255, 0.16);
  padding-top: 5rem;
  padding-bottom: 3rem;
}

.footer-top-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  margin-bottom: 4rem;
}

@media (min-width: 640px) {
  .footer-top-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .footer-top-grid {
    grid-template-columns: 1.5fr 1fr 1fr 1fr;
    gap: 3.5rem;
  }
}

.footer-brand-col {
  display: flex;
  flex-direction: column;
}

.footer-brand-link {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  margin-bottom: 1.25rem;
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
  font-family: var(--font-sans);
  font-size: 0.65rem;
  letter-spacing: 0.12em;
  font-weight: 600;
  color: var(--color-primary);
  text-transform: uppercase;
}

.footer-brand-desc {
  font-size: 0.88rem;
  line-height: 1.65;
  color: var(--color-muted-foreground);
  margin-bottom: 1.5rem;
  max-width: 24rem;
}

.location-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.72rem;
  color: var(--color-muted-foreground);
  letter-spacing: 0.05em;
  padding: 0.4rem 0.75rem;
  border-radius: var(--radius-pill);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  width: fit-content;
}

.pulse-emerald {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--color-emerald);
  box-shadow: 0 0 8px var(--color-emerald);
}

/* Nav Cols */
.footer-col-title {
  font-size: 0.72rem;
  letter-spacing: 0.22em;
  color: var(--color-foreground);
  margin-bottom: 1.25rem;
}

.footer-links-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-links-list a {
  font-size: 0.85rem;
  color: var(--color-muted-foreground);
  transition: color 0.2s ease;
}

.footer-links-list a:hover {
  color: var(--color-primary);
}

/* Footer Bottom Bar */
.footer-bottom-bar {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  border-top: 1px solid var(--color-line);
  padding-top: 2rem;
  align-items: flex-start;
}

@media (min-width: 768px) {
  .footer-bottom-bar {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}

.copyright {
  font-size: 0.72rem;
  color: var(--color-muted-subtle);
  letter-spacing: 0.05em;
}

.legal-links {
  display: flex;
  gap: 1.5rem;
  font-size: 0.72rem;
}

.legal-links a {
  color: var(--color-muted-subtle);
}

.legal-links a:hover {
  color: var(--color-foreground);
}
</style>
