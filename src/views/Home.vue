<template>
  <div class="container">
    <div class="row"></div>

    <div class="row">
      <div class="col s4 right">
        <a class="waves-effect waves-light btn modal-trigger" @click="addNewCustomer()">Add Customer</a>
      </div>
    </div>

    <addCustomer></addCustomer>
    
    <div class="row">
      <div class="col">
        <!-- <HelloWorld msg="Welcome to Your Vue.js App" />     -->
        <datatable
          title="Customer list"
          :columns="tableColumns"
          :rows="tableRows"
          :customButtons="customButtons"
          :exportable="false"
	        :printable="false"
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
    addCustomer: AddCustomer
  },
  data() {
    return {
      tableRows: [],
      tableColumns: [],
      customButtons: [
      ],
    };
  },

  mounted() {
    let customer = new Customer();
    customer.getAllCustomers(data => {
      console.log(data);
    });
  },

  methods: {
    addNewCustomer: function() {
      this.emitter.emit("ADD_NEW_CUSTOMER", 'open-modal');
    }
  }
};
</script>
