// Simulated product data
const products = [
  {
    id: 1,
    name: "Braised Pork with Preserved Vegetables",
    price: 5.5,
    stock: 20,
    weight: 180,
    image: "./images/meicaikourou.jpg",
    ingredients:
      "Pork, preserved vegetables, soy sauce, scallion, ginger, garlic, star anise, etc.",
    expiry: "12 months at room temperature",
    storage: "Store in a cool place",
  },
  {
    id: 2,
    name: "Taiwanese Braised Pork",
    price: 5.5,
    stock: 20,
    weight: 170,
    image: "./images/taisheluru.jpg",
    ingredients:
      "Pork, braised pork powder, soy sauce, scallion, ginger, garlic, star anise, etc.",
    expiry: "12 months at room temperature",
    storage: "Store in a cool place",
  },
  {
    id: 3,
    name: "Mao's Braised Pork",
    price: 5.5,
    stock: 12,
    weight: 200,
    image: "./images/maoshihongshaorou.jpg",
    ingredients:
      "Pork, braised pork powder, soy sauce, scallion, ginger, garlic, star anise, etc.",
    expiry: "12 months at room temperature",
    storage: "Store in a cool place",
  },
  {
    id: 4,
    name: "Fish-Flavored Shredded Pork",
    price: 5.0,
    stock: 15,
    weight: 200,
    image: "./images/yuxiangrousi.jpg",
    ingredients:
      "Pork, fish-flavored powder, soy sauce, scallion, ginger, garlic, star anise, etc.",
    expiry: "12 months at room temperature",
    storage: "Store in a cool place",
  },
  {
    id: 5,
    name: "Curry Chicken",
    price: 5.0,
    stock: 3,
    weight: 220,
    image: "./images/galijirou.jpg",
    ingredients:
      "Chicken, curry powder, soy sauce, scallion, ginger, garlic, star anise, etc.",
    expiry: "12 months at room temperature",
    storage: "Store in a cool place",
  },
  {
    id: 6,
    name: "Spicy Chicken",
    price: 5.0,
    stock: 8,
    weight: 170,
    image: "./images/laziji.jpg",
    ingredients:
      "Chicken, spicy powder, soy sauce, scallion, ginger, garlic, star anise, etc.",
    expiry: "12 months at room temperature",
    storage: "Store in a cool place",
  },
  // New products
  {
    id: 7,
    name: "Soybean Braised Pork Knuckle",
    price: 5.5,
    stock: 20,
    weight: 200,
    image: "./images/huangdoumenzhuzhou.jpg",
    ingredients:
      "Pork knuckle, soybeans, soy sauce, scallion, ginger, garlic, star anise, etc.",
    expiry: "12 months at room temperature",
    storage: "Store in a cool place",
  },
  {
    id: 8,
    name: "Black Pepper Meatballs",
    price: 5.5,
    stock: 7,
    weight: 200,
    image: "./images/heijiaorouwan.jpg",
    ingredients:
      "Pork, black pepper powder, soy sauce, scallion, ginger, garlic, star anise, etc.",
    expiry: "12 months at room temperature",
    storage: "Store in a cool place",
  },
  {
    id: 9,
    name: "Tomato Beef Brisket",
    price: 5.8,
    stock: 20,
    weight: 200,
    image: "./images/fanqieniunan.jpg",
    ingredients:
      "Beef brisket, tomato, soy sauce, scallion, ginger, garlic, star anise, etc.",
    expiry: "12 months at room temperature",
    storage: "Store in a cool place",
  },
  {
    id: 10,
    name: "Beef Mapo Tofu",
    price: 5.0,
    stock: 20,
    weight: 200,
    image: "./images/niuroumapodoufu.jpg",
    ingredients:
      "Beef, tofu, mapo tofu sauce, scallion, ginger, garlic, star anise, etc.",
    expiry: "12 months at room temperature",
    storage: "Store in a cool place",
  },
  {
    id: 11,
    name: "Minced Meat Sauce",
    price: 4.8,
    stock: 20,
    weight: 100,
    image: "./images/roudingzhajiang.jpg",
    ingredients:
      "Pork, fried sauce, soy sauce, scallion, ginger, garlic, star anise, etc.",
    expiry: "12 months at room temperature",
    storage: "Store in a cool place",
  },
  {
    id: 12,
    name: "Beef with Mushrooms",
    price: 4.8,
    stock: 20,
    weight: 100,
    image: "./images/niuroujungou.jpg",
    ingredients:
      "Beef, mushrooms, soy sauce, scallion, ginger, garlic, star anise, etc.",
    expiry: "12 months at room temperature",
    storage: "Store in a cool place",
  },
];

let cart = [];

