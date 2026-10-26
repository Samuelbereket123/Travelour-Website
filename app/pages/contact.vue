<template>
  <div class="page-contact">
    <section class="contact-hero section-spacing hero-sail">
      <div class="shell">
        <p class="eyebrow">
          GET IN TOUCH WITH TRAVELOUR
        </p>
        <h1 class="contact-title font-display">
          We are here in Dubai.<br />
          <span class="contact-title-accent">Let's build something trusted.</span>
        </h1>
        <p class="contact-subtitle font-sans">
          Whether you want to partner your business, inquire about commercial memberships, suggest a Dubai hidden gem, or speak with our operator team: we respond within 24 hours.
        </p>
      </div>
    </section>

    <section class="contact-form-section section-spacing">
      <div class="shell">
        <div class="contact-split-grid">
          <!-- Form Left -->
          <div class="contact-form-card glass-panel glass-edge">
            <h3 class="form-card-title font-display">Send Us a Direct Message</h3>
            <form @submit.prevent="sendMessage">
              <div class="form-inputs">
                <div class="input-wrap">
                  <label class="input-label font-sans">YOUR FULL NAME</label>
                  <input v-model="name" type="text" placeholder="Mohammed / Sarah" class="text-input" required />
                </div>
                <div class="input-wrap">
                  <label class="input-label font-sans">EMAIL ADDRESS</label>
                  <input v-model="email" type="email" placeholder="name@company.com" class="text-input" required />
                </div>
                <div class="input-wrap">
                  <label class="input-label font-sans">TOPIC</label>
                  <select v-model="topic" class="text-select font-sans" required>
                    <option value="" disabled selected>Select Inquiry Type</option>
                    <option value="partnership">Business Partnership & Membership</option>
                    <option value="talent">Talent Hub & Recruitment Inquiries</option>
                    <option value="editorial">Guide Editorial Suggestion</option>
                    <option value="press">Press & Media</option>
                    <option value="support">Consumer Support</option>
                  </select>
                </div>
                <div class="input-wrap">
                  <label class="input-label font-sans">MESSAGE</label>
                  <textarea v-model="message" rows="4" placeholder="Tell us about your business or inquiry..." class="text-textarea" required></textarea>
                </div>
              </div>
              <button type="submit" class="btn btn-primary mt-4" :disabled="sent">
                <span v-if="!sent">Send Message</span>
                <span v-else style="display: inline-flex; align-items: center; gap: 0.4rem;">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Message Dispatched
                </span>
              </button>
            </form>
          </div>

          <!-- Contact Details Right -->
          <div class="contact-info-col">
            <div class="info-box glass-panel">
              <span class="info-label font-sans">DUBAI HEADQUARTERS</span>
              <h4 class="info-value font-display">Travelour Digital LLC</h4>
              <p class="info-sub font-sans">
                DIFC Innovation Hub, Gate Avenue<br />
                Dubai International Financial Centre<br />
                Dubai, United Arab Emirates
              </p>
            </div>

            <div class="info-box glass-panel">
              <span class="info-label font-sans">DIRECT INBOXES</span>
              <p class="contact-line font-sans"><span>PARTNERSHIPS:</span> partners@travelour.com</p>
              <p class="contact-line font-sans"><span>TALENT:</span> talent@travelour.com</p>
              <p class="contact-line font-sans"><span>SUPPORT:</span> care@travelour.com</p>
            </div>

            <div class="info-box glass-panel">
              <span class="info-label font-sans">OFFICE HOURS</span>
              <p class="info-sub font-sans">
                Monday to Friday: 9:00 AM to 6:00 PM GST<br />
                Urgent operator response: 24/7 on designated member lines
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

useHead({
  title: 'Contact Travelour | Dubai Gateway Team',
  meta: [
    {
      name: 'description',
      content: 'Contact the Travelour team in DIFC Dubai for business partnerships, talent inquiries, and support.'
    }
  ]
})

const name = ref('')
const email = ref('')
const topic = ref('')
const message = ref('')
const sent = ref(false)

const sendMessage = () => {
  sent.value = true
}
</script>

<style scoped>
.page-contact {
  padding-top: var(--nav-height);
  background-color: var(--color-background);
}

.contact-hero {
  padding-top: 4rem;
  padding-bottom: 4rem;
  border-bottom: 1px solid rgba(143, 233, 255, 0.16);
}

.contact-title {
  font-size: clamp(2.5rem, 5.5vw, 4.4rem);
  font-weight: 300;
  line-height: 1.1;
  color: #ffffff;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  letter-spacing: -0.03em;
  text-shadow: 0 4px 24px rgba(0, 0, 0, 0.4);
}

.contact-title-accent {
  font-weight: 700;
  color: var(--color-butter);
  text-shadow: 0 4px 30px rgba(255, 216, 64, 0.35);
}

.contact-subtitle {
  font-size: 1.15rem;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.9);
  max-width: 48rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}

.contact-split-grid {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

@media (min-width: 1024px) {
  .contact-split-grid {
    flex-direction: row;
    gap: 4rem;
  }
}

.contact-form-card {
  width: 100%;
  padding: 3rem 2rem;
  border-radius: var(--radius-card);
}

@media (min-width: 1024px) {
  .contact-form-card {
    width: 60%;
    padding: 3.5rem 3rem;
  }
}

.form-card-title {
  font-size: 1.6rem;
  font-weight: 400;
  color: var(--color-foreground);
  margin-bottom: 2rem;
}

.form-inputs {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.input-wrap {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.input-label {
  font-size: 0.68rem;
  letter-spacing: 0.18em;
  color: var(--color-muted-foreground);
}

.text-input, .text-select, .text-textarea {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: var(--radius-tile);
  padding: 0.85rem 1rem;
  color: #fff;
  font-size: 0.9rem;
  outline: none;
  font-family: var(--font-sans);
  transition: all 0.2s ease;
}

.text-input:focus, .text-select:focus, .text-textarea:focus {
  border-color: var(--color-primary);
  background: rgba(255, 255, 255, 0.07);
  box-shadow: 0 0 15px rgba(245, 192, 66, 0.2);
}

.text-select option {
  background: var(--color-surface);
  color: #fff;
}

.contact-info-col {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

@media (min-width: 1024px) {
  .contact-info-col {
    width: 40%;
  }
}

.info-box {
  padding: 2rem;
  border-radius: var(--radius-card);
}

.info-label {
  font-size: 0.68rem;
  letter-spacing: 0.2em;
  color: var(--color-primary);
  display: block;
  margin-bottom: 0.75rem;
}

.info-value {
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--color-foreground);
  margin-bottom: 0.5rem;
}

.info-sub {
  font-size: 0.88rem;
  line-height: 1.6;
  color: var(--color-muted-foreground);
}

.contact-line {
  font-size: 0.8rem;
  color: var(--color-foreground);
  margin-bottom: 0.5rem;
}

.contact-line span {
  color: var(--color-primary);
}

.mt-4 {
  margin-top: 1rem;
}
</style>
