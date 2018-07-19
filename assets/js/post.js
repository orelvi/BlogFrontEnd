

function cargaPost() {


    var token = window.localStorage.getItem("token");
    PostApi.getpost(token)
        .then(function (responsen) {
            console.log("Successfully: ", responsen);

            responsen.forEach((v, i) => agregarRow(v));
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
    var t = document.createTextNode(post.title);

    var PostTitle = document.createElement("h1");
    var PostBody = document.createElement("td");
    var PostId = document.createElement("td");
    var PostuserId = document.createElement("td");


    x.setAttribute("style", "background-color: gray;");

    x.appendChild(t);
    DivPost.appendChild(x);
}



