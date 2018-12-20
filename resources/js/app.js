/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

// All the Vue component imports will go here
Vue.component('vue-chat', require('./components/VueChat.vue'));
Vue.component('vue-chat-channels', require('./components/VueChatChannels.vue'));
Vue.component('vue-chat-messages', require('./components/VueChatMessages.vue'));
Vue.component('vue-chat-new-message', require('./components/VueChatNewMessage.vue'));
Vue.component('vue-chat-participants', require('./components/VueChatParticipants.vue'));

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app'
});
