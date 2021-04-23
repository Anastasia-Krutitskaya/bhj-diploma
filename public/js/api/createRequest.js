/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
    console.log('hi');
    console.log(options);
    let xhr = new XMLHttpRequest;
    if(options.method === 'GET') {
        xhr.open( 'GET', `https://example.com?mail=${options.data.email}&password=${options.data.password}`);
        xhr.withCredentials = true;
        xhr.responseType = 'json';
        xhr.send();
    } else  {
        formData = new FormData;

        formData.append( 'data.email', '[data.email]' );
        formData.append( 'data.password', '[data.password]' );

        xhr.open( 'POST', 'https://example.com' );
        xhr.withCredentials = true;
        xhr.responseType = 'json';
        xhr.send( formData );
    }

    xhr.onload = function() {
        if (xhr.status != 200) {
            options.callback(xhr.statusText);
        } else {
            options.callback(null, xhr.response);
        }
    }    
  
};




