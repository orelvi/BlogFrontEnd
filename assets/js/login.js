function login() {
    var email = $("#email").val();
    var password = $("#password").val();

    LoginApi.login(email, password)
        .then(function (token) {
            console.log("Successfully: ", token);

            //TODO: Registrar Token en Local Storage
            //TODO: Debemos redireccionar al index
        })

        .catch(function (error) {
            console.log("Error", error);
        });

}

window.onload = function () {
    $("#bntLogin").click(function () {
        login();
    });
}