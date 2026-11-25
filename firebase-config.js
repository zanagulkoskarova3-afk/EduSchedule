/* firebase-config.js - Firebase settings for EduSchedule (Akyldy keste).
   If apiKey is empty, the site works in offline mode (data only in this browser).
   These keys are not secret; data is protected by firestore.rules. */
window.FIREBASE_CONFIG = {
  apiKey: 'AIzaSyB5CaTyqzQhOl4RbpubBTfE-IId5Rvms6Q',
  authDomain: 'eduschedule-ef0ad.firebaseapp.com',
  projectId: 'eduschedule-ef0ad',
  storageBucket: 'eduschedule-ef0ad.firebasestorage.app',
  messagingSenderId: '933843164521',
  appId: '1:933843164521:web:5895fb346587c50a5731f8',

  // login -> email: "aigerim" -> aigerim@eduschedule.local (internal only)
  loginDomain: 'eduschedule.local'
};
