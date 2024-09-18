document.getElementById('generar').addEventListener('click', function() {
    const cantidad = document.getElementById('cantidad').value;
    
    // Validar si la cantidad es un número válido y mayor a 8
    if (cantidad < 1 || isNaN(cantidad)) {
        alert('Por favor ingresa un número válido.');
        return;
    }

    if (cantidad < 8) {
        alert('La cantidad de caracteres debe ser mayor a 8.');
        return;
    }
    
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~';
    let contrasena = '';
    
    for (let i = 0; i < cantidad; i++) {
        const randomIndex = Math.floor(Math.random() * caracteres.length);
        contrasena += caracteres[randomIndex];
    }
    
    document.getElementById('contrasena').value = contrasena;
});
