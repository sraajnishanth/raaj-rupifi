<template>
  <div class="container">
    <div class="row">
      <h2>Login</h2>
    </div>
    <div class="row">
      <form class="col s12" @submit.prevent="login">
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
            <button
              class="btn waves-effect waves-light"
              type="submit"
              name="action"
            >
              LOGIN
              <i class="material-icons right">person</i>
            </button>
            <p>
              Not registered? <router-link to="/register">Signup</router-link>
            </p>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      const __this = this;
      __this.$store.commit("SET_SHOW_LOADER", true);
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          __this.$store.commit("SET_SHOW_LOADER", false);
          this.$router.push("/create-game");
        })
        .catch(error => {
          __this.$store.commit("SET_SHOW_LOADER", false);
          alert(error.message);
        });
    }
  }
};
</script>
