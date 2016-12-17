var navigatorMessageMap = {
    'mac': 'macos',
    'iphone': 'macos',
    'win': 'windows',
    'lin': 'linux'
};

var platform = navigator.platform.toLowerCase();

for (var key in navigatorMessageMap) {
    key = key.toLowerCase();
    var version = navigatorMessageMap[key];

    if (platform.indexOf(key) >= 0) {
        showMessageForUser(version);
    }
}

function showMessageForUser(version) {
    arrayOfMess = document.getElementsByClassName('download-message');
    for (var i = 0; i < arrayOfMess.length; i++) {
        value = arrayOfMess[i].getAttribute('data-version');
        if (value !== version) {
            arrayOfMess[i].style.display = 'none';
        }
    }
}

