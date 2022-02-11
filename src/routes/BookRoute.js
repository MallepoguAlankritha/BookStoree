/* eslint-disable prettier/prettier */
/* eslint-disable max-len */
/* eslint-disable prettier/prettier */
import express from 'express';
import * as bookController from '../controllers/BookController'
import { newBookValidator } from '../validators/BookValidator';
import {userRole} from '../middlewares/auth.middleware';
// import { upload } from '../middlewares/upload';
const Router = express.Router();
//route to add book
Router.post('/addbook',userRole, newBookValidator,bookController.addBook);

//route to get book
Router.get('/getbook',bookController.getBook);
//route to get book by id
Router.get('/getbookbyid/:id', bookController.getBookById);

//route to update book by id
Router.put('/updatebookbyid/:id', userRole,newBookValidator, bookController.updateBookById);


//route to delete book by id
Router.delete('/deletebookbyid/:id',userRole, bookController.deleteBookById);
//route to search book
Router.get('/:title',bookController.searchBook)


export default Router;