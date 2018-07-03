function Registro() {
    var email = $("#email").val();
    var password = $("#password").val();

    LoginApi.Registro(email, password)
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

window.onload = function () {
    $("#bntRegistro").click(function () {
        Registro();
    });
}