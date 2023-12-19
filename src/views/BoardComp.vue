<template>
  <main>
    <h1>{{ projectName }} - Доска</h1>
    <draggable v-model="boardData.columns" tag="div" class="workspace">
      <template #item="{ element: column, index: i }">
        <draggable v-model="column.tasks" tag="ul" class="column" :key="i" @end="onTaskDragEnd">
        <template #header>
          <input
            v-if="column.showNameInput"
            v-model="column.name" class="column-name-input column-name" type="text"
            @keyup.enter="toggleNameInput(i)"
          />
          <h3
            v-else
            @click="toggleNameInput(i)"
            class="column-name">
            <p v-show="column.name === ''">{{ i }}</p>
            {{ column.name }}
          </h3>
          <button class="delete btn" @click="removeColumn(i)">удалить</button>
        </template>
        <template #item="{ element: task, index: j }">
          <li class="task" :key="j">
            <input
              v-if="task.showNameInput"
              v-model="task.name" class="task-name-input" type="text"
              @keyup.enter="toggleTaskNameInput(i, j)"
            />
            <h4
              v-else
              @click="toggleTaskNameInput(i, j)"
              class="task-name">
              <p v-show="task.name === ''">{{ j }}</p>
              {{ task.name }}
              {{ task.deadline }}
              {{ task.timeRemaining }}
            </h4>
            <button class="delete btn" @click="removeTask(i, j)">удалить</button>
          </li>
        </template>
        <template #footer>
          <div class="form-control">
            <button @click="addItem(i)">создать таск</button>
          </div>
        </template>
      </draggable>
      </template>
    </draggable>
    <div class="form-control">
      <button @click="addColumn">создать колонку</button>
    </div>
  </main>
</template>

<script>
import { ref, watch } from 'vue';
import draggable from 'vuedraggable';
import { projects } from '../projects.js';

export default {
  props: ['projectId'],
  data() {
    return {
      boardData: {
        columns: [],
      },
      projectName: '',
    };
  },
  watch: {
    projectId: 'loadData',
  },
  created() {
    this.loadData();
  },
  methods: {
    loadData() {
      const project = projects.find((p) => p.id === parseInt(this.projectId));
      if (project) {
        this.projectName = project.name;
        this.boardData.columns = project.columns;
      }
    },
    addColumn() {
      const newColumn = {
        name: 'Новая колонка',
        tasks: [],
        order: this.boardData.columns.length + 1,
      };
      this.boardData.columns.push(newColumn);
    },
    addItem(columnIndex) {
      if (this.columns[columnIndex]) {

        const deadline = new Date();
        deadline.setDate(deadline.getDate() + 1); 
        this.columns[columnIndex].tasks.push({
          name: '',
          showNameInput: false,
          columnIndex,
          deadline: deadline.toISOString(), 
        });
      }
    },
    removeTask(columnIndex, taskIndex) {
      if (this.columns[columnIndex] && this.columns[columnIndex].tasks[taskIndex]) {
        this.columns[columnIndex].tasks.splice(taskIndex, 1);
      }
    },
    removeColumn(columnIndex) {
      if (this.columns[columnIndex]) {
        this.columns.splice(columnIndex, 1);
      }
    },
    toggleNameInput(columnIndex) {
      this.columns.forEach((column, index) => {
        if (index !== columnIndex) {
          column.showNameInput = false;
        }
      });
      this.columns[columnIndex] && (this.columns[columnIndex].showNameInput = !this.columns[columnIndex].showNameInput);
    },
    toggleTaskNameInput(columnIndex, taskIndex) {
      this.columns[columnIndex]?.tasks.forEach((task, index) => {
        if (index !== taskIndex) {
          task.showNameInput = false;
        }
      });
      this.columns[columnIndex]?.tasks[taskIndex] && (this.columns[columnIndex].tasks[taskIndex].showNameInput = !this.columns[columnIndex].tasks[taskIndex].showNameInput);
    },
    onTaskDragEnd() {
      
    },
    updateTimeRemaining() {
      const now = new Date();
      this.columns.forEach(column => {
        column.tasks.forEach(task => {
          const deadlineDate = new Date(task.deadline);
          const timeDifference = deadlineDate - now;
          const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
          const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
          task.timeRemaining = `${days} д. ${hours} ч. ${minutes} м. ${seconds} с.`;
        });
      });
    },
  },
  computed: {
    // Преобразование порядка колонок в массив колонок
    columns() {
      return this.boardData.columns.sort((a, b) => a.order - b.order);
    },
  },
  components: {
    draggable,
  },
};
</script>