/* eslint-disable prettier/prettier */
/* eslint-disable max-len */
/* eslint-disable prettier/prettier */
import express from 'express';
import * as bookController from '../controllers/BookController'
import { newBookValidator } from '../validators/BookValidator';
import {userAuth,userRole} from '../middlewares/auth.middleware';
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
Router.get('/:title',bookController.searchBook);
//route to sort books in ascending order
export const ascendingOrderRouter = express.Router();
ascendingOrderRouter.get('/', bookController.ascendingOrder);

//route to sort books in descending order
export const descendingOrderRouter = express.Router();
descendingOrderRouter.get('/', userAuth, bookController.descendingOrder);

//route to sort books in alphabetical order by title
export const alphabeticalOrderRouter = express.Router();
alphabeticalOrderRouter.get('/', userAuth, bookController.alphabeticalOrder);

//route to sort books as per price from low to high
export const bookPriceAscendSortRouter = express.Router();
bookPriceAscendSortRouter.get('/', userAuth, bookController.priceLowToHighSort);

//route to sort books as per price from high to low
export const bookPriceDescendSortRouter = express.Router();
bookPriceDescendSortRouter.get('/', userAuth, bookController.priceHighToLowSort);


export default Router;