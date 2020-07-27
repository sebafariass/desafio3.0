function validar() {
    let nombre,
      apellidos,
      correo,
      usuario,
      telefono,
      fecha,
      rut,
      edad,
      rutExpress,
      fechaExpress,
      expresion,
      nameExpress,
      apellidoExpress;
  
    //darle valor
  
    nombre = document.getElementById("nombre").value;
    apellidos = document.getElementById("apellidos").value;
    correo = document.getElementById("correo").value;
    usuario = document.getElementById("usuario").value;
    telefono = document.getElementById("telefono").value;
    fecha = document.getElementById("fecha").value;
    rut = document.getElementById("rut").value;
    edad = document.getElementById("edad").value;
    especialista = document.getElementById("especialista").value;
    hora = document.getElementById("hora__solicitada").value;
  
    //expresion regular para correo electronico
    expresion = /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;
  
    //Expresion regular para nombre
    nameExpress = /^[a-z ,.'-]+$/i;
  
    //Expresion regular para apellido
    apellidoExpress = /^[a-z ,.'-]+$/i;
  
    //expresion para Fecha
    fechaExpress = /^(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[1-2])\1\d{4}$/;
  
    //expresion regular RUT/RUN CHILENO
  
    rutExpress = /^[0-9]{6,9}[-|‐]{1}[0-9kK]{1}$/;
  
    if (
      nombre === "" ||
      apellidos === "" ||
      correo === "" ||
      usuario === "" ||
      edad === "" ||
      telefono === "" ||
      fecha === "" ||
      rut === "" ||
      especialista === "" ||
      hora === ""
    ) {
      // Completar registro
  
      alert("Todos los campos son obligatorios");
      return false;
    }
  
    // Nombre - caracteres max
    else if (nombre.length > 30) {
      alert(" Tu nombre es muy largo");
      return false;
    } else if (!nameExpress.test(nombre)) {
      alert("Tu nombre sólo debe tener Letras");
  
      return false;
    }
  
    // Apellido - caract max
    else if (apellidos.length > 30) {
      alert(" Tu apellido es muy largo amigo!");
      return false;
    } else if (!apellidoExpress.test(apellidos)) {
      alert("Tu apellido sólo debe tener Letras");
      return false;
    }
  
    // Si  edad no es un NUM
    else if (isNaN(edad)) {
      alert("Tu edad no es un número");
      return false;
    }
  
    // edad value -length
    else if (edad.length > 3) {
      alert("Tú edad sólo puede tener tres digitos.");
      return false;
    }
  
    //fecha expresion / Caracteres maximos
    else if (fecha.length > 20) {
      alert(" La fecha debe tener los caracteres necesarios solamente");
      return false;
    } else if (!fechaExpress.test(fecha)) {
      alert("Ingresa una fecha valida");
      return false;
    }
  
    // Telefono value,length
    else if (telefono.length > 15) {
      alert("El teléfono es muy largo");
      return false;
    }
    // Si el telefono no es un NUM
    else if (isNaN(telefono)) {
      alert("El teléfono no es un número");
      return false;
    }
  
    // RUT  / Caracteres max y Rut Express
    else if (rut.length > 15) {
      alert(" Tu rut es muy largo");
      return false;
    } else if (!rutExpress.test(rut)) {
      alert("Tu rut esta incorrecto");
      return false;
    }
  
    //Correo valor
    else if (correo.length > 100) {
      alert("El correo electrónico es muy largo");
      return false;
    }
    // Validacion de Mail expresion regular
    else if (!expresion.test(correo)) {
      alert("Correo invalido ");
      return false;
    }
  
    
    //nombrar funcion para usar despues -->
    mostrarDescripcion(
      nombre,
      apellidos,
      hora,
      rut,
      edad,
      especialista,
      fecha,
      correo
    );
  }
  
  
  
  //mensaje al usuario con datos correctos
  function mostrarDescripcion(
    nombres,
    apellidos,
    hora,
    rut,
    edad,
    especialista,
    fecha,
    correo
  ) {
    let descripcion = `Estimado ${nombres} ${apellidos},edad ${edad} , RUT : ${rut} su hora quedo agendada para la hora ${hora} con el especialista en ${especialista}, el día ${fecha} te envíamos un correo a ${correo} con toda la información documentada. Gracias por preferirnos.`;
  
  
  
    //mensaje que aparece despues de completar el formulario
    alert(descripcion);
    document.getElementById("mensaje__descripcion").textContent = descripcion;
  }
  
  //HORA SOLICITADA
  
  function hora__solicitud() {
    /* Para obtener el valor */
    let hora__por__solicitar = document.getElementById("hora__solicitada").value;
    alert(hora__por__solicitar);
  
  }
  
  //HORA ESPECIALISTA
  
  function hora__especialista() {
    /* Para obtener el valor */
    let especialista__atendiendo = document.getElementById("especialista").value;
    alert(especialista__atendiendo);
    
  
  
  }
  