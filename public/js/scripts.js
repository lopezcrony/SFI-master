// ------------------------------------------------ ALERTS ----------------------------------------------------

function alertSucces() {
    Swal.fire({
        icon: "success",
        title: "Guardado con éxito",
        timer: 1200
    });
}

function alertError() {
    Swal.fire({
        icon: "error",
        title: "El abono no puede superar la deuda actual",
        timer: 3000
    });
}

function alertQuestion() {
    Swal.fire({
        title: "¿Estás seguro?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Estoy seguro"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "¡Eliminado!",
                text: "Eliminado con éxito",
                icon: "success",
                timer: 1500
            });
        }else if (result.dismiss) {
            Swal.fire({
                title: "Cancelado",
                text: "El proceso ha sido cancelado",
                icon: "error",
                timer: 3000
            });
        }
    
    });
}

function confirmStateChange() {
    Swal.fire({
        title: "¿Estás seguro del cambiar el estado?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Estoy seguro"
    })
  }
// ------------------------------------------------ FORM VALIDATION ----------------------------------------------------
function handleSubmit(event) {

    event.preventDefault();

    var form = event.target.closest('.form');
    if (form.checkValidity()) {
        alertSucces();

        setTimeout(function () {
            form.submit();
            resetForm(form);
        }, 1200); 

    } else {
        event.stopPropagation();
        form.classList.add('was-validated');

        // Mensaje de error
        form.querySelectorAll('.form-control').forEach(input => {
            if (!input.checkValidity()) {
                var invalidFeedback = input.nextElementSibling;
                if (!invalidFeedback || !invalidFeedback.classList.contains('invalid-feedback')) {
                    invalidFeedback = document.createElement('div');
                    invalidFeedback.classList.add('invalid-feedback');
                    invalidFeedback.textContent = "Formato inválido";
                    input.parentNode.insertBefore(invalidFeedback, input.nextSibling);
                }
            }
        });
    }
}

document.querySelectorAll(".submit-button")
    .forEach(button => button.addEventListener("click", handleSubmit));


// El botón de Enter funciona como un click
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('keypress', function(event) {
     
        if (event.key === 'Enter') {
        
            const form = input.closest('form');

            const submitButton = form.querySelector('.submit-button');

            if (submitButton) {
                submitButton.click();
            }
        }
    });
});

// ------------------------------------------------ CREDITS ----------------------------------------------------

function calculateRemainingDebt() {

    var currentDebt = parseFloat(document.getElementById('currentDebt').innerText.replace('$', '').replace(',', ''));
    var payment = parseFloat(document.getElementById('paymentInput').value);

    // Se valida que el abono no sea mayor a la deuda
    if (payment > currentDebt) {
        alertError();
        document.getElementById('paymentInput').value = "";
        return;
    }

    var remainingDebt = currentDebt - payment;

    document.getElementById('remainingDebt').innerText = '$' + remainingDebt.toFixed(2);
    
}

function showAlert(event) {
    event.preventDefault(); // Evitar el envío automático del formulario

    var form = document.querySelector('.formd');

    if (form.checkValidity()) {
        form.classList.add('was-validated'); // Agregar la clase .was-validated al formulario

        var modal = event.target.closest('.modal');
        bootstrap.Modal.getInstance(modal).hide();

        alertSucces();
        form.reset(); 
    }
}

// Trae los datos de la tabla y los muestra en la modal
$('#payment').on('show.bs.modal', function (event) {

    var button = $(event.relatedTarget);
    var originalValue = button.data('original-value');
    var currentDebt = button.data('current-debt');
    var modal = $(this);

    modal.find('#originalValue').text('$' + originalValue);
    modal.find('#currentDebt').text('$' + currentDebt);
});

// Valida que el botón de eliminar solo se muestre si la deuda actual es de 0
function updateDeleteButtonVisibility() {

    const currentDebtElement1 = document.getElementById('tableCurrentDebt1');
    const deleteButton1 = document.getElementById('deleteButton1');

    const currentDebtElement2 = document.getElementById('tableCurrentDebt2');
    const deleteButton2 = document.getElementById('deleteButton2');

    const currentDebt1 = parseFloat(currentDebtElement1.textContent);

    if (currentDebt1 === 0) {
        deleteButton1.style.display = 'inline-block';
    } else {
        deleteButton1.style.display = 'none';
    }

    const currentDebt2 = parseFloat(currentDebtElement2.textContent);
    if (currentDebt2 === 0) {
        deleteButton2.style.display = 'inline-block';
    } else {
        deleteButton2.style.display = 'none';
    }
}

// El botón de abonar solo está disponible si hay una deuda pendiente
function updateAbonarButtonAvailability() {

    const currentDebt1 = parseFloat(document.getElementById('tableCurrentDebt1').textContent);
    const abonarButton1 = document.getElementById('abonarButton1');
    const currentDebt2 = parseFloat(document.getElementById('tableCurrentDebt2').textContent);
    const abonarButton2 = document.getElementById('abonarButton2');

    abonarButton1.disabled = (currentDebt1 === 0);
    abonarButton2.disabled = (currentDebt2 === 0);
}

updateDeleteButtonVisibility();
updateAbonarButtonAvailability();


