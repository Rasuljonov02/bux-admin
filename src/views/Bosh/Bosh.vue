<template>
  <div>
    <div class="w-full grid place-items-center">
      <p class="font-bold font-Arial text-[25px]">Bosh menu</p>
    </div>
    <a-button type="primary" class="ml-[30px]" @click="handleButtonClick" ghost>
      <router-link to="/Qosh">Qosh</router-link>
    </a-button>

  <div>
      <div v-for="(item, index) in data" :key="index" class=" flex bg-slate-500 mt-[20px] flex-col gap-2">
     <div class="">
       <div>
        <img class="w-[100px] h-[100px]" :src="item.thumbNailImageUrl" alt="">
      </div>
      <h1>{{ item.title }}</h1>
      <h1>{{ item.subTitle }}</h1>
     </div>
    </div>
  </div>
  </div>
</template>

<script>
import axios from 'axios';
import { Button } from 'ant-design-vue';

export default {
  data() {
    return {
      data: [],
      title: 'bosh menu'
    };
  },
  methods: {
    handleButtonClick() {
      console.log('Button clicked!');
    },
    async apiGer() {
      try {
        const response = await axios.get('http://185.196.213.14:4041/api/v1/news');
        this.data = response.data.data.body;
        console.log(this.data);
      } catch (error) {
        console.log(error);
      }
    }
  },
  components: {
    'a-button': Button
  },
  mounted() {
    this.apiGer();
  }
};
</script>

<style>
/* Add your custom styles here */
</style>
