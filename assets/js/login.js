function login() {
    var email = $("#email").val();
    var password = $("#password").val();

    LoginApi.login(email, password)
        .then(function (responsen) {
            console.log("Successfully: ", responsen);
            var token = responsen.token;
            window.localStorage.setItem("token", token);
            window.location = "index.htm"
        })

        .catch(function (error) {
            alert("Error: Intentelo nuevamente");
            console.log("Error", error);
        });

}


function registrer() {
    var name = $("#nombre").val();
    var email = $("#email").val();
    var password = $("#password").val();
    var password2 = $("#password2").val();

    console.log(email, password,name);
    
    if (password!=password2){
        alert("Las contraseña son diferentes.")
        return;
    }
    
    LoginApi.register(email, password,name)
        .then(function (responsen) {
            console.log("Successfully: ", responsen);
            login();
            
        })

        .catch(function (error) {
            alert("Error: Intentelo nuevamente");
            console.log("Error", error);
        });

}



window.onload = function () {
   
   
   //TODO Validar si exite un token mandar al index
  
    $("#bntLogin").click(function () {
        login();
      });

    $("#bntRegistro").click(function () {
     registrer();  
    });

}