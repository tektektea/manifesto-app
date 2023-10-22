<template>
  <q-page padding>

    <div class="flex justify-between items-center">
      <div class="text-grey-5 text-lg">Candidates</div>
    </div>
    <br/>
    <br/>
    <q-list separator class="shadow-1 q-pa-sm bg-dark rounded-borders">
      <q-item v-for=" item in state.candidates" :key="item.id">
        <q-item-section avatar>
          <q-avatar>
            <q-img :src="item?.avatar"/>
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-white text-bold">{{item?.name}}</q-item-label>
          <q-item-label class="text-grey-5" caption>{{item?.name}}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>

  </q-page>
</template>
<script setup>
import {computed, onMounted, reactive} from "vue";
import {API} from "aws-amplify";
import {listCandidates,listConstituencies} from '../../graphql/queries';
import {useMasterData} from "stores/master-store";
import {storeToRefs} from "pinia";

const masterStore = useMasterData();
const {constituencies} = storeToRefs(masterStore);
const state=reactive({
  candidates:[]
})

const constituencyOptions=computed(()=>constituencies.value?.map(item=>({value:item.id,label:item.name})))
const fetchCandidates=async () => {
  try {
    const res = await API.graphql({
      query: listCandidates,
    })
    state.candidates = res.data?.listCandidates?.items || [];
  }catch (e) {
    state.candidate = [];
    console.log(e)
  }
}

onMounted(() => fetchCandidates());

</script>
