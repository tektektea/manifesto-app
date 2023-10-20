<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          Mizoram Election 2023
        </q-toolbar-title>
        <q-btn-dropdown rounded flat dropdown-icon="more_vert">
          <q-list>
            <q-item>
              <q-item-section> About Us</q-item-section>
            </q-item>
            <q-item @click=exitSystem>
            <q-item-section>Exit</q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view/>
    </q-page-container>

    <q-footer bordered class="bg-white text-accent">
      <q-toolbar class="flex justify-around items-center">

        <q-item>
          <q-item-section>
            <q-icon size="24px" name="home"></q-icon>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section>
            <q-icon size="24px" name="edit"></q-icon>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section>
            <q-icon size="24px" name="delete"></q-icon>
          </q-item-section>
        </q-item>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script setup>


const exitSystem=e=>{
  
}
</script>