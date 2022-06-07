<template>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Turboly-App</a>
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
          <li class="nav-item">
            <router-link 
              to="/tasks" 
              v-bind:class="this.$route.name == 'tasks' ? 'nav-link active' : 'nav-link'">
              Tasks
            </router-link>
          </li>
          <li class="nav-item">
            <router-link 
              to="/today" 
              v-bind:class="this.$route.name == 'today' ? 'nav-link active' : 'nav-link'">
              Today
            </router-link>
          </li>
        </ul>
      </div>
      <div>
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <router-link 
              to="/login" 
              v-bind:class="this.$route.name == 'login' ? 'nav-link active' : 'nav-link'">
              Login
            </router-link>
          </li>
          <li class="nav-item">
            <router-link 
              to="/register" 
              v-bind:class="this.$route.name == 'register' ? 'nav-link active' : 'nav-link'">
              Register
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
    export default {
        name: 'NavComponent'
    }
</script>