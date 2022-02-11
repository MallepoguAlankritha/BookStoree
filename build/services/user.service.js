"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registration = exports.login = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _user = _interopRequireDefault(require("../models/user.model"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _dotenv = _interopRequireDefault(require("dotenv"));

_dotenv["default"].config(); //register user


var registration = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(body) {
    var salt, hash, data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _bcrypt["default"].genSalt(12);

          case 2:
            salt = _context.sent;
            _context.next = 5;
            return _bcrypt["default"].hash(body.password, salt);

          case 5:
            hash = _context.sent;
            body.password = hash;
            _context.next = 9;
            return _user["default"].create(body);

          case 9:
            data = _context.sent;
            return _context.abrupt("return", data);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function registration(_x) {
    return _ref.apply(this, arguments);
  };
}(); //login user


exports.registration = registration;

var login = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(body) {
    var data, payload, token, validatePassword;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _user["default"].findOne({
              email: body.email
            });

          case 2:
            data = _context2.sent;
            payload = {
              _id: data._id,
              firstName: data.firstName,
              lastName: data.lastName,
              email: data.email,
              role: data.role
            };
            token = _jsonwebtoken["default"].sign(payload, process.env.SECRET_KEY, {
              expiresIn: '100H'
            });
            _context2.next = 7;
            return _bcrypt["default"].compare(body.password, data.password);

          case 7:
            validatePassword = _context2.sent;

            if (!validatePassword) {
              _context2.next = 12;
              break;
            }

            return _context2.abrupt("return", token);

          case 12:
            throw new Error('Invalid user');

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function login(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

exports.login = login;