import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import firebase from "firebase";
import mitt from "mitt";

const emitter = mitt();

  const firebaseConfig = {
    apiKey: "AIzaSyAY8yTfocyKZB3RJXlXSFm9SbSVb4qIEvI",
    authDomain: "raaj-rupifi.firebaseapp.com",
    projectId: "raaj-rupifi",
    storageBucket: "raaj-rupifi.appspot.com",
    messagingSenderId: "697400389661",
    appId: "1:697400389661:web:153c5b98ea46a68c5d16f4",
    measurementId: "G-WGFSF49VMV"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let app = createApp(App)
  .use(store)
  .use(router);

// Setting the emitter as a global property to support event handling
app.config.globalProperties.emitter = emitter;

app.mount("#app");
