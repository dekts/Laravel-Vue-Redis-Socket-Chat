<template>
    <div class="message-input-wrapper">
        <input type="text"
               class="input"
               placeholder="New message"
               v-model="message"
               @keyup.enter.prevent="sendMessage">
    </div>
</template>

<script>
    export default {
        props: ['activeChannel', 'username'],

        data() {
            return {
                message: '',
            };
        },

        methods: {
            sendMessage() {
                let endpoint = `/channels/${this.activeChannel}/messages`;

                let data = {
                    username: this.username,
                    message: this.message
                };

                axios.post(endpoint, data);

                this.message = '';
            }
        }
    }
</script>

<style>
    .message-input-wrapper {
        border-top: 2px dotted greenyellow;
    }
</style>
