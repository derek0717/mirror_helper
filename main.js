console.log('i');
try {
    if (window.location.href=='http://msg.urbtix.hk/') {
        console.log('m');
        location.href = 'http://www.urbtix.hk/';
    } else if (window.location.href=='http://busy.urbtix.hk/') {
        console.log('b');
        location.href = 'http://www.urbtix.hk/';
    } else if (window.location.href=='https://ticket.urbtix.hk/'){
        alert('ticket');
    }
} catch (e) {
    console.log('6');
}