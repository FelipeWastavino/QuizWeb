function myFunction(){
    if (validateForm()) {
        this.RegistroCompletado();
    }
    
}

function validateForm() {
    var x = document.forms["myForm"]["nombre"].value;
    if (x == "") {
        alert("Parece que olvidó ingresar su nombre");
        return false;
    }
    var y = document.forms["myForm"]["correo"].value;
    if (y == "") {
        alert("Parece que olvidó ingresar su correo");
        return false;
    }
    else {
        return true
    }
} 

function DNIRUTcheck() {
    if (document.getElementById('DNI').checked) {
        document.getElementById('ifDNI').style.display="block";
        document.getElementById('ifRUT').style.display="none";
    } else {
        document.getElementById('ifRUT').style.display="block";
        document.getElementById('ifDNI').style.display="none";
    }
}

function RegistroCompletado() {
    document.getElementById('message').innerHTML="Datos Enviados";
}