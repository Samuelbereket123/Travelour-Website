<template>
  <div class="page-solutions">
    <!-- Solutions Hero -->
    <section class="solutions-hero section-spacing hero-sail">
      <div class="shell">
        <p class="eyebrow">
          THE SIX VERTICALS & THE DUBAI GUIDE
        </p>
        <h1 class="solutions-title font-display">
          Six verified directories.<br />
          <span class="solutions-title-accent">One Dubai gateway.</span>
        </h1>
        <p class="solutions-subtitle font-sans">
          Each vertical in Travelour is engineered specifically for that industry. Instead of one-size-fits-all generic listings, every place carries vertical-specific details, human editorial verdicts, and direct WhatsApp contact.
        </p>

        <!-- Vertical filter buttons -->
        <div class="vertical-filter-bar">
          <button
            v-for="v in verticalList"
            :key="v.id"
            type="button"
            class="filter-pill font-sans"
            :class="{ 'active': selectedVertical === v.id }"
            @click="selectedVertical = v.id"
          >
            <span class="pill-code">{{ v.code }}</span>
            <span>{{ v.title }}</span>
          </button>
        </div>
      </div>
    </section>

    <!-- Detailed Vertical Cards -->
    <section class="solutions-cards-section">
      <div class="shell">
        <div class="verticals-detail-stack">
          <div
            v-for="(vert, idx) in filteredVerticals"
            :key="vert.id"
            :id="vert.id"
            class="vert-detail-card glass-panel glass-edge"
          >
            <div class="vert-img-side">
              <img :src="vert.image" :alt="vert.title" class="vert-img" loading="lazy" />
            </div>

            <div class="vert-text-side">
              <div class="vert-num-row font-sans">
                <span class="vert-num">0{{ idx + 1 }}</span>
                <span class="vert-category-tag">{{ vert.category }}</span>
              </div>

              <h2 class="vert-title font-display">{{ vert.title }}</h2>
              <p class="vert-desc font-sans">{{ vert.description }}</p>

              <div class="vert-custom-block glass-panel">
                <span class="custom-block-label font-sans">VERTICAL-SPECIFIC DATA BLOCK</span>
                <p class="custom-block-text font-sans"><strong>{{ vert.blockName }}:</strong> {{ vert.blockDetails }}</p>
              </div>

              <div class="vert-features-grid font-sans">
                <div v-for="feat in vert.features" :key="feat" class="feat-item font-sans">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>{{ feat }}</span>
                </div>
              </div>

              <div class="vert-cta-row">
                <NuxtLink to="/download" class="btn btn-primary">
                  <span>Explore in App</span>
                </NuxtLink>
                <NuxtLink to="/business" class="btn-link-gold font-sans">
                  <span>List Your Venue Here</span>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Bottom CTA -->
    <DownloadCtaSection />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

useHead({
  title: 'Six Verticals | Travelour Dubai Gateway',
  meta: [
    {
      name: 'description',
      content: 'Explore the 6 verticals of Travelour: Explore, Eat, Stays, Health, Education and Talent. Verified listings with menus, room rates, doctors rosters and course prospectuses.'
    }
  ]
})

const selectedVertical = ref('all')

const verticalList = [
  { id: 'all', title: 'All Verticals', code: 'ALL' },
  { id: 'explore', title: 'Explore', code: '01' },
  { id: 'eat', title: 'Eat', code: '02' },
  { id: 'stays', title: 'Stays', code: '03' },
  { id: 'health', title: 'Health', code: '04' },
  { id: 'education', title: 'Education', code: '05' },
  { id: 'talent', title: 'Talent', code: '06' }
]

