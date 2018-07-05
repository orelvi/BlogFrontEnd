var LoginApi = (function () {

    //TODO: BASE_URL
    var baseUrl = "http://127.0.0.1:8080";
    var PATH_LOGIN = "/login";
    var PATH_REGISTER = "/register";
    var PATH_LOGOUT = "/logout";

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
                    url: baseUrl + PATH_LOGIN,
                    success: function (data) {
                        resolve(data);
                    },
                    error: function (error) {
                        reject(error);
                    }

                });

            });

        },

        register: function (email, password,name) {
            return new Promise(function (resolve, reject) {

                var ld = {
                    email: email,
                    password: password,
                    name: name
                }


                $.ajax({
                    method: 'POST',
                    data: JSON.stringify(ld),
                    url: baseUrl + PATH_REGISTER,
                    success: function (data) {
                        resolve(data);
                    },
                    error: function (error) {
                        reject(error);
                    }

                });

            });


        },

        logout: function (toke) {
            return new Promise(function (resolve, reject) {

                $.ajax({
                    method: 'DELETE',
                    headers:{'Authorization': 'Bearer'+toke} ,
                    url: baseUrl + PATH_LOGOUT,
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


    }) ();