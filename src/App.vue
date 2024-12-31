<template>
  <div id="app" class="h-full">
    <!--Header-->
    <div class="flex justify-center p-10 text-center">
      <h1 class="text-6xl font-bold text-white font-handwritten">
        Kosmetikstudio im Herzen von Haldern!
      </h1>
    </div>
    <div class="flex flex-row w-full">
      <!--Body-->
      <router-view />
    </div>
    <!--Impressum-->
    <div class="p-10">
      <h1 class="text-center text-2xl text-white">Impressum</h1>
      <div>
        <ul class="text-center text-white">
          <li>Lindenstraße 1D 46459 Rees - Haldern</li>
          <li>Tel: 0157-71937200</li>
          <li>E-Mail: kosmetikstudio-benning@web.de</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