const verticalsData = [
  {
    id: 'explore',
    category: 'ATTRACTIONS, TOURS & REAL ESTATE',
    title: 'Travelour Explore',
    image: '/images/vertical_explore.jpg',
    description: 'The definitive directory for Dubai attractions, desert tours, museum exhibits, beach clubs, and prime property developments. Each listing includes location facts, recommended visiting hours, and human editorial verdicts.',
    blockName: 'Attraction & Property Matrix',
    blockDetails: 'Mall store directories, ticket guidance, tour itinerary schedules, and floorplans for luxury residential villas.',
    features: [
      'Editorial verdicts on hidden gems',
      'Direct WhatsApp booking with tour operators',
      'Zero fake or scraped listings',
      'Integration with curated 48h journeys'
    ]
  },
  {
    id: 'eat',
    category: 'DINING & HOSPITALITY',
    title: 'Travelour Eat',
    image: '/images/vertical_eat.jpg',
    description: 'Dubai is one of the culinary capitals of the world. Travelour Eat gives restaurants and cafés a printed-style digital menu, direct WhatsApp reservation channel, and verified dietary facts.',
    blockName: 'Printed-Style Digital Menu',
    blockDetails: 'Signature dishes, pricing in AED, dietary labels (halal, vegan, gluten-free), wine/beverage licenses, and outdoor terrace seating.',
    features: [
      'Direct WhatsApp message to host desk',
      'Direct phone call with one tap',
      'Tiered facts (Essentials, Stand Out, Good to Know)',
      'No intermediary commission on orders'
    ]
  },
  {
    id: 'stays',
    category: 'HOTELS & RESIDENTIAL APARTMENTS',
    title: 'Travelour Stays',
    image: '/images/vertical_stays.jpg',
    description: 'From beachfront luxury resorts on Palm Jumeirah to serviced executive apartments in DIFC. Compare room types, occupancy allowances, and verified rate cards directly with the property.',
    blockName: 'Room Rates & Occupancy Card',
    blockDetails: 'Square footage, bed configuration, balcony views, club lounge access, and long-term monthly corporate rates.',
    features: [
      'Direct reservation desk contact',
      'Proximity to Dubai Metro & tram stations',
      'Verified hotel licenses under Dubai DTCM',
      'Exclusive geofenced resident passes'
    ]
  },
  {
    id: 'health',
    category: 'CLINICS, HOSPITALS & WELLNESS',
    title: 'Travelour Health',
    image: '/images/vertical_health.jpg',
    description: 'A comprehensive healthcare directory for both residents and medical tourists. Verified clinics and hospitals with doctor rosters, specialties, spoken languages, and health insurance networks.',
    blockName: 'Doctors Roster & Specialty Cards',
    blockDetails: 'Attending physician names, DHA license credentials, clinic hours, appointment wait times, and accepted insurance networks.',
    features: [
      'Direct clinic WhatsApp consultation booking',
      'Emergency protocols & walk-in instructions',
      'Medical tourism arrival assistance',
      'Verified hospital credentials'
    ]
  },
  {
    id: 'education',
    category: 'SCHOOLS, UNIVERSITIES & ACADEMIES',
    title: 'Travelour Education',
    image: '/images/vertical_education.jpg',
    description: 'International curriculum schools, prestigious universities in Dubai Knowledge Park, and professional training academies. Complete course prospectuses and KHDA inspection ratings.',
    blockName: 'Course Prospectus & Curriculum',
    blockDetails: 'Curriculum breakdown (IB, British, American), age ranges, annual tuition fee structures, and extracurricular facilities.',
    features: [
      'Direct admissions team enquiries',
      'KHDA official rating disclosures',
      'Campus tour scheduling via WhatsApp',
      'Executive education & certifications'
    ]
  },
  {
    id: 'talent',
    category: 'VERIFIED LABOUR MARKET & JOBS',
    title: 'Travelour Talent',
    image: '/images/vertical_talent.jpg',
    description: 'A verified labour market where qualified talent pays an annual flat fee ($29) to be found by licensed Dubai employers, accompanied by a moderated Dubai jobs board.',
    blockName: 'Verified Talent Profile & Portfolio',
    blockDetails: 'Skills verification, portfolio links, current residency status, notice period, and salary expectations.',
    features: [
      'Direct contact from UAE employers',
      'Moderated jobs board without ghost listings',
      'Zero recruiter cuts from compensation',
      'Native Stripe 12-month membership pass'
    ]
  }
]

