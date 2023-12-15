<template>
  <main>
  <div class="autho-flex">
  <div class="icon">
  <div class="logo">Sebbia</div>
  <h1 class="h1-autho">Вход</h1>
  </div>
  <form class="reg-form">
    <div class="inputs">
      <input placeholder="логин" type="text" class="form-input">
      <input placeholder="пароль" type="text" class="form-input">
    </div>
    <button @click="navigateToMain" type="submit" class="submit-btn">Войти</button>
  </form>
</div>
</main>
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
<style>
.autho-flex{
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 60px;
  position: fixed;
  top:0;
  right: 0;
  bottom: 0;
  left: 0;
}
.inputs, .icon{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}
.form-input, .submit-btn{
  width: 100%;
  max-width: 600px;
  height: 60px;
  border-radius: 8px;
  border: none;
}
.form-input::placeholder{
 font-size: 20px;
 color: #00000080;
 padding-left: 25px;
}
.submit-btn{
  background-color: #446AE2;
  height: 65px;
  font-size: 20px;
  color:#E7E8EA;
  margin-top: 60px;
}
.h1-autho{
  font-size: 40px;
}
</style>