<template>
  <q-page padding>
    <div class="flex justify-between items-center">
      <div class="flex">
        <div>
          <q-avatar>
            <q-img :src="state.candidate?.avatar" sizes="80px"/>
          </q-avatar>
          <div class="text-lg text-white">{{state.candidate?.name}}</div>
          <div class="flex q-gutter-sm">
            <q-chip v-for="item in state.candidate?.Constituencies?.items" :label="item?.constituency?.name" square/>
          </div>
        </div>
      </div>
      <q-img width="80px" :src="state.candidate?.Party?.logo"/>
    </div>
    <br/>
      <div class="text-grey-5" v-html="state.candidate?.description"/>
  </q-page>
</template>

<script setup>

import {onMounted, reactive} from "vue";
import {API} from "aws-amplify";
import {getCandidate} from "src/graphql/queries";
import {useQuasar} from "quasar";
import {useRoute} from "vue-router";

const q = useQuasar();
const route = useRoute();
const state=reactive({
  candidate:{}
})

const fetchCandidate=async id => {
  q.loading.show()
  try {
    const res = await API.graphql({
      query: getCandidate,
      variables:{
        id
      }
    })
    state.candidate = res.data.getCandidate || {};
  }catch (e) {
    console.log(e);
    state.candidate = {};
  }finally {
    q.loading.hide();
  }
}

onMounted(()=>{
  fetchCandidate(route.params.id)
})
</script>
