<template>
    <div v-if="is_login" id="home-message">
        <h4 class="text-center">
            Hello,
        </h4>
        <h1 class="text-center">{{sessions.name}}</h1>
    </div>
    <h1 v-else class="text-center" id="home-message">You're not logged in</h1>
</template>

<script>
    export default {
        name: 'HomeView',
        data() {
            return {
                sessions: JSON.parse(localStorage.getItem('sessions')),
                is_login: JSON.parse(localStorage.getItem('sessions')) != null
            }
        },
        created() {
            // location.reload
            // console.log(Vue.prototype.$session.get())
        }
    }
</script>

<style>
    #home-message {
        padding-top: 50px;
    }
</style>