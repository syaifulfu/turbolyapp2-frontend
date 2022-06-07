<template>
  <h1>Tasks</h1>
  <v-data-table
    :headers="headers"
    :items="desserts"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
</template>

<script>
    export default {
        name: 'DataTableView',
        data() {
            return {
              headers: [
                {
                  text: 'Dessert (100g serving)',
                  align: 'start',
                  sortable: false,
                  value: 'name',
                },
                { text: 'Calories', value: 'calories' },
                { text: 'Fat (g)', value: 'fat' },
                { text: 'Carbs (g)', value: 'carbs' },
                { text: 'Protein (g)', value: 'protein' },
                { text: 'Iron (%)', value: 'iron' },
              ],
              desserts: [
                {
                  name: 'Frozen Yogurt',
                  calories: 159,
                  fat: 6.0,
                  carbs: 24,
                  protein: 4.0,
                  iron: '1%',
                },
                {
                  name: 'Ice cream sandwich',
                  calories: 237,
                  fat: 9.0,
                  carbs: 37,
                  protein: 4.3,
                  iron: '1%',
                },
                {
                  name: 'Eclair',
                  calories: 262,
                  fat: 16.0,
                  carbs: 23,
                  protein: 6.0,
                  iron: '7%',
                },
                {
                  name: 'Cupcake',
                  calories: 305,
                  fat: 3.7,
                  carbs: 67,
                  protein: 4.3,
                  iron: '8%',
                },
                {
                  name: 'Gingerbread',
                  calories: 356,
                  fat: 16.0,
                  carbs: 49,
                  protein: 3.9,
                  iron: '16%',
                },
                {
                  name: 'Jelly bean',
                  calories: 375,
                  fat: 0.0,
                  carbs: 94,
                  protein: 0.0,
                  iron: '0%',
                },
                {
                  name: 'Lollipop',
                  calories: 392,
                  fat: 0.2,
                  carbs: 98,
                  protein: 0,
                  iron: '2%',
                },
                {
                  name: 'Honeycomb',
                  calories: 408,
                  fat: 3.2,
                  carbs: 87,
                  protein: 6.5,
                  iron: '45%',
                },
                {
                  name: 'Donut',
                  calories: 452,
                  fat: 25.0,
                  carbs: 51,
                  protein: 4.9,
                  iron: '22%',
                },
                {
                  name: 'KitKat',
                  calories: 518,
                  fat: 26.0,
                  carbs: 65,
                  protein: 7,
                  iron: '6%',
                },
              ],
            }
        },
        methods: {
          async gets() {
              await fetch(process.env.VUE_APP_API_URL+"tasks", {
                  method: "GET",
              }).then(async (response) => {
                  let res = await response.json();
                  
                  if (!res.success) {
                      alert(res.message);
                  } else {
                      this.items = res.data
                  }
              })
          },
        },
        created() {
          // this.gets()
        }
    }
</script>

<!-- <template>
  <EasyDataTable
    :headers="headers"
    :items="items"
  />
</template>

<script lang="ts">
  // import { defineComponent } from "vue";
  // import type { Header, Item } from "vue3-easy-data-table";

  export default {
    name: 'DataTableView',
    data() {
      return {
        headers: [
          { text: "Name", value: "name" },
          { text: "Description", value: "description", sortable: true },
          { text: "Due date", value: "due_date", sortable: true },
          { text: "Priority", value: "priority", sortable: true },
          { text: "Is Completed", value: "is_completed", sortable: true },
        ],
        items: [],
      }
    },
    methods: {
      async gets() {
          await fetch("http://localhost:3000/tasks", {
              method: "GET",
          }).then(async (response) => {
              let res = await response.json();
              
              if (!res.success) {
                  alert(res.message);
              } else {
                  this.items = res.data
              }
          })
      },
    },
    mounted() {
      this.gets()
    }
  };
</script> -->