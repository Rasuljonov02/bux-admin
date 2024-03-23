<template>
<div class="pl-3">
  <a-button type="primary" @click="handleButtonClick" ghost>
      Ortga
    </a-button>

</div>

    <div>
    <div class="w-full flex  items-center justify-center text-center" id="app">
      <div class="p-12 bg-gray-100 border border-gray-300  hover:bg-slate-400 hover:text-white" 
        @dragover="dragover" 
        @dragleave="dragleave" 
        @drop="drop">
        <input type="file" 
          multiple 
          name="fields[assetsFieldHandle][]" 
          id="assetsFieldHandle" 
          class="w-px h-px opacity-0 overflow-hidden absolute" 
          @change="onChange" 
          ref="file" 
          accept=".pdf,.jpg,.jpeg,.png" />
          
        <label for="assetsFieldHandle" class="block cursor-pointer">
          <div>
            file qoying 👉
            <span class="underline hover:text-red-500">click here</span> 👈 bosing
          </div>
        </label>
        <ul class="mt-4" v-if="filelist.length" v-cloak>
          <li class="text-sm p-1" v-for="(file, index) in filelist" :key="index">
            {{ file.name }}<button class="ml-2" type="button" @click="remove(index)" title="Remove file">remove</button>
          </li>
        </ul>
      </div>
    </div>
    </div>
  </template>
  
  <script>
import { Button } from 'ant-design-vue';

  export default {
    data() {
      return {
        filelist: [] // Store our uploaded files
      };
    },
    methods: {
    handleButtonClick() {
      this.$router.go(-1);
      console.log('Button clicked!');

    },
      onChange() {
        this.filelist = [...this.$refs.file.files];
        console.log("push",this.filelist);
      },
      remove(index) {
        this.filelist.splice(index, 1);
        console.log("remov",this.filelist);

      },
      dragover(event) {
        event.preventDefault();
        // Add some visual fluff to show the user can drop its files
        if (!event.currentTarget.classList.contains('bg-green-300')) {
          event.currentTarget.classList.remove('bg-gray-100');
          event.currentTarget.classList.add('bg-green-300');
        }
      },
      dragleave(event) {
        // Clean up
        event.currentTarget.classList.add('bg-gray-100');
        event.currentTarget.classList.remove('bg-green-300');
      },
      drop(event) {
        event.preventDefault();
        this.$refs.file.files = event.dataTransfer.files;
        this.onChange(); // Trigger the onChange event manually
        // Clean up
        event.currentTarget.classList.add('bg-gray-100');
        event.currentTarget.classList.remove('bg-green-300');
      }
    },
    mounted() {
//   this.onChange(); // Trigger the onChange event on mount
//   setTimeout(() => {
//     console.log(this.filelist);
//   }, 1000); // Konsolga chiqarishni kechiktirish
}

  };
  </script>
  
  
  
  <style scoped>
    [v-cloak] {
      display: none;
    }
  </style>
  