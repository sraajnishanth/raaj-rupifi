const firebase = require("firebase").default;
// Required for side-effects
require("firebase/firestore");

class Customer {
    constructor() {
        // Initialize Cloud Firestore through Firebase
        this.db = firebase.firestore();
    }


    addDetails(customerData) {
        this.db.collection("customers").add(customerData)
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
        
    }

    getAllCustomers(cb) {
        this.db.collection("customers").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
            });
            cb(querySnapshot);
        });
    }
}

module.exports = Customer;