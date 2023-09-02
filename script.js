document.addEventListener("DOMContentLoaded", () => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1'; // Example API URL

    const fetchButton = document.getElementById('fetchButton');
    const dataContainer = document.getElementById('dataContainer');

    fetchButton.addEventListener('click', () => {
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Display the fetched data in the data container
                dataContainer.innerHTML = `
                    <h2>Data:</h2>
                    <pre>${JSON.stringify(data, null, 2)}</pre>
                `;
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    });
});
