# Laravel-Vue-Redis-Socket-Chat

In this repository we have created a simplified real-time chat in Laravel 5 using some additional technologies. It'll only have public channels available to everyone, no one-on-one private messaging, and no authentication. I'm going to use Laravel 5.7 for this series as this is the last version to date.

  - Redis for high speed caching system for storing objects in RAM
  - Socket.IO for featuring the fastest and most reliable real-time engine
  - Vue.JS for for building strong user interfaces

# New Features!

  - Create fake users and messages using tinker
  - Send message in single platform with your unique username
  - Communicate with any room members which is available
  - Leave the room anytime and get the message to the public

To implement the code from this repository you'll need to install Redis, node.js, and npm to your machine. I'm not going to explain it here, this is fairly simple, just google for instruction for your OS.

### Understanding the Architecture

The whole system will consist of the following parts:

  - A traditional web server running a Laravel 5 project. The project will have the chat app's backend and frontend.
  - A Node.js server, which will handle the chat message transportation
  - A Redis server, which will be used to pass messages from Laravel's backend to the Node.js server
  - Socket.io JavaScript library, which will allow real-time, bi-directional communication between the Node.js server and Laravel's frontend

Don't worry if you don't know how to work with those or the whole thing seems confusing. That's what this repository is primarily for. I do expect you to be familiar with Laravel and Vue.js, though (or at the very least with Laravel alone).

### Tech

Laravel-Vue-Redis-Socket-Chat uses a number of open source projects to work properly:

* [Laravel](https://laravel.com/) - The PHP Framework For Web Artisans
* [node.js](https://nodejs.org/en/) - evented I/O for the backend
* [Vue](https://vuejs.org/) - HTML enhanced for web apps!
* [Axios](https://www.npmjs.com/package/axios) - Promise based HTTP client for the browser and node.js
* [Bulma](https://bulma.io) - open source CSS framework based on Flexbox.
* [cross-env](https://www.npmjs.com/package/cross-env) - Run scripts that set and use environment variables across platforms
* [laravel-mix](https://www.npmjs.com/package/laravel-mix) - provides a clean, fluent API for defining basic webpack build steps
* [ioredis](https://www.npmjs.com/package/ioredis) - A robust, performance-focused and full-featured Redis client for Node.js.
* [socket.io](https://www.npmjs.com/package/socket.io) - enables real-time bidirectional event-based communication. It consists of:
* [jQuery](https://jquery.com/) - duh

And of course Laravel-Vue-Redis-Socket-Chat itself is open source with a [public repository](https://github.com/devat-viitorcloud/Laravel-Vue-Redis-Socket-Chat)
 on GitHub.

### Installation

Laravel-Vue-Redis-Socket-Chat requires [Node.js](https://nodejs.org/) v11+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ cd Laravel-Vue-Redis-Socket-Chat
$ npm install -d
$ node socket.js
$ npm run dev
or
$ npm run watch
```

For production environments...

```sh
$ npm install --production
$ NODE_ENV=production node app
```


### Development

Want to contribute? Great!

Laravel-Vue-Redis-Socket-Chat uses Webpack for fast developing.
Make a change in your file and instantanously see your updates!

Open your favorite Terminal and run these commands.

First Tab:
```sh
$ node socket.js
```

Second Tab:
```sh
$ npm run watch
```


### Todos

 - Write MORE Tests
 - Add Night Mode

License
----

MIT


**Free Software, Hell Yeah!**