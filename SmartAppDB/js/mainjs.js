function rejectUser(id)
{
    var result = confirm("Are you sure ?");
    if (result) {


        $.ajax({
            url: "http://localhost/smartapp/rejectUser.php",
            type: 'post',
            data: {
                id: id
            },
            success: function (data) {


                alert(data)

                $("#oneuser" + id).hide(300);


            },
            error: function (err, req) {
                alert("Your browser broke!");
            },
        });

    }


}




function login() {

    username = $("#userid").val();
    pw = $("#psw").val();



    if ((username === null || username.match(/^ *$/) !== null))
    {
        alert("Enter a User name");

    }
    else if ((pw === null || pw.match(/^ *$/) !== null)) {

        alert("Enter a password");
    }

    var form = $('#loginform')[0]; // You need to use standart javascript object here
    var formData = new FormData(form);
    
    $.ajax({
        url: 'http://localhost/smartapp/loginaction.php',
        type: 'POST',
        data: formData,
        async: false,
        success: function (data) {
            if(data == "done")
            {
                window.location.href = "http://localhost/smartapp";
            }
            else{
                
                 alert(data)
            }
           

            

        },
        cache: false,
        contentType: false,
        processData: false
    });




    return false;

}