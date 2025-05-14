"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3001;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
let latestData = "huh";
app.post('/api/create-answer', (req, res) => {
    const { data } = req.body;
    if (!data) {
        res.status(400).json({ error: 'Missing "data"' });
        return;
    }
    ;
    latestData = data;
    res.json({ message: 'Data received', data });
});
app.get('/api/get-latest-answer', (req, res) => {
    res.json({ data: latestData });
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
