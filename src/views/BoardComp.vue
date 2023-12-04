<template>
  <h1>доска</h1>
  <draggable v-model="columns" tag="div" class="workspace">
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
          </h4>
          <button class="delete btn" @click="removeTask(i, j)">удалить</button>
        
        </li>
        </template>
        <template #footer>
        <div class="form-control">
          <button @click="addItem(i)">создать таск</button>
        </div>
      </template>
      <!-- </ul> -->
      
    </draggable>
    </template>
  </draggable>
  <div class="form-control">
    <button @click="addColumn">создать колонку</button>
  </div>
</template>

<script>
import { ref } from 'vue';
import draggable from 'vuedraggable';

export default {
  data() {
    return {
      columns: [],
    };
  },
  methods: {
    addColumn() {
      this.columns.push({
        name: '',
        tasks: [],
        showNameInput: false,
      });
    },
    addItem(columnIndex) {
      if (this.columns[columnIndex]) {
        this.columns[columnIndex].tasks.push({
          name: '',
          showNameInput: false,
          columnIndex, // новое свойство для хранения индекса колонки
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
      // Метод, вызываемый при завершении перетаскивания задачи
      // Здесь вы можете выполнить дополнительные действия после перемещения задачи
    },
  },
  components: {
    draggable,
  },
};
</script>