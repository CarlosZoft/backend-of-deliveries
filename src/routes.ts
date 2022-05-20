import { Router } from 'express'
import { AuthenticateClientController } from './modules/authenticateClient/AuthenticateClientController';
import { CreateClientController } from './modules/clients/useCases/CreateClient/CreateClientController';

const routes = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController()


routes.post('/client/', createClientController.handle)
routes.post('/authenticate/', authenticateClientController.handle)

export { routes }
