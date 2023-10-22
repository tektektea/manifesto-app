<template>
  <q-page padding class="text-grey-5">
    <div class="flex justify-between items-center">
      <div class="text-grey-5 text-lg text-bold">{{$route.params.name}}</div>
      <q-select />
    </div>
    <br/>
    <q-list>
        <q-card class="q-pa-sm rounded-borders" dark v-for="item in state.candidates" :key="item?.id">
          <div class="flex q-gutter-sm">
            <q-avatar>
              <q-img :src="item?.avatar"/>
            </q-avatar>
            <div class="q-ml-md">
              <div class="text-md text-bold">{{item?.name}}</div>
              <div class="flex q-gutter-sm">
                <q-chip square color="accent"  v-for="temp in item?.Constituencies?.items" :label="temp?.constituency?.name"/>
              </div>
            </div>
          </div>
          <q-card-actions>

          </q-card-actions>
        </q-card>

    </q-list>
  </q-page>
</template>
<script setup>
import {onMounted, reactive} from "vue";
import {API} from 'aws-amplify';
import {candidatesByPartyID} from '../../../graphql/queries';
import {useRoute} from "vue-router";
const state=reactive({
  district:null,
  districtOptions:[],
  candidates:[]
})
const route = useRoute();

const fetchCandidates=async party => {
  try {
    const res = await API.graphql({
      query: candidatesByPartyID,
      variables: {
        partyID: party
      }
    })
    state.candidates=res.data?.candidatesByPartyID?.items||[];
  } catch (e){
    console.error(e)
    state.candidates = [];
  }

}

onMounted(()=>fetchCandidates(route.params.party))
</script>
