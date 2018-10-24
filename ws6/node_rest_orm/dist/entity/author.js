"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Author = undefined;

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

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

var Author = exports.Author = (_dec = (0, _typeorm.Entity)(), _dec2 = (0, _typeorm.PrimaryColumn)("varchar"), _dec3 = (0, _typeorm.Column)("varchar"), _dec4 = (0, _typeorm.Column)("varchar"), _dec5 = (0, _typeorm.Column)("varchar"), _dec6 = (0, _typeorm.Column)("varchar"), _dec(_class = (_class2 = function Author() {
  _classCallCheck(this, Author);

  _initDefineProp(this, "id", _descriptor, this);

  _initDefineProp(this, "firstName", _descriptor2, this);

  _initDefineProp(this, "lastName", _descriptor3, this);

  _initDefineProp(this, "email", _descriptor4, this);

  _initDefineProp(this, "address", _descriptor5, this);
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "id", [_dec2], {
  enumerable: true,
  initializer: function initializer() {
    return "";
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "firstName", [_dec3], {
  enumerable: true,
  initializer: function initializer() {
    return "";
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lastName", [_dec4], {
  enumerable: true,
  initializer: function initializer() {
    return "";
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "email", [_dec5], {
  enumerable: true,
  initializer: function initializer() {
    return "";
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "address", [_dec6], {
  enumerable: true,
  initializer: function initializer() {
    return "";
  }
})), _class2)) || _class);