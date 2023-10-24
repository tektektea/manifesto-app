<template>
  <q-page padding>

    <h5>
      Privacy Policy for Inthlan
    </h5>
    <p>
      Last Updated: 24/Oct/2023
    </p>
    <p>
      I operates the Inthlan mobile application (the "Service").
    </p>
    <p>
      We respect your privacy and are committed to ensuring that your personal information remains confidential. This privacy policy outlines how we handle data in our app:
      No Data Collection
    </p>
    <p>
      We do not collect, store, or process any personal information or user data through our app.
      Third-Party Services
    </p>
    <p>
      Our app may use third-party services, such as advertising networks or analytics tools. Please note that these third-party services may have their own privacy policies and data collection practices. We recommend reviewing the privacy policies of these third-party services for more information.
      Contact Us
    </p>
    <p>
      If you have any questions or concerns about our privacy policy or data handling practices, please contact us at [Your Contact Information].
    </p>
    <p>
      By using our app, you agree to the terms outlined in this privacy policy.
    </p>

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


onMounted(async () => {



})

</script>
