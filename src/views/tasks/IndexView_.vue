<template>
    <div class="container">
        <div class="row">
            <div class="col-md-10">
                <h1>Tasks</h1>
            </div>
            <div class="col-md-2">
                <router-link to="/tasks/new" class="btn btn-success">
                    <i class="fa fa-add"></i>
                    Add
                </router-link>
            </div>
        </div>

        <div v-if="is_loading" class="text-center">
            <img src="@/assets/loader.gif" class="text-center" alt="">
        </div>

        <table class="table table-striped">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Due Date</th>
                    <th>Priority</th>
                    <th>Created At</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                    <tr v-for="(task, index) in tasks" :key="task.id">
                        <td>{{index+1}}</td>
                        <td>{{task.name}}</td>
                        <td>{{task.description}}</td>
                        <td>{{task.due_date}}</td>
                        <td>{{task.priority}}</td>
                        <td>{{task.created_at}}</td>
                        <td>
                            <router-link :to="'/tasks/show/'+task.id" class="btn btn-info btn-sm">
                                <i class="fa fa-eye"></i>
                                Show
                            </router-link>
                            <router-link :to="'/tasks/edit/'+task.id" class="btn btn-danger btn-sm">
                                <i class="fa fa-pencil"></i>
                                Edit
                            </router-link>
                            <a class="btn btn-warning btn-sm" @click="destroy(task.id)">
                                <i class="fa fa-trash"></i>
                                Delete
                            </a>
                        </td>
                    </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'IndexView',
        data() {
            return {
                is_loading: false,
                tasks: []
            }
        },
        methods: {
            async get() {
                this.is_loading = true;
                await fetch(process.env.VUE_APP_API_URL+"tasks", {
                    method: "GET",
                }).then(async (response) => {
                    let res = await response.json();
                    
                    if (!res.success) {
                        alert(res.message);
                    } else {
                        this.tasks = res.data
                    }
                    this.is_loading = false;
                })
            },
            async destroy(id) {
                this.is_loading = true;
                await fetch(process.env.VUE_APP_API_URL+"tasks/"+id, {
                    method: "DELETE",
                }).then(async (response) => {
                    let res = await response.json();
                    
                    if (!res.success) {
                        alert(res.message);
                    } else {
                        this.get()
                    }
                    this.is_loading = false;
                })
            }
        },
        created() {
            this.get()
        }
    }
</script>