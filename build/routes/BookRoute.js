"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.descendingOrderRouter = exports["default"] = exports.bookPriceDescendSortRouter = exports.bookPriceAscendSortRouter = exports.ascendingOrderRouter = exports.alphabeticalOrderRouter = void 0;

var _express = _interopRequireDefault(require("express"));

var bookController = _interopRequireWildcard(require("../controllers/BookController"));

var _BookValidator = require("../validators/BookValidator");

var _auth = require("../middlewares/auth.middleware");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/* eslint-disable prettier/prettier */

/* eslint-disable max-len */

/* eslint-disable prettier/prettier */
// import { upload } from '../middlewares/upload';
var Router = _express["default"].Router(); //route to add book


Router.post('/addbook', _auth.userRole, _BookValidator.newBookValidator, bookController.addBook); //route to get book

Router.get('/getbook', bookController.getBook); //route to get book by id

Router.get('/getbookbyid/:id', bookController.getBookById); //route to update book by id

Router.put('/updatebookbyid/:id', _auth.userRole, _BookValidator.newBookValidator, bookController.updateBookById); //route to delete book by id

Router["delete"]('/deletebookbyid/:id', _auth.userRole, bookController.deleteBookById); //route to search book

Router.get('/:title', bookController.searchBook); //route to sort books in ascending order

var ascendingOrderRouter = _express["default"].Router();

exports.ascendingOrderRouter = ascendingOrderRouter;
ascendingOrderRouter.get('/', bookController.ascendingOrder); //route to sort books in descending order

var descendingOrderRouter = _express["default"].Router();

exports.descendingOrderRouter = descendingOrderRouter;
descendingOrderRouter.get('/', _auth.userAuth, bookController.descendingOrder); //route to sort books in alphabetical order by title

var alphabeticalOrderRouter = _express["default"].Router();

exports.alphabeticalOrderRouter = alphabeticalOrderRouter;
alphabeticalOrderRouter.get('/', _auth.userAuth, bookController.alphabeticalOrder); //route to sort books as per price from low to high

var bookPriceAscendSortRouter = _express["default"].Router();

exports.bookPriceAscendSortRouter = bookPriceAscendSortRouter;
bookPriceAscendSortRouter.get('/', _auth.userAuth, bookController.priceLowToHighSort); //route to sort books as per price from high to low

var bookPriceDescendSortRouter = _express["default"].Router();

exports.bookPriceDescendSortRouter = bookPriceDescendSortRouter;
bookPriceDescendSortRouter.get('/', _auth.userAuth, bookController.priceHighToLowSort);
var _default = Router;
exports["default"] = _default;