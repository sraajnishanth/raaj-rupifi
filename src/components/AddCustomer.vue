<template>
  <!-- Modal Structure -->
  <!-- Modal Structure -->
  <div id="customerDetailsModal" class="modal">
    <!-- <form class="col s12" action="POST" @submit.prevent="submitDetails"> -->
      <div class="modal-content">
        <h4>{{title}}</h4>

        
        <!-- Start tabs -->
        <div class="row">
          <div class="col s12">
            <ul class="tabs tabs-fixed-width">
              <li class="tab col s3"><a class="active" href="#details1">Details</a></li>
              <li class="tab col s3"><a href="#details2">Additional details</a></li>
              <li class="tab col s3"><a href="#details3">Occupation</a></li>
              <li class="tab col s3"><a href="#details4">Addresses</a></li>
            </ul>
          </div>
          
          <div id="details1" class="col s12 details-form">
              <form class="col s12" @submit.prevent="navigateTabs('next')">
                <div class="row">
                  <div class="input-field col m6 s12">
                    <input id="first_name" type="text" class="validate" :disabled="!editMode" v-model="customerData.firstName" required>
                    <label for="first_name">First Name</label>
                  </div>

                  <div class="input-field col m6 s12">
                    <input id="last_name" type="text" class="validate" :disabled="!editMode" v-model="customerData.lastName" required>
                    <label for="last_name">Last Name</label>
                  </div>
                </div>
                
                <div class="row">
                  <div class="input-field col m6 s12">
                    <input id="password" type="password" class="validate" :disabled="!editMode" v-model="customerData.password" required>
                    <label for="password">Password</label>
                  </div>

                  <div class="input-field col m6 s12">
                    <input id="user_name" type="text" class="validate" :disabled="!editMode" v-model="customerData.userName" required>
                    <label for="user_name">User Name</label>
                  </div>
                </div>

                <div class="row">
                  <div class="input-field col s4">

                  </div>

                  <div class="input-field col s4">

                  </div>

                  <div class="input-field col s4">
                    <button class="btn waves-effect waves-light blue btn-block" type="submit" name="action" >
                      Next&gt;&gt;
                    </button>
                  </div>

                </div>

              </form>
          </div>

          <div id="details2" class="col s12 details-form">
            <form class="col s12" action="POST" @submit.prevent="navigateTabs('next')">
              <div class="row">
                <div class="input-field col m6 s12">
                  <input id="email" type="email" class="validate" :disabled="!editMode" v-model="customerData.email" required>
                  <label for="email">Email</label>
                </div>

                <div class="input-field col m6 s12">
                  <input id="phone" type="text" class="validate" :disabled="!editMode" v-model="customerData.phoneNumber" required>
                  <label for="phone">Phone Number</label>
                </div>

              </div>

              <div class="row">
                <div class="input-field col m6 s12">
                  <input id="age" type="number" class="validate" :disabled="!editMode" v-model="customerData.age" required>
                  <label for="age">Age</label>
                </div>

                <div class="input-field col m6 s12">
                  <select class="validate" :disabled="!editMode" required v-model="customerData.gender">
                    <option value="" disabled selected>Choose your option</option>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                    <option value="Don't wish to specify">Don't wish to specify</option>
                  </select>
                  <label>Gender</label>
                </div>

              </div>

              <div class="row">
                  <div class="input-field col s4">
                    <a class="right waves-effect waves-light blue btn btn-block  left" @click="navigateTabs('previous')"> &lt;&lt;Previous</a>
                  </div>

                  <div class="input-field col s4">

                  </div>

                  <div class="input-field col s4">
                    <button class="btn btn-block  waves-effect waves-light blue right" type="submit" name="action" >
                      Next&gt;&gt;
                    </button>
                  </div>

              </div>
            </form>
          </div>

           <div id="details3" class="col s12 details-form">
             <form class="col s12" action="POST" @submit.prevent="navigateTabs('next')">
              <div class="row">
                <div class="input-field col m6 s12">
                  <input id="company" type="text" class="validate" :disabled="!editMode" v-model="customerData.company" required>
                  <label for="company">Company</label>
                </div>

                <div class="input-field col m6 s12">
                  <input id="designation" type="text" class="validate" :disabled="!editMode" v-model="customerData.designation" required>
                  <label for="designation">Designation</label>
                </div>

                <div class="input-field col m6 s12">
                  <input id="salary" type="number" class="validate" :disabled="!editMode" v-model="customerData.salary" required>
                  <label for="salary">Salary</label>
                </div>

              </div>

              <div class="row">
                  <div class="input-field col s4">
                    <a class="right waves-effect waves-light blue btn btn-block  left" @click="navigateTabs('previous')"> &lt;&lt;Previous</a>
                  </div>

                  <div class="input-field col s4">

                  </div>

                  <div class="input-field col s4">
                    <button class="btn btn-block  waves-effect waves-light blue right" type="submit" name="action" >
                      Next&gt;&gt;
                    </button>
                  </div>

              </div>
             </form>
          </div>


          <div id="details4" class="col s12 details-form">
            <form class="col s12" action="POST" @submit.prevent="submitDetails">
              <div class="row">
                <div class="input-field col s12">
                  <textarea id="primaryAddress" class="validate materialize-textarea" :disabled="!editMode" v-model="customerData.primaryAddress" required></textarea>
                  <label for="primaryAddress">Primary Address</label>
                </div>

                <div class="input-field col s12">
                  <textarea id="secondaryAddress"  class="validate materialize-textarea" :disabled="!editMode" v-model="customerData.secondaryAddress"></textarea>
                  <label for="secondaryAddress">Secondary Address</label>
                </div>

              </div>
              
              <div class="row">
                  <div class="input-field col s4">
                    <a class="right waves-effect waves-light blue btn btn-block  left" @click="navigateTabs('previous')"> &lt;&lt;Previous</a>
                  </div>

                  <div class="input-field col s4">

                  </div>

                  <div class="input-field col s4">
                    <button v-if="editMode" class="btn btn-block  waves-effect waves-light right" type="submit" name="action">
                      Submit
                    </button>
                  </div>

              </div>
            </form>
          </div>


        </div>
        <!-- End tabs -->
        

      </div>
    
      <!-- <div class="modal-footer">
        <a class="modal-close waves-effect waves-red red btn">Close</a>

      
      </div> -->

    <!-- </form> -->


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
      title: "Enter customer details",
      editMode: true,
      tabsArray: ['details1', 'details2', 'details3', 'details4'],
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
            company: null,
            designation: null,
            salary: null,
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
      dismissible: true,
    });
    this.modalInstance = window.M.Modal.getInstance(
      document.querySelector("#customerDetailsModal")
    );

    // Intitiate the tabs
    var tabElem = document.querySelector(".tabs");
    this.tabsInstance = window.M.Tabs.init(tabElem, {
      onShow: function(data) {
        if(data.id) {
          __this.currentTab = data.id;
        }
      }
    });

    // Inititate the select elements
    var sElems = document.querySelectorAll('select');
    window.M.FormSelect.init(sElems, {});

    this.emitter.on("ADD_NEW_CUSTOMER", data => {
      console.log(data);
      this.clearModalData();
      this.title = "Enter customer details";
      this.editMode = true;
      // Open the customer details modal
      __this.modalInstance.open();
    });

    this.emitter.on("SHOW_CUSTOMER_DETAILS", data => {
      this.title = "Customer details";
      this.editMode = false;
      __this.customerData = data;
      // Open the customer details modal
      __this.modalInstance.open();
      
      // Update the labels on the input fields
      setTimeout(() => window.M.updateTextFields(), 500);
    });

    // Update the labels on the input fields
    setTimeout(() => window.M.updateTextFields(), 500);

    setTimeout(() => __this.tabsInstance.updateTabIndicator(), 3000);

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

      this.$store.commit("SET_SHOW_LOADER", true);

      if(!this.validateCustomerData()) {
         window.M.toast({html: 'Kindly fill all fields'});
        return;
      }

      let customer = new Customer();

      customer.addDetails(
        this.customerData,
        function(docRef) {
          __this.$store.commit("SET_SHOW_LOADER", false);
          if(docRef.id) {
            __this.emitter.emit("ADDED_NEW_CUSTOMER", __this.customerData);
            __this.modalInstance.close();
            __this.clearModalData();
            window.M.toast({html: 'Customer added successfully'});
          }
        },
        function(error) {
          __this.$store.commit("SET_SHOW_LOADER", false);
          __this.modalInstance.close();
          window.M.toast({html: error.message});
        }
      );
    },

    validateCustomerData() {
      // For now, just check for null values
      for(let key in this.customerData){
        if(!this.customerData[key]){
          return false;
        }
      }
      return true;
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
            company: null,
            designation: null,
            salary: null,
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

  .details-form {
    padding-top: 10px;
  }

  .btn-block {
    width: 100%;
  }
</style>
