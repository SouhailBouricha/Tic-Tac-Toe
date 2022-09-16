const GameFlow = (() =>{
    let X_ischeckd = false;
    let O_ischeckd = false;
    let X_type = "";
    let O_type = "";
    const Startbtn = document.querySelector(".start");
    const Gameboard = () => {
        const board = new Array(9);

        const mark = (player,position) => {
            board[position] = player.sign;
        }
        return { board,mark };
    }
    const Player = (type,sign) => {
        let play = { type, sign } 
        return play;
    }
    const chosePlayers = () =>{
        const btns_x = document.querySelectorAll(".btn_x");
        const btns_o = document.querySelectorAll(".btn_o");
        btns_x.forEach((btn) =>{
            btn.addEventListener("click",() =>{
                X_type = btn.classList[2];
                X_ischeckd = true;
                if(X_ischeckd && O_ischeckd){
                    // console.log("yes",btns_x);
                    Startbtn.classList.add("active");
                    
                }
                btns_x.forEach((ele) =>{
                    ele.classList.remove("red");
                    // console.log("ele",ele);
                });
                btn.classList.add("red");
            });
        });
        btns_o.forEach((btn) =>{
            btn.addEventListener("click",() =>{
                O_type = btn.classList[2];
                O_ischeckd = true;
                if(X_ischeckd && O_ischeckd){
                    // console.log("yes",btns_o);
                    Startbtn.classList.add("active");
                }
                btns_o.forEach((ele) =>{
                    ele.classList.remove("red");
                    // console.log("ele",ele);
                });
                btn.classList.add("red");
            });
        });
    }
    const startThegame = () =>{
        Startbtn.addEventListener("click",()=>{
            console.log("f");
            document.querySelector("header").style.display = "none";
            document.querySelector("main").style.display = "none";
            document.querySelector(".game").style.display = "flex";
        });
    }
    chosePlayers();
    startThegame();
    // let game = Gameboard();
    // console.log(game,"game");
    // console.log(game.board,"game boar");
    // const sou = Player("pc","x");
    // game.mark(sou,1);
    // console.log(game.board,"game board");
    console.log(document.querySelector(".board"));
    document.querySelector(".board").style.height = `${clientWidth}px`;
})();

















// let display_value = "";
// let Value1 = ''; 
// let Value2 = ''; 
// let ValueOpa = ''; 
// const divide =  (N1,N2) => {
//     if(N2 == 0){
//         return "LMAO";
//     }
//     return N1 / N2;
// };
// const multiply =  (N1,N2) => {
//     return N1 * N2;
// };
// const subtract =  (N1,N2) => {
//     return N1 - N2;
// };
// const add =  (N1,N2) => {
//     return N1 + N2;
// };
// const operate = (N1,N2,opa) =>{
//     if(opa == "+"){
//         return add(N1,N2);
//     }
//     else if(opa == "-"){
//         return subtract(N1,N2);
//     }
//     else if(opa == "*"){
//         return multiply(N1,N2);
//     }
//     else if(opa == "/"){
//         return divide(N1,N2);
//     }
// };
// let isclear = true;
// const clear = () =>{
//     const clear_btn = document.querySelector(".clear");
//     clear_btn.addEventListener("click",() => {
//         const lastOperation = document.querySelector(".lastOperation");
//         const CurrentOperation = document.querySelector(".CurrentOperation");
//         lastOperation.innerText = "";
//         CurrentOperation.innerText = "0";
//         lastOperation.innerText = "0";
//         isclear = true;
//         display_value = "";
//         Value1 = ''; 
//         Value2 = ''; 
//         ValueOpa = ''; 
//     });
// };
// const backSpace = () =>{
//     // const deleteBtn = document.querySelector(".delete");
//     const CurrentOperation = document.querySelector(".CurrentOperation");
//     if(display_value){
//         if(display_value.length == 1){
//             display_value = 0;
//             CurrentOperation.textContent = display_value;
//         }
//         else{
//             display_value =  display_value.slice(0,display_value.length - 1); 
//             CurrentOperation.textContent = display_value;
//         }
//     }
// };

