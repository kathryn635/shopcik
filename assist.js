function newRow(item) {
    const rowNew = document.getElementById("row-tpl").content.cloneNode(true);
    /*
    item =  { id: 1, name: "Яблоки", price: 160, inStock: true },
    <tr data-id="1">
                <td class="name">Яблоки</td>
                <td class="price">160</td>
                <td><button class="buy">Купить</button></td>
            </tr>
    */
    const tr = rowNew.querySelector("tr");
    tr.dataset.id = item.id;
    tr.classList.toggle("unavailable", !item.inStock);    
    rowNew.querySelector(".name").textContent = item.name;
    rowNew.querySelector(".price").textContent = item.price;
    const btn = rowNew.querySelector(".buy");
    btn.disabled = !item.inStock;
    btn.textContent = item.inStock ? "Купить" : "Нет в наличии";
    btn.addEventListener("click", () => buy(item.id));
    
    return rowNew;
}


const render = (list)  => {
    const tbody = document.querySelector("#items tbody");
    tbody.replaceChildren(...list.map(newRow))
}


const refresh = () => render(shop.find(state));

const buy = (id) => {
    try{
        shop.buy(id);
    } catch(e){
        alert(e.message);
    }
    refresh();
}

const fillProducts = (items) => {
    for( const item of items){
        item.inStock = true;
    }
}