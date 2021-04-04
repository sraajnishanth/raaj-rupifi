<template>
  <div class="container">
    <div class="row"></div>

    <div class="row">
      <div class="col s4 right">
        <a class="waves-effect waves-light btn modal-trigger" @click="addNewCustomer()">Add Customer</a>
      </div>
    </div>

    <addCustomer></addCustomer>
    
    <div class="row" v-if="tableRows.length">
      <div class="col">
        <!-- <HelloWorld msg="Welcome to Your Vue.js App" />     -->
        <datatable
          title="Customer list"
          :columns="tableColumns"
          :rows="tableRows"
          :customButtons="customButtons"
          :exportable="false"
	        :printable="false"
          :perPage="[3, 5, 10]"
          v-on:row-click="onRowClick"
        ></datatable>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import DataTable from "vue-materialize-datatable";
import DataTable from "@/components/DataTable/DataTable";

import AddCustomer from "@/components/AddCustomer";

import Customer from '@/controller/customer';

export default {
  name: "Home",
  components: {
    datatable: DataTable,
    addCustomer: AddCustomer,
  },
  data() {
    return {
      tableRows: [],
      tableColumns: [
        {
          label: "ID",
          field: "id",
          numeric: true,
          html: false
        },
        {
          label: "Name",
          field: "name",
          numeric: false,
          html: false
        },
        {
          label: "Age",
          field: "age",
          numeric: true,
          html: false
        },
        {
          label: "Gender",
          field: "gender",
          numeric: false,
          html: false
        }
      ],
      
      customButtons: []
    };
  },

  mounted() {
    let __this = this;
     __this.$store.commit("SET_SHOW_LOADER", true);

    // Fetch the list of customers
    this.refreshCustomerList();

    // Refresh the list whenever a new customer has been added
    this.emitter.on("ADDED_NEW_CUSTOMER", data => {
      if(data) {
        __this.refreshCustomerList();
      }
    });
  },

  methods: {
    addNewCustomer: function() {
      this.emitter.emit("ADD_NEW_CUSTOMER", 'open-modal');
    },

    refreshCustomerList() {
      let __this = this;
      let customer = new Customer();
      // Get all existing customers
      customer.getAllCustomers(querySnapshot => {
        __this.tableRows = [];
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            let cd = doc.data();
            let cdFormatted = {'id': doc.id, 'name': `${cd.firstName} ${cd.lastName}`, 'age':cd.age, 'gender':cd.gender, customerDetails: cd};
            __this.tableRows.push(cdFormatted);
        });
         __this.$store.commit("SET_SHOW_LOADER", false);
      });       
    },

    onRowClick(row) {
      this.emitter.emit("SHOW_CUSTOMER_DETAILS", row.customerDetails);      
    },
  }
};
</script>
