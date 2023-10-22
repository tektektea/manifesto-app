<template>
<q-page padding>
  <div class="flex q-gutter-sm">
    <q-img class="rounded-borders" ratio="1" width="150px" :src="state.party?.logo"/>
    <div class="column q-gutter-sm">
      <div class="text-lg text-grey-5 text-weight-bolder">{{state.party?.name}}</div>
      <div class="text-lg text-grey-5 ">{{state.party?.description}}</div>
    </div>
  </div>
  <br/>
  <q-btn :to="{name:'party:candidates',params:{party:$route.params.id}}" class="full-width" outline label="Candidates te enna" no-caps/>
  <br/>
  <br/>
  <div class="text-center text-md text-grey-5 text-bold">Manifesto</div>
  <br/>
  <div class="text-grey-5">
    <div v-html="state.party?.Manifesto?.content"/>
  </div>

  <br/>
</q-page>
</template>
<script setup>
import {onMounted, reactive} from "vue";
import {API} from 'aws-amplify';
import {getParty} from '../../graphql/queries';
import {useRoute} from "vue-router";
import {useQuasar} from "quasar";

const q = useQuasar();
const route = useRoute();
const state=reactive({
  party: {}
})
const fetchParty=async (id) => {

  q.loading.show();
  const res = await API.graphql({
    query: getParty,
    variables: {
      id,
    }
  })
  state.party=res.data.getParty
  q.loading.hide();
}
onMounted(()=>{
  fetchParty(route.params.id);
})
</script>
