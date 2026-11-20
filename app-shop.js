const items = [
    { id: 1, name: "Яблоки", price: 160, inStock: true },
    { id: 2, name: "Молоко", price: 90, inStock: true },
    { id: 3, name: "Груши", price: 250, inStock: false },
];

const state = { query: "", sortKey: null, sortDir: 1 };

const tbody = document.querySelector("tbody");
document.getElementById("search-form").addEventListener("submit", e => e.preventDefault());

document.getElementById("new-products").addEventListener("click", e =>{
    e.preventDefault();
    fillProducts(items);
    refresh();
})

document.getElementById("q").addEventListener("input", e => {
    state.query = e.target.value;
    refresh();
})

const shop = new Shop(items);

for (const th of document.querySelectorAll("#items th[data-sort]")) {
    th.addEventListener("click", () => {
        const key = th.dataset.sort;
        state.sortDir = state.sortKey === key
        ? -state.sortDir
        : 1;
        state.sortKey = key;
        console.log(state);
        
    
        refresh();
    })
}

refresh();




// tbody.append(newRow());

// const rows = [ ...tbody.children ];



// rows.sort((a, b) => a.cells[1].textContent - b.cells[1].textContent);

// console.log(rows);
// tbody.append(...rows);