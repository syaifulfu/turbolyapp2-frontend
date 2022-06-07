<template>
    <h1>Edit Task</h1>

    <div class="mb-3 row">
        <label :class="warning.name ? 'col-sm-2 col-form-label text-danger' : 'col-sm-2 col-form-label'">Name</label>
        <div class="col-sm-10">
            <input v-model="data.name" :class="warning.name ? 'form-control is-invalid' : 'form-control'" type="text" placeholder="Please enter name">
            <small 
                class="text-danger"
                v-for="(v, k) in warning.name" :key="k">
                Name {{v}}
            </small>
        </div>
    </div>

    <div class="mb-3 row">
        <label :class="warning.description ? 'col-sm-2 col-form-label text-danger' : 'col-sm-2 col-form-label'">Description</label>
        <div class="col-sm-10">
            <textarea v-model="data.description" :class="warning.description ? 'form-control is-invalid' : 'form-control'" class="form-control" rows="5" placeholder="Please enter description"></textarea>
            <small 
                class="text-danger"
                v-for="(v, k) in warning.description" :key="k">
                Description {{v}}
            </small>
        </div>
    </div>
    
    <div class="mb-3 row">
        <label :class="warning.due_date ? 'col-sm-2 col-form-label text-danger' : 'col-sm-2 col-form-label'">Due date</label>
        <div class="col-sm-10">
            <input v-model="data.due_date" :class="warning.due_date ? 'form-control is-invalid' : 'form-control'" type="date" class="form-control">
            <small 
                class="text-danger"
                v-for="(v, k) in warning.due_date" :key="k">
                Due date {{v}}
            </small>
        </div>
    </div>

    <div class="mb-3 row">
        <label :class="warning.priority ? 'col-sm-2 col-form-label text-danger' : 'col-sm-2 col-form-label'">Priority</label>
        <div class="col-sm-10">
            <input v-model="data.priority" :class="warning.priority ? 'form-control is-invalid' : 'form-control'" type="number" min="1" max="10" class="form-control" placeholder="1-10">
            <small 
                class="text-danger"
                v-for="(v, k) in warning.priority" :key="k">
                Priority {{v}} <br>
            </small>
        </div>
    </div>

    <div class="mb-3 row">
        <label :class="warning.is_completed ? 'col-sm-2 col-form-label text-danger' : 'col-sm-2 col-form-label'">Is Completed</label>
        <div class="col-sm-10">
            <input v-model="data.is_completed" :class="warning.is_completed ? 'form-check-input is-invalid' : 'form-check-input'" type="checkbox" class="form-check-input">
            <small 
                class="text-danger"
                v-for="(v, k) in warning.is_completed" :key="k">
                Is completed {{v}}
            </small>
        </div>
    </div>

    <div class="mb-3 row">
        <label class="col-sm-2 col-form-label"></label>
        <div class="col-sm-10">
            <button class="btn btn-primary" @click="update()">
                <i class="fa fa-save"></i> Save
            </button>
            <router-link to="/tasks" class="btn btn-secondary">
                <i class="fa fa-arrow-left"></i>
                Back
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'EditView',
        data() {
            return {
                data: {
                    name: '',
                    description: '',
                    due_date: '',
                    priority: '',
                    is_completed: '',
                    created_by: '',
                },
                warning: {
                    name: '',
                    description: '',
                    due_date: '',
                    priority: '',
                    is_completed: '',
                    created_by: '',
                }
            }
        },
        methods: {
            async find() {
                await fetch(process.env.VUE_APP_API_URL+"tasks/"+this.$route.params.id, {
                    method: "GET",
                }).then(async (response) => {
                    let res = await response.json();
                    
                    if (!res.success) {
                        alert(res.message);
                    } else {
                        this.data = res.data
                    }
                })
            },
            async update() {
                await fetch(process.env.VUE_APP_API_URL+"tasks/"+this.$route.params.id, {
                    method: "PATCH",
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(this.data),
                }).then(async (response) => {
                    let res = await response.json();

                    if (!res.success) {
                        this.warning = res.warning
                        console.log(this.data)
                    } else {
                        this.$router.push({ name: "tasks" });
                    }
                })
            }
        },
        mounted() {
            this.find()
        }
    }
</script>