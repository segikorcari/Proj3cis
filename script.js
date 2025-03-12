function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('data-container');
            container.innerHTML = `
                <h2>${data.title}</h2>
                <p>${data.body}</p>
            `;
        })
        .catch(error => console.error('Error fetching data:', error));
}
