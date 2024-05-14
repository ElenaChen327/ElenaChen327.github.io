async function fetchInstrumentDetails(mbid) {
    const instrumentDetailsContainer = document.getElementById('instrumentDetails');

    try {
        const response = await fetch(`https://musicbrainz.org/ws/2/instrument/${mbid}?fmt=json`);
        const instrument = await response.json();

        instrumentDetailsContainer.innerHTML = `
            <h2>${instrument.name}</h2>
            <p>ID: ${instrument.id}</p>
            <p>Description: ${instrument.description || 'N/A'}</p>
        `;
    } catch (error) {
        console.error('Error fetching instrument details:', error);
    }
}

function getMbidFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('mbid');
}

document.addEventListener('DOMContentLoaded', () => {
    const mbid = getMbidFromUrl();
    if (mbid) {
        fetchInstrumentDetails(mbid);
    }

    document.getElementById('searchButton').addEventListener('click', () => {
        const instrumentName = document.getElementById('instrumentName').value;
        window.location.href = `./musicAPI_instrument.html?mbid=${instrumentName}`;
    });
});
