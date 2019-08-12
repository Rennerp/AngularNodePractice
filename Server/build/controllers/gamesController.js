"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class GamesController {
    //Listar todos los datos
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM games', function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    //Listar solamente un articulo
    search(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('SELECT * FROM games where Id= ?', [id], function (err, result, fields) {
                if (err)
                    throw err;
                if (result.length > 0) {
                    return res.json(result[0]);
                }
                res.status(404).json({ text: "The game doesn't exits" });
            });
        });
    }
    //Agregar un articulo
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var data = req.body;
            yield database_1.default.query('INSERT INTO games set ?', data);
            res.json({ message: 'Juego Guardado' });
            console.log(req.body);
        });
    }
    //Eliminar un articulo
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE from games where id=?', [id]);
            res.json({ message: "Juego Eliminado" });
        });
    }
    //Actualizar un articulo
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE games set ? where id = ?', [req.body, id]);
            res.json({ message: "Game was updated" });
        });
    }
}
exports.gamesController = new GamesController();
exports.default = exports.gamesController;
