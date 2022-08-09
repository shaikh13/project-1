function outDate() {
  const today = new Date("2022-08-13");
  function isWeekend(date = new Date()) {
    return date.getDay() === 6;
  }
  const validate = isWeekend(today);

  return validate;
}
console.log(outDate());
if (outDate()) {
  document.getElementById("outdate").style.display = "none";
  document.getElementById("portal").style.display = "block";
} else {
  document.getElementById("outdate").style.display = "block";
  document.getElementById("portal").style.display = "none";
}

// const password = [{passsword:"shaikh"}, {passsword:"shaikh11"},{passsword:"shaikh22"},{passsword:"shaikh"} ]

function validate() {
  if (isEmpty()) {
    return false;
  } else if (pass()) {
    return false;
  } else {
  }
}

async function isEmpty() {
  let password = document.getElementById("pass").value;
  fetch("./login.json")
    .then((response) => response.json())
    .then((data) => console.log(data));

  if (password == "") {
    alert("Fields Shout not be empty ");
    return false;
  }
}

function validate() {
  if (isEmpty() == false) {
    return false;
  } else if (pass() == false) {
    return false;
  }
}

// function isEmpty() {
//   let p = document.getElementById("pass").value;
//   if (p == "") {
//     alert("Fields Shout not be empty ");
//     return false;
//   }
// }

//   if (confirm("have you submit the assignment today? 'OK' means YES, and 'Cancel' means No")) {
//     document.getElementById("submit").disabled = true;
//   } else {
//     document.getElementById("submit").disabled = false;
//   }

function pass() {
  let password = document.getElementById("submit").value;
  if (
    confirm(
      "have you submit the assignment today? 'OK' means YES, and 'Cancel' means No"
    )
  ) {
    alert(
      "You have already submited the assignment once today, come back on saturday"
    );
    return false;
  } else {
    document.getElementById("submit").disabled = false;
  }
}
