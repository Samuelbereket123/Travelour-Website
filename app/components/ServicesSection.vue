<template>
  <section id="services" class="paper-section section-spacing">
    <div class="shell">
      <div class="paper-header-row">
        <p class="paper-eyebrow font-mono">
          SOLUTIONS & THE SIX VERTICALS
        </p>
      </div>

      <div class="paper-divider"></div>

      <div class="paper-layout">
        <!-- Left Editorial Column -->
        <div class="paper-intro-col">
          <h2 class="paper-intro-title font-display">
            Everyday life, verified businesses and direct connection running on one trusted Dubai platform.
          </h2>

          <p class="paper-intro-body font-sans">
            Google Maps already lists every shop in Dubai. Travelour wins on two things the map cannot give: <strong>trust</strong> and <strong>know-how</strong>.
          </p>

          <p class="paper-intro-body font-sans">
            We replace fragmented WhatsApp groups, scraped reviews, and unvetted directories with one verified gateway. Every business passes strict KYC and signs an agreement before going live. Every vertical carries tailored facts, human editorial verdicts, and direct WhatsApp, call, or enquiry channels.
          </p>

          <div class="paper-intro-cta">
            <NuxtLink to="/solutions" class="btn btn-paper-primary">
              <span>Explore All Verticals</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </NuxtLink>
          </div>
        </div>

        <!-- Right Grid of Verticals -->
        <div class="paper-grid-col">
          <div class="verticals-cards-grid">
            <!-- 01 Explore -->
            <article id="vertical-explore" class="paper-card">
              <div class="paper-card-img-wrap">
                <img
                  src="/images/vertical_explore.jpg"
                  alt="Travelour Explore - Desert tours, attractions and iconic landmarks"
                  class="paper-card-img"
                  loading="lazy"
                />
              </div>
              <span class="paper-card-num font-mono">01</span>
              <h3 class="paper-card-title font-display">Travelour Explore</h3>
              <p class="paper-card-desc font-sans">
                The gateway to attractions, theme parks, desert safaris, beach clubs, museums, and prime residential developments across Dubai.
              </p>
              <ul class="paper-card-features font-mono">
                <li>Editorial verdicts & hidden gems</li>
                <li>Curated arrival journeys</li>
                <li>Direct location & directions</li>
              </ul>
            </article>

            <!-- 02 Eat -->
            <article id="vertical-eat" class="paper-card">
              <div class="paper-card-img-wrap">
                <img
                  src="/images/vertical_eat.jpg"
                  alt="Travelour Eat - Dubai restaurants and cafes with menus"
                  class="paper-card-img"
                  loading="lazy"
                />
              </div>
              <span class="paper-card-num font-mono">02</span>
              <h3 class="paper-card-title font-display">Travelour Eat</h3>
              <p class="paper-card-desc font-sans">
                Curated dining from Michelin-starred venues to neighbourhood gems, complete with printed-style menus and direct WhatsApp reservations.
              </p>
              <ul class="paper-card-features font-mono">
                <li>Direct WhatsApp, call & enquiry</li>
                <li>Full digital menus & dish highlights</li>
                <li>Verified dietary & seating facts</li>
              </ul>
            </article>

            <!-- 03 Stays -->
            <article id="vertical-stays" class="paper-card">
              <div class="paper-card-img-wrap">
                <img
                  src="/images/vertical_stays.jpg"
                  alt="Travelour Stays - Boutique hotels and serviced apartments in Dubai"
                  class="paper-card-img"
                  loading="lazy"
                />
              </div>
              <span class="paper-card-num font-mono">03</span>
              <h3 class="paper-card-title font-display">Travelour Stays</h3>
              <p class="paper-card-desc font-sans">
                Boutique hotels, luxury resorts, and serviced executive apartments with verified room types, occupancy details, and transparent rate cards.
              </p>
              <ul class="paper-card-features font-mono">
                <li>Direct front-desk & reservation line</li>
                <li>Room types, views & amenities</li>
                <li>Proximity to Metro & business hubs</li>
              </ul>
            </article>

            <!-- 04 Health -->
            <article id="vertical-health" class="paper-card">
              <div class="paper-card-img-wrap">
                <img
                  src="/images/vertical_health.jpg"
                  alt="Travelour Health - Clinics, hospitals and medical doctors roster in Dubai"
                  class="paper-card-img"
                  loading="lazy"
                />
              </div>
              <span class="paper-card-num font-mono">04</span>
              <h3 class="paper-card-title font-display">Travelour Health</h3>
              <p class="paper-card-desc font-sans">
                Accredited clinics and hospitals with verified doctor rosters, medical specialties, insurance acceptance, and guidance for medical visitors.
              </p>
              <ul class="paper-card-features font-mono">
                <li>Doctors roster & specialist bios</li>
                <li>Languages spoken & credentials</li>
                <li>Emergency & walk-in protocols</li>
              </ul>
            </article>

            <!-- 05 Education -->
            <article id="vertical-education" class="paper-card">
              <div class="paper-card-img-wrap">
                <img
                  src="/images/vertical_education.jpg"
                  alt="Travelour Education - Dubai international schools and universities"
                  class="paper-card-img"
                  loading="lazy"
                />
              </div>
              <span class="paper-card-num font-mono">05</span>
              <h3 class="paper-card-title font-display">Travelour Education</h3>
              <p class="paper-card-desc font-sans">
                Top private schools, international universities, and professional training academies with curriculum breakdowns and course prospectuses.
              </p>
              <ul class="paper-card-features font-mono">
                <li>Curriculum & KHDA ratings</li>
                <li>Admissions calendar & fees</li>
                <li>Executive & language programs</li>
              </ul>
            </article>

            <!-- 06 Talent -->
            <article id="vertical-talent" class="paper-card">
              <div class="paper-card-img-wrap">
                <img
                  src="/images/vertical_talent.jpg"
                  alt="Travelour Talent - Verified professionals and Dubai jobs board"
                  class="paper-card-img"
                  loading="lazy"
                />
              </div>
              <span class="paper-card-num font-mono">06</span>
              <h3 class="paper-card-title font-display">Travelour Talent</h3>
              <p class="paper-card-desc font-sans">
                A verified labour market where professionals pay a flat annual fee ($29) to be found by licensed employers, plus a moderated Dubai jobs board.
              </p>
              <ul class="paper-card-features font-mono">
                <li>Verified credentials & portfolio</li>
                <li>Direct recruiter & employer access</li>
                <li>Zero agency markups or hidden fees</li>
              </ul>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.paper-section {
  background-color: var(--color-paper);
  color: var(--color-paper-foreground);
}

