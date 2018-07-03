var RegistroLogin = (function () {

    //TODO: BASE_URL
    var baseUrl = "http://127.0.0.1:8080";
    var PATH = "/register";

    return {

        registro: function (email, password) {
            return new Promise(function (resolve, reject) {

                var ld = {
                    email: email,
                    password: password
                }


                $.ajax({
                    method: 'POST',
                    data: JSON.stringify(ld),
                    url: baseUrl + PATH,
                    success: function (data) {
                        resolve(data);
                    },
                    error: function (error) {
                        reject(error);
                    }

                });

            });

        }
    }


})();