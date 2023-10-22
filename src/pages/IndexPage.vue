<template>
  <q-page padding>
    <div class="row q-col-gutter-sm">
      <div v-for="item in state.parties" :key="item.id" class="col-6">
        <q-card class="party-card relative-position" @click="handlePartyClick(item)">
          <q-img :ratio="1" :src="item.logo"></q-img>
          <div class="text-lg text-weight-bolder absolute-center">{{ item?.name }}</div>
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

const handlePartyClick = (item) => {
  router.push({
    name: 'party:detail', params:{
      id: item.id
    }
  })
}
onMounted(() => {
  fetchParties();
})

</script>
