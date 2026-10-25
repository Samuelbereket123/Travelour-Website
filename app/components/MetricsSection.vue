<template>
  <section id="metrics" class="metrics-section">
    <div class="shell">
      <div class="metrics-header">
        <p class="eyebrow">
          The Ecosystem in Numbers
        </p>
      </div>

      <div class="metrics-grid">
        <div v-for="metric in metrics" :key="metric.label" class="metric-item">
          <div class="metric-num-wrap">
            <span class="metric-num font-display">{{ metric.value }}</span>
            <span v-if="metric.suffix" class="metric-suffix font-mono">{{ metric.suffix }}</span>
          </div>
          <span class="metric-label font-mono">{{ metric.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const metrics = [
  {
    value: '6',
    suffix: 'Verticals',
    label: 'Curated Directories'
  },
  {
    value: '100',
    suffix: '%',
    label: 'KYC Verified'
  },
  {
    value: '0',
    suffix: 'Scraped',
    label: 'Verified Relationships'
  },
  {
    value: '48',
    suffix: 'Hours',
    label: 'Arrival Journeys'
  },
  {
    value: 'AED 0',
    suffix: '',
    label: 'Consumer Cost'
  },
  {
    value: 'Direct',
    suffix: 'Touch',
    label: 'WhatsApp & Call'
  }
]
</script>

<style scoped>
.metrics-section {
  border-top: 1px solid var(--color-line);
  border-bottom: 1px solid var(--color-line);
  background-color: var(--color-background);
  padding-top: 3.5rem;
  padding-bottom: 3.5rem;
}

.metrics-header {
  margin-bottom: 2.5rem;
}

.metrics-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem 1.5rem;
}

@media (min-width: 640px) {
  .metrics-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1024px) {
  .metrics-grid {
    grid-template-columns: repeat(6, 1fr);
    gap: 2rem;
  }
}

.metric-item {
  display: flex;
  flex-direction: column;
}

.metric-num-wrap {
  display: flex;
  align-items: baseline;
  gap: 0.35rem;
}

.metric-num {
  font-size: clamp(2.2rem, 3.8vw, 3.2rem);
  font-weight: 300;
  line-height: 1;
  color: var(--color-foreground);
  letter-spacing: -0.03em;
}

.metric-suffix {
  font-size: 0.85rem;
  color: var(--color-primary);
  font-weight: 600;
}

.metric-label {
  margin-top: 0.75rem;
  font-size: 0.68rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--color-muted-foreground);
}
</style>
