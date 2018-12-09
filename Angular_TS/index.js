"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Human = /** @class */ (function () {
    function Human(human) {
        var _this = this;
        this.fullName = function () {
            console.log(_this.firstName + ' ' + _this.lastName);
        };
        this.firstName = human.firstName;
        this.lastName = human.lastName;
    }
    Object.defineProperty(Human.prototype, "getName", {
        get: function () {
            return this.firstName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Human.prototype, "setName", {
        set: function (value) {
            this.firstName = value;
        },
        enumerable: true,
        configurable: true
    });
    return Human;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(people, year) {
        var _this = _super.call(this, people) || this;
        _this.year = year;
        return _this;
    }
    Object.defineProperty(Student.prototype, "getYear", {
        get: function () {
            return this.year;
        },
        enumerable: true,
        configurable: true
    });
    return Student;
}(Human));
var people = { firstName: 'Finn', lastName: 'Human' };
var student = new Student(people, 45);
// student.fullName()
// console.log(student.getName)
// console.log(student.getYear)
var palindromeTest = function (text) {
    var regExp = /[^A-Za-zА-Яа-яё0-9]/g;
    var textForTest = text.toLowerCase().replace(regExp, '');
    var length = textForTest.length;
    for (var i = 0; i < length / 2; i++) {
        if (textForTest[i] !== textForTest[length - 1 - i])
            return false;
    }
    return true;
};
// console.log(palindromeTest("A man, a plan, a canal. Panamas")); //false
// console.log(palindromeTest("A man, a plan, a canal. Panama")); //true
// console.log(palindromeTest("Апа")); //true
// console.log(palindromeTest("Апав")); //false
//# sourceMappingURL=index.js.map