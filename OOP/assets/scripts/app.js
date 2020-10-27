
const productList = {
    products: [
        {
            title: 'A Pillow',
            imageUrl: 
                'https://thumb.maxpixel.net/50/Sleep-Bedtime-Pillow-Bedroom-Dream-Comfortable-1738023.jpg',
            price: 19.99,
            description: 'A soft pillow'
        },
        {
            title: 'A Carpet',
            imageUrl: 
                'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flower_carpet_Pookkalam_Onappookkalam_at_Nithyananda_Ashram_Hosdurg_2019.jpg/120px-Flower_carpet_Pookkalam_Onappookkalam_at_Nithyananda_Ashram_Hosdurg_2019.jpg',
            price: 89.99,
            description: 'A carpet you might like'
        }
    ],
    render(){
        const renderHook = document.getElementById('app');
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';
        for (const prod of this.products){
            const prodEl = document.createElement('li');
            prodEl.className = 'product- item';
            prodEl.innerHTML = `
                <div>
                    <img src="${prod.imageUrl}" alt="${prod.title}">
                    <div class="product-item_content">
                        <h2>${prod.title}</h2>
                        <h3>\$${prod.price}</h3>
                        <p>${prod.description}</p>
                        <button>Add to Cart</button>
                    </div>
                </div>
            `;
            prodList.append(prodEl);
        }
        renderHook.append(prodList);
    }
};

productList.render();
