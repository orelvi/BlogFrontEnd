

function cargaPost() {


    var token = window.localStorage.getItem("token");
    PostApi.getpost(token)
        .then(function (responsen) {
            console.log("Successfully: ", responsen);

           /* responsen.forEach((v, i) => agregarRow(v));*/
            responsen.forEach((v, i) => agregaPost(v));
        })

        .catch(function (error) {
            console.log("Error", error);
        });


}


function cargaPostN() {

    var postid = getQueryParam("id");
    var token = window.localStorage.getItem("token");
    
    PostApi.getpostn(token,postid)
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
    
    PostApi.getcomment(token,postid)
        .then(function (responsen) {
            console.log("Successfully: ", responsen);

           /*responsen.forEach((v, i) => agregarRow(v));*/
           /*agregaPost(responsen);*/
        })

        .catch(function (error) {
            console.log("Error", error);
        });


}


function agregarComent(post) {



    var DivPost = document.getElementById("Div_Post")
    var x = document.createElement("DIV");
    var z = document.createElement("DIV");
    var y = document.createElement("DIV");
    
    /*var t = document.createTextNode(post.title);*/

    var PostTitle = document.createElement("h1");
    var PostBody = document.createElement("p");
    var PostuserId = document.createElement("h4");
    var PostId = document.createElement("h6");
    var ln = document.createElement("hr");
    var Link = document.createElement("a");
    var dir = 'post.htm?id='+post.id;
    
    PostTitle.textContent = post.title;
    PostBody.textContent = post.body;
    PostId.textContent = post.id;
    PostuserId.textContent = post.userId

    Link.setAttribute('href',dir);
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

function agregaPost(post) {
    var DivPost = document.getElementById("Div_Post")
    var x = document.createElement("DIV");
    var z = document.createElement("DIV");
    var y = document.createElement("DIV");
    
    /*var t = document.createTextNode(post.title);*/

    var PostTitle = document.createElement("h1");
    var PostBody = document.createElement("p");
    var PostuserId = document.createElement("h4");
    var PostId = document.createElement("h6");
    var ln = document.createElement("hr");
    var Link = document.createElement("a");
    var dir = 'post.htm?id='+post.id;
    
    PostTitle.textContent = post.title;
    PostBody.textContent = post.body;
    PostId.textContent = post.id;
    PostuserId.textContent = post.userId

    Link.setAttribute('href',dir);
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
        .some(function(item) { // returns first occurence and stops
            return item.split("=")[0] == param && (param = item.split("=")[1])
        })
    return param
}


