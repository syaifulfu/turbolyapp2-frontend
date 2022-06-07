<template>
    <h1>Show Data</h1>
    <br>
    <b>Name : </b>{{data.name}}<br>
    <b>Description : </b>{{data.description}}<br>
    <b>Due Date : </b>{{data.due_date}}<br>
    <b>Priority : </b>{{data.priority}}<br>
    <b>Created At : </b>{{data.created_at}}<br>
    <br>
    <router-link to="/tasks" class="btn btn-secondary">
        <i class="fa fa-arrow-left"></i>
    </router-link>
</template>

<script>
    export default {
        name: 'ShowView',
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
        },
        mounted() {
            this.find()
        }
    }
</script>