// Слайдер в корзине и кнопки
const buttons_sauce_of_pizza = document.querySelectorAll('#image_btn_cart1, #image_btn_cart2, #image_btn_cart3, #image_btn_cart4, #image_btn_cart5, #image_btn_cart6');
buttons_sauce_of_pizza.forEach(button => {
    button.addEventListener('click', () => {
        buttons_sauce_of_pizza.forEach(btn => {
            btn.classList.remove('active_border_sauce');
        });
        button.classList.add('active_border_sauce');
    });
});

$(document).ready(function() {
    const sliderCart = $('.slider_cart');
    const slidesCart = sliderCart.find('img');
    const slidesCountCart = slidesCart.length;
    let currentIndexCart = 0;

    function updateSlider() {
        slidesCart.hide();
        for (let i = currentIndexCart; i < Math.min(currentIndexCart + 3, slidesCountCart); i++) {
            $(slidesCart[i]).show();
        }
    }
    updateSlider(); // Обновляем слайдер при загрузке страницы
    $('#r_btn').click(function() {
        if (currentIndexCart < slidesCountCart - 3) {
            currentIndexCart++;
            updateSlider();
        }
    });
    $('#l_btn').click(function() {
        if (currentIndexCart > 0) {
            currentIndexCart--;
            updateSlider();
        }
    });
});


const slidesCartAdds = document.querySelectorAll('#slide1, #slide2, #slide3, #slide4, #slide5, #slide6');
slidesCartAdds.forEach(button => {
    button.addEventListener('click', () => {
        slidesCartAdds.forEach(btn => {
            btn.classList.remove('active_slide');
        });
        button.classList.add('active_slide');
    });
});

// УМЕНЬШЕНИЕ СЧЕТЧИКА КОЛ-ВА ТОВАРА НА ГЛАВНОЙ СТРАНИЦЕ
document.addEventListener('DOMContentLoaded', function() {
    const deleteButton = document.querySelector('.delete_from_cart');

    deleteButton.addEventListener('click', function() {
        let count = sessionStorage.getItem('cartCount') ? parseInt(sessionStorage.getItem('cartCount')) : 0;
        if (count > 0) {
            count--;
            sessionStorage.setItem('cartCount', count.toString());
        }
    });
});


// ОБЩАЯ СУММА ЗАКАЗА
document.addEventListener('DOMContentLoaded', function() {
    var cartItems = document.querySelectorAll('.cart_item');
    var totalCostElement = document.getElementById('text_total_cost_cart1');

    // Создаем новый экземпляр MutationObserver
    var observer = new MutationObserver(function(mutationsList, observer) {
        updateTotalCost();
    });

    // Настраиваем параметры наблюдения для MutationObserver
    var config = { attributes: true, attributeFilter: ['style'] };

    cartItems.forEach(function(cartItem) {
        observer.observe(cartItem, config);
    });

    // Функция для обновления общей стоимости
    function updateTotalCost() {
        var totalCost = 0;
        cartItems.forEach(function(cartItem) {
            // Получаем цену из текущего элемента
            var priceElement = cartItem.querySelector('.order_item_price');
            var price = parseFloat(priceElement.textContent.replace(/[^\d.]/g, ''));

            // Если элемент отображается, добавляем его цену к общей стоимости
            if (window.getComputedStyle(cartItem).display === 'block') {
                totalCost += price;
            }
        });

        // Обновляем общую стоимость
        totalCostElement.textContent = totalCost + ' ₽';
        sessionStorage.setItem('totalCost', totalCost);
    }

    updateTotalCost();
});


// ДОБАВЛЕНИЕ В КОРЗИНУ ТОВАРОВ
var currentHeightItem = -110;

var cartExpand = document.getElementById("client_order_container");

