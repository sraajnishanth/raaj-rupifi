<template>
  <!-- Modal Structure -->
  <!-- Modal Structure -->
  <div id="customerDetailsModal" class="modal modal-fixed-footer">
    <form class="col s12" action="POST" @submit.prevent="submitDetails">
    <div class="modal-content">
      <h4>Enter customer details</h4>

      
      <!-- Start tabs -->
      <div class="row">
        <div class="col s12">
          <ul class="tabs">
            <li class="tab col s3"><a class="active" href="#details1">Details</a></li>
            <li class="tab col s3"><a href="#details2">Additional details</a></li>
            <li class="tab col s3"><a href="#details3">Addresses</a></li>
          </ul>
        </div>
        
        <div id="details1" class="col s12">
            
              <div class="row">
                <div class="input-field col m6 s12">
                  <input id="first_name" type="text" class="validate" v-model="customerData.firstName" required>
                  <label for="first_name">First Name</label>
                </div>

                <div class="input-field col m6 s12">
                  <input id="last_name" type="text" class="validate" v-model="customerData.lastName" required>
                  <label for="last_name">Last Name</label>
                </div>
              </div>
              
              <div class="row">
                <div class="input-field col m6 s12">
                  <input id="password" type="password" class="validate" v-model="customerData.password" required>
                  <label for="password">Password</label>
                </div>

                <div class="input-field col m6 s12">
                  <input id="user_name" type="text" class="validate" v-model="customerData.userName" required>
                  <label for="user_name">User Name</label>
                </div>
              </div>
            
        </div>

        <div id="details2" class="col s12">
            <div class="row">
              <div class="input-field col m6 s12">
                <input id="email" type="email" class="validate" v-model="customerData.email" required>
                <label for="email">Email</label>
              </div>

              <div class="input-field col m6 s12">
                <input id="phone" type="text" class="validate" v-model="customerData.phoneNumber" required>
                <label for="phone">Phone Number</label>
              </div>

            </div>

            <div class="row">
              <div class="input-field col m6 s12">
                <input id="age" type="number" class="validate" v-model="customerData.age" required>
                <label for="age">Age</label>
              </div>

              <div class="input-field col m6 s12">
              <select class="validate" required v-model="customerData.gender">
                <option value="" disabled selected>Choose your option</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="Don't wish to specify">Don't wish to specify</option>
              </select>
              <label>Gender</label>
            </div>

            </div>
        </div>

        <div id="details3" class="col s12">
            <div class="row">
              <div class="input-field col s12">
                <textarea id="primaryAddress" class="validate materialize-textarea" v-model="customerData.primaryAddress" required></textarea>
                <label for="primaryAddress">Primary Address</label>
              </div>

              <div class="input-field col s12">
                <textarea id="secondaryAddress"  class="validate materialize-textarea" v-model="customerData.secondaryAddress"></textarea>
                <label for="secondaryAddress">Secondary Address</label>
              </div>

            </div>
        </div>


      </div>
      <!-- End tabs -->
      

    </div>
    
    <div class="modal-footer">
      <a href="#!" class="modal-close waves-effect waves-red red btn left">Close</a>

       <button v-if="currentTab == 'details3'" class="btn waves-effect waves-light right" type="submit" name="action">
        Submit
      </button>

      <a v-if="currentTab == 'details1' || currentTab == 'details2'" class="col s4 right waves-effect waves-light blue btn" @click="navigateTabs('next')">Next&gt;&gt; </a>
      <a v-if="currentTab == 'details2' || currentTab == 'details3'" class="col s4 right waves-effect waves-light blue btn" @click="navigateTabs('previous')"> &lt;&lt;Previous</a>

     
    </div>

    </form>


  </div>
</template>

<script>

import Customer from '@/controller/customer';

export default {
  name: "AddCustomer",

  props: {
    // title: String,
  },

  data() {
    return {
      modalInstance: {},
      tabsInstance: {},
      tabsArray: ['details1', 'details2', 'details3'],
      currentTab: 'details1',
      customerData: {
            firstName: null,
            lastName: null,
            password: null,
            userName: null,
            email: null,
            phoneNumber: null,
            age: null,
            gender: null,
            primaryAddress: null,
            secondaryAddress: null,
      },
    };
  },

  mounted() {
    var __this = this;

    // Initiate the Modal
    var modalElem = document.querySelector("#customerDetailsModal");
    window.M.Modal.init(modalElem, {
      opacity: 0.5,
      dismissible: false,
    });
    this.modalInstance = window.M.Modal.getInstance(
      document.querySelector("#customerDetailsModal")
    );

    // Intitiate the tabs
    var tabElem = document.querySelector(".tabs");
    this.tabsInstance = window.M.Tabs.init(tabElem, {
      onShow: function(data) {
        if(data.id == 'details1') {
          __this.currentTab = 'details1';
        }
        else if(data.id == 'details2') {
          __this.currentTab = 'details2';
        }
        else if(data.id == 'details3') {
          __this.currentTab = 'details3';
        }
      }
    });

    // Inititate the select elements
    var sElems = document.querySelectorAll('select');
    window.M.FormSelect.init(sElems, {});

    // Update the labels on the input fields
    setTimeout(() => window.M.updateTextFields(), 200);

    this.emitter.on("ADD_NEW_CUSTOMER", data => {
      console.log(data);
      // Open the customer details modal
      __this.modalInstance.open();
    });
    
    setTimeout(() => __this.tabsInstance.updateTabIndicator(), 2000);

  },

  computed: {

  },

  methods: {
    navigateTabs: function(action) {
      let idx = this.tabsArray.indexOf(this.currentTab);
      if(action == 'next') {
        let nextTab = (idx+1) >= this.tabsArray.length ? this.tabsArray[idx] : this.tabsArray[idx+1];
        this.tabsInstance.select(nextTab);
        // this.tabsInstance.select('details2');
      }
      else if(action == 'previous') {
        let previousTab = (idx) > 0 ? this.tabsArray[idx-1] : this.tabsArray[idx];
        this.tabsInstance.select(previousTab);
        // this.tabsInstance.select('details1');
      }
    },

    submitDetails: function() {
      let __this = this;
      let customer = new Customer();

      customer.addDetails(
        this.customerData,
        function(docRef) {
          if(docRef.id) {
            __this.emitter.emit("ADDED_NEW_CUSTOMER", __this.customerData);
            __this.modalInstance.close();
            __this.clearModalData();
          }
        },
        function(error) {
          __this.modalInstance.close();
          alert(error);
        }
      );
    },

    clearModalData() {
        this.customerData = {
            firstName: null,
            lastName: null,
            password: null,
            userName: null,
            email: null,
            phoneNumber: null,
            age: null,
            gender: null,
            primaryAddress: null,
            secondaryAddress: null,
        };
    }
  },


};
</script>

<style scoped>
  .modal-footer .btn {
    margin-right: 5px;
  }

  #details1, #details1 {
    padding-top: 10px;
  }
</style>
