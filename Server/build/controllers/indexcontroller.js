"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        res.json({ text: 'API is on /API/Games' });
    }
}
exports.indexController = new IndexController();
exports.default = exports.indexController;
