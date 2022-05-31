console.log('0');
try {
    if (window.location.href.includes('msg.urbtix.hk')) {
        console.log('1');
        location.href = 'https://ticket.urbtix.hk/internet/';
    } else if (window.location.href.includes('busy.urbtix.hk')) {
        console.log('2');
        location.href = 'https://ticket.urbtix.hk/internet/';
    } else if (window.location.href.includes('redirect.html')) {
        console.log('3');
        location.href = 'https://ticket.urbtix.hk/internet/';
    } else if (document.querySelector('h1').textContent.includes('imeout')) {
        console.log('4');
        location.href = 'http://ticket.urbtix.hk/internet/';
    } else if (document.querySelector('.error-code').textContent.includes('TIMED_OUT')) {
        console.log('5');
        location.href = 'http://ticket.urbtix.hk/internet/';
    }
} catch (e) {
    console.log('6');
}