<template>
    <div class="column is-2">
        <p v-for="(username, index) in participants"
           :key="index"
           v-text="username"></p>
    </div>
</template>

<script>
    export default {
        props: ['participants']
    }
</script>