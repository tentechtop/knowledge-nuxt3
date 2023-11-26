<template>
  <div class="content">
    <div class="notice-space">

      <img src="https://knowledge-nuxt3.oss-cn-shenzhen.aliyuncs.com/img/svg/icon_spark_1-b5a63181b36171b144a767df0d3d69b9.svg">


      <div class="notice-text">
        <p>您可以分两期付款！</p>
        <img src="https://knowledge-nuxt3.oss-cn-shenzhen.aliyuncs.com/img/svg/Circleexclamationmark.svg">

      </div>



      <img src="https://knowledge-nuxt3.oss-cn-shenzhen.aliyuncs.com/img/svg/icon_spark_2-00883d0de7f28b4c5f715b53f7e08a4f.svg">

    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.content {
  width: 100%;
  height: 60px;
  background-color: #FFD166;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.notice-space{
  width: 100%;
  max-width: 510px;
  height: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.notice-text{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.notice-text>p{
  font-size: 20px;
  line-height: 26px;
  color: #303133;
}
.notice-text>img{
  cursor:pointer;
}




</style>