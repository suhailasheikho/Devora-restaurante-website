const menuItems = [
  {id:1,name:"Truffle Mushroom Pasta",category:"food",ingredients:"Creamy sauce · mushrooms · parmesan · truffle oil",persons:"1 person",price:12.5,img:"https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=90",popular:true},
  {id:2,name:"Grilled Chicken Plate",category:"food",ingredients:"Herb chicken · roasted vegetables · potatoes",persons:"1 person",price:15,img:"https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=900&q=90",popular:true},
  {id:3,name:"Classic Margherita",category:"food",ingredients:"Tomato · mozzarella · basil · olive oil",persons:"1–2 persons",price:11,img:"https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=90",popular:true},
  {id:4,name:"Beef Burger",category:"food",ingredients:"Beef patty · cheddar · lettuce · tomato · fries",persons:"1 person",price:13.5,img:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=90",popular:true},
  {id:5,name:"Caesar Salad",category:"food",ingredients:"Romaine · parmesan · croutons · Caesar dressing",persons:"1 person",price:9,img:"https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=900&q=90"},
  {id:6,name:"Creamy Chicken",category:"food",ingredients:"Chicken · cream · herbs · parmesan · vegetables",persons:"1 person",price:14,img:"https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=900&q=90"},
  {id:7,name:"Fresh Lemonade",category:"cold",ingredients:"Fresh lemon · mint · sparkling water",persons:"1 person",price:4.5,img:"https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=900&q=90"},
  {id:8,name:"Iced Latte",category:"cold",ingredients:"Espresso · cold milk · ice",persons:"1 person",price:5,img:"https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=900&q=90"},
  {id:9,name:"Berry Smoothie",category:"cold",ingredients:"Mixed berries · banana · yogurt",persons:"1 person",price:6,img:"https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=900&q=90"},
  {id:10,name:"Cappuccino",category:"hot",ingredients:"Espresso · steamed milk · silky foam",persons:"1 person",price:4,img:"https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=900&q=90"},
  {id:11,name:"Hot Chocolate",category:"hot",ingredients:"Cocoa · steamed milk · chocolate · cream",persons:"1 person",price:4.5,img:"https://images.unsplash.com/photo-1562114527-85ec3bb56897?auto=format&fit=crop&w=900&q=90"},
  {id:12,name:"Tiramisu",category:"dessert",ingredients:"Mascarpone · espresso · cocoa · ladyfingers",persons:"1 person",price:7,img:"https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=900&q=90"},
  {id:13,name:"Chocolate Lava Cake",category:"dessert",ingredients:"Warm chocolate cake · molten center · vanilla ice cream",persons:"1 person",price:8,img:"https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=90"},
  {id:14,name:"Cheesecake",category:"dessert",ingredients:"Cream cheese · biscuit base · berry sauce",persons:"1 person",price:7.5,img:"https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=900&q=90"},
  {id:15,name:"Pancake Stack",category:"dessert",ingredients:"Buttermilk pancakes · berries · maple syrup",persons:"1 person",price:8,img:"https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=900&q=90"},
  {id:16,name:"Creamy Garlic Shrimp",category:"food",ingredients:"Garlic shrimp · cream · herbs · parmesan · toasted bread",persons:"1 person",price:16,img:"https://images.unsplash.com/photo-1762631178604-3b79d4d0bff9?auto=format&fit=crop&w=900&q=90"},
  {id:17,name:"Grilled Salmon",category:"food",ingredients:"Salmon · lemon butter · greens · roasted potatoes",persons:"1 person",price:18,img:"https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=90"},
  {id:18,name:"Chicken Alfredo",category:"food",ingredients:"Chicken · fettuccine · parmesan · creamy Alfredo sauce",persons:"1 person",price:14.5,img:"https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=900&q=90"},
  {id:19,name:"Steak & Fries",category:"food",ingredients:"Grilled beef steak · crispy fries · pepper sauce",persons:"1 person",price:21,img:"https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=90"},
  {id:20,name:"Mediterranean Bowl",category:"food",ingredients:"Hummus · grilled chicken · salad · pita · tahini",persons:"1 person",price:12,img:"https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=90"},
  {id:21,name:"Espresso",category:"hot",ingredients:"Freshly ground espresso · rich crema",persons:"1 person",price:3,img:"https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&w=900&q=90"},
  {id:22,name:"Caramel Latte",category:"hot",ingredients:"Espresso · steamed milk · caramel · foam",persons:"1 person",price:5.5,img:"https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=900&q=90"},
  {id:23,name:"Mint Tea",category:"hot",ingredients:"Fresh mint · black tea · hot water",persons:"1 person",price:3.5,img:"https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=900&q=90"},
  {id:24,name:"Iced Mocha",category:"cold",ingredients:"Espresso · chocolate · cold milk · ice",persons:"1 person",price:5.5,img:"https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=90"},
  {id:25,name:"Strawberry Lemonade",category:"cold",ingredients:"Strawberry · lemon · mint · sparkling water",persons:"1 person",price:5,img:"https://images.unsplash.com/photo-1650092071863-b47da0c0065b?auto=format&fit=crop&w=900&q=90"},
  {id:26,name:"Peach Iced Tea",category:"cold",ingredients:"Black tea · peach · lemon · ice",persons:"1 person",price:4.5,img:"https://images.unsplash.com/photo-1650092071863-b47da0c0065b?auto=format&fit=crop&w=900&q=90"},
  {id:27,name:"Brownie Sundae",category:"dessert",ingredients:"Warm brownie · vanilla ice cream · chocolate sauce",persons:"1 person",price:8,img:"https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=900&q=90"},
  {id:28,name:"Fruit Cheesecake",category:"dessert",ingredients:"Cream cheesecake · biscuit base · fresh fruit",persons:"1 person",price:8,img:"https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=900&q=90"},
  {id:29,name:"Chocolate Mousse",category:"dessert",ingredients:"Dark chocolate · whipped cream · cocoa",persons:"1 person",price:6.5,img:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=90"},
];

// Start with an empty cart on a fresh website version, so an old demo count such as 18 cannot reappear.
const CART_VERSION = "devora-cart-v2";
let cart = JSON.parse(localStorage.getItem(CART_VERSION) || "[]");
if (!Array.isArray(cart)) cart = [];

let reviews = JSON.parse(localStorage.getItem("devoraReviews") || "[]");
if (!Array.isArray(reviews)) reviews=[];
reviews = reviews.filter(r => r && String(r.name || "").trim() && String(r.text || "").trim() && Number(r.rating) >= 1);
localStorage.setItem("devoraReviews",JSON.stringify(reviews));

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const money = n => `$${Number(n).toFixed(2)}`;

function card(item, menu=false){
  return `<article class="${menu ? "menu-card" : "food-card"}">
    <div class="food-image">
      <img src="${item.img}" alt="${item.name}" loading="lazy" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=90';">
      ${!menu ? '<span class="food-tag">POPULAR</span>' : ""}
    </div>
    <div class="food-info">
      <h3>${item.name}</h3>
      <p class="ingredients">${item.ingredients}</p>
      <div class="food-meta"><span class="persons">👥 ${item.persons}</span><span class="price">${money(item.price)}</span></div>
      <button class="order-btn" type="button" data-add="${item.id}">Add to cart</button>
    </div>
  </article>`;
}

function renderMenu(category="all"){
  const list = category==="all" ? menuItems : menuItems.filter(x=>x.category===category);
  $("#menuGrid").innerHTML = list.map(x=>card(x,true)).join("");
}
function renderPopular(){
  $("#popularGrid").innerHTML = menuItems.filter(x=>x.popular).map(x=>card(x)).join("");
}
function saveCart(){ localStorage.setItem(CART_VERSION,JSON.stringify(cart)); }
function addToCart(id){
  const item = menuItems.find(x=>x.id===Number(id));
  if(!item) return;
  const existing = cart.find(x=>x.id===item.id);
  if(existing) existing.qty += 1;
  else cart.push({...item,qty:1});
  saveCart(); renderCart(); openCart();
}
function changeQty(id, delta){
  const item=cart.find(x=>x.id===Number(id));
  if(!item)return;
  item.qty += delta;
  if(item.qty<=0) cart=cart.filter(x=>x.id!==Number(id));
  saveCart(); renderCart();
}
function renderCart(){
  const count=cart.reduce((a,x)=>a+Number(x.qty||0),0);
  const total=cart.reduce((a,x)=>a+Number(x.qty||0)*Number(x.price||0),0);
  $("#cartCount").textContent=count;
  $("#cartTotal").textContent=money(total);
  $("#checkoutBtn").disabled=!cart.length;
  $("#cartItems").innerHTML = cart.length ? cart.map(x=>`
    <div class="cart-item">
      <img src="${x.img}" alt="${x.name}" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=300&q=80';">
      <div><h4>${x.name}</h4><small>${money(x.price)} each</small>
        <div class="qty"><button type="button" data-qty="${x.id}" data-delta="-1">−</button><b>${x.qty}</b><button type="button" data-qty="${x.id}" data-delta="1">+</button></div>
      </div>
      <span class="cart-item-price">${money(x.price*x.qty)}</span>
    </div>`).join("") : '<div class="empty-cart">Your cart is empty.<br><a href="#menu">Explore the menu →</a></div>';
}
function openCart(){ $("#cartDrawer").classList.add("open"); $("#drawerBackdrop").classList.add("show"); }
function closeCart(){ $("#cartDrawer").classList.remove("open"); $("#drawerBackdrop").classList.remove("show"); }
function openCheckout(){
  if(!cart.length)return;
  $("#checkoutFormWrap").classList.remove("hidden");
  $("#successState").classList.add("hidden");
  const lines=cart.map(x=>`<div class="summary-line"><span>${x.name} × ${x.qty}</span><b>${money(x.price*x.qty)}</b></div>`).join("");
  const total=cart.reduce((a,x)=>a+x.qty*x.price,0);
  $("#checkoutSummary").innerHTML=lines+`<div class="summary-line summary-total"><span>Total</span><b>${money(total)}</b></div>`;
  closeCart(); $("#checkoutBackdrop").classList.add("show");
}
function closeCheckout(){ $("#checkoutBackdrop").classList.remove("show"); }

function reviewCardMarkup(r){
  const rating=Math.max(1,Math.min(5,Number(r.rating)||5));
  return `<article class="review-card user-review"><div class="stars">${"★".repeat(rating)}${"☆".repeat(5-rating)}</div><p>“${escapeHtml(r.text)}”</p><strong>— ${escapeHtml(r.name)}</strong></article>`;
}
function renderReviews(){
  const grid=$("#reviewGrid");
  grid.querySelectorAll(".user-review").forEach(el=>el.remove());
  if(reviews.length) grid.insertAdjacentHTML("beforeend",reviews.map(reviewCardMarkup).join(""));
}
function escapeHtml(s){return String(s).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));}

