// console.log("file is load");


// const el = [ ...document.getElementsByClassName("item") ];
// console.log(el);    
// el.forEach(item => {
//     console.log(item);    
// });

// const el2 = document.getElementById("main");
// console.log(el2.children.length);
// console.log(el2.childNodes.length);
// console.log([ ...el2.childNodes ].map(el => el.textContent))

// const el = document.querySelector("[data-id='5']")
// console.log(el);

// const timer1 = setInterval(() => {
//     console.log(new Date(), timer1);
// }, 1000)

// const timer2 = setInterval(() => {
//     console.log(timer2);
//     clearInterval(timer1)
//     clearInterval(timer2)
// }, 5000)

// console.log(new Date())

// let timer; 

// const func = () => {
//     console.log(new Date(), timer)
//     timer = setTimeout(func, 2000);
// }

// // setTimeout(func, 2000);
// func()

// setTimeout(() => {
//     clearTimeout(timer)
// }, 12000)


// const el = document.querySelector(".second")
// console.log(el);
// // console.log(el.textContent);
// // console.log(el.innerHTML);
// // console.log(el.outerHTML);

// setTimeout(() => {
//     el.textContent = "text"    
// }, 10000)

// const el = document.querySelector("[data-id='5']");

// console.log(el.dataset.orderUserId);
// el.dataset.orderUserId=30;
// console.log(el.dataset.orderUserId);

// const el = document.querySelectorAll(".item");
// // console.log(el);


//  [ ...el ].forEach(item => {
//     // console.log(item);
    
//    if (item.hasAttribute("title")) {
//         console.log(item.getAttribute("title"), item);
//     }
//  })

// const el = document.querySelectorAll(".item");

// setTimeout(() => {
// [ ...el ].forEach(item => {    
//     if (item.classList.contains("second")) {        
//         item.classList.toggle("success")
//     }    
// })
// }, 1000)

// setTimeout(() => {
//     const el = document.querySelector(".success");    
//     if (el !== null) {
//         // 
//         el.style.color = "rgb(248, 66, 202)";
//         el.style.backgroundColor = "rgb(10, 10, 90)"
//     }
// }, 5000)



const el = document.querySelector(".second");

const newEl = document.createElement("div");
newEl.textContent = "new element";
newEl.className = "success"
el.innerHTML = "<div id='new2' class='success'>new element2</div>"
console.log(newEl);

console.log(document.getElementById("new2"));
el.append(newEl);

setTimeout(() => document.getElementById("item-7").append(newEl).append
(newEl.cloneNode(true)), 5000);