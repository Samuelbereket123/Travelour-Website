<template>
  <section id="guide" class="guide-section section-spacing">
    <div class="shell">
      <div class="guide-header">
        <p class="eyebrow">
          The Dubai Guidebook · A Handbook, Not a Person
        </p>
        <h2 class="guide-title font-display">
          Everything you need to know about how <span class="gold-text-gradient">Dubai actually works.</span>
        </h2>
        <p class="guide-subtitle font-sans">
          No robotic tour guides or sponsored fluff. A practical, living handbook written by Dubai residents covering essentials, emergency numbers, cultural laws, transport, and curated step-by-step journeys.
        </p>
      </div>

      <!-- Guide Interactive Category Tabs -->
      <div class="guide-tabs-container">
        <div class="guide-tabs-list">
          <button
            v-for="(tab, index) in guideTabs"
            :key="tab.id"
            type="button"
            class="guide-tab-btn"
            :class="{ 'active': activeTab === index }"
            @click="activeTab = index"
          >
            <span class="tab-index font-mono">0{{ index + 1 }}</span>
            <span class="tab-title">{{ tab.title }}</span>
          </button>
        </div>
      </div>

      <!-- Active Tab Content Card -->
      <div class="guide-content-panel glass-panel glass-edge">
        <div class="panel-header-row">
          <div class="panel-title-group">
            <span class="panel-category-pill font-mono">{{ guideTabs[activeTab].badge }}</span>
            <h3 class="panel-title font-display">{{ guideTabs[activeTab].heading }}</h3>
          </div>
          <NuxtLink to="/solutions" class="btn-link-gold font-mono">
            <span>Read All Guide Articles</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </NuxtLink>
        </div>

        <p class="panel-desc font-sans">{{ guideTabs[activeTab].description }}</p>

        <!-- Dynamic Items Grid -->
        <div class="guide-items-grid">
          <div
            v-for="(item, i) in guideTabs[activeTab].items"
            :key="i"
            class="guide-item-card"
          >
            <div class="item-tag font-mono">{{ item.tag }}</div>
            <h4 class="item-title font-display">{{ item.title }}</h4>
            <p class="item-detail font-sans">{{ item.detail }}</p>
            <div v-if="item.action" class="item-action font-mono">
              <span>{{ item.action }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Curated Journeys Strip -->
      <div class="journeys-hub-section">
        <div class="journeys-intro">
          <p class="eyebrow journeys-eyebrow">
            Curated Journeys · Step-by-Step Plans
          </p>
          <h3 class="journeys-heading font-display">
            Turning directories into a step-by-step plan.
          </h3>
        </div>

        <div class="journeys-cards-grid">
          <div v-for="journey in journeys" :key="journey.title" class="journey-card glass-panel">
            <div class="journey-meta font-mono">
              <span class="journey-duration">{{ journey.duration }}</span>
              <span class="journey-stops">{{ journey.stops }}</span>
            </div>
            <h4 class="journey-title font-display">{{ journey.title }}</h4>
            <p class="journey-desc font-sans">{{ journey.description }}</p>
            <div class="journey-tags">
              <span v-for="tag in journey.tags" :key="tag" class="journey-pill font-mono">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeTab = ref(0)

const guideTabs = [
  {
    id: 'emergency',
    title: 'Emergency & Health',
    badge: 'Immediate Response',
    heading: 'Emergency Numbers, 24/7 Care & Medical Rights',
    description: 'Dubai emergency services are rapid, multilingual, and integrated with GPS dispatch. Keep these critical numbers saved.',
    items: [
      {
        tag: 'POLICE · 999',
        title: 'Emergency Police Dispatch',
        detail: 'Immediate response across Dubai. For non-emergencies and tourist disputes, dial 901 or the Tourist Police at 800-4888.',
        action: 'Direct Call: 999'
      },
      {
        tag: 'AMBULANCE · 998',
        title: 'Dubai Ambulance Services (DCAS)',
        detail: 'Advanced paramedic units dispatched immediately. Coverage includes all residential areas, highways, and public venues.',
        action: 'Direct Call: 998'
      },
      {
        tag: 'FIRE & RESCUE · 997',
        title: 'Civil Defence',
        detail: 'Emergency firefighting, high-rise evacuation, and residential fire security protocols.',
        action: 'Direct Call: 997'
      },
      {
        tag: 'PHARMACY & HOSPITALS',
        title: '24/7 DHA Certified Pharmacies',
        detail: 'Life Pharmacy, Aster, and Mediclinic facilities operating 24 hours with certified prescription dispensers.',
        action: 'View DHA Directory'
      }
    ]
  },
  {
    id: 'driving',
    title: 'Driving, Tolls & Salik',
    badge: 'Transport Know-How',
    heading: 'Salik Toll Gates, Parking SMS & Road Navigation',
    description: 'Dubai roads are world-class but strictly monitored. Avoid unexpected fines by understanding tolls, parking zones, and radar rules.',
    items: [
      {
        tag: 'SALIK TOLL SYSTEM',
        title: 'Seamless Toll RFID Tags',
        detail: 'No physical toll booths. Cars are billed AED 4 automatically per gate via RFID windshield tag. Registered rentals charge automatically.',
        action: 'Salik Gate Locations'
      },
      {
        tag: 'PARKING VIA SMS',
        title: 'RTA Parking SMS (7275)',
        detail: 'Format: [Plate No] [Zone] [Duration in Hours] sent to 7275. Zones A (commercial) and B (standard) vary in hourly rates.',
        action: 'SMS Code Guide'
      },
      {
        tag: 'METRO & TRAM',
        title: 'NOL Card Transit',
        detail: 'Red (tourist), Silver (regular), and Gold (first-class cabin) cards work seamlessly across Dubai Metro, Tram, and Marine buses.',
        action: 'Transit Map'
      },
      {
        tag: 'FINES & SPEED LIMITS',
        title: 'Grace Speed Limit Buffer',
        detail: 'UAE road radars generally trigger 20 km/h above the posted sign, except on Abu Dhabi highways where speed limits are exact.',
        action: 'Rules Checklist'
      }
    ]
  },
  {
    id: 'culture',
    title: 'Culture, Laws & Etiquette',
    badge: 'Legal & Cultural Basics',
    heading: 'Understanding Local Customs, Laws & Modesty',
    description: 'Dubai is cosmopolitan and welcoming to 200+ nationalities while honoring Islamic heritage and UAE federal laws.',
    items: [
      {
        tag: 'PUBLIC ETIQUETTE',
        title: 'Dress Code & Modesty',
        detail: 'Swimwear is fully acceptable at private beaches and pools. In shopping malls and government buildings, shoulders and knees should be covered.',
        action: 'Cultural Norms'
      },
      {
        tag: 'HOLY MONTH',
        title: 'Ramadan Guidelines',
        detail: 'During fasting hours, public respect is observed. Most licensed restaurants remain open behind discreet screens and delivery operates normally.',
        action: 'Visitor Handbook'
      },
      {
        tag: 'HEALTH & PHARMACY',
        title: 'Controlled Medications',
        detail: 'Certain common painkillers and psychiatric medicines require an online permit from the Ministry of Health before arriving at Dubai Airport.',
        action: 'Check Prohibited List'
      },
      {
        tag: 'COMMUNICATION',
        title: 'Social Media & Privacy Laws',
        detail: 'Taking photos of strangers without consent, posting defamation, or profane gestures carries strict legal penalties in the UAE.',
        action: 'Legal Primer'
      }
    ]
  },
  {
    id: 'settling',
    title: 'Settling In Dubai',
    badge: 'Relocation Essentials',
    heading: 'Emirates ID, Ejari, DEWA & Banking Protocols',
    description: 'Moving to Dubai? The step-by-step checklist to go from a tourist visa to a fully registered UAE resident with banking and tenancy.',
    items: [
      {
        tag: 'IDENTITY CARD',
        title: 'Emirates ID Biometrics',
        detail: 'Your residency foundation. Medical fitness test at a DHA centre followed by digital fingerprint and iris capture at ICP.',
        action: 'Step-by-step Timeline'
      },
      {
        tag: 'RENTAL CONTRACTS',
        title: 'Ejari Registration',
        detail: 'Official tenancy registry required for all long-term residential leases before DEWA utilities can be connected.',
        action: 'Tenancy Rights'
      },
      {
        tag: 'WATER & POWER',
        title: 'DEWA Account Activation',
        detail: 'Connects electricity and cooling. Automatically links once your Ejari contract is attested online by your landlord or broker.',
        action: 'Deposit & Activation'
      },
      {
        tag: 'FINANCE & BANKING',
        title: 'Opening a UAE Bank Account',
        detail: 'Requires Emirates ID, salary certificate, and residency visa. Digital banks like Wio offer fast onboarding for residents.',
        action: 'Banking Comparison'
      }
    ]
  }
]

const journeys = [
  {
    title: 'The First 48 Hours in Dubai',
    duration: '2 Days',
    stops: '8 Curated Stops',
    description: 'From landing at DXB, getting an e-SIM and Salik tag, to checking into Downtown and having dinner overlooking the Burj Khalifa fountains.',
    tags: ['Arrival', 'SIM & Nol', 'First Dinner', 'Transport']
  },
  {
    title: 'A Perfect First Day: Heritage to High-Tech',
    duration: '1 Full Day',
    stops: '6 Landmarks',
    description: 'Morning abra ride on Dubai Creek and spice souks, afternoon at Museum of the Future, and sunset cocktails in DIFC.',
    tags: ['Culture', 'Old Dubai', 'DIFC Dining', 'Architecture']
  },
  {
    title: 'Relocating to Dubai Blueprint',
    duration: '14 Days',
    stops: '10 Action Steps',
    description: 'The definitive sequence: temporary stay booking, Emirates ID biometric appointment, finding verified school placements, and signing Ejari.',
    tags: ['Expat Guide', 'Ejari', 'Schools', 'Banking']
  },
  {
    title: 'Medical Visitor Care Pathway',
    duration: '3 to 7 Days',
    stops: 'Specialist Network',
    description: 'Curated for international patients: accredited hospital consultation, recovery suites, direct WhatsApp communication, and wellness cuisine.',
    tags: ['Healthcare', 'Specialists', 'Recovery', 'Verified Doctors']
  }
]
</script>

<style scoped>
.guide-section {
  background-color: var(--color-background);
  border-top: 1px solid var(--color-line);
}

.guide-header {
  max-width: 52rem;
  margin-bottom: 3rem;
}

.guide-title {
  font-size: clamp(2.2rem, 4.5vw, 3.6rem);
  font-weight: 300;
  line-height: 1.1;
  color: var(--color-foreground);
  margin-top: 1rem;
  margin-bottom: 1.25rem;
  letter-spacing: -0.03em;
}

.guide-subtitle {
  font-size: 1.05rem;
  line-height: 1.65;
  color: var(--color-muted-foreground);
}

/* Tabs */
.guide-tabs-container {
  margin-bottom: 2rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;
}

.guide-tabs-list {
  display: flex;
  gap: 0.75rem;
  min-width: max-content;
}

.guide-tab-btn {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.4rem;
  border-radius: var(--radius-pill);
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: var(--color-muted-foreground);
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.25s ease;
}

.guide-tab-btn:hover {
  background: rgba(255, 255, 255, 0.08);
  color: var(--color-foreground);
  border-color: rgba(255, 255, 255, 0.2);
}

.guide-tab-btn.active {
  background: var(--color-primary);
  color: var(--color-primary-foreground);
  border-color: var(--color-primary);
  box-shadow: 0 4px 20px rgba(255, 216, 64, 0.35);
}

.tab-index {
  font-size: 0.7rem;
  opacity: 0.8;
}

/* Content Panel */
.guide-content-panel {
  padding: 2.5rem 2rem;
  border-radius: var(--radius-card);
  margin-bottom: 5rem;
}

@media (min-width: 768px) {
  .guide-content-panel {
    padding: 3.5rem 3rem;
  }
}

.panel-header-row {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
}

@media (min-width: 768px) {
  .panel-header-row {
    flex-direction: row;
    align-items: center;
  }
}

.panel-title-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.panel-category-pill {
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-primary);
}

