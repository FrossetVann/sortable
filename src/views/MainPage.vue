<template>
  <main>
    <div class="board-system">
      <ul class="board-list">
        <li class="board" :key="project.id" v-for="project in projects" @click="navigateToBoard(project.id)">
          <h1>{{ project.name }}</h1>
          <div class="dots">
            <div class="dots-inside"></div>
            <div class="dots-inside"></div>
            <div class="dots-inside"></div>
          </div>
        </li>
        <li>
          <div class="board-adder">
            <button class="btn-board-adder" @click="addNewProject">
              <p>Создать проект +</p>
            </button>
          </div>
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
import { ref } from 'vue';
import { projects } from '@/projects.js';

export default {
  data() {
    return {
      projects,
    };
  },
  methods: {
    addNewProject() {
      const newProject = {
        id: this.projects.length + 1,
        name: `Проект ${this.projects.length + 1}`,
        columns: [],
      };
      this.projects.push(newProject);
    },
    navigateToBoard(projectId) {
      this.$router.push({ name: 'BoardComp', params: { projectId } });
    },
  },
};
</script>
