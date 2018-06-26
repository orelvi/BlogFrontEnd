     function Registro() {
            
            var nombre= document.getElementById("nombre").value;
            var email = document.getElementById("email").value;
            var password = document.getElementById("password").value;
            var confirmar = document.getElementById("confirmar").value;

            var sendInfo = {
                name:nombre,
                email: email,
                password: password
            };

            console.log(sendInfo);

            $.ajax({
                method: "post",
                url: "http://127.0.0.1:8080/register",
                DataType: "json",
                data: JSON.stringify(sendInfo),
                success: function (data) {
                    console.log(data);
                    alert("Usuario Registrado Satisfactoriamente!");
                },


                error: function (er) {
                    alert("Usuario Equivocado");
                    //console.log(er);
                }
            })
        }



        <script>

        function Login() {
            var password = document.getElementById("password").value;
            var usuario = document.getElementById("usuario").value;

            var sendInfo = {
                email: usuario,
                password: password
            };

            console.log(sendInfo);

            $.ajax({
                method: "post",
                url: "http://127.0.0.1:8080/login",
                DataType: "json",
                data: JSON.stringify(sendInfo),
                success: function (data) {
                    console.log(data);
                },
                

                error: function (er) {
                    alert("Usuario Equivocado");
                    //console.log(er);
                }
            })
        }

    </script>