<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue'
// access id: AKIAQY6W4FZK7C5Z4YPQ
// secret 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

import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
Amplify.configure(awsExports);

export default defineComponent({
  name: 'App'
})
</script>
