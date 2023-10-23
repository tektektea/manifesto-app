<template>
  <q-layout view="hHh lpR fFf">

    <q-header height-hint="70" style="height: 65px" elevated class="bg-dark text-white">
      <q-toolbar style="height: 70px">
        <q-toolbar-title class="text-weight-bold">
          <q-btn @click="$router.back()" v-if="!isHome" class="q-px-none" flat icon="chevron_left" label="Back" no-caps/>
          <span class="q-ml-sm text-md">Mizoram Election 2023</span>
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-page-container class="app-background text-grey-5 ">
      <router-view class="container"/>
    </q-page-container>

    <q-footer v-if="isHome" style="min-height: 70px" elevated class="bg-dark text-grey-5 column justify-center">
      <q-toolbar class="flex justify-around items-center">

        <q-item :active="$route.name==='home'" clickable @click="$router.replace({name:'home'})">
          <q-item-section>
            <div class="text-center">
              <q-icon class="text-center" size="24px" name="villa"></q-icon>
              <div class="text-sm text-bold">Party</div>
            </div>
          </q-item-section>
        </q-item>

        <q-item :active="$route.name==='candidates'" clickable @click="$router.replace({name:'candidates'})">
          <q-item-section>
            <div class="text-center">
              <q-icon class="text-center" size="24px" name="diversity_1"></q-icon>
              <div class="text-sm text-bold">Candidates</div>
            </div>
          </q-item-section>
        </q-item>

      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script setup>
import {computed, onMounted} from "vue";
import {useMasterData} from "stores/master-store";
import {useRoute} from "vue-router";

const masterStore = useMasterData();
const isHome=computed(()=>useRoute().name === 'home' || useRoute().name === 'candidates')
const exitSystem=e=>{

}

onMounted(()=>{
  masterStore.fetchConstituencies();
})
</script>
