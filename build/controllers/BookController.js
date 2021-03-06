"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateBookById = exports.searchBook = exports.priceLowToHighSort = exports.priceHighToLowSort = exports.getBookById = exports.getBook = exports.descendingOrder = exports.deleteBookById = exports.ascendingOrder = exports.alphabeticalOrder = exports.addBook = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _httpStatusCodes = _interopRequireDefault(require("http-status-codes"));

var BookService = _interopRequireWildcard(require("../services/BookService"));

var _BookModel = _interopRequireDefault(require("../models/BookModel"));

var _logger = _interopRequireDefault(require("../config/logger"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/* eslint-disable prettier/prettier */

/* eslint-disable quotes */

/* eslint-disable prettier/prettier */
;

// Controller for add book

/**
 *
 * @param {object} req request object
 * @param {object} res  response object
 * @param {object} next
 */
var addBook = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var bookData, data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            console.log("abc", req);
            bookData = {
              author: req.body.author,
              title: req.body.title,
              // image: req.file.path,
              quantity: req.body.quantity,
              price: req.body.price,
              description: req.body.description
            };
            _context.next = 5;
            return BookService.addBook(bookData);

          case 5:
            data = _context.sent;
            res.status(_httpStatusCodes["default"].CREATED).json({
              code: _httpStatusCodes["default"].CREATED,
              data: data,
              message: "The Book \"".concat(data.title, "\" has Been Added!")
            });
            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            next(_context.t0);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 9]]);
  }));

  return function addBook(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}(); // Controller for get book

/**
 *
 * @param {object} req request object
 * @param {object} res  response object
 * @param {object} next
 */


exports.addBook = addBook;

var getBook = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return BookService.getBook();

          case 3:
            data = _context2.sent;
            res.status(_httpStatusCodes["default"].OK).json({
              code: _httpStatusCodes["default"].OK,
              data: data,
              message: "Your Books..."
            });
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            next(_context2.t0);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));

  return function getBook(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}(); // Controller for get book by Id

/**
 *
 * @param {object} req request object
 * @param {object} res  response object
 * @param {object} next
 */


exports.getBook = getBook;

var getBookById = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return BookService.getBookById(req.params.id);

          case 3:
            data = _context3.sent;
            res.status(_httpStatusCodes["default"].OK).json({
              code: _httpStatusCodes["default"].OK,
              data: data,
              message: "Your Book: \"".concat(data.title, "\".")
            });
            _context3.next = 10;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            next(_context3.t0);

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 7]]);
  }));

  return function getBookById(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}(); // Controller for update book by Id

/**
 *
 * @param {object} req request object
 * @param {object} res  response object
 * @param {object} next
 */


exports.getBookById = getBookById;

var updateBookById = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res, next) {
    var bookData, data;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            bookData = {
              author: req.body.author,
              title: req.body.title,
              // image: req.file.path,
              quantity: req.body.quantity,
              price: req.body.price,
              description: req.body.description
            };
            _context4.next = 4;
            return BookService.updateBookById(req.params.id, bookData);

          case 4:
            data = _context4.sent;
            res.status(_httpStatusCodes["default"].OK).json({
              code: _httpStatusCodes["default"].OK,
              data: data,
              message: "Your Book: \"".concat(data.title, "\" has been updated successfully.")
            });
            _context4.next = 11;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](0);
            next(_context4.t0);

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 8]]);
  }));

  return function updateBookById(_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}(); // Controller for delete book by Id

/**
 *
 * @param {object} req request object
 * @param {object} res  response object
 * @param {object} next
 */


exports.updateBookById = updateBookById;

var deleteBookById = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return BookService.deleteBookById(req.params.id);

          case 3:
            data = _context5.sent;
            res.status(_httpStatusCodes["default"].OK).json({
              code: _httpStatusCodes["default"].OK,
              data: data,
              message: "Your Book: \"".concat(data.title, "\" has been deleted successfully.")
            });
            _context5.next = 10;
            break;

          case 7:
            _context5.prev = 7;
            _context5.t0 = _context5["catch"](0);
            next(_context5.t0);

          case 10:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 7]]);
  }));

  return function deleteBookById(_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteBookById = deleteBookById;

var searchBook = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return BookService.searchBook(req.params.title);

          case 3:
            data = _context6.sent;

            if (data === 'Problem Occured') {
              res.status(_httpStatusCodes["default"].INTERNAL_SERVER_ERROR).json({
                code: _httpStatusCodes["default"].INTERNAL_SERVER_ERROR,
                message: "Error occurred while searching for results."
              });
            } else {
              res.status(_httpStatusCodes["default"].OK).json({
                code: _httpStatusCodes["default"].OK,
                data: data,
                message: "Here are results matching your search..."
              });
            }

            _context6.next = 10;
            break;

          case 7:
            _context6.prev = 7;
            _context6.t0 = _context6["catch"](0);
            next(_context6.t0);

          case 10:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 7]]);
  }));

  return function searchBook(_x16, _x17, _x18) {
    return _ref6.apply(this, arguments);
  };
}(); // Controller for sort book in ascending order