.panel-title {
  font-size: clamp(1.5rem, 2.5vw, 2.2rem);
  font-weight: 400;
  color: var(--color-foreground);
}

.panel-desc {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--color-muted-foreground);
  max-width: 50rem;
  margin-bottom: 2.5rem;
}

/* Grid of items */
.guide-items-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .guide-items-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1200px) {
  .guide-items-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.guide-item-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: var(--radius-tile);
  padding: 1.75rem 1.4rem;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
}

.guide-item-card:hover {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(245, 192, 66, 0.3);
  transform: translateY(-3px);
}

.item-tag {
  font-size: 0.65rem;
  letter-spacing: 0.18em;
  color: var(--color-primary);
  margin-bottom: 0.75rem;
}

.item-title {
  font-size: 1.15rem;
  font-weight: 500;
  color: var(--color-foreground);
  margin-bottom: 0.65rem;
  line-height: 1.3;
}

.item-detail {
  font-size: 0.85rem;
  line-height: 1.55;
  color: var(--color-muted-foreground);
  margin-bottom: 1.25rem;
  flex: 1;
}

.item-action {
  font-size: 0.72rem;
  color: var(--color-foreground);
  padding-top: 0.75rem;
  border-top: 1px dashed rgba(255, 255, 255, 0.1);
  letter-spacing: 0.1em;
}

