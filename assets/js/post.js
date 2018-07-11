function cargaPost() {


    var token = window.localStorage.getItem("token");
    PostApi.getpost(token)
        .then(function (responsen) {
            console.log("Successfully: ", responsen);


        })

        .catch(function (error) {
            console.log("Error", error);
        });


}