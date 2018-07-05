var RegistroApi = (function () {

    //TODO: BASE_URL
    var baseUrl = "http://127.0.0.1:8080";
    var PATH_LOGIN = "/login";
    

    return {

        registro: function (nombre,email, password) {
            return new Promise(function (resolve, reject) {

                var ld = {
                   name:nombre,
                    email: email,
                    password: password
                    
                }

                    console.log(ld);

                $.ajax({
                    method: 'POST',
                    data: JSON.stringify(ld),
                    url: baseUrl + PATH_LOGIN ,
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