const filteredVerticals = computed(() => {
  if (selectedVertical.value === 'all') return verticalsData
  return verticalsData.filter(v => v.id === selectedVertical.value)
})
</script>

<style scoped>
.page-solutions {
  padding-top: var(--nav-height);
  background-color: var(--color-background);
}

.solutions-hero {
  padding-top: 4rem;
  padding-bottom: 3.5rem;
  border-bottom: 1px solid rgba(5, 57, 73, 0.2);
}

.solutions-title {
  font-size: clamp(2.5rem, 5.5vw, 4.4rem);
  font-weight: 300;
  line-height: 1.1;
  color: var(--color-on-sail);
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  letter-spacing: -0.03em;
}

.solutions-title-accent {
  font-weight: 700;
  color: var(--color-on-sail);
}

.solutions-subtitle {
  font-size: 1.15rem;
  line-height: 1.65;
  color: var(--color-on-sail);
  opacity: 0.92;
  max-width: 48rem;
  margin-bottom: 2.5rem;
}

.vertical-filter-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.filter-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.65rem 1.25rem;
  border-radius: var(--radius-pill);
  background: rgba(255, 255, 255, 0.45);
  border: 1px solid rgba(5, 57, 73, 0.2);
  color: var(--color-on-sail);
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transition: all 0.2s ease;
}

.filter-pill:hover {
  background: rgba(255, 255, 255, 0.75);
  color: var(--color-on-sail);
  border-color: var(--color-on-sail);
}

.filter-pill.active {
  background: var(--color-butter);
  color: var(--color-ink);
  font-weight: 700;
  border-color: var(--color-butter-hover);
  box-shadow: 0 4px 16px rgba(5, 57, 73, 0.2);
}

.pill-code {
  font-size: 0.65rem;
  opacity: 0.85;
  letter-spacing: 0.15em;
}

.filter-pill.active .pill-code {
  opacity: 1;
  font-weight: 800;
}

/* Detail stack */
.solutions-cards-section {
  padding-top: 5rem;
  padding-bottom: 5rem;
}

.verticals-detail-stack {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

.vert-detail-card {
  display: flex;
  flex-direction: column;
  border-radius: var(--radius-card);
  overflow: hidden;
}

@media (min-width: 1024px) {
  .vert-detail-card {
    flex-direction: row;
    align-items: stretch;
  }
}

.vert-img-side {
  position: relative;
  width: 100%;
  min-height: 300px;
}

@media (min-width: 1024px) {
  .vert-img-side {
    width: 44%;
    min-height: 100%;
  }
}

.vert-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}



.vert-text-side {
  padding: 2.5rem 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
}

@media (min-width: 1024px) {
  .vert-text-side {
    padding: 3.5rem 3rem;
    width: 56%;
  }
}

.vert-num-row {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.vert-num {
  font-size: 0.85rem;
  color: var(--color-primary);
}

.vert-category-tag {
  font-size: 0.68rem;
  letter-spacing: 0.2em;
  color: var(--color-muted-subtle);
}

.vert-title {
  font-size: clamp(1.8rem, 3vw, 2.6rem);
  font-weight: 400;
  color: var(--color-foreground);
  margin-bottom: 1rem;
}

.vert-desc {
  font-size: 1rem;
  line-height: 1.65;
  color: var(--color-muted-foreground);
  margin-bottom: 1.5rem;
}

.vert-custom-block {
  padding: 1.25rem;
  border-radius: var(--radius-tile);
  border-left: 2px solid var(--color-primary);
  margin-bottom: 1.75rem;
}

.custom-block-label {
  font-size: 0.65rem;
  letter-spacing: 0.18em;
  color: var(--color-primary);
  display: block;
  margin-bottom: 0.4rem;
}

.custom-block-text {
  font-size: 0.88rem;
  color: #fff;
  line-height: 1.5;
}

.vert-features-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.6rem;
  margin-bottom: 2rem;
}

@media (min-width: 640px) {
  .vert-features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.feat-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  color: var(--color-muted-foreground);
}

.feat-item span:first-child {
  color: var(--color-emerald);
}

.vert-cta-row {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-top: auto;
}
</style>
