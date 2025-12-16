import express, { json } from 'express'; //importamos express
import mongoose from 'mongoose'; //importamos mongoose
const app = express(); // Crear el servidor ejecutando express
const port = 3000;//crear un puerto
app.use(json());// Middleware para parsear JSON

// Conectar a MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/curso23')

// Schema de usuario
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return /^[A-Za-záéíóúÁÉÍÓÚñÑ' ]+$/.test(v);
            },
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (v) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
        }
    },
    age: {
        type: Number,
        min: 0,
        max: 120,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        validate: {
            validator: function (v) {
                return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(v);
            },
        }
    },
    deleted: {
        type: Boolean,
        default: false
    },
    deleted_at: {
        type: Date,
        default: null
    }
}, { timestamps: true });

const User = mongoose.model('Users', userSchema);

// Ruta principal
app.get('/', (req, res) => {
    res.send('Bienvenido a la API con Express');
});

app.post('/api/usuarios', async (req, res) => {
    try {
        const nuevoUsuario = new User(req.body);
        await nuevoUsuario.save();
        res.status(201).json(nuevoUsuario);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


app.get('/api/saludo', (req, res) => {
    res.json({ mensaje: 'Hola desde la API!' });
});

//Ruta con parametros
app.get('/api/usuario/:nombre', (req, res) => {
    const nombre = req.params.nombre;
    res.json({ mensaje: `Hola, ${nombre}!` });
});

//Ruta con query parameters
app.get('/api/suma', (req, res) => {
    const a = parseFloat(req.query.a) || 0;
    const b = parseFloat(req.query.b) || 0;
    const suma = a + b;
    res.json({ resultado: suma });
});

//iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});