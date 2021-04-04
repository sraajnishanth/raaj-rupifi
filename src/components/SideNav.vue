<template>
  <div class="">
    <nav>
      <div class="nav-wrapper">
        <a
          href="#"
          data-target="slide-out"
          class="sidenav-trigger show-on-large"
          ><i class="material-icons">menu</i></a
        >
        <a href="#" class="brand-logo center">Rupify</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li v-for="item in linksArray" v-bind:key="item.to">
            <router-link :to="item.to">{{ item.label }}</router-link>
          </li>
          <li v-if="userToken">
            <a v-on:click.prevent="logout">Logout</a>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Slideout begins -->
    <ul id="slide-out" class="sidenav">
      <li>
        <div class="user-view">
          <div class="background">
            <img
              src="https://media-exp1.licdn.com/dms/image/C560BAQE4DAgfqjSR8A/company-logo_200_200/0/1588848735632?e=2159024400&v=beta&t=5BFY5rA9gS4F6WCnZ-65ZczRLnMk2mB9HnEt37AJP2Q"
            />
          </div>
          <a href="#user">
            <!-- <img class="circle" src="images/yuna.jpg"/> -->
          </a>
          <a href="#name"><span class="white-text name"></span></a>
          <a href="#email"><span class="white-text email"></span></a>
        </div>
      </li>
      <li>--</li>
      <li></li>
      <li v-for="item in linksArray" v-bind:key="item.to">
        <router-link :to="item.to">{{ item.label }}</router-link>
      </li>
      <li v-if="userToken">
        <a v-on:click.prevent="logout">Logout</a>
      </li>
    </ul>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "SideNav",
  props: {},
  data() {
    return {
      sideNaveInstance: null,
      linksArray: [],
    };
  },

  computed: {
    userToken() {
      return this.$store.state.userToken;
    },
  },

  mounted() {
    // Add the links to the array
    this.linksArray = [
      {
        to: "/",
        label: "Customers",
      }
    ];
    // Initialize the side nav bar
    let elem = document.querySelector(".sidenav");
    let options = {};
    this.sideNaveInstance = window.M.Sidenav.init(elem, options);
    // this.sideNaveInstance.open();
  },

  methods: {
    logout() {
      const __this = this;
      __this.$store.commit("SET_SHOW_LOADER", true);

      firebase
        .auth()
        .signOut()
        .then(() => {
          __this.$store.commit("SET_SHOW_LOADER", false);
          __this.$store.commit("SET_USER_TOKEN", null);
          this.$router.push("/login");
        })
        .catch((error) => {
          __this.$store.commit("SET_SHOW_LOADER", false);
          window.M.toast({html: error.message});
          __this.$router.push("/login");
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.background img {
  object-fit: contain;
  width: 266px;
}

.user-view {
  height: 254px;
  margin-top: 10px;
}
</style>
