<template>
  <q-page padding>
    <div class="row q-col-gutter-sm">
      <div v-for="item in state.parties" :key="item.id" class="col-6">
        <q-card class="party-card relative-position" @click="handlePartyClick(item)">
          <q-img :ratio="1" :src="item.logo"></q-img>
        </q-card>
      </div>
    </div>
  </q-page>
</template>
<script setup>
import {onMounted, reactive} from "vue";
import {API} from 'aws-amplify';
import {listParties} from '../graphql/queries'
import {useRouter} from "vue-router";

// import { AdMobPlus, BannerAd } from '@admob-plus/capacitor'/

const router = useRouter();
const state = reactive({
  parties: []
})
const fetchParties = async () => {
  const res = await API.graphql({
    query: listParties,
  })
  state.parties = res?.data?.listParties?.items || [];
}

const handlePartyClick = async (item) => {
  await router.push({
    name: 'party:detail', params: {
      id: item.id
    }
  })


}
onMounted(async () => {
  await fetchParties();
  // (async () => {
  //   const banner = new BannerAd({
  //     adUnitId: 'ca-app-pub-3940256099942544/6300978111',
  //   })
  //   await banner.show()
  //
  //   AdMobPlus.addListener('banner.impression', async () => {
  //     await banner.hide()
  //   })
  // })()


})

</script>
