import { Router } from 'express';
import { index, create} from '../controllers/ChatController';

const router = Router();

    router.get('/', index)
    // router.get('/:id', register)
    router.post('/', create)
    // router.put('/:id', login)

export default router;
