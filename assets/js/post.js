


function cargaPost() {


    var token = window.localStorage.getItem("token");

    PostApi.getUsers(token)
        .then(function (users) {
            PostApi.getpost(token)
                .then(function (responsen) {
                    console.log("Successfully: ", responsen);

                    /* responsen.forEach((v, i) => agregarRow(v));*/
                    responsen.forEach((v, i) => {
                        users.forEach((v1, i1) => {

                            if (v1.id === v.userId) {
                                v.name = v1.name;
                                v.email = v1.email;
                            }
                        });
                        // TODO: poner username and email

                        agregaPost(v);
                    });
                })

                .catch(function (error) {
                    console.log("Error", error);
                });
        });

}



function cargaPostNu() {


    var token = window.localStorage.getItem("token");
    var postid = getQueryParam("id");

    PostApi.getpostn(token, postid)
        .then(function (postresponsen) {
            PostApi.getUser(token, postresponsen.userId)
                .then(function (responsen) {

                    console.log("Successfully: ", postresponsen.userId);
                    console.log("Successfully: ", responsen.name);
                    postresponsen.name = responsen.name;
                    postresponsen.email = responsen.email;

                    agregaPost(postresponsen)

                    cargaComentNu();



                })

                .catch(function (error) {
                    console.log("Error", error);
                });
        });

}


function cargaPostN() {

    var postid = getQueryParam("id");
    var token = window.localStorage.getItem("token");

    PostApi.getpostn(token, postid)
        .then(function (responsen) {
            console.log("Successfully: ", responsen);
            cargaComment();

            /*responsen.forEach((v, i) => agregarRow(v));*/
            agregaPost(responsen);
        })

        .catch(function (error) {
            console.log("Error", error);
        });


}


function cargaComment() {

    var postid = getQueryParam("id");
    var token = window.localStorage.getItem("token");

    PostApi.getcomment(token, postid)
        .then(function (responsen) {
            console.log("Successfully: ", responsen);

            responsen.forEach((v, i) => agregarComent(v));
            /*agregaPost(responsen);*/
        })

        .catch(function (error) {
            console.log("Error", error);
        });


}



function cargaComentNu() {


    var token = window.localStorage.getItem("token");
    var postid = getQueryParam("id");

    PostApi.getUsers(token)
        .then(function (users) {
            PostApi.getcomment(token, postid)
                .then(function (responsen) {
                    console.log("Successfully: ", responsen);

                    /* responsen.forEach((v, i) => agregarRow(v));*/
                    responsen.forEach((v, i) => {
                        users.forEach((v1, i1) => {

                            if (v1.id === v.userId) {
                                v.name = v1.name;
                                v.email = v1.email;
                            }
                        });
                        // TODO: poner username and email

                        agregarComent(v);
                    });
                })

                .catch(function (error) {
                    console.log("Error", error);
                });
        });

}







function CreaPost() {
    var body = $("#NuevoPost").val();
    var title = $("#NuevoTitle").val();
    var token = window.localStorage.getItem("token");

    PostApi.newpost(title, body, token)
        .then(function (responsen) {
            console.log("Successfully: ", responsen);
            window.location = 'post.htm?id=' + responsen.id;


        })

        .catch(function (error) {
            console.log("Error", error);
        });


}

function CreaComment() {
    var body = $("#Comentario").val();
    var postid = getQueryParam("id");
    var token = window.localStorage.getItem("token");

    PostApi.comment(body, token, postid)
        .then(function (responsen) {
            console.log("Successfully: ", responsen);
            /*limpiarFormulario('Comentario');*/
            document.getElementById('Comentario').value = "";


            agregarComent(responsen);
           /* location.reload();*/
            /*Forzamos la recarga*/
           /* location.reload(true);*/



        })

        .catch(function (error) {
            console.log("Error", error);
        });

}



function agregarComent(Comment) {



    var DivPostComment = document.getElementById("Div_PostComment")
    var x = document.createElement("div");
    var z = document.createElement("div");
    var y = document.createElement("div");


    var CommentBody = document.createElement("p");
    var CommentUserId = document.createElement("h5");
    var CommentId = document.createElement("h6");


    CommentBody.textContent = Comment.body;
    CommentId.textContent = Comment.name;

    

    CommentUserId.textContent = "By:" + Comment.name + "(" + Comment.name + ")";

    z.appendChild(CommentUserId);
    x.setAttribute('class', 'panel-heading');
    z.setAttribute('class', 'panel-body');
    z.appendChild(CommentBody);
    /*x.appendChild(PostId);*/
    x.appendChild(z);



    /*x.setAttribute("style", "background-color: gray;");*/

    /*x.appendChild(t);*/


    DivPostComment.appendChild(x);
}

function agregaPost(post) {
    var DivPost = document.getElementById("Div_Post")
    var x = document.createElement("div");
    var z = document.createElement("div");
    var y = document.createElement("div");

    /*var t = document.createTextNode(post.title);*/

    var PostTitle = document.createElement("h1");
    var PostBody = document.createElement("p");
    var PostuserId = document.createElement("h4");
    var PostId = document.createElement("h6");
    var ln = document.createElement("hr");
    var Link = document.createElement("a");
    var dir = 'post.htm?id=' + post.id;

    PostTitle.textContent = post.title;
    PostBody.textContent = post.body;
    PostId.textContent = post.id;
    PostuserId.textContent = post.name + " (" + post.email + ")";

    Link.setAttribute('href', dir);
    Link.appendChild(PostTitle);
    x.appendChild(Link);
    x.appendChild(PostuserId);
    x.setAttribute('class', 'panel-heading');
    z.setAttribute('class', 'panel-body');
    z.appendChild(PostBody);
    /*x.appendChild(PostId);*/
    x.appendChild(z);
    x.appendChild(ln);


    /*x.setAttribute("style", "background-color: gray;");*/

    /*x.appendChild(t);*/


    DivPost.appendChild(x);
}

function getQueryParam(param) {
    location.search.substr(1)
        .split("&")
        .some(function (item) { // returns first occurence and stops
            return item.split("=")[0] == param && (param = item.split("=")[1])
        })
    return param
}

function limpiarFormulario(inputs) {

    inputs.forEach(function (v, i) {
        document.getElementById(v).value = "";
    });
}


