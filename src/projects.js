// projects.js

export const projects = [
  {
    id: 1,
    name: 'Проект 1',
    columns: [
      {
        name: 'Колонка 1',
        tasks: [
          { name: 'Задача 1.1', order: 1, deadline: '2023-12-31' },
          { name: 'Задача 1.2', order: 2, deadline: '2023-12-31' },
        ],
        order: 1,
      },
      // ... Другие колонки
    ],
  },
  {
    id: 2,
    name: 'Проект 2',
    columns: [
      {
        name: 'Колонка 1',
        tasks: [
          { name: 'Задача 1.1', order: 1, deadline: '2023-12-31' },
          { name: 'Задача 1.2', order: 2, deadline: '2023-12-31' },
        ],
        order: 1,
      },
      // ... Другие колонки
    ],
  },
];
