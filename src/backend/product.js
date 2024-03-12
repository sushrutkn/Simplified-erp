export const products = [
    { id: 1, name: "Premium Laptop", category: "Electronics", price: 80999.00, quantity: 100 },
    { id: 2, name: "Organic Coffee", category: "Food & Drinks", price: 899.99, quantity: 250 },
    { id: 3, name: "Leather Backpack", category: "Fashion", price: 5599.99, quantity: 50 },
    { id: 4, name: "Smart Home Camera", category: "Electronics", price: 8599.99, quantity: 75 },
    { id: 5, name: "Fitness Tracker", category: "Health", price: 3499.99, quantity: 120 },
    { id: 6, name: "Desk Organizer", category: "Office", price: 1999.99, quantity: 80 },
    { id: 7, name: "Stainless Steel Pot", category: "Home & Living", price: 2799.99, quantity: 60 },
    { id: 8, name: "Running Shoes", category: "Sports", price: 4999.99, quantity: 200 },
    { id: 9, name: "Bluetooth Earbuds", category: "Electronics", price: 2199.99, quantity: 150 },
    { id: 10, name: "Organic Shampoo", category: "Beauty", price: 999.99, quantity: 180 },
    { id: 11, name: "HD Smart TV", category: "Electronics", price: 87799.99, quantity: 30 },
    { id: 12, name: "Stainless Steel Mug", category: "Home & Living", price: 799.99, quantity: 300 },
    { id: 13, name: "Designer Sunglasses", category: "Fashion", price: 4499.99, quantity: 40 },
    { id: 14, name: "DSLR Camera", category: "Electronics", price: 63999.99, quantity: 25 },
    { id: 15, name: "Air Purifier", category: "Home & Living", price: 11999.99, quantity: 90 },
    { id: 16, name: "Organic Quinoa", category: "Food & Drinks", price: 549.99, quantity: 500 },
    { id: 17, name: "Leather Wallet", category: "Fashion", price: 2199.99, quantity: 120 },
    { id: 18, name: "Gaming Mouse", category: "Electronics", price: 2999.99, quantity: 70 },
    { id: 19, name: "Yoga Mat", category: "Sports", price: 1699.99, quantity: 180 },
    { id: 20, name: "Smart Thermostat", category: "Home & Living", price: 7599.99, quantity: 45 },
    { id: 21, name: "Hardcover Notebook", category: "Office", price: 719.99, quantity: 200 },
    { id: 22, name: "Handcrafted Soap", category: "Beauty", price: 479.99, quantity: 300 },
    { id: 23, name: "Espresso Machine", category: "Food & Drinks", price: 14399.99, quantity: 35 },
    { id: 24, name: "Vintage Watch", category: "Fashion", price: 11999.99, quantity: 60 },
    { id: 25, name: "Wireless Keyboard", category: "Electronics", price: 4999.99, quantity: 100 },
    { id: 26, name: "Granite Cookware", category: "Home & Living", price: 4599.99, quantity: 80 },
    { id: 27, name: "Protein Powder", category: "Health", price: 2199.99, quantity: 250 },
    { id: 28, name: "Crossfit Gloves", category: "Sports", price: 999.99, quantity: 120 },
    { id: 29, name: "Noise-Canceling Headphones", category: "Electronics", price: 8599.99, quantity: 150 },
    { id: 30, name: "Natural Face Cream", category: "Beauty", price: 1599.99, quantity: 200 },
    { id: 31, name: "Portable Projector", category: "Electronics", price: 15999.99, quantity: 50 },
    { id: 32, name: "Bamboo Cutting Board", category: "Home & Living", price: 1279.99, quantity: 120 },
    { id: 33, name: "Running Jacket", category: "Sports", price: 3199.99, quantity: 90 },
    { id: 34, name: "Compact Blender", category: "Kitchen", price: 2299.99, quantity: 150 },
    { id: 35, name: "Organic Toothpaste", category: "Beauty", price: 599.99, quantity: 300 },
    { id: 36, name: "Solar-Powered Charger", category: "Electronics", price: 3999.99, quantity: 70 },
    { id: 37, name: "Wall Art Prints", category: "Home & Living", price: 1999.99, quantity: 200 },
    { id: 38, name: "Resistance Bands", category: "Fitness", price: 899.99, quantity: 180 },
    { id: 39, name: "Stylish Backpack", category: "Fashion", price: 3499.99, quantity: 120 },
    { id: 40, name: "Ceramic Dinner Set", category: "Kitchen", price: 5599.99, quantity: 60 },
    { id: 41, name: "Herbal Tea Blend", category: "Food & Drinks", price: 719.99, quantity: 250 },
    { id: 42, name: "Graphic Design Software", category: "Software", price: 18499.99, quantity: 30 },
    { id: 43, name: "Memory Foam Pillow", category: "Home & Living", price: 2199.99, quantity: 100 },
    { id: 44, name: "Portable Bluetooth Speaker", category: "Electronics", price: 4799.99, quantity: 150 },
    { id: 45, name: "Natural Hair Dye", category: "Beauty", price: 1359.99, quantity: 180 },
    { id: 46, name: "   ing Helmet", category: "Sports", price: 2999.99, quantity: 80 },
    { id: 47, name: "Stainless Steel Tumbler", category: "Kitchen", price: 899.99, quantity: 200 },
    { id: 48, name: "Meditation Cushion", category: "Wellness", price: 1999.99, quantity: 70 },
    { id: 49, name: "Compact Digital Camera", category: "Electronics", price: 29499.99, quantity: 40 },
    { id: 50, name: "Organic Skincare Set", category: "Beauty", price: 3999.99, quantity: 50 },
];


export const getProducts = (page) => {
    return products.slice((page - 1) * 25, page * 25);
}

export const getProductCount = () => {
    return products.length;
}



