<template>
  <div class="navbar-wrapper">
    <header class="navbar">
        <div class="account-details">
            <div class="avatar">

            </div>
            <div class="user-name">
                <p>Галя</p>
                <p>Или не Галя?</p>
            </div>
        </div>
        <div class="navigation">
            <a @click="navigateToMain" >Доски</a>
            <p>Участники</p>
        </div>
        <div class="user-board">
            <div class="new-board">
                <h3 >Мои доски</h3>
                <button @click="addNewNote">+</button>
            </div>
            <input class="input" type="text" v-model.trim="inputValue" @keypress.enter="addNewNote">
            <ul class="menu-board" v-if="notes.length !== 0">

                <li v-for="(note, idx) in notes" :key="idx"><span> {{ note }}</span></li>
            </ul>
            <p v-else>Досок нет. Создайте новую</p>
        </div>
    </header>
  </div>
</template>

<script>
export default {
  data () {
    return {
      inputValue: '',
      notes: []
    }
  },
  methods: {
    navigateToMain() {
      this.$router.push({ name: 'MainPage' });
    },
    addNewNote () {
      if (this.inputValue.trim() !== '') {
        this.notes.push(this.inputValue.trim())
        this.inputValue = ''
      }
    }
  }
}
</script>
<style>
*{
    margin: 0;
}
.navbar-wrapper{
  position: relative;
  min-height: 100vh;
  width: 326px;
}
.navbar {
   padding: 40px;
    display: flex;
    flex-direction: column;
    position: fixed;

    height: 100vh;
    background-color: #E7E8EA;
    gap: 40px;
}
.account-details {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly; 
}
ul{
    list-style: none;
}
.user-name,
.new-board {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 30px;
    align-content: center;
}
.avatar {
    height: 60px;
    width: 60px;
    background-color: #BFCFD7;
    border-radius: 100%;
}
</style>