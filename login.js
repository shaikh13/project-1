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



async function isEmpty() {
  let password = document.getElementById("pass").value;
  const data = await fetch("./login.json")
  .then((response) => response.json())
   const result =  Array.isArray(data) && data.length>0

  if (password == "") {
    alert("Fields Shout not be empty ");
    return false;
  }else if(result){
    Authenticate(data)
    return true
  }

  return false
}

function validate() {
  isEmpty();
}

function Authenticate (result) {
  
  let password = document.getElementById("pass").value;
  
  let auth = false
  const user = result.map(item=>{
    if(item?.password === password){
      auth = true
      document.getElementById("CTC").value = item?.ctc

    }else{

      auth = false
    }
  })

  if(auth){
   console.log("user", password)
  pass()
 }else{
  alert("Wrong password")
 }
}

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
   
  } else {
    document.getElementById("submit").disabled = false;
    window.location.replace("/login_2.html");
  }
}