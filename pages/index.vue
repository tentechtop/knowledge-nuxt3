<template>
  <div>
    <h1>您好 {{index}}</h1>
  </div>
</template>

<script setup lang="ts">
import {useRouter,useRoute} from "vue-router";
const router = useRouter();
const route = useRoute();
import { chat } from "assets/libs/gpt";

const index = ref(1)
console.log("route",route)
</script>

<style scoped>

</style>