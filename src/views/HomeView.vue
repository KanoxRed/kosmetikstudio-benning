<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 place-content-between pl-8 pr-8">
    <div>
      <TextCard title="Über mich" image-src="mama">
        <p>
          Ich heiße Kordula Benning, bin verheiratet und habe 4 erwachsene Kinder. Meine Ausbildung
          zur Visagistin und Kosmetikerin habe ich berufsbegleitend bei Lancome gemacht. Seit 2017
          biete ich ganzzeitliche Kosmetik in Rees / Haldern an.
          <br />
          <br />
          Dabei liegt mein Schwerpunkt auf einer zeitlosen attraktiven und gesunden Haut in der Sie
          sich wohl fühlen. Ich arbeite mit hochwertigen Pflegeprodukten von Hildegard Braukmann,
          Malu Wilz und Guinot. Regelmäßig nehme ich an Weiterbildungen teil um ihnen
          hauttypgerechte Behandlungen und Pflegeprodukte zu empfehlen.
        </p>
      </TextCard>
    </div>
    <div>
      <TextCard title="Dienstleistungen" image-src="massage">
        <p class="h-full">
          Ich biete mehrere verschiedene Behandlungsarten an. Neben der kosmetischen Behandlung und
          der Grundbehandlung biete ich vor allem auch Spezialbehandlungen an. Zu jeder Behandlung
          kann man sich auch Zusatzleistungen dazubuchen.<br /><br />
          Eine detailliertere Ansicht meiner gebotenen Dienstleistungen und den dazugehörigen
          Preisen finden sie in meiner Preisliste
        </p>
        <div class="flex flex-row justify-between">
          <p></p>
          <Button class="text-white bg-error rounded-lg p-2 shadow-lg" @click="openModal()">
            zur Preisliste
          </Button>
        </div>
      </TextCard>
    </div>
    <div>
      <TextCard title="Produkte" image-src="test">
        <p>
          Ich arbeite vorrangig mit Produkten von den bewährten Marken Hildegard Braukmann, Malu
          Wilz und Guinot deren Produkte ich auch selbst im Privatgebrauch gerne verwende.
          <br /><br />
          Für den Kauf von Pflegeprodukten und Geschenkgutscheinen rufen sie bitte an oder schreiben
          mir eine Nachricht über Whatsapp 015771937200
        </p>
      </TextCard>
    </div>
    <div>
      <TextCard title="Kontakt / Öffnungszeiten" image-src="straße">
        <br />
        <p>Lindenstraße 1 D 46459 Rees - Haldern</p>
        <a href="tel:015771937200" class="text-error">Tel: 0157-71937200</a>
        <br />
        <a href="mailto:kosmetikstudio-benning@web.de?subject=Terminanfrage" class="text-error"
          >Email: kosmetikstudio-benning@web.de</a
        >
        <p>Termine nach telefonischer Vereinbarung oder per Whatsapp Nachricht an jedem:</p>
        <br />
        <ul>
          <li>Dienstag</li>
          <li>Mittwoch</li>
          <li>Donnerstag</li>
        </ul>
      </TextCard>
    </div>
  </div>
  <DetailedModalCard title="Preisliste" @close-modal="closeModal()" :is-open="isOpen">
    <div class="text-left">
      <h2 class="text-error text-xl font-bold truncate">Kosmetische Grundbehandlung</h2>
      <div>
        <p>
          mit Hautanalyse, Reinigung, Augenbrauenkorrektur, Peeling, Serum, Ausreinigung Gesicht,
          Hals und Dekolletemassage, Maske
        </p>
      </div>
      <br />
      <div class="flex flex-row justify-between">
        <p>Preis</p>
        <p>69.0 €</p>
      </div>
      <div class="flex flex-row justify-between">
        <p>Dauer</p>
        <p>ca 85min</p>
      </div>
    </div>
    <div class="text-left pt-4">
      <h2 class="text-error text-xl font-bold truncate">Kosmetische Behandlung</h2>
      <div>
        <p>
          mit Hautanalyse, Reinigung, Augenbrauenkorrektur, Peeling, Serum, Ausreinigung und Maske
        </p>
      </div>
      <br />
      <div class="flex flex-row justify-between">
        <p>Preis</p>
        <p>47.5 €</p>
      </div>
      <div class="flex flex-row justify-between">
        <p>Dauer</p>
        <p>ca 55min</p>
      </div>
    </div>
    <div class="text-left pt-4">
      <h2 class="text-error text-l font-bold truncate">Zusatzleistungen</h2>
      <div v-for="item in buildSubItems()" :key="item.title" class="flex justify-between">
        <p>{{ item.title }}</p>
        <p>{{ item.price }}€</p>
      </div>
    </div>
    <div class="text-left pt-4">
      <h2 class="text-error text-xl font-bold truncate">Spezialbehandlungen</h2>
      <div v-for="item in buildSpecialItems()" :key="item.title">
        <div class="flex justify-between">
          <p>{{ item.title }}</p>
          <p>{{ item.price }}€</p>
        </div>
        <p class="text-grey">{{ item.description }}</p>
      </div>
    </div>
    <div class="text-left pt-4">
      <h2 class="text-error text-xl font-bold truncate">Make-Up</h2>
      <div v-for="item in buildMakeUpItems()" :key="item.title">
        <div class="flex justify-between">
          <p>{{ item.title }}</p>
          <p>{{ item.price }}€</p>
        </div>
        <p class="text-grey">{{ item.description }}</p>
      </div>
    </div>
  </DetailedModalCard>
