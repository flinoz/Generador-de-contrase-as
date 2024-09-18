document.addEventListener('DOMContentLoaded', function() {
    const botonGenerar = document.getElementById('generar');
    const inputContrasena = document.getElementById('contrasena');
    const inputCantidad = document.getElementById('cantidad');

    // Longitudes predeterminadas para cada nivel de seguridad
    const longitudesSeguridad = {
        'básico': 8,
        'medio': 12,
        'alto': 14,
        'máximo': 16
    };

    // Colores para cada nivel de seguridad
    const seguridadColores = {
        'básico': 'básico',
        'medio': 'medio',
        'alto': 'alto',
        'máximo': 'máximo'
    };

    // Función para generar una contraseña aleatoria (simulación simple)
    function generarContrasena(longitud) {
        const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?/';
        let contrasena = '';
        for (let i = 0; i < longitud; i++) {
            contrasena += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
        }
        return contrasena;
    }

    // Función para manejar el clic en el botón para generar una contraseña
    botonGenerar.addEventListener('click', function() {
        const nivelSeguridad = document.querySelector('input[name="nivel-seguridad"]:checked');
        const valorCantidad = parseInt(inputCantidad.value, 10);

        // Verifica que el valor ingresado sea al menos 8
        if (valorCantidad < 8) {
            alert('La longitud de la contraseña debe ser al menos 8 caracteres.');
            return;
        }

        // Verifica que se haya seleccionado un nivel de seguridad
        if (!nivelSeguridad) {
            alert('Por favor, seleccione un nivel de seguridad.');
            return;
        }

        // Obtén el nivel de seguridad y la longitud correspondiente
        const nivel = nivelSeguridad.value;
        const longitud = longitudesSeguridad[nivel];

        // Verifica que la cantidad ingresada coincida con la longitud del nivel seleccionado
        if (valorCantidad !== longitud) {
            alert(`La longitud de la contraseña debe ser exactamente ${longitud} caracteres según el nivel de seguridad seleccionado.`);
            return;
        }

        // Genera la contraseña y actualiza el campo de entrada
        const contrasena = generarContrasena(longitud);

        // Limpia las clases anteriores y aplica la nueva clase de color
        inputContrasena.className = '';
        inputContrasena.classList.add(seguridadColores[nivel]);

        // Actualiza el valor de la contraseña
        inputContrasena.value = contrasena;
    });
});
