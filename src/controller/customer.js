const firebase = require("firebase").default;
// Required for side-effects
require("firebase/firestore");

class Customer {
    constructor() {
        // Initialize Cloud Firestore through Firebase
        this.db = firebase.firestore();
    }


    addDetails(customerData, cb, errCb) {
        let successCb = cb;
        let errorCb = errCb;
        this.db.collection("customers").add(customerData)
        .then((docRef) => {
            successCb(docRef);
        })
        .catch((error) => {
            errorCb(error);
        });
        
    }

    getAllCustomers(cb) {
        this.db.collection("customers").get().then((querySnapshot) => {
            cb(querySnapshot);
        }).catch((error) => {
            console.error("Error fetching documents: ", error);``
        });
    }
}

module.exports = Customer;