import {Router} from 'express';
import {verUsuarios, nuevoUsuario, verUsuario, eliminarUsuario, actualizarUsuario, buscarUsuario} from '../controllers/usuariosController';

class usuarioRoutes{
    public router: Router = Router();               //Variable para guardar objeto de tipo ruta

    constructor(){
        this.config();
    }

    config(): void{
        this.router
        .get('/',  verUsuarios)
        .get('/:carnet', verUsuario)
        .get('/:carnet/:contra', buscarUsuario)
        .post('/', nuevoUsuario)
        .delete('/:carnet', eliminarUsuario)
        .put('/:carnet', actualizarUsuario);
    }

}

const UsuarioRoutes = new usuarioRoutes();
export default UsuarioRoutes.router;