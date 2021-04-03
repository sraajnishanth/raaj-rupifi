<template>
  <div class="container">
    <div class="row"></div>  

    <div class="row">
      <div class="col s4 right">
        <a class="waves-effect waves-light btn">Add Customer</a>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <HelloWorld msg="Welcome to Your Vue.js App" />    
      </div>
    </div>

    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
