# Cats & Dogs
The Cats & Dogs app can add,update or delete a cat/dog.
The app has being build using Vue.js, Js, Express.js , Insomnia and Css and using The RESTful routes and the relative HTTP verbs.
# Setup

- Save/Clone repo
- In terminal, go to client directory:
```
npm install
```
```
npm run serve
```
- In terminal, go to server directory:
```
npm install
```
```
npm run server:dev
```
- go to [LocalHost](http://localhost:8080/)

# Brief

You have been asked to build an API to hold information about dogs.

This should be a RESTful API and should include the following routes:

- /api/dogs - Index (GET)
- /api/dogs/:id - Show (GET)
- /api/dogs - Create (POST)
- /api/dogs/:id - Destroy (DELETE)
- /api/dogs/:id - Update (PUT)

**MVP**

- Set up the express server
- Create a router file
- Code the routes to show all dogs and add a dog via the provided front end

**Extensions**

- Code the routes to show, delete and update a dog. Test these using insomnia

**Advanced Extensions**

- Create a new catRouter in the server file for http://localhost:3000/api/cats

---
