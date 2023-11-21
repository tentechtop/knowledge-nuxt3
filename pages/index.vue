<template>
  <div class="container">

    <h1>111</h1>


    <h1>111</h1>

    <h1>中</h1>

  </div>
</template>


<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
const show = ref(true)
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
.container {
  overflow-y: hidden;
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */
  overflow-x: hidden;
  overflow-y: auto;
}

.container::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
</style>
