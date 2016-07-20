// Rescatando el argumento que es
// pasando al script
var ageArgument= +process.argv[2];

// Conectarnos a la base de datos
// Paso1. Crear el driver en nuestro script
var mongodb= require('mongodb');
// Paso 2. El driver de MongoDB nos proporciona
// un cliente, por lo que extraemos de
// la libreria
var mongoClient= mongodb.mongoClient;
// Pase 3. Conectamos el cliente con la base
// de datos
mongoClient.connect("mongodb://127.0.0.1:27017/learnyoumongo",
function (err, db){
    if (err){
        console.log(">Error al conectarse a: " +
        'mongodb://127.0.0.1:27017/learnyoumongo');
        throw err;
    }
    // Obteniendo la coleccion
    var parrotsCollection= db.collection('parrots');
    // Aplicando un query sobre la coleccion
    var objetoResultado = parrotsCollection.find({
        age: {$gt : ageArgument}
        });
        //
        objetoResultado.toArray(function(err, docs){
            console.log(docs);
            // Cerrando la conexion
            db.close();
        });

});