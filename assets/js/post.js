

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


function agregarRow(post) {



    var tablaPost = document.getElementById("tabla_Post")
    var tdTitle = document.createElement("td");
    var tdBody = document.createElement("td");
    var tdId = document.createElement("td");
    var tduserId = document.createElement("td");


    var tr = document.createElement("tr");
    tdTitle.textContent = post.title;
    tdBody.textContent = post.body;
    tdId.textContent = post.id;
    tduserId.textContent = post.userId


    tr.appendChild(tdTitle);
    tr.appendChild(tdBody);
    tr.appendChild(tdId);
    tr.appendChild(tduserId);


    tablaPost.appendChild(tr);
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
    
    PostTitle.textContent = post.title;
    PostBody.textContent = post.body;
    PostId.textContent = post.id;
    PostuserId.textContent = post.userId

    x.appendChild(PostTitle);
    x.appendChild(PostuserId);
    x.setAttribute("class", "panel-heading");
    z.setAttribute("class", "panel-body");
    z.appendChild(PostBody);
    /*x.appendChild(PostId);*/
    x.appendChild(z);
    x.appendChild(ln);
    
    
    /*x.setAttribute("style", "background-color: gray;");*/

    /*x.appendChild(t);*/


    DivPost.appendChild(x);
}



