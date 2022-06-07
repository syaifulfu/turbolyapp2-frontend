<template>
  <main class="form-signin w-100 m-auto">
    <form>
      <h1 class="h3 mb-3 fw-normal">Register</h1>

      <div class="form-floating mb-2">
        <input v-model="data.name" type="name" class="form-control" id="name" placeholder="name@example.com">
        <label for="name">Name</label>
      </div>
      <div class="form-floating mb-2">
        <input v-model="data.email" type="email" class="form-control" id="email" placeholder="name@example.com">
        <label for="email">email</label>
      </div>
      <div class="form-floating mb-2">
        <input v-model="data.password" type="password" class="form-control" id="password" placeholder="Password">
        <label for="password">Password</label>
      </div>

      <button class="w-100 btn btn-lg btn-primary" type="button" @click="register()">Sign up</button>
    </form>
  </main>
</template>

<script>
    export default {
        name: 'RegisterView',
        data: function() {
            return {
                data: {
                    name: '',
                    email: '',
                    password: '',
                }
            }
        },
        methods: {
            register: async function() {
                await fetch(process.env.VUE_APP_API_URL+"users", {
                    method: "POST",
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(this.data),
                }).then(async (response) => {
                    let res = await response.json();
                    
                    if (!res.success) {
                        alert(res.message);
                    } else {
                        this.$router.push({ name: "login" });
                    }
                })

            }
        }
    }
</script>