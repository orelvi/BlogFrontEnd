

function cargaPost() {


    var token = window.localStorage.getItem("token");
    PostApi.getpost(token)
        .then(function (responsen) {
            console.log("Successfully: ", responsen);
            /*agregarRow();*/
            
            responsen.forEach((v, i) => agregarRow(v));
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
    /*var tdActions = document.createElement("td");*/

    /* var btnEditar = document.createElement("button");
    btnEditar.textContent = "Editar";
    btnEditar.setAttribute("onclick", "editarEstudiante(this);"); */

   /*  btnEditar.setAttribute("data-matricula", estudiante.matricula);
    tdActions.appendChild(btnEditar);
 */

    var tr = document.createElement("tr");
    tdTitle.textContent = post.title;
    tdBody.textContent = post.body;
    tdId.textContent = post.id;


    tr.appendChild(tdTitle);
    tr.appendChild(tdBody);
    tr.appendChild(tdId);
    /*tr.appendChild(btnEditar);*/

    tablaPost.appendChild(tr);

    


}