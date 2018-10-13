<template>
  <div class="CmsPage__main-container">
    <dashboard/>
    <customerPage/>
  </div>
</template>

<script>

export default {
  name: "CmsPage",

  components: {
    'dashboard': () => import('~/components/Dashboard.vue'),
    'customerPage': () => import('~/components/CustomerPage.vue')
  }
}
</script>

<style lang="scss">
  @import "index";
</style>
