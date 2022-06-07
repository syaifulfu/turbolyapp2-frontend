<template>
  <div class="row">
      <div class="col-md-10">
          <h1>Tasks</h1>
      </div>
      <div class="col-md-2 text-right">
          <router-link to="/tasks/new" class="btn btn-success">
              <i class="fa fa-add"></i>
              Add
          </router-link>
      </div>
  </div>
  
  <EasyDataTable
      show-index
      :headers="data.headers"
      :items="data.items"
      :rows-per-page="10"
      :loading="is_loading"
      :loading-message="'Loading data...'"
    >
    <template #due_date="{ due_date }">
      {{ format_date(due_date, 'DD MMMM YYYY') }}
    </template>
    <template #priority="{ priority }">
      {{ priority }}<small>/10</small>
    </template>
    <template #created_at="{ created_at }">
      {{ format_date(created_at, 'h:mm a, DD MMMM YYYY') }}
    </template>
    <template #is_completed="{ is_completed }">
      <b v-if="is_completed"><i class="fa fa-check text-success"></i></b>
      <b v-else><i class="fa fa-times text-danger"></i></b>
    </template>
    <template #is_today="{ is_today }">
      <b v-if="is_today"><i class="fa fa-check text-success"></i></b>
      <b v-else><i class="fa fa-times text-danger"></i></b>
    </template>
    <template #action="item">
      <div class="operation-wrapper">
        <router-link :to="'/tasks/show/'+item.id" class="btn btn-info btn-sm mr-2">
            <i class="fa fa-eye"></i>
            Show
        </router-link>
        <router-link :to="'/tasks/edit/'+item.id" class="btn btn-danger btn-sm mr-2">
            <i class="fa fa-pencil"></i>
            Edit
        </router-link>
        <a class="btn btn-warning btn-sm" @click="destroy(item.id)">
            <i class="fa fa-trash"></i>
            Delete
        </a>
      </div>
    </template>
  </EasyDataTable>
</template>

<script>
    import moment from 'moment';

    export default {
        name: 'IndexView',
        setup() {
          const headers = [];

          const items = [];

          return {
            headers,
            items
          };
        },
        data() {
          return {
            is_loading: false,
            date_now: moment().format('YYYY-MM-DD'),
            data: {
              headers: [
                { text: "Name", value: "name", sortable: true },
                { text: "Description", value: "description", sortable: true },
                { text: "Due date", value: "due_date", sortable: true },
                { text: "Priority", value: "priority", sortable: true },
                { text: "Is Completed", value: "is_completed", sortable: true },
                { text: "Is Today", value: "is_today", sortable: true },
                { text: "Created At", value: "created_at", sortable: true },
                { text: "Action", value: "action"},
              ],
              items: [],
            },
          }
        },
        methods: {
          async gets() {
              this.is_loading = true
              await fetch(process.env.VUE_APP_API_URL+"tasks", {
                  method: "GET",
              }).then(async (response) => {
                  let res = await response.json();
                  
                  if (!res.success) {
                      alert(res.message);
                  } else {
                      this.data.items = res.data
                  }

                  this.is_loading = false
              })
          },
          format_date(value, format){
            if (value) {
              return moment(String(value)).format(format)
            }
          },
        },
        created() {
          this.gets()
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