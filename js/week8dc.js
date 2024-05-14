document.getElementById('search-button').addEventListener('click', searchArtist);

function searchArtist() {
    const query = document.getElementById('search-input').value;
    const url = `https://musicbrainz.org/ws/2/artist/?query=${encodeURIComponent(query)}&fmt=json`;

    fetch(url)
        .then(response => response.json())
        .then(data => displayResults(data.artists))
        .catch(error => console.error('Error:', error));
}

function displayResults(artists) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    artists.forEach(artist => {
        const artistLink = document.createElement('a');
        artistLink.href = '#';
        artistLink.textContent = artist.name;
        artistLink.addEventListener('click', () => fetchAlbums(artist.id));

        const artistDiv = document.createElement('div');
        artistDiv.appendChild(artistLink);
        resultsDiv.appendChild(artistDiv);
    });
}

function fetchAlbums(artistId) {
    const url = `https://musicbrainz.org/ws/2/release-group?artist=${artistId}&fmt=json`;

    fetch(url)
        .then(response => response.json())
        .then(data => displayAlbums(data['release-groups']))
        .catch(error => console.error('Error:', error));
}

function displayAlbums(albums) {
    const albumsDiv = document.getElementById('albums');
    albumsDiv.innerHTML = '';

    const table = document.createElement('table');
    const headerRow = document.createElement('tr');
    const headers = ['Album Name', 'Release Date'];
    headers.forEach(headerText => {
        const header = document.createElement('th');
        header.textContent = headerText;
        headerRow.appendChild(header);
    });
    table.appendChild(headerRow);

    albums.forEach(album => {
        const row = document.createElement('tr');
        const albumNameCell = document.createElement('td');
        const albumLink = document.createElement('a');
        albumLink.href = '#';
        albumLink.textContent = album.title;
        albumLink.addEventListener('click', () => fetchAlbumDetails(album.id));
        albumNameCell.appendChild(albumLink);
        const releaseDateCell = document.createElement('td');
        releaseDateCell.textContent = album['first-release-date'];
        row.appendChild(albumNameCell);
        row.appendChild(releaseDateCell);
        table.appendChild(row);
    });

    albumsDiv.appendChild(table);
}

function fetchAlbumDetails(albumId) {
    const url = `https://musicbrainz.org/ws/2/release-group/${albumId}?fmt=json`;

    fetch(url)
        .then(response => response.json())
        .then(data => displayAlbumDetails(data))
        .catch(error => console.error('Error:', error));
}

function displayAlbumDetails(album) {
    const albumsDiv = document.getElementById('albums');
    const albumDetailsDiv = document.createElement('div');

    const albumTitle = document.createElement('h2');
    albumTitle.textContent = album.title;
    albumDetailsDiv.appendChild(albumTitle);

    const releaseDate = document.createElement('p');
    releaseDate.textContent = `Release Date: ${album['first-release-date']}`;
    albumDetailsDiv.appendChild(releaseDate);

    const albumType = document.createElement('p');
    albumType.textContent = `Album Type: ${album['primary-type']}`;
    albumDetailsDiv.appendChild(albumType);

    const albumDisambiguation = document.createElement('p');
    albumDisambiguation.textContent = `Disambiguation: ${album.disambiguation}`;
    albumDetailsDiv.appendChild(albumDisambiguation);

    // Clear previous album details and append new details
    albumsDiv.innerHTML = '';
    albumsDiv.appendChild(albumDetailsDiv);
}
