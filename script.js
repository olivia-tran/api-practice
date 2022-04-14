var request = new XMLHttpRequest();
// the ? symbol in the API URL filters the API response based on the parameters following it
request.open('GET', 'https://hplussport.com/api/products?&order=name' ); 
request.onload = function() {
    var response = request.response;
    var parsedData = JSON.parse(response);
    console.log(parsedData);
    for (i in parsedData) {
        var name = parsedData[i].name;
        var products = document.createElement('li');
        products.innerHTML = name;
        document.body.appendChild(products);

        var imageURL = parsedData[i].image;
        var images = document.createElement('img');
        images.setAttribute('src', imageURL);
        document.body.appendChild(images);
    }
}
request.send();
