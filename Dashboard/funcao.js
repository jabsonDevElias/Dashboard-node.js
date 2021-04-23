var item = ['Home','Project','Calendar','Team Chat','Settings'];
for (let i = 0; i < 5;i++) {
    document.querySelector('.lista_itens ul').innerHTML +=`<li id=${i} class='identificador'><img src="img/icon0${i}.png">&nbsp;&nbsp;&nbsp;<a href="">${item[i]}</a></li>`;   
}
