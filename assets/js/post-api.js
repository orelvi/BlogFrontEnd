var PostApi = (function () {

    //TODO: BASE_URL
    var baseUrl = "http://127.0.0.1:8080";
    var PATH_POST = "/post";
    //var PATH_REGISTER = "/register";
    //var PATH_LOGOUT = "/logout";

    return {


        getpost: function (token) {
            return new Promise(function (resolve, reject) {

                $.ajax({
                    method: 'GET',
                    headers: { 'Authorization': 'Bearer ' + token },
                    url: baseUrl + PATH_POST,
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