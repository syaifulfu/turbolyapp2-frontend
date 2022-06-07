<template>
    <h1 v-if="is_login" class="text-center">SELAMAT DATANG</h1>
    <h1 v-else class="text-center">You're not logged in</h1>
</template>

<script>
    export default {
        name: 'HomeView',
        data() {
            return {
                is_login: JSON.parse(localStorage.getItem('sessions')) != null
            }
        },
        created() {
            // location.reload
        }
    }
</script>