.paper-header-row {
  margin-bottom: 1.5rem;
}

.paper-eyebrow {
  font-size: 0.72rem;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: rgba(11, 14, 20, 0.55);
}

.paper-divider {
  height: 1px;
  width: 100%;
  background-color: rgba(11, 14, 20, 0.12);
  margin-bottom: 3.5rem;
}

.paper-layout {
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
}

@media (min-width: 1024px) {
  .paper-layout {
    flex-direction: row;
    gap: 4rem;
  }
}

/* Left Column */
.paper-intro-col {
  display: flex;
  flex-direction: column;
}

@media (min-width: 1024px) {
  .paper-intro-col {
    width: 38%;
    position: sticky;
    top: calc(var(--nav-height) + 2rem);
    align-self: flex-start;
  }
}

.paper-intro-title {
  font-size: clamp(2rem, 3.5vw, 2.75rem);
  font-weight: 400;
  line-height: 1.15;
  color: var(--color-paper-foreground);
  margin-bottom: 1.5rem;
  letter-spacing: -0.025em;
}

.paper-intro-body {
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--color-paper-muted);
  margin-bottom: 1.25rem;
}

.paper-intro-body strong {
  color: var(--color-paper-foreground);
  font-weight: 600;
}

.paper-intro-cta {
  margin-top: 1.5rem;
}

.btn-paper-primary {
  background-color: var(--color-butter);
  color: var(--color-ink);
  font-weight: 700;
  padding: 0.85rem 1.85rem;
  font-size: 0.75rem;
  box-shadow: 0 4px 16px rgba(255, 216, 64, 0.35);
}

.btn-paper-primary:hover {
  background-color: var(--color-butter-hover);
  color: var(--color-ink);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 216, 64, 0.5);
}

/* Right Grid */
.paper-grid-col {
  width: 100%;
}

@media (min-width: 1024px) {
  .paper-grid-col {
    width: 62%;
  }
}

.verticals-cards-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
}

@media (min-width: 640px) {
  .verticals-cards-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
  }
}

/* Paper Card */
.paper-card {
  border-left: 1px solid rgba(11, 14, 20, 0.12);
  padding-left: 1.5rem;
  transition: all 0.3s ease;
}

.paper-card:hover {
  border-left-color: var(--color-primary);
}

.paper-card-img-wrap {
  width: 100%;
  aspect-ratio: 4/3;
  overflow: hidden;
  border-radius: var(--radius-tile);
  background: #e9ecef;
  margin-bottom: 1.25rem;
}

.paper-card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.paper-card:hover .paper-card-img {
  transform: scale(1.05);
}

.paper-card-num {
  font-size: 0.72rem;
  letter-spacing: 0.2em;
  color: rgba(11, 14, 20, 0.4);
  display: block;
  margin-bottom: 0.5rem;
}

.paper-card-title {
  font-size: 1.35rem;
  font-weight: 500;
  color: var(--color-paper-foreground);
  margin-bottom: 0.65rem;
}

.paper-card-desc {
  font-size: 0.875rem;
  line-height: 1.6;
  color: var(--color-paper-muted);
  margin-bottom: 1rem;
}

.paper-card-features {
  list-style: none;
  font-size: 0.72rem;
  color: rgba(11, 14, 20, 0.75);
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  padding-top: 0.75rem;
  border-top: 1px dashed rgba(11, 14, 20, 0.15);
}

.paper-card-features li::before {
  content: "→ ";
  color: var(--color-primary-foreground);
  font-weight: bold;
}
</style>
