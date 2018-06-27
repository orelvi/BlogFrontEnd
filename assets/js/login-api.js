var LoginApi = (function () {

    //TODO: BASE_URL
    var baseUrl = "http://192.168.200.63:8080";
    var PATH = "/login";

    return {

        login: function (email, password) {
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