const cartItems = [];
const products = [
  {
    code: "cod12",
    name: "Fender Stratocaster® H.E.R. Limited Edition",
    price: 199.99,
  },
  { code: "cod34", name: "Drum Set Maple Complete 5 Pieces", price: 499.99 },
  { code: "cod56", name: "Keyboard Yamaha PSR-E373", price: 299.99 },
  { code: "cod78", name: "Hayden HY-12 wireless Microphone", price: 149.99 },
  { code: "cod90", name: "Guitar Amplifier", price: 249.99 },
];

function showAlert() {
  alert("¡Hola! Has hecho clic en el botón.");
}

function updateCartTotal() {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);
  const cartTotalElement = document.getElementById("cart-total");
  console.log("Mostrando item en el carrito:", total);
  if (cartTotalElement) {
    cartTotalElement.textContent = `$${total.toFixed(2)}`;
  }
}

// Añadir productos al carrito

function addCartItem(code) {
  const product = products.find((item) => item.code === code);
  if (product) {
    cartItems.push(product);
    console.log("Producto añadido al carrito:", product);
    console.log("Carrito actual:", cartItems);
  } else {
    console.log("Producto no encontrado con el código:", code);
  }
}

function removeCartItem(index) {
  if (index >= 0 && index < cartItems.length) {
    cartItems.splice(index, 1);
  }
  refresh();
}

function updateCartSummary() {
  const productSummary = {};
  cartItems.forEach((item, idx) => {
    if (!productSummary[item.code]) {
      productSummary[item.code] = {
        name: item.name,
        quantity: 0,
        price: 0,
        indexes: [],
      };
    }
    productSummary[item.code].quantity += 1;
    productSummary[item.code].price += item.price;
    productSummary[item.code].indexes.push(idx);
  });

  const summaryList = document.getElementById("summary");
  summaryList.innerHTML = "";

  // Create table
  const table = document.createElement("table");
  table.style.width = "100%";
  table.style.borderCollapse = "collapse";

  // Table header
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  ["Product", "#", "Price", ""].forEach((text) => {
    const th = document.createElement("th");
    th.textContent = text;
    th.style.borderBottom = "1px solid #ccc";
    th.style.padding = "8px";
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Table body
  const tbody = document.createElement("tbody");
  Object.values(productSummary).forEach((product) => {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = product.name;
    nameCell.style.padding = "8px";

    const quantityCell = document.createElement("td");
    quantityCell.textContent = product.quantity;
    quantityCell.style.textAlign = "center";
    quantityCell.style.padding = "8px";

    const priceCell = document.createElement("td");
    priceCell.textContent = `$${product.price.toFixed(2)}`;
    priceCell.style.textAlign = "right";
    priceCell.style.padding = "8px";

    // Eliminar icono
    const removeCell = document.createElement("td");
    removeCell.style.textAlign = "center";
    removeCell.style.padding = "8px";
    const removeBtn = document.createElement("button");
    removeBtn.innerHTML = "🗑️";
    removeBtn.title = "Eliminar";
    removeBtn.style.cursor = "pointer";
    removeBtn.onclick = function () {
      // Elimina solo uno de ese producto (el primero en el array)
      removeCartItem(product.indexes[0]);
    };
    removeCell.appendChild(removeBtn);

    row.appendChild(nameCell);
    row.appendChild(quantityCell);
    row.appendChild(priceCell);
    row.appendChild(removeCell);

    tbody.appendChild(row);
  });
  table.appendChild(tbody);

  summaryList.appendChild(table);
}

// Llama a updateCartSummary cada vez que se actualiza el carrito
function showCart() {
  const cartList = document.getElementById("cartList");
  cartList.innerHTML = "";
  cartItems.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartList.appendChild(li);
  });
  updateCartSummary();
  updateCartTotal();
  updateCartSummary();
}

// Escuchar el evento de clic en el botón "Add Cart"

function showProductAddedModal() {
  // Crear el modal si no existe
  let modal = document.getElementById("productAddedModal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "productAddedModal";
    modal.style.position = "fixed";
    modal.style.top = "50%";
    modal.style.left = "50%";
    modal.style.transform = "translate(-50%, -50%)";
    modal.style.background = "#fff";
    modal.style.padding = "20px 40px";
    modal.style.border = "1px solid #ccc";
    modal.style.boxShadow = "0 2px 8px rgba(0,0,0,0.2)";
    modal.style.zIndex = "1000";
    modal.style.fontSize = "1em";
    modal.style.borderRadius = "8px";
    modal.style.display = "none";
    modal.textContent = "💥 Producto agregado";
    document.body.appendChild(modal);
  }
  modal.style.display = "block";
  setTimeout(() => {
    modal.style.display = "none";
  }, 1200);
}

// Modificar el evento del botón para mostrar el modal
document.getElementById("buttonCart1").addEventListener("click", function () {
  addCartItem(this.value);
  showProductAddedModal();
  //showCart();
  refresh();
});
document.getElementById("buttonCart2").addEventListener("click", function () {
  addCartItem(this.value);
  showProductAddedModal();
  //showCart();
  refresh();
});
document.getElementById("buttonCart3").addEventListener("click", function () {
  addCartItem(this.value);
  showProductAddedModal();
  //showCart();
  refresh();
});
document.getElementById("buttonCart4").addEventListener("click", function () {
  addCartItem(this.value);
  showProductAddedModal();
  //showCart();
  refresh();
});

function refresh() {
  updateCartSummary();
  updateCartTotal();
}

// modal aboutus
document.getElementById("aboutUs").addEventListener("click", function () {
  // Crear el modal si no existe
  let aboutModal = document.getElementById("aboutUsModal");
  if (!aboutModal) {
    aboutModal = document.createElement("div");
    aboutModal.id = "aboutUsModal";
    aboutModal.style.position = "fixed";
    aboutModal.style.top = "50%";
    aboutModal.style.left = "50%";
    aboutModal.style.transform = "translate(-50%, -50%)";
    aboutModal.style.background = "#fff";
    aboutModal.style.padding = "24px 36px";
    aboutModal.style.border = "1px solid #ccc";
    aboutModal.style.boxShadow = "0 2px 8px rgba(0,0,0,0.2)";
    aboutModal.style.zIndex = "1000";
    aboutModal.style.fontSize = "1em";
    aboutModal.style.borderRadius = "10px";
    aboutModal.style.display = "none";
    // Cerrar botón
    const closeBtn = document.createElement("button");
    closeBtn.textContent = "✖";
    closeBtn.style.position = "absolute";
    closeBtn.style.top = "8px";
    closeBtn.style.right = "12px";
    closeBtn.style.background = "transparent";
    closeBtn.style.border = "none";
    closeBtn.style.fontSize = "1.2em";
    closeBtn.style.cursor = "pointer";
    closeBtn.onclick = function () {
      aboutModal.style.display = "none";
    };
    aboutModal.appendChild(closeBtn);

    // Contenido
    const content = document.createElement("div");
    content.style.marginTop = "16px";
    content.textContent =
      "We are a leading music store dedicated to providing high-quality instruments and exceptional customer service. Our mission is to inspire musicians of all levels to pursue their passion for music.";
    aboutModal.appendChild(content);

    document.body.appendChild(aboutModal);
  }
  aboutModal.style.display = "block";
});