function renderProducts() {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";
    productCard.innerHTML = `
            <img src="${product.image}" alt="${
      product.name
    }" onclick="showProductDetails(${
      product.id
    })" onerror="this.src='./images/placeholder.jpg'">
            <h3>${product.name}</h3>
            <p>${product.weight}g</p>
            <p class="price">€${product.price.toFixed(2)}</p>
            <p class="stock">Remaining ${product.stock} pieces</p>
            <div class="quantity-control">
                <button onclick="changeQuantity(${product.id}, -1)">-</button>
                <input type="number" value="0" min="0" max="${
                  product.stock
                }" id="quantity-${product.id}">
                <button onclick="changeQuantity(${product.id}, 1)">+</button>
            </div>
            <button class="add-to-cart" onclick="addToCart(${
              product.id
            })">Add to Cart</button>
        `;
    productList.appendChild(productCard);
  });
}
function changeQuantity(productId, change) {
  const input = document.getElementById(`quantity-${productId}`);
  let newValue = parseInt(input.value) + change;
  newValue = Math.max(
    0,
    Math.min(newValue, products.find((p) => p.id === productId).stock)
  );
  input.value = newValue;
}

function addToCart(productId) {
  const quantity = parseInt(
    document.getElementById(`quantity-${productId}`).value
  );
  if (quantity > 0) {
    const product = products.find((p) => p.id === productId);
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity,
    };

    const existingItemIndex = cart.findIndex((item) => item.id === productId);
    if (existingItemIndex !== -1) {
      cart[existingItemIndex].quantity += quantity;
    } else {
      cart.push(cartItem);
    }

    updateCartTotal();
    // 移除以下行
    // alert("商品已添加到购物车！");

    // 可以添加一些视觉反馈，比如更新购物车图标或显示一个小提示
    // 例如：
    // showCartNotification();
  }
}

function updateCartTotal() {
  let total = 0;
  for (const item of cart) {
    total += item.price * item.quantity;
  }
  document.getElementById("cart-total").textContent = `Total: €${total.toFixed(
    2
  )}`;
}

function goToConfirmation() {
  if (cart.length > 0) {
    localStorage.setItem("cartData", JSON.stringify(cart));
    window.location.href = "confirmation.html";
  } else {
    alert("购物车为空，请先添加商品！");
  }
}

// 删除或注释掉这个事件监听器
// document.getElementById("checkout-btn").addEventListener("click", () => {
//   alert("跳转到确认订单页面");
// });

// 新增：显示商品详情的函数
function showProductDetails(productId) {
  const product = products.find((p) => p.id === productId);
  if (product) {
    document.getElementById("modal-image").src = product.image;
    document.getElementById("modal-title").textContent = product.name;
    document.getElementById(
      "modal-ingredients"
    ).textContent = `Ingredients: ${product.ingredients}`;
    document.getElementById(
      "modal-expiry"
    ).textContent = `Expiry: ${product.expiry}`;
    document.getElementById(
      "modal-storage"
    ).textContent = `Storage Suggestion: ${product.storage}`;

    const modalWeight = document.getElementById("modal-weight");
    if (modalWeight) {
      modalWeight.textContent = `Weight: ${product.weight}g`;
    } else {
      const newWeightElement = document.createElement("p");
      newWeightElement.id = "modal-weight";
      newWeightElement.textContent = `Weight: ${product.weight}g`;
      document.querySelector(".modal-content").appendChild(newWeightElement);
    }

    document.getElementById("product-modal").style.display = "block";
  }
}
// 新增：关闭模态框的函数
function closeModal() {
  document.getElementById("product-modal").style.display = "none";
}

// 新增：点击模态框外部关模态框
window.onclick = function (event) {
  const modal = document.getElementById("product-modal");
  if (event.target == modal) {
    closeModal();
  }
};

// 新增：为关闭按钮添加事件监听器
document.querySelector(".close").addEventListener("click", closeModal);

// 新增：为 Esc 键添加事件监听器
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeModal();
  }
});

// 初始化页面
renderProducts();

// 可以添加一个新的函数来提供视觉反馈
function showCartNotification() {
  const notification = document.createElement("div");
  notification.textContent = "Added to cart";
  notification.style.position = "fixed";
  notification.style.bottom = "20px";
  notification.style.right = "20px";
  notification.style.backgroundColor = "#4CAF50";
  notification.style.color = "white";
  notification.style.padding = "10px";
  notification.style.borderRadius = "5px";
  notification.style.opacity = "0";
  notification.style.transition = "opacity 0.5s";

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.opacity = "1";
  }, 100);

  setTimeout(() => {
    notification.style.opacity = "0";
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 500);
  }, 2000);
}