document.addEventListener("DOMContentLoaded", function() {
    var isVisible = sessionStorage.getItem("cart_item_visible1"); // Получаем информацию о видимости элемента
    if (isVisible === "true") {
        var currentHeight = (parseInt(cartExpand.style.height) || 0);
        if (currentHeightItem >= 0) {cartExpand.style.height = (currentHeight + 110) + "px";}
        var cartItem = document.getElementById("cart_item1");
        cartItem.style.display = "block"; // Показываем элемент, если флаг установлен
        cartItem.style.top = (currentHeightItem + 110) + "px"; // Устанавливаем отступ сверху
        currentHeightItem = parseInt(cartItem.style.top) || 0;
        cartItem.style.left = "0px";
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var isVisible = sessionStorage.getItem("cart_item_visible2"); // Получаем информацию о видимости элемента
    if (isVisible === "true") {
        var currentHeight = (parseInt(cartExpand.style.height) || 0);
        if (currentHeightItem >= 0) {cartExpand.style.height = (currentHeight + 110) + "px";}
        var cartItem = document.getElementById("cart_item2");
        cartItem.style.display = "block"; // Показываем элемент, если флаг установлен
        cartItem.style.top = (currentHeightItem + 110) + "px"; // Устанавливаем отступ сверху
        currentHeightItem = parseInt(cartItem.style.top) || 0;
        cartItem.style.left = "0px"; 
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var isVisible = sessionStorage.getItem("cart_item_visible3"); // Получаем информацию о видимости элемента
    if (isVisible === "true") {
        var currentHeight = (parseInt(cartExpand.style.height) || 0);
        if (currentHeightItem >= 0) {cartExpand.style.height = (currentHeight + 110) + "px";}
        var cartItem = document.getElementById("cart_item3");
        cartItem.style.display = "block"; // Показываем элемент, если флаг установлен
        cartItem.style.top = (currentHeightItem + 110) + "px"; // Устанавливаем отступ сверху
        currentHeightItem = parseInt(cartItem.style.top) || 0;
        cartItem.style.left = "0px"; 
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var isVisible = sessionStorage.getItem("cart_item_visible4"); // Получаем информацию о видимости элемента
    if (isVisible === "true") {
        var currentHeight = (parseInt(cartExpand.style.height) || 0);
        if (currentHeightItem >= 0) {cartExpand.style.height = (currentHeight + 110) + "px";}
        var cartItem = document.getElementById("cart_item4");
        cartItem.style.display = "block"; // Показываем элемент, если флаг установлен
        cartItem.style.top = (currentHeightItem + 110) + "px"; // Устанавливаем отступ сверху
        currentHeightItem = parseInt(cartItem.style.top) || 0;
        cartItem.style.left = "0px"; 
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var isVisible = sessionStorage.getItem("cart_item_visible5"); // Получаем информацию о видимости элемента
    if (isVisible === "true") {
        var currentHeight = (parseInt(cartExpand.style.height) || 0);
        if (currentHeightItem >= 0) {cartExpand.style.height = (currentHeight + 110) + "px";}
        var cartItem = document.getElementById("cart_item5");
        cartItem.style.display = "block"; // Показываем элемент, если флаг установлен
        cartItem.style.top = (currentHeightItem + 110) + "px"; // Устанавливаем отступ сверху
        currentHeightItem = parseInt(cartItem.style.top) || 0;
        cartItem.style.left = "0px"; 
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var isVisible = sessionStorage.getItem("cart_item_visible6"); // Получаем информацию о видимости элемента
    if (isVisible === "true") {
        var currentHeight = (parseInt(cartExpand.style.height) || 0);
        if (currentHeightItem >= 0) {cartExpand.style.height = (currentHeight + 110) + "px";}
        var cartItem = document.getElementById("cart_item6");
        cartItem.style.display = "block"; // Показываем элемент, если флаг установлен
        cartItem.style.top = (currentHeightItem + 110) + "px"; // Устанавливаем отступ сверху
        currentHeightItem = parseInt(cartItem.style.top) || 0;
        cartItem.style.left = "0px"; 
    }
});

// ТОВАРЫ ИЗ РЕКОМЕНДАЦИЙ ДОБАВЛЕНИЕ В КОРЗИНУ
var priceFromRec1 = document.getElementById('order_item_price7').textContent.match(/\d+/)[0]; // Устанавливаем цену
sessionStorage.setItem("rn7_modal_price", priceFromRec1);
if (sessionStorage.getItem("flagPriceRecTapped1") === null) {
    sessionStorage.setItem("flagPriceRecTapped1", false);
}

document.querySelectorAll(".rec_add_cart").forEach(function(element) {
    element.addEventListener("click", function() {
        if (sessionStorage.getItem("flagPriceRecTapped1") === "false") {
            whoIsFirst = false;
            sessionStorage.setItem("flagPriceRecTapped1", true);
            sessionStorage.setItem("cart_item_visible7", "true"); // Устанавливаем флаг видимости элемента
            document.getElementById("cart_item7").style.display = "block";
            var currentHeight = (parseInt(cartExpand.style.height) || 0);
            if (currentHeightItem >= 0) {cartExpand.style.height = (currentHeight + 110) + "px";}

            var cartItem = document.getElementById("cart_item7");    
            cartItem.style.top = (currentHeightItem + 110) + "px"; // Устанавливаем отступ сверху
            currentHeightItem = parseInt(cartItem.style.top) || 0;
            cartItem.style.left = "0px";
        }
    });
});
// ЧТОБЫ ПОКАЗЫВАЛСЯ ЭЛЕМЕНТ ПОСЛЕ ОБНОВЛЕНИЯ БРАУЗЕРА
document.addEventListener("DOMContentLoaded", function() {
    var isVisible = sessionStorage.getItem("cart_item_visible7"); // Получаем информацию о видимости элемента
    if (isVisible === "true") {
        document.getElementById("cart_item7").style.display = "block"; // Показываем элемент, если флаг установлен

        var currentHeight = (parseInt(cartExpand.style.height) || 0);
        if (currentHeightItem >= 0) {cartExpand.style.height = (currentHeight + 110) + "px";}

        var cartItem = document.getElementById("cart_item7");    
        cartItem.style.top = (currentHeightItem + 110) + "px"; // Устанавливаем отступ сверху
        currentHeightItem = parseInt(cartItem.style.top) || 0;
        cartItem.style.left = "0px";
    }    
});

// СОУСЫ ДОБАВЛЕНИЕ В КОРЗИНУ
var priceFromRec2 = document.getElementById('order_item_price8').textContent.match(/\d+/)[0]; // Устанавливаем цену
sessionStorage.setItem("rn8_modal_price", priceFromRec2);
if (sessionStorage.getItem("flagPriceRecTapped2") === null) {
    sessionStorage.setItem("flagPriceRecTapped2", false);
}

document.querySelectorAll(".image_btn_cart").forEach(function(element) {
    element.addEventListener("click", function() {
        whoIsFirst = true;
        if (sessionStorage.getItem("flagPriceRecTapped2") === "false") {
            sessionStorage.setItem("flagPriceRecTapped2", true);
            sessionStorage.setItem("cart_item_visible8", "true"); // Устанавливаем флаг видимости элемента
            document.getElementById("cart_item8").style.display = "block";
            var currentHeight = (parseInt(cartExpand.style.height) || 0);
            if (currentHeightItem >= 0) {
                cartExpand.style.height = (currentHeight + 110) + "px";
            }

            var cartItem = document.getElementById("cart_item8");
            cartItem.style.top = (currentHeightItem + 110) + "px"; // Устанавливаем отступ сверху
            currentHeightItem = parseInt(cartItem.style.top) || 0;
            cartItem.style.left = "0px";
        }
    });
});
// ЧТОБЫ ПОКАЗЫВАЛСЯ ЭЛЕМЕНТ ПОСЛЕ ОБНОВЛЕНИЯ БРАУЗЕРА
document.addEventListener("DOMContentLoaded", function() {
    var isVisible = sessionStorage.getItem("cart_item_visible8"); // Получаем информацию о видимости элемента
    if (isVisible === "true") {
        document.getElementById("cart_item8").style.display = "block"; // Показываем элемент, если флаг установлен

        var currentHeight = (parseInt(cartExpand.style.height) || 0);
        if (currentHeightItem >= 0) {
            cartExpand.style.height = (currentHeight + 110) + "px";
        }

        var cartItem = document.getElementById("cart_item8");
        cartItem.style.top = (currentHeightItem + 110) + "px"; // Устанавливаем отступ сверху
        currentHeightItem = parseInt(cartItem.style.top) || 0;
        cartItem.style.left = "0px";
    }
});

var whoIsFirst = false;
document.addEventListener('DOMContentLoaded', function() {
    whoIsFirst = true;
});



// УДАЛЕНИЕ ИЗ КОРЗИНЫ ТОВАРОВ
var deleteButton1 = document.getElementById("delete_from_cart1");
deleteButton1.addEventListener("click", function() {
    var cartItem = document.getElementById("cart_item1");
    cartItem.style.display = "none";
    sessionStorage.setItem('count1', 1);
    sessionStorage.removeItem("cart_item_visible1"); // Удаляем флаг из sessionStorage

    // Обновление координат других блоков
    var cartItems = document.querySelectorAll("#cart_item2, #cart_item3, #cart_item4, #cart_item5, #cart_item6, #cart_item7, #cart_item8");
    for (var i = 0; i < cartItems.length; i++) {
        if (cartItems[i].style.display !== "none") {
            cartItems[i].style.top = (parseInt(cartItems[i].style.top) - 110) + "px";
        }
    }
    var cartExpand = document.getElementById("client_order_container");
    var currentHeight = parseInt(cartExpand.style.height) || 0;
    if (currentHeight > 110) {
        cartExpand.style.height = (currentHeight - 110) + "px";
    }
    currentHeightItem -= 110;    
});

var deleteButton2 = document.getElementById("delete_from_cart2");
deleteButton2.addEventListener("click", function() {
    var cartItem = document.getElementById("cart_item2");
    cartItem.style.display = "none";
    sessionStorage.setItem('count2', 1);
    sessionStorage.removeItem("cart_item_visible2"); // Удаляем флаг из sessionStorage

    // Обновление координат других блоков
    var cartItems = document.querySelectorAll("#cart_item3, #cart_item4, #cart_item5, #cart_item6, #cart_item7, #cart_item8");
    for (var i = 0; i < cartItems.length; i++) {
        if (cartItems[i].style.display !== "none") {
            cartItems[i].style.top = (parseInt(cartItems[i].style.top) - 110) + "px";
        }
    }
    var cartExpand = document.getElementById("client_order_container");
    var currentHeight = parseInt(cartExpand.style.height) || 0;
    if (currentHeight > 110) {
        cartExpand.style.height = (currentHeight - 110) + "px";
    }
    currentHeightItem -= 110;
});

var deleteButton3 = document.getElementById("delete_from_cart3");
deleteButton3.addEventListener("click", function() {
    var cartItem = document.getElementById("cart_item3");
    cartItem.style.display = "none";
    sessionStorage.setItem('count3', 1);
    sessionStorage.removeItem("cart_item_visible3"); // Удаляем флаг из sessionStorage

    // Обновление координат других блоков
    var cartItems = document.querySelectorAll("#cart_item4, #cart_item5, #cart_item6, #cart_item7, #cart_item8");
    for (var i = 0; i < cartItems.length; i++) {
        if (cartItems[i].style.display !== "none") {
            cartItems[i].style.top = (parseInt(cartItems[i].style.top) - 110) + "px";
        }
    }
    var cartExpand = document.getElementById("client_order_container");
    var currentHeight = parseInt(cartExpand.style.height) || 0;
    if (currentHeight > 110) {
        cartExpand.style.height = (currentHeight - 110) + "px";
    }
    currentHeightItem -= 110;
});

var deleteButton4 = document.getElementById("delete_from_cart4");
deleteButton4.addEventListener("click", function() {
    var cartItem = document.getElementById("cart_item4");
    cartItem.style.display = "none";
    sessionStorage.setItem('count4', 1);
    sessionStorage.removeItem("cart_item_visible4"); // Удаляем флаг из sessionStorage

    // Обновление координат других блоков
    var cartItems = document.querySelectorAll("#cart_item5, #cart_item6, #cart_item7, #cart_item8");
    for (var i = 0; i < cartItems.length; i++) {
        if (cartItems[i].style.display !== "none") {
            cartItems[i].style.top = (parseInt(cartItems[i].style.top) - 110) + "px";
        }
    }
    var cartExpand = document.getElementById("client_order_container");
    var currentHeight = parseInt(cartExpand.style.height) || 0;
    if (currentHeight > 110) {
        cartExpand.style.height = (currentHeight - 110) + "px";
    }
    currentHeightItem -= 110;
});

var deleteButton5 = document.getElementById("delete_from_cart5");
deleteButton5.addEventListener("click", function() {
    var cartItem = document.getElementById("cart_item5");
    cartItem.style.display = "none";
    sessionStorage.setItem('count5', 1);
    sessionStorage.removeItem("cart_item_visible5"); // Удаляем флаг из sessionStorage

    // Обновление координат других блоков
    var cartItems = document.querySelectorAll("#cart_item6, #cart_item7, #cart_item8");
    for (var i = 0; i < cartItems.length; i++) {
        if (cartItems[i].style.display !== "none") {
            cartItems[i].style.top = (parseInt(cartItems[i].style.top) - 110) + "px";
        }
    }
    var cartExpand = document.getElementById("client_order_container");
    var currentHeight = parseInt(cartExpand.style.height) || 0;
    if (currentHeight > 110) {
        cartExpand.style.height = (currentHeight - 110) + "px";
    }
    currentHeightItem -= 110;
});

var deleteButton6 = document.getElementById("delete_from_cart6");
deleteButton6.addEventListener("click", function() {
    var cartItem = document.getElementById("cart_item6");
    cartItem.style.display = "none";
    sessionStorage.setItem('count6', 1);
    sessionStorage.removeItem("cart_item_visible6"); // Удаляем флаг из sessionStorage

    // Обновление координат других блоков
    var cartItems = document.querySelectorAll("#cart_item7, #cart_item8");
    for (var i = 0; i < cartItems.length; i++) {
        if (cartItems[i].style.display !== "none") {
            cartItems[i].style.top = (parseInt(cartItems[i].style.top) - 110) + "px";
        }
    }
    var cartExpand = document.getElementById("client_order_container");
    var currentHeight = parseInt(cartExpand.style.height) || 0;
    if (currentHeight > 110) {
        cartExpand.style.height = (currentHeight - 110) + "px";
    }
    currentHeightItem -= 110;
});

var deleteButton7 = document.getElementById("delete_from_cart7");
deleteButton7.addEventListener("click", function() {
    sessionStorage.setItem("flagPriceRecTapped1", false);
    var cartItem = document.getElementById("cart_item7");
    cartItem.style.display = "none";
    sessionStorage.setItem('count7', 1);
    sessionStorage.removeItem("cart_item_visible7"); // Удаляем флаг из sessionStorage

    // Обновление координат других блоков
    if (whoIsFirst === false) {var cartItems = document.querySelectorAll("#cart_item7");}
    else if (whoIsFirst === true) {var cartItems = document.querySelectorAll("#cart_item8");}
    for (var i = 0; i < cartItems.length; i++) {
        if (cartItems[i].style.display !== "none") {
            cartItems[i].style.top = (parseInt(cartItems[i].style.top) - 110) + "px";
        }
    }
    var cartExpand = document.getElementById("client_order_container");
    var currentHeight = parseInt(cartExpand.style.height) || 0;
    if (currentHeight > 110) {
        cartExpand.style.height = (currentHeight - 110) + "px";
    }
    currentHeightItem -= 110;
    whoIsFirst = false;
});

var deleteButton8 = document.getElementById("delete_from_cart8");
deleteButton8.addEventListener("click", function() {
    sessionStorage.setItem("flagPriceRecTapped2", false);
    var cartItem = document.getElementById("cart_item8");
    cartItem.style.display = "none";
    sessionStorage.setItem('count8', 1);
    sessionStorage.removeItem("cart_item_visible8"); // Удаляем флаг из sessionStorage

    // Обновление координат других блоков
    if (whoIsFirst === true) {var cartItems = document.querySelectorAll("#cart_item8");}
    else if (whoIsFirst === false) {var cartItems = document.querySelectorAll("#cart_item7");}
    
    for (var i = 0; i < cartItems.length; i++) {
        if (cartItems[i].style.display !== "none") {
            cartItems[i].style.top = (parseInt(cartItems[i].style.top) - 110) + "px";
        }
    }
    var cartExpand = document.getElementById("client_order_container");
    var currentHeight = parseInt(cartExpand.style.height) || 0;
    if (currentHeight > 110) {
        cartExpand.style.height = (currentHeight - 110) + "px";
    }
    currentHeightItem -= 110;
    whoIsFirst = false;
});

// УВЕЛЕЧЕНИЕ КОЛ-ВА КАЖДОГО ТОВАРА В КОРЗИНЕ

var amountElement1 = document.getElementById('order_item_amount1');
var plusButton1 = document.getElementById('order_item_plus1');
var minusButton1 = document.getElementById('order_item_minus1');
var count1 = sessionStorage.getItem('count1') || 1;
var priceElement1 = document.getElementById('order_item_price1');
var initialPrice1 = sessionStorage.getItem('rn1_modal_price');
function updatePriceAndCount1() {
    amountElement1.textContent = count1;
    priceElement1.textContent = (initialPrice1 * count1) + ' ₽';
    sessionStorage.setItem('count1', count1);
}
updatePriceAndCount1();
plusButton1.addEventListener('click', function() {
    if (count1 < 9) {
        count1++;
        updatePriceAndCount1();
    }
});
minusButton1.addEventListener('click', function() {
    if (count1 > 1) {
        count1--;
        updatePriceAndCount1();
    }
});


var amountElement2 = document.getElementById('order_item_amount2');
var plusButton2 = document.getElementById('order_item_plus2');
var minusButton2 = document.getElementById('order_item_minus2');
var count2 = sessionStorage.getItem('count2') || 1;
var priceElement2 = document.getElementById('order_item_price2');
var initialPrice2 = sessionStorage.getItem('rn2_modal_price');
function updatePriceAndCount2() {
    amountElement2.textContent = count2;
    priceElement2.textContent = (initialPrice2 * count2) + ' ₽';
    sessionStorage.setItem('count2', count2);
}
updatePriceAndCount2();
plusButton2.addEventListener('click', function() {
    if (count2 < 9) {
        count2++;
        updatePriceAndCount2();
    }
});
minusButton2.addEventListener('click', function() {
    if (count2 > 1) {
        count2--;
        updatePriceAndCount2();
    }
});


var amountElement3 = document.getElementById('order_item_amount3');
var plusButton3 = document.getElementById('order_item_plus3');
var minusButton3 = document.getElementById('order_item_minus3');
var count3 = sessionStorage.getItem('count3') || 1;
var priceElement3 = document.getElementById('order_item_price3');
var initialPrice3 = sessionStorage.getItem('rn3_modal_price');
function updatePriceAndCount3() {
    amountElement3.textContent = count3;
    priceElement3.textContent = (initialPrice3 * count3) + ' ₽';
    sessionStorage.setItem('count3', count3);
}
updatePriceAndCount3();
plusButton3.addEventListener('click', function() {
    if (count3 < 9) {
        count3++;
        updatePriceAndCount3();
    }
});
minusButton3.addEventListener('click', function() {
    if (count3 > 1) {
        count3--;
        updatePriceAndCount3();
    }
});


var amountElement4 = document.getElementById('order_item_amount4');
var plusButton4 = document.getElementById('order_item_plus4');
var minusButton4 = document.getElementById('order_item_minus4');
var count4 = sessionStorage.getItem('count4') || 1;
var priceElement4 = document.getElementById('order_item_price4');
var initialPrice4 = sessionStorage.getItem('rn4_modal_price');
function updatePriceAndCount4() {
    amountElement4.textContent = count4;
    priceElement4.textContent = (initialPrice4 * count4) + ' ₽';
    sessionStorage.setItem('count4', count4);
}
updatePriceAndCount4();
plusButton4.addEventListener('click', function() {
    if (count4 < 9) {
        count4++;
        updatePriceAndCount4();
    }
});
minusButton4.addEventListener('click', function() {
    if (count4 > 1) {
        count4--;
        updatePriceAndCount4();
    }
});


var amountElement5 = document.getElementById('order_item_amount5');
var plusButton5 = document.getElementById('order_item_plus5');
var minusButton5 = document.getElementById('order_item_minus5');
var count5 = sessionStorage.getItem('count5') || 1;
var priceElement5 = document.getElementById('order_item_price5');
var initialPrice5 = sessionStorage.getItem('rn5_modal_price');
function updatePriceAndCount5() {
    amountElement5.textContent = count5;
    priceElement5.textContent = (initialPrice5 * count5) + ' ₽';
    sessionStorage.setItem('count5', count5);
}
updatePriceAndCount5();
plusButton5.addEventListener('click', function() {
    if (count5 < 9) {
        count5++;
        updatePriceAndCount5();
    }
});
minusButton5.addEventListener('click', function() {
    if (count5 > 1) {
        count5--;
        updatePriceAndCount5();
    }
});


var amountElement6 = document.getElementById('order_item_amount6');
var plusButton6 = document.getElementById('order_item_plus6');
var minusButton6 = document.getElementById('order_item_minus6');
var count6 = sessionStorage.getItem('count6') || 1;
var priceElement6 = document.getElementById('order_item_price6');
var initialPrice6 = sessionStorage.getItem('rn6_modal_price');
function updatePriceAndCount6() {
    amountElement6.textContent = count6;
    priceElement6.textContent = (initialPrice6 * count6) + ' ₽';
    sessionStorage.setItem('count6', count6);
}
updatePriceAndCount6();
plusButton6.addEventListener('click', function() {
    if (count6 < 9) {
        count6++;
        updatePriceAndCount6();
    }
});
minusButton6.addEventListener('click', function() {
    if (count6 > 1) {
        count6--;
        updatePriceAndCount6();
    }
});

var amountElement7 = document.getElementById('order_item_amount7'); 
var plusButton7 = document.getElementById('order_item_plus7'); 
var minusButton7 = document.getElementById('order_item_minus7'); 
var count7 = sessionStorage.getItem('count7') || 1; 
var priceElement7 = document.getElementById('order_item_price7'); 
var initialPrice7 = sessionStorage.getItem('rn7_modal_price');
function updatePriceAndCount7() { 
    amountElement7.textContent = count7; 
    priceElement7.textContent = (initialPrice7 * count7) + ' ₽'; 
    sessionStorage.setItem('count7', count7); 
} 
updatePriceAndCount7(); 
plusButton7.addEventListener('click', function() { 
    if (count7 < 9) { 
        count7++; 
        updatePriceAndCount7(); 
    } 
}); 
minusButton7.addEventListener('click', function() { 
    if (count7 > 1) { 
        count7--; 
        updatePriceAndCount7(); 
    } 
});

var amountElement8 = document.getElementById('order_item_amount8');  
var plusButton8 = document.getElementById('order_item_plus8');  
var minusButton8 = document.getElementById('order_item_minus8');  
var count8 = sessionStorage.getItem('count8') || 1;  
var priceElement8 = document.getElementById('order_item_price8');  
var initialPrice8 = sessionStorage.getItem('rn8_modal_price'); 
function updatePriceAndCount8() {  
    amountElement8.textContent = count8;  
    priceElement8.textContent = (initialPrice8 * count8) + ' ₽';  
    sessionStorage.setItem('count8', count8);  
}  
updatePriceAndCount8();  
plusButton8.addEventListener('click', function() {  
    if (count8 < 9) {  
        count8++;  
        updatePriceAndCount8();  
    }  
});  
minusButton8.addEventListener('click', function() {  
    if (count8 > 1) {  
        count8--;  
        updatePriceAndCount8();  
    }  
});


// ОБЩАЯ СУММА ЗАКАЗА
document.addEventListener('DOMContentLoaded', function() {
    var cartItems = document.querySelectorAll('.cart_item');
    var totalCostElement = document.getElementById('text_total_cost_cart1');

    var observer = new MutationObserver(function(mutationsList, observer) {
        updateTotalCost();
    });

    var config = { subtree: true, childList: true };

    cartItems.forEach(function(cartItem) {
        var priceElement = cartItem.querySelector('.order_item_price');
        observer.observe(priceElement, config);
    });

    // Функция для обновления общей стоимости
    function updateTotalCost() {
        var totalCost = 0;
        cartItems.forEach(function(cartItem) {
            // Получаем цену из текущего элемента
            var priceElement = cartItem.querySelector('.order_item_price');
            var price = parseFloat(priceElement.textContent.replace(/[^\d.]/g, ''));

            // Если элемент отображается, добавляем его цену к общей стоимости
            if (window.getComputedStyle(cartItem).display === 'block') {
                totalCost += price;
            }
        });

        // Обновляем общую стоимость
        totalCostElement.textContent = totalCost + ' ₽';
        sessionStorage.setItem('totalCost', totalCost);
    }

    updateTotalCost();
});