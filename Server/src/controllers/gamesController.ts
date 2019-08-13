import {Request,Response} from 'express';
import db from '../database';


class GamesController{

    //Listar todos los datos
    public async list (req: Request, res: Response) {
        await db.query('SELECT * FROM games', function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }
    //Listar solamente un articulo
    public async search(req:Request, res:Response):Promise <any>{
        const {id} = req.params;
        await db.query('SELECT * FROM games where Id= ?',[id],function(err,result,fields){
            if (err) throw err;
            if (result.length >0){
                return res.json(result[0])
            }
            res.status(404).json({text: "The game doesn't exits"});
        })
    }
    //Agregar un articulo
    public async create(req: Request, res:Response): Promise <void>{
        var data=req.body;
         await db.query('INSERT INTO games set ?',data);
         res.json({message:'Juego Guardado'});
         console.log(req.body);
    }
    //Eliminar un articulo
    public async delete (req:Request,res:Response):Promise <void>{
        const {id} = req.params;
        await db.query('DELETE from games where id=?',[id]);
        res.json({message:"Juego Eliminado"})
    }
    //Actualizar un articulo
    public async update(req:Request,res: Response):Promise <void>{
        const {id} = req.params;
        delete req.body.create_at;
        await db.query('UPDATE games set ? where id = ?',[req.body, id])
            res.json({message:"Game was updated"});
            console.log(req.body);
    
    }
}

export const gamesController =new GamesController();

export default gamesController;