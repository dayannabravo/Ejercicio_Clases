'use strict'
class Product{
    constructor(description, price, stock){
        this.description = description;
        this.price = price;
        this.stock = stock
    }
    showInfo(description){
        alert(`Descripcion ${this.description} ; costo es: ${this.price} ; hay en stock ${this.stock }`)
    }

    minuStock(qty){
        this.stock = this.stock - qty;
    }

    incrementStock(qty){
        this.stock = this.stock + qty;
    }

    updatePrice(newPrice){
        this.price = newPrice;
    }
}

let product = new Product('Papitas', '1,75', 20);
product.showInfo();
product.minuStock(10);
product.showInfo();
product.incrementStock(15);
product.showInfo();
product.updatePrice('2,00');
product.showInfo();
