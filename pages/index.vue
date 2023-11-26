<template>
  <div class="container">










  </div>
</template>


<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount,onBeforeMount } from 'vue';
const show = ref(true)
import { baseUrl } from '~~/config'
import request from "~/api/request";
import {getProject} from "~/api/project";

const showData = ref(false)
const dateTest = ref({})

/*async function getTestDate(){
  const resp = await useFetch('http://localhost:8000/',{
    method:"GET"
  }).then((response) => {
    console.log("baseUrl"+JSON.stringify(response.data.value))
    dateTest.value=response.data.value
    showData.value = true
  })
}
const { data: archivesList, } = await useAsyncData('archives_GetList', () => getProject())

dateTest.value = archivesList.value*/



</script>

<style lang="scss" scoped>
.container{
  height: 300vh;
  width: 100vw;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100px;
}



</style>