/**
 *
 * @param {object} req request object
 * @param {object} res  response object
 * @param {object} next
 */


exports.searchBook = searchBook;

var ascendingOrder = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return BookService.ascendingOrder();

          case 3:
            data = _context7.sent;
            res.status(_httpStatusCodes["default"].OK).json({
              code: _httpStatusCodes["default"].OK,
              data: data,
              message: "Your Books..."
            });
            _context7.next = 10;
            break;

          case 7:
            _context7.prev = 7;
            _context7.t0 = _context7["catch"](0);
            next(_context7.t0);

          case 10:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[0, 7]]);
  }));

  return function ascendingOrder(_x19, _x20, _x21) {
    return _ref7.apply(this, arguments);
  };
}(); // Controller for sort book in descending order

/**
 *
 * @param {object} req request object
 * @param {object} res  response object
 * @param {object} next
 */


exports.ascendingOrder = ascendingOrder;

var descendingOrder = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            _context8.next = 3;
            return BookService.descendingOrder();

          case 3:
            data = _context8.sent;
            res.status(_httpStatusCodes["default"].OK).json({
              code: _httpStatusCodes["default"].OK,
              data: data,
              message: "Your Books..."
            });
            _context8.next = 10;
            break;

          case 7:
            _context8.prev = 7;
            _context8.t0 = _context8["catch"](0);
            next(_context8.t0);

          case 10:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[0, 7]]);
  }));

  return function descendingOrder(_x22, _x23, _x24) {
    return _ref8.apply(this, arguments);
  };
}(); // Controller for sort book in alphabetical order

/**
 *
 * @param {object} req request object
 * @param {object} res  response object
 * @param {object} next
 */


exports.descendingOrder = descendingOrder;

var alphabeticalOrder = /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            _context9.next = 3;
            return BookService.alphabeticalOrder();

          case 3:
            data = _context9.sent;
            res.status(_httpStatusCodes["default"].OK).json({
              code: _httpStatusCodes["default"].OK,
              data: data,
              message: "Your Books..."
            });
            _context9.next = 10;
            break;

          case 7:
            _context9.prev = 7;
            _context9.t0 = _context9["catch"](0);
            next(_context9.t0);

          case 10:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[0, 7]]);
  }));

  return function alphabeticalOrder(_x25, _x26, _x27) {
    return _ref9.apply(this, arguments);
  };
}(); // Controller for sort book as per price from low to high

/**
 *
 * @param {object} req request object
 * @param {object} res  response object
 * @param {object} next
 */


exports.alphabeticalOrder = alphabeticalOrder;

var priceLowToHighSort = /*#__PURE__*/function () {
  var _ref10 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.prev = 0;
            _context10.next = 3;
            return BookService.priceLowToHighSort();

          case 3:
            data = _context10.sent;
            res.status(_httpStatusCodes["default"].OK).json({
              code: _httpStatusCodes["default"].OK,
              data: data,
              message: "Your Books..."
            });
            _context10.next = 10;
            break;

          case 7:
            _context10.prev = 7;
            _context10.t0 = _context10["catch"](0);
            next(_context10.t0);

          case 10:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, null, [[0, 7]]);
  }));

  return function priceLowToHighSort(_x28, _x29, _x30) {
    return _ref10.apply(this, arguments);
  };
}(); // Controller for sort book as per price from high to low

/**
 *
 * @param {object} req request object
 * @param {object} res  response object
 * @param {object} next
 */


exports.priceLowToHighSort = priceLowToHighSort;

var priceHighToLowSort = /*#__PURE__*/function () {
  var _ref11 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(req, res, next) {
    var data;
    return _regenerator["default"].wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.prev = 0;
            _context11.next = 3;
            return BookService.priceHighToLowSort();

          case 3:
            data = _context11.sent;
            res.status(_httpStatusCodes["default"].OK).json({
              code: _httpStatusCodes["default"].OK,
              data: data,
              message: "Your Books..."
            });
            _context11.next = 10;
            break;

          case 7:
            _context11.prev = 7;
            _context11.t0 = _context11["catch"](0);
            next(_context11.t0);

          case 10:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, null, [[0, 7]]);
  }));

  return function priceHighToLowSort(_x31, _x32, _x33) {
    return _ref11.apply(this, arguments);
  };
}();

exports.priceHighToLowSort = priceHighToLowSort;