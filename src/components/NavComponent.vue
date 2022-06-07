<template>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><b>TURBOLY-APP</b></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <router-link 
              to="/" 
              v-bind:class="this.$route.name == 'home' ? 'nav-link active' : 'nav-link'">
              Home
            </router-link>
          </li>
          <li v-if="is_login" class="nav-item">
            <router-link 
              to="/tasks" 
              v-bind:class="this.$route.name == 'tasks' ? 'nav-link active' : 'nav-link'">
              Tasks
              <span :class="today_tasks.length == 0 ? 'badge badge-light text-light bg-secondary' : 'badge badge-light text-light bg-danger'">{{today_tasks.length}}</span>
            </router-link>
          </li>
        </ul>
      </div>
      <div>
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li v-if="!is_login" class="nav-item">
            <router-link 
              to="/login" 
              v-bind:class="this.$route.name == 'login' ? 'nav-link active' : 'nav-link'">
              Login
            </router-link>
          </li>
          <li v-if="!is_login" class="nav-item">
            <router-link 
              to="/register" 
              v-bind:class="this.$route.name == 'register' ? 'nav-link active' : 'nav-link'">
              Register
            </router-link>
          </li>
          <li v-if="is_login" class="nav-item">
            <span class="nav-link text-light">({{sessions.name}})</span>
          </li>
          <li v-if="is_login" class="nav-item">
            <!-- <router-link 
              to="/logout" 
              v-bind:class="this.$route.name == 'logout' ? 'nav-link active' : 'nav-link'">
              Logout
            </router-link> -->
            <a href="" class="nav-link" @click="logout()">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
    export default {
        name: 'NavComponent',
        data() {
          return {
            sessions: JSON.parse(localStorage.getItem('sessions')),
            is_login: JSON.parse(localStorage.getItem('sessions')) != null,
            today_tasks: []
          }
        },
        methods: {
          async getTodayTasks() {
              this.is_loading = true
              await fetch(process.env.VUE_APP_API_URL+"tasks", {
                  method: "GET",
              }).then(async (response) => {
                  let res = await response.json();
                  
                  if (!res.success) {
                      alert(res.message);
                  } else {
                      this.today_tasks = res.todays
                  }

                  this.is_loading = false
              })
          },
          logout: function() {
              localStorage.removeItem('sessions');

              if (!this.is_login) {
                this.$router.push({ name: "login" });
              }
              // this.$router.push({ name: "login" });

              // window.location.href = '/login'
          }
        },
        mounted() {
          this.getTodayTasks()
        }
    }
</script>