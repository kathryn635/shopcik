class Shop {
    constructor(items) {
        this.items = items;
    }
    find({ query = "", sortKey = null, sortDir = 1} = {}) {
        const q = query.trim().toLowerCase();
        let list = this.items.filter(item => item.name.
        toLowerCase().includes(q));

        if (sortKey) {
            list = [...list].sort((a, b) =>{
                const valA = a[sortKey], valB =  b[sortKey];
                const cmp = typeof valA === "string"
                  ? valA.localeCompare(valB, "ru")
                  : valA - valB;
                return cmp * sortDir;

            })
        }

    
    return list;
    }

buy(id) {
    const item = this.items.find(item => item.id === id);
    if(!item) {
        throw new Error("Товар не найден");
    }
    if(!item.inStock) {
        throw new Error("Товара нет в наличии")
    }

    item.inStock = false;
    console.log(this.items)
    return item;


}


}