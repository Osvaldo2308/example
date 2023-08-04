<template>
    <pageHome/>
</template>
<script>
import { defineComponent } from 'vue'

import pageHome from '@/components/Sinntec.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    pageHome
  },
});
</script>
