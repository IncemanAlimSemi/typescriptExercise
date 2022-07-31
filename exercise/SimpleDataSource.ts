import Product from "./Product";

export default class SimpleDataSource {

    private products: Array<Product>;

    constructor(){
        this.products = new Array<Product>(
            new Product(1, "IPhone X", "Telefon", 10000),
            new Product(2, "IPhone 11", "Telefon", 12000),
            new Product(3, "IPhone 12", "Telefon", 15000),
            new Product(4, "IPhone 13", "Telefon", 19000),
        );
    }

    
    getProducts() : Product[] {
        return this.products;
    }
    
}