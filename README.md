# Euclidean Front End Project

This project was designed as the front end project to [Euclidean Project](https://github.com/mingyuanhua/euclidean).

## Client - Server communication

[AJAX](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) - communicate with server

Proxy Setup: Client - Proxy - Backend

### Build login, register and logout
When user hasn’t yet logged in, we only display login and register button on the header.

After user successfully logged in, we only display logout on the header.

We need a state to store user’s login status.

### Integrate Login/Register
Let’s wrap our Login and Register component as a Header which will be placed under App.js

Notice the 'Favorites' placeholder which we will implement after we finished our Login
Register part.

