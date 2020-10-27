class Product {
    // title = 'DEFAULT';
    // imageUrl;
    // description;
    // price;

    constructor(title, image, desc, price){
        this.title = title;
        this.imageUrl = image;
        this.description = desc;
        this.price = price;
    };
}

class ProductItem {
    constructor(product){
        this.product = product;
    };

    addToCart(){
        console.log('Adding product to cart ...');
        console.log(this.product);
    }

    render(){
        const prodEl = document.createElement('li');
            prodEl.className = 'product- item';
            prodEl.innerHTML = `
                <div>
                    <img src="${this.product.imageUrl}" alt="${this.product.title}">
                    <div class="product-item_content">
                        <h2>${this.product.title}</h2>
                        <h3>\$${this.product.price}</h3>
                        <p>${this.product.description}</p>
                        <button>Add to Cart</button>
                    </div>
                </div>
            `;
        const addCartButton = prodEl.querySelector('button');
        addCartButton.addEventListener('click', this.addToCart.bind(this));
        return prodEl; 
    }
}

class ProductList {
    products = [
        new Product(
            'A Pillow',
            'https://thumb.maxpixel.net/50/Sleep-Bedtime-Pillow-Bedroom-Dream-Comfortable-1738023.jpg',
            'A soft pillow',
            19.99
        ),
        new Product(
            'A Carpet',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flower_carpet_Pookkalam_Onappookkalam_at_Nithyananda_Ashram_Hosdurg_2019.jpg/120px-Flower_carpet_Pookkalam_Onappookkalam_at_Nithyananda_Ashram_Hosdurg_2019.jpg',
            'A carpet you might like',
            89.99
        ),  
    ];

    constructor(){};

    render(){
        const renderHook = document.getElementById('app');
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';
        for (const prod of this.products){
            const productItem = new ProductItem(prod);
            const prodEl = productItem.render();
            prodList.append(prodEl);
        }
        renderHook.append(prodList);
    };
}

const productList = new ProductList();
productList.render();