/* Journeys Section */
.journeys-hub-section {
  border-top: 1px solid var(--color-line);
  padding-top: 4rem;
}

.journeys-intro {
  margin-bottom: 2.5rem;
}

.journeys-tag-group {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.text-muted {
  color: var(--color-muted-subtle);
  letter-spacing: 0.18em;
}

.text-xs {
  font-size: 0.7rem;
}

.journeys-heading {
  font-size: clamp(1.8rem, 3.2vw, 2.6rem);
  font-weight: 300;
  color: var(--color-foreground);
}

.journeys-cards-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 640px) {
  .journeys-cards-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .journeys-cards-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.journey-card {
  padding: 1.85rem 1.5rem;
  border-radius: var(--radius-card);
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
}

.journey-card:hover {
  transform: translateY(-4px);
  border-color: rgba(245, 192, 66, 0.35);
}

.journey-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.7rem;
  color: var(--color-primary);
  margin-bottom: 1rem;
  letter-spacing: 0.15em;
}

.journey-title {
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--color-foreground);
  margin-bottom: 0.75rem;
  line-height: 1.25;
}

.journey-desc {
  font-size: 0.85rem;
  line-height: 1.6;
  color: var(--color-muted-foreground);
  margin-bottom: 1.5rem;
  flex: 1;
}

.journey-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.journey-pill {
  font-size: 0.65rem;
  padding: 0.2rem 0.55rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-pill);
  color: var(--color-muted-foreground);
  letter-spacing: 0.08em;
}
</style>