// Event delegation keeps every Add to cart button working, including menu filters.
document.addEventListener("click", e=>{
  const add=e.target.closest("[data-add]");
  if(add){ addToCart(add.dataset.add); return; }
  const qty=e.target.closest("[data-qty]");
  if(qty){ changeQty(qty.dataset.qty, Number(qty.dataset.delta)); return; }
});

$("#categoryTabs").addEventListener("click",e=>{
  if(e.target.tagName!=="BUTTON")return;
  $$("#categoryTabs button").forEach(b=>b.classList.remove("active"));
  e.target.classList.add("active");
  renderMenu(e.target.dataset.category);
});
$("#cartOpen").onclick=openCart;
$("#cartClose").onclick=closeCart;
$("#drawerBackdrop").onclick=closeCart;
$("#checkoutBtn").onclick=openCheckout;
$("#checkoutClose").onclick=closeCheckout;
$("#doneBtn").onclick=()=>{closeCheckout(); location.hash="#menu";};

$("#checkoutForm").addEventListener("submit",e=>{
  e.preventDefault();
  const data=new FormData(e.target);
  const orderId="DV-"+Math.floor(100000+Math.random()*900000);
  localStorage.setItem("devoraLastOrder",JSON.stringify({orderId,name:data.get("name"),phone:data.get("phone"),address:data.get("address"),notes:data.get("notes"),items:cart,total:cart.reduce((a,x)=>a+x.qty*x.price,0),createdAt:new Date().toISOString()}));
  $("#checkoutFormWrap").classList.add("hidden");
  $("#successState").classList.remove("hidden");
  $("#successState p").innerHTML=`Your order <strong>${orderId}</strong> has been received. We’ll contact you shortly to confirm the details.`;
  cart=[]; saveCart(); renderCart();
});

$("#addReviewBtn").onclick=()=>$("#reviewBackdrop").classList.add("show");
$("#reviewClose").onclick=()=>$("#reviewBackdrop").classList.remove("show");
$("#reviewForm").addEventListener("submit",e=>{
  e.preventDefault();
  const data=new FormData(e.target);
  const review={name:String(data.get("name")||"").trim(),rating:Number(data.get("rating")),text:String(data.get("text")||"").trim()};
  if(!review.name || !review.text) return;
  reviews.push(review);
  localStorage.setItem("devoraReviews",JSON.stringify(reviews));
  renderReviews();
  e.target.reset(); $("#reviewBackdrop").classList.remove("show");
  location.hash="#reviews";
});

$("#menuToggle").onclick=()=>$("#nav").classList.toggle("show");
$$(".nav a").forEach(a=>a.onclick=()=>$("#nav").classList.remove("show"));

const sections=$$("main section[id]");
const navLinks=$$(".nav a");
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{ if(entry.isIntersecting) navLinks.forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+entry.target.id)); });
},{rootMargin:"-35% 0px -55% 0px"});
sections.forEach(s=>observer.observe(s));

renderPopular(); renderMenu(); renderCart(); renderReviews();
