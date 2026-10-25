<template>
  <div class="page-home">
    <!-- Hero Section -->
    <HeroSection />

    <!-- Metrics Section -->
    <MetricsSection />

    <!-- High-Contrast Editorial Paper Section: The 6 Verticals -->
    <ServicesSection />

    <!-- Trust & Why Travelour Wins over Google Maps -->
    <TrustSection />

    <!-- The Dubai Guidebook & Curated Journeys -->
    <DubaiGuideSection />

    <!-- The Business Dashboard & Invite-Only Onboarding -->
    <BusinessDashboardSection />

    <!-- Talent Directory & Moderated Jobs Board -->
    <TalentSection />

    <!-- Download & Partner CTA Banner -->
    <DownloadCtaSection />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Travelour | The Dubai Gateway App',
  meta: [
    {
      name: 'description',
      content: 'The Dubai gateway app. Verified businesses and talent across six verticals, the Dubai Guide, curated arrival journeys, and direct contact. Trust and know-how for everyone in Dubai.'
    }
  ]
})
</script>

<style scoped>
.page-home {
  width: 100%;
  overflow-x: hidden;
}
</style>
