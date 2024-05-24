let i = 0;
let j = 0;

let Right_Aside = document.getElementById('Right_Aside');
let Right_Aside_Div = document.createElement("div");

//aside쪽 id
let topMenu = document.getElementById('topMenu');
let select1 = document.getElementById('select1');
let select2 = document.getElementById('select2');
let select3 = document.getElementById('select3');
let select4 = document.getElementById('select4');

//main쪽 id
let main = document.getElementById('main');
let meal = document.getElementById('meal');
let cook = document.getElementById('cook');
let set_menu = document.getElementById('set_menu');
let drink = document.getElementById('drink');

//querySeletorAll array
let itemlist = document.querySelectorAll('.select');
let food = document.querySelectorAll('.food');
let food_detail = document.querySelectorAll('.food_detail');
let detail = document.querySelectorAll('.detail');


//topMenu에 붙이기 위한 li들 생성
let meal_li = document.createElement("li");
let cook_li = document.createElement("li");
let set_menu_li1 = document.createElement("li");
let set_menu_li2 = document.createElement("li");
let drink_li_1 = document.createElement("li");
let drink_li_2 = document.createElement("li");

//li에 붙히는 textNode
let textNode_meal = document.createTextNode("식사류");
let textNode_cook = document.createTextNode("요리류");
let textNode1 = document.createTextNode("1인세트");
let textNode2 = document.createTextNode("2인세트");
let textNode_drink_li_1 = document.createTextNode("음료");
let textNode_drink_li_2 = document.createTextNode("주류");

//li들에게 class를 부여하기
meal_li.className = 'topMenu_li';
cook_li.className = 'topMenu_li';
set_menu_li1.className = 'topMenu_li';
set_menu_li2.className = 'topMenu_li';
drink_li_1.className = 'topMenu_li';
drink_li_2.className = 'topMenu_li';

//topMenu_li들의 class를 변수로 저장 배열로 만든다.
let child_topMenu_li = document.getElementsByClassName('topMenu_li'); //아직 배열의 개수는 0

//click 이벤트리스너
select1.addEventListener("click", create_top_meal_li);
select2.addEventListener("click", create_top_cook_li);
select3.addEventListener("click", create_top_set_menu_li);
select4.addEventListener("click", create_top_drink_li);

for(let k = 0; k < food_detail.length; k++){
    food_detail[k].addEventListener("click", Right_Aside_bar);
}

for(let h = 0; h < food.length; h++){
    detail[h].addEventListener("click", Right_Aside_bar);    
}



//mouseover 이벤트리스너
meal.addEventListener("mouseover", changeI1);
meal.addEventListener("mouseover", create_top_meal_li);
cook.addEventListener("mouseover", changeI2);
cook.addEventListener("mouseover", create_top_cook_li);
set_menu.addEventListener("mouseover", changeI3);
set_menu.addEventListener("mouseover", create_top_set_menu_li);
drink.addEventListener("mouseover", changeI4);
drink.addEventListener("mouseover", create_top_drink_li);

//mouseover, mouseout 이벤트리스너
function changeI1(){
    i = 0;
    food[i].addEventListener("mouseover", changeAsideColor);
    food[i].addEventListener("mouseout", originAsideColor);
}

function changeI2(){
    i = 1;
    food[i].addEventListener("mouseover", changeAsideColor);
    food[i].addEventListener("mouseout", originAsideColor);
}
function changeI3(){
    i = 2;
    food[i].addEventListener("mouseover", changeAsideColor);
    food[i].addEventListener("mouseout", originAsideColor);
}
function changeI4(){
    i = 3;
    food[i].addEventListener("mouseover", changeAsideColor);
    food[i].addEventListener("mouseout", originAsideColor);
}

function changeAsideColor(){
    itemlist[i].style.backgroundColor = "red";
    itemlist[i].style.color = "white";
}

function originAsideColor(){
    itemlist[i].style.backgroundColor = "white"
    itemlist[i].style.color = "black"
}

function delete_top_li(){
    for(j = 0; j < child_topMenu_li.length; j++){
        child_topMenu_li[j].parentNode.removeChild(child_topMenu_li[j]);
    }
}

function create_top_meal_li(){
    for(j = 0; j < child_topMenu_li.length; j+1){
        child_topMenu_li[j].parentNode.removeChild(child_topMenu_li[j]);
    }
    meal_li.appendChild(textNode_meal);
    topMenu.appendChild(meal_li);
}

function create_top_cook_li(){
    for(j = 0; j < child_topMenu_li.length; j+1){
        child_topMenu_li[j].parentNode.removeChild(child_topMenu_li[j]);
    }
    cook_li.appendChild(textNode_cook);
    topMenu.appendChild(cook_li);
}

function create_top_set_menu_li(){
    for(j = 0; j < child_topMenu_li.length; j+1){
        child_topMenu_li[j].parentNode.removeChild(child_topMenu_li[j]);
    }
    set_menu_li1.appendChild(textNode1);
    set_menu_li2.appendChild(textNode2);
    topMenu.append(set_menu_li1, set_menu_li2);
}

function create_top_drink_li(){
    for(j = 0; j < child_topMenu_li.length; j+1){
        child_topMenu_li[j].parentNode.removeChild(child_topMenu_li[j]);
    }
    drink_li_1.appendChild(textNode_drink_li_1);
    drink_li_2.appendChild(textNode_drink_li_2);
    topMenu.append(drink_li_1, drink_li_2);
}
function Right_Aside_bar(){
    Right_Aside.appendChild(Right_Aside_Div);

    main.style.float = "left"
    main.style.width = "1200px"
    main.style.height = "800px"
    main.style.overflow = "auto"
    main.style.color = "white"

    Right_Aside_Div.style.float = "right";
    Right_Aside_Div.style.width = "400px";
    Right_Aside_Div.style.height = "800px";
    Right_Aside_Div.style.backgroundColor = "white";

    for(let i = 0; i < food_detail.length; i++){
        food_detail[i].style.width = "400px"
    }

    for(let j = 0; j < detail.length; j++){
        detail[j].style.width = "400px"
    }
}