async function fetchArtistDetails(mbid) {
    const resultsContainer = document.getElementById('results');

    try {
        const response = await fetch(`https://musicbrainz.org/ws/2/artist/${mbid}?fmt=json`);
        const artist = await response.json();

        resultsContainer.innerHTML = `
            <h2>${artist.name}</h2>
            <p>ID: ${artist.id}</p>
            <p>Type: ${artist.type || 'N/A'}</p>
            <p>Country: ${artist.country || 'N/A'}</p>
        `;
    } catch (error) {
        console.error('Error fetching artist details:', error);
    }
}

function getMbidFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('mbid');
}

document.addEventListener('DOMContentLoaded', () => {
    const mbid = getMbidFromUrl();
    if (mbid) {
        fetchArtistDetails(mbid);
    }
});


