<template>
  <div class="wrapper">
    <menu-comp v-if='this.$route.path !== "/autho" && this.$route.path !== "/"'></menu-comp>
    <Router-view></Router-view>
  </div>
</template>

<script>
import MenuComp from './components/MenuComp.vue';

export default {
  name: 'App',
  components: {
    MenuComp
  }
}
</script>
