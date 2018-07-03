function registro() {
    var nombre = $("#nombre").val();
    var email = $("#email").val();
    var password = $("#password").val();

    console.log(nombre, email, password);
    
    
    
    RegistroApi.registro(nombre, email, password)
        .then(function (responsen) {
            console.log("Successfully: ", responsen);

            window.location = "index.htm"
        })

        .catch(function (error) {
            alert("Error: Intentelo nuevamente");
            console.log("Error", error);
        });

}

window.onload = function () {
    $("#bntRegistro").click(function () {
        registro();
    });
}