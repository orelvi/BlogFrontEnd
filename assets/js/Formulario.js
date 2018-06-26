var Storage = window.localStorage;


function Registro() {

    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmar = document.getElementById("confirmar").value;

    var sendInfo = {
        name: nombre,
        email: email,
        password: password
    };

    console.log(sendInfo);

    $.ajax({
        method: "post",
        url: "http://127.0.0.1:8080/register",
        DataType: "json",
        data: JSON.stringify(sendInfo),
        success: function (data) {
            console.log(data);
            alert("Usuario Registrado Satisfactoriamente!");
            Login(data);
            limpiarFormulario(["nombre", "email", "password", "confirmar"]);
        },


        error: function (er) {
            alert("Usuario Equivocado");
            //console.log(er);
        }
    })
}





function Login(Data) {

    var password = "";
    var usuario = "";

    if (Data == undefined) {

        password = document.getElementById("password").value;
        usuario = document.getElementById("usuario").value;

    }
    else {
        
        password = Data.password;
        usuario = Data.email;
    }

    

    var sendInfo = {
        email: usuario,
        password: password
    };

    console.log(sendInfo);

    $.ajax({
        method: "post",
        url: "http://127.0.0.1:8080/login",
        DataType: "json",
        data: JSON.stringify(sendInfo),
        success: function (data) {
            console.log(data);
            Storage.setItem("BlogWebApi", JSON.stringify(data));
            location.href = "index.htm";
        },


        error: function (er) {
            alert("Usuario Equivocado");
            //console.log(er);
        }
    })
}

function limpiarFormulario(inputs) {

    inputs.forEach(function (v, i) {
        document.getElementById(v).value = "";
    });
}

