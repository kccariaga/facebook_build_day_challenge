/* index.js
 *  It’s a simple entry point file to the Firebase module (src/firebase/ folder)
 *  by grouping and exposing all the functionalities from the module to other 
 *  modules in one file. Thus it shouldn’t be necessary for other modules in 
 *  your application to access any other file than this one to use its functionalities.
*/

import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBCWY-OZnb7AHDndPYJ3l04IP-PJniZxPk",
  authDomain: "let-s-code-together.firebaseapp.com",
  databaseURL: "https://let-s-code-together.firebaseio.com",
  projectId: "let-s-code-together",
  storageBucket: "let-s-code-together.appspot.com",
  messagingSenderId: "82793379539"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth,
};