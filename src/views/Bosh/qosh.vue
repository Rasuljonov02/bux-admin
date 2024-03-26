<template>
<div class="w-full grid place-items-center">
  <p class="font-bold font-Arial text-[25px] ">Bosh menuga qoshish </p>

</div>
  <div class="pl-3">
    <button  class="mt-[80px] text-white bg-red-400 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" @click="handleButtonClick" ghost>
      Ortga
    </button>

  </div>




  <div class=" flex flex-col gap-5">
    <div class="w-full h-full flex items-center justify-center text-center" id="app">
      <div class="p-12 bg-gray-100 border border-gray-300 hover:bg-slate-400 hover:text-white"
        @dragover="dragover"
        @dragleave="dragleave"
        @drop="drop"

        >
        <input type="file"
          multiple
          name="fields[assetsFieldHandle][]"
          id="assetsFieldHandle"
          class="w-px h-px opacity-0 overflow-hidden absolute"
          ref="file"
          accept=".pdf,.jpg,.jpeg,.png" />



          <label for="assetsFieldHandle" class="block cursor-pointer">
            <div>
              file qoying 👉
              <span class="underline hover:text-red-500">click here</span> 👈 bosing
            </div>
          </label>
        <ul class="mt-4" v-if="filelist.file && filelist.file.length" v-cloak>
          <li class="text-sm p-1" v-for="(fileData, index) in filelist.file" :key="index">
            {{ fileData.name }}<button class="ml-2" type="button" @click="remove(index)" title="Remove file">remove</button>
          </li>
        </ul>
      </div>

    </div>


    <form class="max-w-md mx-auto" @submit.prevent="submitForm">
      <div>
        <div class="relative z-0 w-full mb-5 group">
        <input type="text" name="sarlavha" id="sarlavha" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="sarlavha" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Sarlavha</label>
      </div>

      <div class="relative z-0 w-full mb-5 group">
        <input type="text" name="text" id="text" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="text" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Paragrif</label>
      </div>

      <div class="grid md:grid-cols-2 md:gap-6">
        <div class="relative z-0 w-full mb-5 group">
          <input type="text" name="floating_first_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
        </div>
        <div class="relative z-0 w-full mb-5 group">
          <input type="text" name="floating_last_name" id="floating_last_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
<label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
</div>
</div>
      </div>

<div class="flex items-center gap-2">
  <button @click="onChange" id="save" type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
<div class="flex" v-if="btn">

<button  @click="api" class="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Jonatish</button>
</div>
</div>
</form>
</div>
</template>

<script>
export default {
  data() {
    return {btn:false,
      filelist: [

        {
          file: [],
          title: "",
          paragrif: "",
          ism: "",
          family: ""
        }
      ] // data
    };
  },
  methods: {
    handleButtonClick() {
      this.$router.go(-1);
      console.log('Button clicked!');
    },
    onChange() {
      // Get input field values
      const sarlavha = document.getElementById('sarlavha').value;
      const text = document.getElementById('text').value;
      const floatingFirstName = document.getElementById('floating_first_name').value;
      const floatingLastName = document.getElementById('floating_last_name').value;

      // Push data to filelist
      this.filelist = {
        file: [...this.$refs.file.files],
        title: sarlavha,
        paragrif: text,
        ism: floatingFirstName,
        family: floatingLastName
      };
if (this.filelist.title === "") {
this.btn=false;
  return
} else if (this.filelist.paragrif === "") {
this.btn=false;
  return
}
this.btn=true;


      console.log("push", this.filelist);
    },
api(){
console.log("api");
},
    remove(index) {
      this.filelist.file.splice(index, 1);
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
  }
};
</script>

<style scoped>
[v-cloak] {
  display: none;
}
</style>

