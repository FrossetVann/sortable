<template>
  <div class="logo">Sebbia</div>
  <h1>Вход</h1>
  <form class="reg-form">
    <div class="inputs">
      <input placeholder="логин" type="text" class="form-input">
      <input placeholder="пароль" type="text" class="form-input">
    </div>
    <button @click="navigateToMain" type="submit" class="submit btn">Войти</button>
  </form>
</template>

<script>

export default {
  data () {
    return {

    }
  },
  components: {

  },
  methods: {
    navigateToMain() {
      this.$router.push({ name: 'MainPage' });
    },
  }
}
</script>