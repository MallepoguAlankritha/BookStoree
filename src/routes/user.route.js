/* eslint-disable max-len */
/* eslint-disable prettier/prettier */
import express from 'express';
import * as userController from '../controllers/user.controller';
import { newUserValidator,loginValidator } from '../validators/user.validator';
import { setRole } from '../middlewares/auth.middleware';

const router = express.Router();

//routes for user to register
router.post('/user',newUserValidator, setRole('user'), userController.register);

//routes for admin to register
// eslint-disable-next-line max-len
router.post('/admin', newUserValidator, setRole('admin'), userController.register);

//route to login
router.post('/login', loginValidator, userController.login);

export default router;
