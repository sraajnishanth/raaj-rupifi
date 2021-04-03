<template>
  <!-- Modal Structure -->
  <div id="loaderModal" class="loader-modal modal">
    <div class="preloader-wrapper big active">
      <div class="spinner-layer spinner-green">
        <div class="circle-clipper left">
          <div class="circle"></div>
        </div>
        <div class="gap-patch">
          <div class="circle"></div>
        </div>
        <div class="circle-clipper right">
          <div class="circle"></div>
        </div>
      </div>

      <div class="spinner-layer spinner-blue">
        <div class="circle-clipper left">
          <div class="circle"></div>
        </div>
        <div class="gap-patch">
          <div class="circle"></div>
        </div>
        <div class="circle-clipper right">
          <div class="circle"></div>
        </div>
      </div>

      <div class="spinner-layer spinner-yellow">
        <div class="circle-clipper left">
          <div class="circle"></div>
        </div>
        <div class="gap-patch">
          <div class="circle"></div>
        </div>
        <div class="circle-clipper right">
          <div class="circle"></div>
        </div>
      </div>

      <div class="spinner-layer spinner-red">
        <div class="circle-clipper left">
          <div class="circle"></div>
        </div>
        <div class="gap-patch">
          <div class="circle"></div>
        </div>
        <div class="circle-clipper right">
          <div class="circle"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loader",

  props: {
    title: String
  },

  data() {
    return {
      instance: {}
    };
  },

  mounted() {
    var elems = document.querySelectorAll(".loader-modal");
    window.M.Modal.init(elems, {
      opacity: 0.5,
      dismissible: false
    });
    this.instance = window.M.Modal.getInstance(
      document.querySelector(".loader-modal")
    );
  },

  computed: {
    showLoader() {
      return this.$store.state.showLoader;
    }
  },

  methods: {},

  watch: {
    showLoader: function(val) {
      if (val == true) {
        this.instance.open();
      } else {
        this.instance.close();
      }
    }
  }
};
</script>

<style scoped>
.loader-modal {
  box-shadow: none !important;
  background-color: transparent !important;
  overflow-y: unset !important;
}

.loader-modal,
.preloader-wrapper {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}

/* Hack the spinner colors to show custom colors */
.spinner-green {
  border-color: #1c4e80;
}

.spinner-blue {
  border-color: black;
}

.spinner-yellow {
  border-color: white;
}

.spinner-red {
  border-color: #1c4e80;
}
</style>
