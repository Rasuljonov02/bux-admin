<template>
  <div>
    <h1>{{ title }}</h1>
    <a-button type="primary" @click="handleButtonClick" ghost>
      <router-link
        to="/Qosh"
        class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
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
      title: 'bosh'
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
