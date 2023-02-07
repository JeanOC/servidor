const Usuario = require("../models/Usuario");

exports.crearUsuario = async (req, res) => {
    
    try {
        let usuario;

        usuario = new Usuario(req.body);

        await usuario.save();
        res.send(usuario);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerUsuarios = async (req, res) => {

    try {
        
        const usuarios = await Usuario.find();
        res.json(usuarios);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.actualizarUsuario = async (req, res) => {

    try {
        
        const { nombre, apellido, semestre, cedula } = req.body;
        let usuario = await Usuario.findById(req.params.id);

        if(!usuario) {
            req.status(404).json({ msg: 'No existe el usuario'});
        }

        usuario.nombre = nombre;
        usuario.apellido = apellido;
        usuario.semestre = semestre;
        usuario.cedula = cedula;

        usuario = await Usuario.findOneAndUpdate({ _id: req.params.id }, usuario, {new: true});
        res.json(usuario);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerUsuario = async (req, res) => {

    try {
        
        let usuario = await Usuario.findById(req.params.id);

        if(!usuario) {
            req.status(404).json({ msg: 'No existe el usuario'});
        }

        res.json(usuario);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarUsuario = async (req, res) => {

    try {
        
        let usuario = await Usuario.findById(req.params.id);

        if(!usuario) {
            req.status(404).json({ msg: 'No existe el usuario'});
        }

        await Usuario.findOneAndRemove({ _id: req.params.id });
        res.json({ msg: 'Producto eliminado correctamente' });

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}