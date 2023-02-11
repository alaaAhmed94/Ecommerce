// خاص اكونه اللنكات في شاشه الصغثر
let bar = document.getElementById("bar")
let close = document.getElementById("close")

let ul = document.querySelector("#header ul")

bar.onclick = function () {
    ul.style.right = "0"
}

close.onclick = function () {
    ul.style.right = "-300px"
}

// خاص اكونه اللنكات في شاشه الصغثر النهايه

// page pro
//  تغير صور المنتج 

let Img_All = document.querySelectorAll(".small-img-col img");
let img_big = document.getElementById("MainImg");

Img_All.forEach(img => {
    img.onclick = () => img_big.src = img.src;
});

// 


// proes.forEach( pro => pro.onclick =  () => window.location.href = 'sproduct.html');

// 

// Emailjs start 

let name = document.getElementById("name");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let text = document.getElementById("text");
let but_email = document.querySelector(".but_email");

function sendMail() {
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        text: document.getElementById("text").value,
    }
    const serviceID = "service_nkwc1qk";
    const templateID = "template_fzx515m";
    emailjs.send(serviceID,templateID,params).then((res) => {
        document.getElementById("name").value =  "";
        document.getElementById("email").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("text").value = "";
        console.log(res);
        alert("Your message sent successfully")
    }).catch((err) => console.log(err));
}

// Email end

// تغير الخلفيات بطريقه عشوايه 

let hero = document.querySelector("#hero");
let arrImage = ["f0.jpg","f1.jpg","f2.jpg","f3.jpg","f4.jpg"];

hero.style.backgroundImage = `url(${arrImage[1]})`

setInterval(function () {
    let num = Math.floor(Math.random() * arrImage.length)
    hero.style.backgroundImage = `url(f${num}.jpg)`
},3000)

// تغير الخلفيات بطريقه عشوايه 


// اضافه منتجات في الصفحه بطريقه دينماكيه وحفظها في localStorage start

let add = document.querySelector("#add")

let arr_pro_all;
if (localStorage.product != null) {
    arr_pro_all = JSON.parse(localStorage.product);
}else {
    arr_pro_all = [];
}


add.onclick = function () {
    let popup_div = document.createElement("div")
    popup_div.className = "popup-overlay"
    document.body.appendChild(popup_div)
    popup_div.innerHTML = `
    <div id="popup-box">
    <i class="fa-solid fa-xmark close color"></i>
        <div id="add_img_src">
            <img src="" alt="" id="img_cart">
            <input type="file" name="" id="add_src">
            <label for="add_src">add</label>
        </div>
        <div id="co1">
            <input type="text" name="" id="text" placeholder="Brand name">
            <input type="text" name="" id="product_name" placeholder="product name">
            <input type="number" name="" id="Product_price" placeholder="Product price">
        </div>
        <div id="co2">
            <button id="addition">Add the product</button>
        </div>
        <div>
            <button id="removeAll2">Empty all</button>
        </div>
    </div>
    `
    // غلق البووبب
    let closePo = document.querySelector(".close");
    let popup_overlay = document.querySelector(".popup-overlay");
    closePo.onclick = function () {
        popup_overlay.remove();
    }

    // جلب البيانات 
    let add_src = document.querySelector("#add_src");
    let text = document.querySelector("#text");
    let product_name = document.querySelector("#product_name");
    let Product_price = document.querySelector("#Product_price");
    let img_cart = document.querySelector("#img_cart");
    // let arr_pro_all;
    // if (localStorage.product != null) {
        //     arr_pro_all = JSON.parse(localStorage.product);
    // }else {
    //     arr_pro_all = [];
    // }

    add_src.onchange = function () {
        let file = new FileReader();
        file.readAsDataURL(add_src.files[0]);
        file.onload = function () {
            img_cart.src = file.result;
        }
    }

    // 
    let addition = document.querySelector("#addition");

    addition.onclick = function () {
        let obj = {
            add_src:add_src.value,
            text:text.value,
            img_src:img_cart.src, // add img
            product_name:product_name.value,
            Product_price:Product_price.value,
        }
        arr_pro_all.push(obj)
        console.log(arr_pro_all);
        localStorage.setItem("product", JSON.stringify(arr_pro_all));
        showData();
        removeValue();
    }

    // تفريغ كل الحقول الموجوده 
    function removeValue() {
        img_cart.src = "";
        add_src.value = "";
        text.value = "";
        product_name.value = "";
        Product_price.value = "";
    }
}

    // عرض البيانات في الصفحه 

function showData() {
    let table = '';

    for (let i = 0; i < arr_pro_all.length; i++) {
        table += `
        <div class="pro">
            <img src="${arr_pro_all[i].img_src}" alt="">
            <div class="des">
                <span>${arr_pro_all[i].text}</span>
                <h5>${arr_pro_all[i].product_name}</h5>
                <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <h4>$${arr_pro_all[i].Product_price}</h4>
            </div>
            <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
        </div>
        `
    }
    document.querySelector(".pro-container").innerHTML = table;
}

showData();

    let proes = document.querySelectorAll(".pro");

    proes.forEach( pro => pro.onclick =  () => window.location.href = 'sproduct.html');

// اضافه منتجات في الصفحه بطريقه دينماكيه وحفظها في localStorage  end
