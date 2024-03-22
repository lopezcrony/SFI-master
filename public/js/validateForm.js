function validateFormProvider() {

    var nit = document.getElementById("nit").value;
    var phone = document.getElementById("phone").value;
    var name = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    
    var nitError = document.getElementById("nitError");
    var phoneError = document.getElementById("phoneError");
    var nameError = document.getElementById("nameError");
    var addressError = document.getElementById("addressError");
    
    var letters = /^\d+$/;
    
    var errores = false;
    
    // Validación del NIT
    if (!nit.trim()) {
        nitError.innerHTML = "Ingrese el NIT de la empresa.";
        errores = true;
    } else if (!nit.match(letters)) {
        nitError.innerHTML = "El NIT debe contener solo números.";
        errores = true;
    } else {
        nitError.innerHTML = "";
    }
    
    // Validación del teléfono
    if (!phone.trim()) {
        phoneError.innerHTML = "Ingrese el teléfono de la empresa.";
        errores = true;
    } else if (!phone.match(letters)) {
        phoneError.innerHTML = "El teléfono debe contener solo números.";
        errores = true;
    } else {
        phoneError.innerHTML = "";
    };
    
    // Validación del nombre de la empresa
    if (!name.trim()) {
      nameError.innerHTML = "Ingrese el nombre de la empresa.";
      errores = true;
    } else {
      nameError.innerHTML = "";
    };

    if (!address.trim()) {
        addressError.innerHTML = "Ingrese la dirección de de la empresa.";
        errores = true;
      } else {
        addressError.innerHTML = "";
      };

    // Enviar el formulario si no hay errores
    if (!errores) {
        // SweetAlert

        // Cerrar la modal
        var modal = document.getElementById("createModal");
        var modalInstance = bootstrap.Modal.getInstance(modal);
        modalInstance.hide();
    }
  }

