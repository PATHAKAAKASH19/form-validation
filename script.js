const name1 = document.getElementById("firstname")
const name2 = document.getElementById("lastname")
const email = document.getElementById("email")
const password = document.getElementById("password")
const form = document.getElementById("form")
const f1 = document.querySelectorAll(".f1")

form.addEventListener('submit' , (e) => {
   
    e.preventDefault()
    validateInputs()
   

})


let setError = (element , message , example) => {
    const f1 = element.parentElement
    const error = f1.querySelector(".error")

    error.textContent = message
    element.removeAttribute("placeholder")
    
    f1.classList.add("error")
    f1.classList.remove("success")
    
}





let setSuccess = (element) => {
   const f1 = element.parentElement
   const error = f1.querySelector(".error")

   error.textContent = ""
   f1.classList.add("success")
   f1.classList.remove("error")
}

let checkEmail = emailValue => {
  const  re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(emailValue).toLowerCase())
}
const validateInputs = () => {
    const name1Value = name1.value.trim()
    const name2Value = name2.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()

    if(name1Value === ""){
       setError(name1 , "username is required" , "eg. Akash");
    }else {
        setSuccess(name1)
    }

    if(name2Value === ""){
        setError(name2, "surname is required" , "eg . Pathak")

    }else{
        setSuccess(name2)
    }

    if(emailValue===""){
        setError(email , "email is required" , "eg. Akash8@gmail.com")
    }else if (!checkEmail(emailValue)){
      setError(email,'format {"provide @email.com"}')
    }else {
        setSuccess(email)
    }

    if(passwordValue === ""){
      setError(password , "password is required" , "eg. 23ere@12")
    }
    else if(passwordValue.length > 6 && passwordValue.length<12){
      setSuccess(password)
    }
    else{
        setSuccess(password , "password should be 7 to 11 char")
    }
        
}

    



