'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
    function Person() {
        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Anon';
        var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'age not provided';

        _classCallCheck(this, Person);

        this.name = name;
        this.age = age;
    }

    _createClass(Person, [{
        key: 'greeting',
        value: function greeting() {
            return 'Hello my name is ' + this.name + ' and I am ' + this.age + ' years old';
        }
    }, {
        key: 'getAge',
        value: function getAge() {
            return this.name + ' is ' + this.age + ' years old';
        }
    }]);

    return Person;
}();

var Student = function (_Person) {
    _inherits(Student, _Person);

    function Student(name, age) {
        var major = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'Undeclared';

        _classCallCheck(this, Student);

        var _this = _possibleConstructorReturn(this, (Student.__proto__ || Object.getPrototypeOf(Student)).call(this, name, age));

        _this.major = major;
        return _this;
    }

    _createClass(Student, [{
        key: 'hasMajor',
        value: function hasMajor() {
            return this.major !== 'Undeclared' ? true : false;
        }
    }]);

    return Student;
}(Person);

var Traveler = function (_Person2) {
    _inherits(Traveler, _Person2);

    function Traveler(name, age, homeLocation) {
        _classCallCheck(this, Traveler);

        var _this2 = _possibleConstructorReturn(this, (Traveler.__proto__ || Object.getPrototypeOf(Traveler)).call(this, name, age));

        _this2.homeLocation = homeLocation;
        return _this2;
    }

    _createClass(Traveler, [{
        key: 'greeting',
        value: function greeting() {
            var greeting = _get(Traveler.prototype.__proto__ || Object.getPrototypeOf(Traveler.prototype), 'greeting', this).call(this);
            if (this.homeLocation) {
                greeting += ' I am visiting from ' + this.homeLocation;
            }
            return greeting;
        }
    }]);

    return Traveler;
}(Person);

var me = new Student('Timothy Shores', 30, 'Economics');
console.log(me);
console.log(me.hasMajor());

var other = new Student();
console.log(other);
console.log(other.hasMajor());

var gf = new Student('Amanda', 26, 'Mechanical engineering');
console.log(gf);
console.log(gf.hasMajor());

var hobbit = new Traveler('Frodo', 'unknown', 'The Shire');
console.log(hobbit);
console.log(hobbit.greeting());
