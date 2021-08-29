import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => {
    res.send('Hello World');
})

routes.get('/testing', (req, res) => {
    res.send('This is the Testing route');
})

export { routes };