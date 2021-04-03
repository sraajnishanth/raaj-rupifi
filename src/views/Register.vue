<template>
  <div class="container">
    <div class="row">
      <h2>Admin - Register</h2>
    </div>
    <div class="row">
      <form class="col s12" @submit.prevent="register">
        <div class="row">
          <div class="input-field col s12">
            <input
              id="email"
              type="email"
              class="validate"
              required
              v-model="email"
            />
            <label for="email">Email</label>
          </div>
        </div>

        <div class="row">
          <div class="input-field col s12">
            <input
              id="password"
              type="password"
              class="validate"
              v-model="password"
              required
            />
            <label for="password">Password</label>
          </div>
        </div>

        <div class="row">
          <div class="input-field col s12">
            <input
              id="username"
              type="text"
              class="validate"
              v-model="username"
              required
            />
            <label for="username">Set a display name</label>
          </div>
        </div>

        <div class="row">
          <div class="input-field col s12">
            <button
              class="btn waves-effect waves-light"
              type="submit"
              name="action"
            >
              Register
              <i class="material-icons right">person</i>
            </button>
            <p>Already registered? <router-link to="/">Login</router-link></p>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>

import firebase from "firebase";

export default {
  name: "Register",
  data() {
    return {
      email: null,
      password: null,
      username: null
    };
  },
  methods: {
    register() {
      const __this = this;
      __this.$store.commit("SET_SHOW_LOADER", true);

      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(userCred => {
          userCred.user
            .updateProfile({
              displayName: __this.username
            })
            .then(
              function() {
                __this.$store.commit("SET_SHOW_LOADER", false);
                __this.$router.push({
                  name: "Home"
                });
              },
              function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                __this.$store.commit("SET_SHOW_LOADER", false);
                // [START_EXCLUDE]
                if (errorCode == "auth/weak-password") {
                  alert("The password is too weak.");
                } else {
                  console.error(error);
                  console.error(errorMessage);
                }
              }
            );
        })
        .catch(error => {
          alert(error.message);
        });
    }
  }
};
</script>
