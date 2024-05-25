var menuPopout = document.getElementById("menuPopout");
var menuPopoutButton = document.getElementById("menuButton");
var menuPopoutState = 'close';

menuPopoutButton.addEventListener('click', () => {
    if( menuPopoutState == "close") {
        menuPopout.style.display = 'inline';
        menuPopoutState = 'open';
    }
    else {
        menuPopout.style.display = 'none';
        menuPopoutState = 'close';
    }
});