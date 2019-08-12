import {Request,Response} from 'express';

class IndexController{

    public index (req: Request,res: Response) {
        res.json({text: 'API is on /API/Games'})
    }
}

export const indexController =new IndexController();
export default indexController;