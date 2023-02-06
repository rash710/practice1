    function initiate()
    {
            var savebutton = document.getElementById('save');
            var retrievebutton = document.getElementById('retirieve');
            savebutton.addEventListener('click' , saveItem);
            retrievebutton.addEventListener('click' , retrieveItem);
    }

    function saveItem()
    {
        var key = document.getElementById('key').value;
        var value = document.getElementById('value').value;
        sessionStorage[key] = value;
    }
    function retrieveItem()
    {
        var data = document.getElementById('data');
        var value = document.getElementById('key').value;
        var value = sessionStorage[key];
        data.innerHTML = value;
    }

    addEventListener("load" , initiate);