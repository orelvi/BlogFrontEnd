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

window.onload = function () {
    $("#bntLogin").click(function () {
        login();
    });
}