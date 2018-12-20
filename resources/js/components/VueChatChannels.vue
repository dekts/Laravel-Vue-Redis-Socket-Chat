<template>
    <div class="column is-2">
        <p v-for="channel in channels"
           :key="channel.id"
           v-text="channel.name"
           class="channel"
           :class="{ 'active': channel.id == activeChannel }"
           @click="setChannel(channel.id)"></p>
    </div>
</template>

<script>
    export default {
        props: ['channels', 'activeChannel'],
        methods: {
            setChannel(id) {
                this.$emit('channelChanged', id);
            }
        }
    }
</script>

<style scoped>
    .column {
        border-right: 2px dotted greenyellow;
    }

    .channel {
        cursor: pointer;
    }

    .channel.active {
        background: #666;
    }
</style>