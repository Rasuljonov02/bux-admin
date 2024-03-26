<template>
  <div>
    <div class="w-full grid place-items-center">
  <p class="font-bold font-Arial text-[25px] ">Yoshlar Ittifoqi</p>

</div>
    <a-button type="primary" class="ml-[30px]]" @click="handleButtonClick" ghost>
      <router-link
        to="/ittifoqqosh"
      >
        Qosh
      </router-link>
    </a-button>
  </div>
</template>

<script>
import { Button } from 'ant-design-vue';

export default {
  data() {
    return {
      title: 'bosh menu'
    };
  },
  methods: {
    handleButtonClick() {
      console.log('Button clicked!');
    }
  },
  components: {
    'a-button': Button
  }
};
</script>

<style>
/* Add your custom styles here */
</style>