</template>
<script setup lang="ts">
import TextCard from '../components/TextCard.vue'
import DetailedModalCard from '@/components/DetailedModalCard.vue'
import type { Item } from '@/model/Item'
import { ref } from 'vue'

const isOpen = ref(false)

function closeModal() {
  isOpen.value = false
}
function openModal() {
  isOpen.value = true
}

function buildSubItems() {
  const subItems: Item[] = [
    {
      title: 'Wimpern und Augenbrauen inklusive Zupfen',
      img: '',
      description: '',
      price: '29.0',
    },
    {
      title: 'Zusatzleistung in der Behandlung',
      img: '',
      description: '',
      price: '16.0',
    },
    {
      title: 'Wimpern färben inklusive Zupfen',
      img: '',
      description: '',
      price: '25.0',
    },
    {
      title: 'Enthaarung mit Zucker oder Wachs',
      img: '',
      description: '',
      price: '18.0',
    },
    {
      title: 'Gesicht',
      img: '',
      description: 'nach Zeit und Materialaufwand',
      price: '10.0',
    },
    {
      title: 'Beine/Unterschenkel',
      img: '',
      description: '',
      price: '30.0',
    },
    {
      title: 'Achseln',
      img: '',
      description: '',
      price: '20.0',
    },
  ]

  return subItems
}

function buildSpecialItems() {
  const specialItems: Item[] = [
    {
      title: 'Caviar',
      img: '',
      description: '',
      price: '79.0',
    },
    {
      title: 'Hydra Peel',
      img: '',
      description: 'Mandelic Glow oder Microdermabrasion',
      price: '89.0',
    },
    {
      title: 'Collagen Boost',
      img: '',
      description: '',
      price: '110.0',
    },
    {
      title: 'Age Summmum',
      img: '',
      description: '',
      price: '120.0',
    },
  ]

  return specialItems
}

function buildMakeUpItems() {
  const makeUpItems: Item[] = [
    {
      title: 'Braut Make-Up inklusive Probeschminken',
      img: '',
      description: '',
      price: '99.0',
    },
    {
      title: 'Make-Up für den besonderen Anlass',
      img: '',
      description: '',
      price: '39.0',
    },
    {
      title: 'Make-Up Beratung',
      img: '',
      description: '',
      price: '55.0',
    },
  ]

  return makeUpItems
}
</script>
