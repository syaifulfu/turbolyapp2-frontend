<template>
  <main class="form-signin w-100 m-auto">
    <form>
      <h1 class="h3 mb-3 fw-normal">Login</h1>

      <div class="form-floating mb-2">
        <input v-model="data.email" type="email" class="form-control" id="email" placeholder="name@example.com">
        <label for="email">Email</label>
      </div>
      <div class="form-floating mb-2">
        <input v-model="data.password" type="password" class="form-control" id="password" placeholder="Password">
        <label for="password">Password</label>
      </div>

      <button class="w-100 btn btn-lg btn-primary" type="button" @click="login()">Login</button>
    </form>
  </main>
</template>

<script>

    export default {
        name: 'LoginView',
        data: function() {
            return {
                data: {
                    email: '',
                    password: '',
                }
            }
        },
        methods: {
            login: async function() {
                await fetch("http://localhost:3000/users/login", {
                    method: "POST",
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(this.data),
                }).then(async (response) => {
                    let res = await response.json();

                    if (!res.success) {
                        alert(res.message)
                    } else {
                        this.$router.push({ name: "home" });
                    }
                })

            }
        }
    }
</script>