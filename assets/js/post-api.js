var PostApi = (function () {

    //TODO: BASE_URL
    var baseUrl = "http://127.0.0.1:8080";
    var PATH_POST = "/post";
    var PATH_USER = "/users";
    var PATH_COMMENT = ''
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





        },

        getpostn: function (token, postid) {
            return new Promise(function (resolve, reject) {

                $.ajax({
                    method: 'GET',
                    headers: { 'Authorization': 'Bearer ' + token },
                    url: baseUrl + PATH_POST + '/' + postid,
                    success: function (data) {
                        resolve(data);
                    },
                    error: function (error) {
                        reject(error);
                    }

                });

            });





        },

        getcomment: function (token, postid) {
            return new Promise(function (resolve, reject) {

                $.ajax({
                    method: 'GET',
                    headers: { 'Authorization': 'Bearer ' + token },
                    url: baseUrl + PATH_POST + '/' + postid + '/comment',
                    success: function (data) {
                        resolve(data);
                    },
                    error: function (error) {
                        reject(error);
                    }

                });

            });


        },

        getuser: function (token, userid) {
            return new Promise(function (resolve, reject) {

                $.ajax({
                    method: 'GET',
                    headers: { 'Authorization': 'Bearer ' + token },
                    url: baseUrl + PATH_USER + '/' + userid,
                    success: function (data) {
                        resolve(data);
                    },
                    error: function (error) {
                        reject(error);
                    }

                });

            });


        },

        comment: function (body, token, postId) {
            return new Promise(function (resolve, reject) {

                var commetBody = {
                    body: body
                }


                $.ajax({
                    method: 'POST',
                    headers: { 'Authorization': 'Bearer ' + token },
                    data: JSON.stringify(commetBody),
                    url: baseUrl + PATH_POST + '/' + postId + '/comment',
                    success: function (data) {
                        resolve(data);
                    },
                    error: function (error) {
                        reject(error);
                    }

                });

            });


        },




        newpost: function (title,body, token) {
            return new Promise(function (resolve, reject) {

                var postBody = {
                    title:title,
                    body: body
                }


                $.ajax({
                    method: 'POST',
                    headers: { 'Authorization': 'Bearer ' + token },
                    data: JSON.stringify(postBody),
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