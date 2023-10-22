<template>
  <q-page padding>

    <div class="flex justify-between items-center">
      <div>
      <div class="text-white text-md">Candidates</div>
        <div class="text-caption text-grey-5">Mizoram Election 2023 candidate te</div>
      </div>
      <q-btn @click="state.filter.open=!state.filter.open" round icon="sort"/>
    </div>
    <br/>
    <q-list separator class="shadow-1 q-pa-sm bg-dark rounded-borders">
      <q-item clickable class="q-px-none" v-for="item in state.candidates" :key="item.id"
              @click="$router.push({name:'candidate:detail',params:{
                id:item.id
              }})" >
        <q-item-section avatar>
          <q-avatar>
            <q-img :src="item?.avatar"/>
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-white text-bold">{{item?.name}}</q-item-label>
          <div class="flex q-gutter-sm">
            <q-chip v-for="item in item?.Constituencies.items" :label="item?.constituency?.name" square/>
          </div>
        </q-item-section>
        <q-item-section side>
          <q-chip square outline color="primary" :label="item?.Party?.name"/>
        </q-item-section>
      </q-item>
    </q-list>

    <q-dialog v-model="state.filter.open">
      <q-card dark style="width: 420px" class="q-pa-md">
        <div class="flex justify-between items-center">
          <div class="text-md text-bold">Filter By Constituency</div>
          <q-btn round flat icon="close" v-close-popup/>
        </div>
        <br/>
        <q-form @submit="filter">
          <q-select v-model="state.filter.constituency"
                    :options="constituencyOptions"
                    outlined
                    dark
                    label="Constituency"
                    />
          <div class="flex q-gutter-sm justify-end items-center q-mt-md">
            <q-btn @click="reset" class="sized-btn" color="negative" label="Reset" outline/>
            <q-btn type="submit" class="sized-btn" color="primary" label="Filter"/>
          </div>
        </q-form>
      </q-card>
    </q-dialog>

  </q-page>
</template>
<script setup>
import {computed, onMounted, reactive, toRaw} from "vue";
import {API} from "aws-amplify";
import {listCandidates} from '../../graphql/queries';
import {useMasterData} from "stores/master-store";
import {storeToRefs} from "pinia";

const masterStore = useMasterData();
const {constituencies} = storeToRefs(masterStore);
const state=reactive({
  candidates:[],
  original:[],
  filter:{
    open:false,
    constituency:null
  }
})

const constituencyOptions=computed(()=>constituencies.value?.map(item=>({value:item.id,label:item.name})))


const fetchCandidates=async () => {
  try {
    const res = await API.graphql({
      query: listCandidates,
    })
    state.candidates = res.data?.listCandidates?.items || [];
    state.original = res.data?.listCandidates?.items || [];
  }catch (e) {
    state.candidate = [];
    console.log(e)
  }
}
const reset=e=>{
  fetchCandidates();
  state.filter.open = false;
}
const filter=e=>{
  const constituency = toRaw(state.filter.constituency);
  const result=state.original.filter(item=>{
    const constituencies = item?.Constituencies?.items;
    return !!constituencies.find(val=>val.constituency?.id===constituency.value)
  })
  state.filter.open = false;
  state.candidates = result;
}
onMounted(() => fetchCandidates());

</script>
