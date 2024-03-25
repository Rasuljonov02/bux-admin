<template>
  <div>
    <Hedr />
  </div>
  <div class=" pt-[60px] p-[30px]">
    <RouterView />
  </div>

</template>

<script>
import Hedr from './components/Hedr.vue'

import { RouterView } from 'vue-router'
export default {
  components: {
    Hedr,

    RouterView
  }
}
</script>
