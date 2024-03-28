// alertas de productos
const guardarBoton = document.getElementById("guardarBoton");
const editarBoton = document.getElementById("editarBoton");
const botonBorrar = document.getElementsByName("borrarBoton");


guardarBoton.addEventListener("click", function () {
    Swal.fire({
        position: "top-center",
        icon: "success",
        title: "¡Producto guardado exitosamente!",
        showConfirmButton: false,
        timer: 1500
      });
});
editarBoton.addEventListener("click", function () {
    Swal.fire({
        position: "top-center",
        icon: "success",
        title: "¡Producto editado exitosamente!",
        showConfirmButton: false,
        timer: 1500
      });
});

for (let i = 0; i < botonBorrar.length; i++) {
    botonBorrar[i].addEventListener("click", function() {
        // Código a ejecutar cuando se hace clic en cualquier botón "borrarBoton"
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: "btn btn-success",
              cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
          });
          swalWithBootstrapButtons.fire({
            title: "Estas seguro?",
            text: "Esta acción no se puede deshacer.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Si, eliminar!",
            cancelButtonText: "No, cancelar!",
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
              swalWithBootstrapButtons.fire({
                title: "Eliminado!",
                text: "El archivo a sido eliminado.",
                icon: "success"
              });
            } else if (
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire({
                title: "Cancelado",
                text: "El registro es a salvo :)",
                icon: "error"
              });
            }
          });
    });
}


// alertas de compras
const guardarBotoncompras = document.getElementById("guardarBotoncompras");

guardarBotoncompras.addEventListener("click", function () {
    Swal.fire({
        position: "top-center",
        icon: "success",
        title: "¡Compra guardada exitosamente!",
        showConfirmButton: false,
        timer: 1500
      });
});



// alertas de categoria de productos
const guardarBotoncategoria = document.getElementById("guardarBotoncategoria");

guardarBotoncategoria.addEventListener("click", function () {
    Swal.fire({
        position: "top-center",
        icon: "success",
        title: "¡Categoria guardada exitosamente!",
        showConfirmButton: false,
        timer: 1500
      });
});