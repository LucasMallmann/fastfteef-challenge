import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => {
  return res.json('hey there');
});

export default routes;
