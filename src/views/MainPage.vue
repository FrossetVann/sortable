<template>
  <main>
  <div class="board-system">
    <ul class="board-list">
      <li class="board" :key="i" v-for="(item,i) in items" @click="navigateToBoard">
        <h1>{{i+1}}</h1>
          <div class="dots">
            <div class="dots-inside"></div>
            <div class="dots-inside"></div>
            <div class="dots-inside"></div>
          </div>
      </li>
      <li>
        <div class="board-adder">
          <button class="btn-board-adder" @click="addNewBoard">
              <p>Создать доску +</p>
          </button>
        </div>
        <div>
    <button @click="getUserData">Get User Data</button>
    <div v-if="user">
      <p>ID: {{ user.id }}</p>
      <p>Name: {{ user.name }}</p>
      <p>Is Human: {{ user.is_human }}</p>
    </div>
    <div v-if="error">{{ error }}</div>
  </div>
      </li>
    </ul>
  </div>
</main>
</template>
<script>

// https://vue-tasker-http-default-rtdb.firebaseio.com/

export default {
  data () {
    return {
      items: [],
      user: null,
      error: null,

    }
  },
  components: {

  },
  methods: {
    addNewBoard () {
      this.items.push(this.item)
      this.inputValue = ''
    },
    getUserData() {
      getUser('0', (err, user) => {
        if (!err) {
          this.user = user;
        } else {
          this.error = 'Error fetching user data';
        }
      });
    },
    navigateToBoard() {
      this.$router.push({ name: 'BoardComp' });
    },
  }
}
</script>