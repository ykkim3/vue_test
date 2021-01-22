var app = new Vue({

    el: '#app',
    data: {
        brand: "BSG",
        product: "Socks",
        //image:"./assets/green.jpg",
        selectedVariant: 0,
        //inStock:true,
        details:["80% cotton","20% polyester","Gender-neutral"],
        variants:[
            {
                variantId: 2234,
                variantColor: "green",
                variantImage: "./assets/green.jpg",
                variantQuantity: 10
                
            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: "./assets/blue.jpg",
                variantQuantity: 0
            }
        ],
        cart:0
        
    },
    methods: {
        addToCart() {
            this.cart += 1
            this.variants[this.selectedVariant].variantQuantity -= 1;
        },
        updateProduct(index){
            this.selectedVariant=index;
            console.log(index);
        }
    },
    computed:{
        title(){
            return this.brand + ' ' + this.product;
        },
        image(){
            return this.variants[this.selectedVariant].variantImage;
        },
        inStock(){
            return this.variants[this.selectedVariant].variantQuantity;
        }
    }

})