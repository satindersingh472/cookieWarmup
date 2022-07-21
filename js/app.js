Cookies.set(`click_count` , 0);
function update_cookie(details){
 Cookies.get(`click_count`);
Cookies.set(`click_count` , Cookies.get(`click_count`) + 1);
}

let button_click = document.getElementById(`click`);
button_click.addEventListener(`click` , update_cookie);