<template>
  <TransitionRoot appear :show="props.isOpen" as="template">
    <Dialog as="div" @close="$emit('closeModal')" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-md transform overflow-hidden rounded-2xl border-2 border-grey shadow-inner shadow-grey bg-white p-6 text-left align-middle transition-all"
            >
              <div class="flex flex-row justify-between">
                <DialogTitle as="h3" class="text-lg leading-6 text-error font-bold">
                  {{ props.title }}
                </DialogTitle>
                <Button @click="$emit('closeModal')">
                  <XMarkIcon class="w-8" />
                </Button>
              </div>
              <div class="mt-2">
                <slot />
              </div>

              <div class="mt-4 flex justify-between text-center space-x-5">
                <button
                  type="button"
                  class="inline-flex justify-center rounded-md border-2 border-error p-3 text-sm font-medium text-error shadow-lg"
                  @click="$emit('closeModal')"
                >
                  Schließen
                </button>
                <a
                  href="tel:015771937200"
                  class="inline-flex justify-center rounded-md bg-error p-3 text-sm font-medium text-white shadow-lg"
                  >Anrufen</a
                >
                <a
                  href="mailto:kosmetikstudio-benning@web.de?subject=Terminanfrage"
                  class="inline-flex justify-center rounded-md bg-error p-3 text-sm font-medium text-white shadow-lg"
                  >E-Mail schreiben</a
                >
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/solid'

const props = defineProps({ title: String, isOpen: Boolean })

const emit = defineEmits<{
  closeModal: void
  callNumber: void
}>()
</script>
