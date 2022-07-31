"use strict";
exports.__esModule = true;
var Product_1 = require("./Product");
var SimpleDataSource = /** @class */ (function () {
    function SimpleDataSource() {
        this.products = new Array(new Product_1["default"](1, "IPhone X", "Telefon", 10000), new Product_1["default"](2, "IPhone 11", "Telefon", 12000), new Product_1["default"](3, "IPhone 12", "Telefon", 15000), new Product_1["default"](4, "IPhone 13", "Telefon", 19000));
    }
    SimpleDataSource.prototype.getProducts = function () {
        return this.products;
    };
    return SimpleDataSource;
}());
exports["default"] = SimpleDataSource;