// const storeValue = () =>{
//     const btn_nb = document.querySelectorAll(".btn_nb");
//     const CurrentOperation = document.querySelector(".CurrentOperation");
//     const btn_equals = document.querySelector(".btn_equals");
//     const btns_opi = document.querySelectorAll(".opi");
//     const lastOperation = document.querySelector(".lastOperation");
//     const deleteBtn = document.querySelector(".delete");
//     const pu_btn = document.querySelector(".pu");
//     deleteBtn.addEventListener("click",() =>{
//         backSpace();
//     });
//     pu_btn.addEventListener("click",() =>{
//         isclear = true;
//         display_value = "";
//         Value1 = ''; 
//         Value2 = ''; 
//         ValueOpa = '';
//         CurrentOperation.textContent = "0";
//         lastOperation.textContent = "0";
//         const SlideTl = gsap.timeline({defaults:{duration : 1 , ease : "power2.inOut"}});
//         SlideTl.to(".pupup",{clipPath: 'circle(0px)'});
//         SlideTl.to(".pupup",{display : 'none' },"-=1");
//         return;
//     });
//     btn_nb.forEach((nb) =>{
//         nb.addEventListener("click",() => {
//             if(isclear){
//                 CurrentOperation.textContent = "";
//             }
//             if(nb.textContent == "."){
//                 if(display_value){
//                     if(!display_value.includes(".")){
//                         display_value += nb.textContent;
//                         CurrentOperation.textContent = display_value;
//                     }
//                 }
//                 else{
//                     display_value = "0."
//                     CurrentOperation.textContent = display_value;
//                 }
//             }
//             else{
//                 display_value += nb.textContent;
//                 CurrentOperation.textContent = display_value;
//                 // console.log(nb.textContent);
//                 isclear = false; 
//                 console.log(display_value);
//             }
//         });
//     });
//     btns_opi.forEach((nb) =>{
//         nb.addEventListener("click",() => {
//             if (Value1 != "" && ValueOpa != "" && display_value !=  ""){
//                 if (Value1 != "" && ValueOpa != "" && display_value !=  ""){
                    
//                     Value2 = display_value;
//                     lastOperation.textContent = Value1 + ` ${ValueOpa} ` + Value2 + ' = ' ;
//                     if(String(operate(Number(Value1),Number(Value2),ValueOpa)).includes(".")){
//                         CurrentOperation.textContent = operate(Number(Value1),Number(Value2),ValueOpa).toFixed(2);
//                         Value1 = operate(Number(Value1),Number(Value2),ValueOpa).toFixed(2);
//                     }
//                     else{
//                         CurrentOperation.textContent = operate(Number(Value1),Number(Value2),ValueOpa);
//                         Value1 = operate(Number(Value1),Number(Value2),ValueOpa);
//                     }
//                     display_value = "";
//                     if(Value1 == "LMAO"){
//                         gsap.to(".pupup",1,{display : 'flex', clipPath: 'circle(100%)'});
//                     }
//                 }
//             }
//             if(Value1){
//                 lastOperation.textContent = Value1 + ' ' + nb.textContent;
//                 Value2 = display_value;
//                 display_value = "";
//                 CurrentOperation.textContent = "0";
//                 isclear = true;
//                 ValueOpa = nb.textContent;

//             }
//             else{
//                 Value1 = display_value;
//                 display_value = "";
//                 CurrentOperation.textContent = "0";
//                 isclear = true;
//                 ValueOpa = nb.textContent;
//                 lastOperation.textContent = Value1 + ' ' + nb.textContent;
//             }
            
//         });
//     });
//     btn_equals.addEventListener("click",() =>{ 
//         if (Value1 != "" && ValueOpa != "" && display_value !=  ""){
//         Value2 = display_value;
//         lastOperation.textContent = Value1 + ` ${ValueOpa} ` + Value2 + ' = ' ;
//         if(String(operate(Number(Value1),Number(Value2),ValueOpa)).includes(".")){
//             CurrentOperation.textContent = operate(Number(Value1),Number(Value2),ValueOpa).toFixed(2);
//             Value1 = operate(Number(Value1),Number(Value2),ValueOpa).toFixed(2);
//         }
//         else{
//             CurrentOperation.textContent = operate(Number(Value1),Number(Value2),ValueOpa);
//             Value1 = operate(Number(Value1),Number(Value2),ValueOpa);
//         }
//         display_value = "";
//         console.log("value1",Value1,"value2",Value2);
//         if(Value1 == "LMAO"){
//                 gsap.to(".pupup",1,{display : 'flex', clipPath: 'circle(100%)'});    
//                 isclear = true;
//                 display_value = "";
//                 Value1 = ''; 
//                 Value2 = ''; 
//                 ValueOpa = '';
//                 CurrentOperation.textContent = "LMAO";
//                 lastOperation.textContent = "0";
//                 return; 
//         }

//     }
//     })
// };

// // console.log(operate(10,5,"+"));
// // console.log(operate(10,5,"-"));
// // console.log(operate(10,5,"*"));
// // console.log(operate(10,5,"/"));
// clear();
// storeValue();
// storeValue();
// storeValue();
// storeValue();
// storeValue();
// storeValue();
// storeValue();
// storeValue();
// storeValue();
// storeValue();
// console.log(divide(10,5));
// console.log(multiply(10,5));
// console.log(subtract(10,5));
// console.log(add(10,5));