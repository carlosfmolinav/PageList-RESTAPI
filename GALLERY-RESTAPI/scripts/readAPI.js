const tabla = document.querySelector('#maingallery tbody');

function loadObject() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(info => info.json()) //Format
        .then(pictures => {
            pictures.forEach(pictures => {
                const row = document.createElement('tr');
                row.innerHTML += `
                    <td>${pictures.title}</td>
                    <td>
                    <a href="${pictures.url}"><img src="${pictures.thumbnailUrl}"></a>
                    </td>
                `;
                tabla.appendChild(row);
            });
        }) 
        .catch(error => console.log('Error : ' + error.message))
}

loadObject();