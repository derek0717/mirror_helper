// ==UserScript==
// @name     Mirror Helper (monkey ver.)
// @version  1
// @grant    none
// ==/UserScript==
console.log('s');
try {
// https://premier.hkticketing.com/shows/show.aspx?sh=REVIS1222
    if (window.location.href.includes('busy.hkticketing.com')) {
        console.log('t1');
        location.href = 'http://www.hkticketing.com/';
    } else if (window.location.href.includes('queue.hkticketing.com/hotshow')) {
        console.log('t2');
        location.href = 'https://entry-hotshow.hkticketing.com/';
    } else if (window.location.href.includes('premier.hkticketing.com/shows/show')) {
        if (document.querySelector('h1').innerHTML.includes('系統現正繁忙')) {
            location.href = 'http://entry-hotshow.hkticketing.com/';
        }
        /* URBTIX */
    } else if (window.location.href.includes('msg.urbtix.hk')) {
        console.log('u1');
        location.href = 'http://www.urbtix.hk/';
    } else if (window.location.href.includes('busy.urbtix.hk')) {
        console.log('u2');
        location.href = 'http://www.urbtix.hk/';
        /* CityLine */
    }else if (window.location.href.includes('msg.cityline.com')) {
        console.log('c1');
        location.href = 'https://access.cityline.com/utsvInternet/PU20BP23/login';
    }
}catch(e){
    console.log('e');
}