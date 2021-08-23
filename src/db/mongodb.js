const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1/:27017';
const databaseName = 'tomate-todo'

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true },
     (error, client) => {
         if (error) { 
             return console.log('Error en la conexión a la base de datos', error); 
            }

            const db = client.db(databaseName);

            db.collection('products').insertMany([
                {
                    "name": "Old Fashioned",
                    "description": "Un clásico de todos los tiempos, inventado en el siglo XIX y con fanáticos hasta el día de hoy.",
                    "img": "img/old fashioned.png"
                },
                {
                    "name": "Cosmopolitan",
                    "description": "De un color rojo llamativo y sabor a arándanos y cítricos, hoy en día no puede faltar en ninguna barra.",
                    "img": "img/cosmopolitan.png"
                },
                {
                    "name": "Martini",
                    "description": "Sin dudas uno de los cócteles más conocidos. Elegante, estético y fácil de preparar. Servir bien frío.",
                    "img": "img/martini.png"
                },
                {
                    "name": "Negroni",
                    "description": "Inventado en 1919 por el Conde Negroni al añadir a su Americano un toque de ginebra en lugar de soda.",
                    "img": "img/negroni.png"
                },
                {
                    "name": "Tequila Sunrise",
                    "description": "Su nombre proviene del efecto que se consigue al mezclar los ingredientes de diferentes colores.",
                    "img": "img/tequila-sunrise.png"
                },
                {
                    "name": "Caipirinha",
                    "description": "Es el cóctel nacional de Brasil, pero se disfruta en restaurantes, bares y hogares de todo el mundo.",
                    "img": "img/caipirinha.png"
                },
                {
                    "name": "Sex on the Beach",
                    "description": "Combina vodka y jugos de fruta. Colorido y refrescante, es un cóctel deal para preparar en verano.",
                    "img": "img/sex-on-the-beach.png"
                },
                {
                    "name": "White Russian",
                    "description": "Si te gusta el vodka, la crema y el licor de café, el White Russian es para vos. No te pierdas esta receta.",
                    "img": "img/white-russian.png"
                }
            ], (error, result) => {
                    if(error) {
                        console.log("Error insertando muchos valores", error) }
                
                    console.log(result);
                    });

         return console.log('Conexión exitosa'); 
        });