import { defineStore } from 'pinia';
import {API} from 'aws-amplify';
import {listConstituencies} from '../graphql/queries'
export const useMasterData = defineStore('masterData', {
  state: () => ({
    constituencies: [],
  }),
  getters: {
    doubleCount: (state) =>  2,
  },
  actions: {
    async fetchConstituencies() {
      try {
        const res = await API.graphql({
          query: listConstituencies,
        })
        this.constituencies=res?.data?.listConstituencies?.items || []
      }catch (e) {
        console.error(e)
        this.constituencies = [];
      }

    },
  },
});
