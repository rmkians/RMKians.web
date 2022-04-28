var firebaseConfig = {
    apiKey: "AIzaSyCEuquQ-ZPMPN2qt0rpUQ0xQmtrrsN9WXM",
    authDomain: "rmkians-2e905.firebaseapp.com",
    databaseURL: "https://rmkians-2e905-default-rtdb.firebaseio.com",
    projectId: "rmkians-2e905",
    storageBucket: "rmkians-2e905.appspot.com",
    messagingSenderId: "113542929209",
    appId: "1:113542929209:web:5c1c2b2166931d0e66e6e8",
    measurementId: "G-83GJ3FWGT4"
  };
  
  firebase.initializeApp(firebaseConfig);

  let contactInfo = firebase.database().ref("User Information");

  document.querySelector(".contact-form").addEventListener("submit", submitForm);
  function submitForm(e) {
    e.preventDefault();
    let email = document.querySelector(".form-control").value;
    console.log(email);
    saveContactInfo(email);
    document.querySelector(".contact-form").reset();
  }
  function saveContactInfo(email) {
    let newContactInfo = contactInfo.push();
    newContactInfo.set({
      Email: email,
    });
  }