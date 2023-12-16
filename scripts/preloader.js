function renderData(data) {
    const container = document.querySelector('.card');
    data.forEach(item => {
        const postElement = document.createElement('div');
        postElement.innerHTML = `<h3>${item.title}</h3><p>${item.body}</p>`;
        container.appendChild(postElement);
    });
}


function pseudoRandom(data) {
    const threshold = Math.floor(Math.random() * 100) + 1;

    return data.filter(function (item) {
        return item['id'] % threshold === 0
    });
}


(function () {

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            data = pseudoRandom(data);

            console.log(data);

            setTimeout(() => {
                console.log("2 second wait");
            }, 20000);

            window.setTimeout(function () {
                document.querySelector(".preloader").classList.add("loaded");
            }, 1000);

            renderData(data);
        })
        .catch(error => {
            console.log('Error:', error);

            renderData([{"title": "ERROR", "body": ""}])
        });
})()

