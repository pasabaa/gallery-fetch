let btnSubmit = document.querySelector('#btnSubmit');

var output = document.querySelector('#demo');

output.innerHTML = num.value;

num.oninput = function() {
    output.innerHTML = this.value;
}

btnSubmit.addEventListener('click', () => {

    var num = document.querySelector('#num');

    var url = `https://picsum.photos/v2/list?page=2&limit=${num.value}`;

    fetch(url)
    .then(response => response.json())
    .then(data => viewData(data))
    .catch(error => console.log(error));

    const viewData = (data) => {
        console.log(data);
    
        let body = '';
    
        for (let i = 0; i < data.length; i++) {
            body += `<div class="col-lg-4 col-md-6 col-12 my-2">
                        <div class="card h-100 h-max shadow-sm border-0 p-4">
                            <p class="h4 fw-bolder">${data[i].author}</p>
                            <p class="m-0"><span class="badge bg-light text-dark fw-normal">Size: ${data[i].width} x ${data[i].height}</span></p>
                            <div class="text-center my-2">
                                <img class="img-fluid" src="${data[i].download_url}" alt="" loading="lazy">
                            </div>
                            <div class="d-flex align-items-center h-100 gap-2">
                                <a class="btn btn-sm btn-hover" href="${data[i].download_url}" download target="blank">Download</a>
                                <a class="btn btn-sm btn-outline-dark" href="${data[i].url}" target="blank">Go to site</a>
                            </div>
                        </div>
                    </div>
                    `
        }
    
        document.getElementById('content').innerHTML = body;
        console.log(num);
    
    }

});







/* "id": "0",
"author": "Alejandro Escamilla",
"width": 5616,
"height": 3744,
"url": "https://unsplash.com/...",
"download_url": "https://picsum.photos/..." */