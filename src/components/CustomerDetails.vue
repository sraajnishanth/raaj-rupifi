<template>
  <!-- Modal Structure -->
  <div id="addressListModal" class="address-list-modal modal">
    <div class="modal-content">
      <h4>Customer Address List</h4>
      
      <div class="row">
        <form class="col s12">
          <div class="row">
            
            <div class="input-field col s12" v-if="currentCustomer.primaryAddress">
              <p id="textarea1" class="materialize-textarea">{{currentCustomer.primaryAddress}}</p>
              <label for="textarea1">Primary Address</label>
            </div>

            <div class="input-field col s12" v-if="currentCustomer.secondaryAddress">
              <p id="textarea1" class="materialize-textarea">{{currentCustomer.secondaryAddress}}</p>
              <label for="textarea1">Secondary Address</label>
            </div>

          </div>
        </form>
      </div>
          
    </div>
    <div class="modal-footer">
      <a class="modal-close waves-effect waves-red red btn-flat">Close</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomerDetails",

  data() {
    return {
      modalInstance: {},
      currentCustomer: {}
    };
  },

  mounted() {
    let __this = this;
    let elems = document.querySelectorAll(".address-list-modal");
    window.M.Modal.init(elems, {
      opacity: 0.5,
      dismissible: false,
    });
    this.modalInstance = window.M.Modal.getInstance(
      document.querySelector(".address-list-modal")
    );

    this.emitter.on("SHOW_CUSTOMER_DETAILS", data => {
      __this.currentCustomer = data;
      // Open the customer details modal
      __this.modalInstance.open();
    });
  },

  computed: {
    
  },

  methods: {},

  watch: {
    
  },
};
</script>

<style scoped>

</style>
