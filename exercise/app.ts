import Product from "./Product";
import ProductService from "./ProductService";

let _productService = new ProductService();

let result;

result = _productService.getById(3);
console.log(result);

//result = _productService.getProducts();
//console.log(result);

let p = new Product();
p.id = 2;
p.name = "IPhone 13 PRO"
p.price = 30000;
p.category = "Telefon"

_productService.saveProduct(p);

console.log("-----------------------------------------------");
result = _productService.getProducts();
console.log(result);