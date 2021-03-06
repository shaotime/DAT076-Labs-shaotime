"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Book = undefined;

var _dec, _dec2, _dec3, _dec4, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3;

var _typeorm = require("typeorm");

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var Book = exports.Book = (_dec = (0, _typeorm.Entity)(), _dec2 = (0, _typeorm.PrimaryColumn)("varchar"), _dec3 = (0, _typeorm.Column)("varchar"), _dec4 = (0, _typeorm.Column)("varchar"), _dec(_class = (_class2 = function Book() {
  _classCallCheck(this, Book);

  _initDefineProp(this, "isbn", _descriptor, this);

  _initDefineProp(this, "price", _descriptor2, this);

  _initDefineProp(this, "title", _descriptor3, this);
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "isbn", [_dec2], {
  enumerable: true,
  initializer: function initializer() {
    return "";
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "price", [_dec3], {
  enumerable: true,
  initializer: function initializer() {
    return "";
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "title", [_dec4], {
  enumerable: true,
  initializer: function initializer() {
    return "";
  }
})), _class2)) || _class);