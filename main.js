console.log('s');
try {
    /* hkticketing */
    if (window.location.href.includes('busy.hkticketing.com')) {
        console.log('t1');
        location.href = 'http://www.hkticketing.com/';
    }else if (window.location.href.includes('queue.hkticketing.com/hotshow')) {
        console.log('t2');
        location.href = 'https://entry-hotshow.hkticketing.com/';
    // }else if (window.location.href.includes('premier.hkticketing.com')) {
    //     console.log('t hins live');
    //     location.href = 'https://premier.hkticketing.com/shows/show.aspx?sh=REVIS1222';


    /* URBTIX */
    }else if (window.location.href.includes('msg.urbtix.hk')) {
        console.log('u1');
        location.href = 'http://www.urbtix.hk/';
    } else if (window.location.href.includes('busy.urbtix.hk')) {
        console.log('u2');
        location.href = 'http://www.urbtix.hk/';



    /* CityLine */
    }else if (window.location.href.includes('msg.cityline.com')) {
        console.log('c1');
        switch(Math.random()%3){
            case(0):
                location.href = 'https://event.cityline.com/utsvInternet/PU20BP23/login';
                break;
            case(1):
                location.href = 'https://venue.cityline.com/utsvInternet/PU20BP23/login';
                break;
            default:
                location.href = 'https://access.cityline.com/utsvInternet/PU20BP23/login';
        }
    }
} catch (e) {
    console.log('e');
}