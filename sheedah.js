const product = [
    {
        id: 0,
        image: 'Jersy1.jpg',
        title: 'barcelona',
        price: 16000,
    },
    {
        id: 1,
        image: 'Jersy2.jpg',
        title: 'male',
        price: 16000,
    },
    {
        id: 2,
        image: 'Jersy3.jpg',
        title: 'male',
        price: 16000,
    },
    {
        id: 3,
        image: 'Jersy3.jpg',
        title: 'male',
        price: 16000,
    },
    {
        id: 4,
        image: 'Jersy3.jpg',
        title: 'male',
        price: 16000,
    },
    {
        id: 5,
        image: 'Jersy3.jpg',
        title: 'male',
        price: 16000,
    },
    {
        id: 6,
        image: 'Jersy3.jpg',
        title: 'male',
        price: 16000,
    },
    {
        id: 7,
        image: 'Jersy3.jpg',
        title: 'male',
        price: 16000,
    },
    {
        id: 8,
        image: 'Jersy3.jpg',
        title: 'male',
        price: 16000,
    },
]

const categories = [...new Set(product.map((item)=> {return item}))    
]
let i=0;

document.getElementById('searchInput').addEventListener('keyup', (e)=>{
    const searchData = e.target.value.toLowerCase();
    const filterData = product.filter((item)=>{
        return(
            item.title.toLocaleLowerCase().includes(searchData)
        )
    })
    displayItem(filterData)
});

const displayItem = (items)=>{
    document.getElementById('root').innerHTML = items.map((item)=>
    { var {image, title, price} = item;
        return(
            `<div class='box'>
                <div class='img-box'>
                    <img class='images' src=${image}></img>
                </div>
                <div class='bottom'>
                    <p>${title}</p>
                    <h2>₦${price}.00</h2>`+
                    "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
                `</div>
            </div>`
        )
    }).join('');
}
var cart = [];

function addtocart(a){
        cart.push({...categories[a]});
        displaycart();
    }
function delElement(a){
        cart.splice(a, 1);
        displaycart();
    }
function displaycart(){
        let j = 0, total=0;
        document.getElementById("count").innerHTML=cart.length;
        if(cart.length==0){
            document.getElementById('cartitem').innerHTML = "Your cart is empty";
            document.getElementById("total").innerHTML = "₦ "+0+".00";
        }
        else{
            document.getElementById('cartitem').innerHTML = cart.map((items)=>
            { var {image, title, price} = items;
                total=total+price;
                document.getElementById("total").innerHTML = "₦ "+total+".00";
                return(
                    `<div class='cart-item'>
                        <div class='row-img'>
                            <img class='rowimg' src=${image}>
                        </div>
                        <p style='font-size:12px;'>${title}</p>
                        <h2 style='font-size:15px;'>₦ ${price}.00</h2>`+
                        "<i class='fa-solid fa-trash' onclick='delElement("+(j++)+")'></i>"+
                    `</div>`
                );
            }).join('');
        }
    }

    function whatsapp(){
        var cart = [];
        document.querySelectorAll('.cart-item p').forEach((item)=>{
            cart.push(item.innerText);
        });
        var total = document.getElementById('total').innerText;
        var message = "Hello, I would like to place an order for the following items: %0A%0A";
        cart.forEach((item)=>{
            message += "- " + item + "%0A";
        });
        message += "%0A" + "Total: " + total + "%0A%0A";
        message += "Please provide the delivery details.";
        var phoneNumber = "2349067103251";
        var whatsappURL = "https://wa.me/" + phoneNumber + "?text=" + message;
        window.open(whatsappURL, '_blank').focus();


    }



    displayItem(categories);
