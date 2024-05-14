async function fetchArtistDetails() {
    const artistInput = document.getElementById('artistInput').value;
    const resultsContainer = document.getElementById('results');

    resultsContainer.innerHTML = '';

    try {
        const response = await fetch(`https://musicbrainz.org/ws/2/artist/?query=artist:${encodeURIComponent(artistInput)}&fmt=json`);
        const data = await response.json();
        const artists = data.artists;

        if (artists.length === 0) {
            resultsContainer.innerHTML = `<p>No results found for "${artistInput}".</p>`;
        } else {
            artists.forEach(artist => {
                const artistLink = document.createElement('a');
                artistLink.href = `./musicAPI_lookupArtist.html?mbid=${artist.id}`;
                artistLink.textContent = artist.name;
                artistLink.style.display = 'block';

                resultsContainer.appendChild(artistLink);
            });
        }
    } catch (error) {
        console.error('Error fetching artist details:', error);
    }
}
