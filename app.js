// URL de la API y parámetros opcionales
var url = 'https://dummyapi.io/data/v1/user';
var limit = 10; // Límite de registros
var page = 1; // Página a mostrar

// Headers
var headers = {
    'app-id': '6346ecdc44ffd6a5fcfa071c'
};

// URL completa con parámetros GET opcionales
var urlCompleta = url + '?limit=' + limit + '&page=' + page;

// Petición GET a la API
$.ajax({
    url: urlCompleta,
    type: 'GET',
    headers: headers,
    success: function(data) {
        // Cuando se recibe la respuesta, se recorre la lista de usuarios y se renderizan en la tabla
        data.data.forEach(function(usuario) {
            $('#tabla-usuarios').append('<tr><td>' + usuario.id + '</td><td>' + usuario.title + '</td><td>' + usuario.firstName + '</td><td>' + usuario.lastName + '</td><td>' + usuario.picture + '</td></tr>');
        });
    },
    error: function(error) {
        // Si hay un error, se muestra un mensaje en consola
        console.log(error);
    }
});