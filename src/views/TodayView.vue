<template>
    <div class="container">
        <div class="row">
            <div class="col-md-11">
                <h1>Today</h1>
            </div>
            <div class="col-md-1">
                <router-link to="/" class="btn btn-success"><i class="fa fa-add"></i></router-link>
            </div>
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
                    <!-- <tr v-for="task in tasks">
                        <td>{{task.no}}</td>
                        <td>{{task.task.name}}</td>
                        <td>{{task.task.description}}</td>
                        <td>{{task.task.due_date.strftime("%d %B %Y")}}</td>
                        <td>{{task."#{task.priority}/10"}}</td>
                        <td>{{task.task.created_at.strftime("%H:%M %p, %d %B %Y")}}</td>
                        <td>
                            <router-link to="/" class="btn btn-info"><i class="fa fa-eye"></i></router-link>
                            <router-link to="/" class="btn btn-danger"><i class="fa fa-trash"></i></router-link>
                            <router-link to="/" class="btn btn-warning"><i class="fa fa-warning"></i></router-link>
                        </td>
                    </tr> -->
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'TodayView',
        data: function() {
            return {
                tasks: []
            }
        }
    }
</script>