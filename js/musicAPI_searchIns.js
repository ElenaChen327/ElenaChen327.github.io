async function searchInstrument() {
    const instrumentName = document.getElementById('instrumentName').value;
    const resultsContainer = document.getElementById('results');

    resultsContainer.innerHTML = '';

    try {
        const response = await fetch(`https://musicbrainz.org/ws/2/instrument/?query=${encodeURIComponent(instrumentName)}&fmt=json`);
        const data = await response.json();
        const instruments = data.instruments;

        if (instruments.length === 0) {
            resultsContainer.innerHTML = `<p>No results found for "${instrumentName}".</p>`;
        } else {
            instruments.forEach(instrument => {
                const instrumentLink = document.createElement('a');
                instrumentLink.href = `./musicAPI_instrument.html?mbid=${instrument.id}`;
                instrumentLink.textContent = instrument.name;
                instrumentLink.style.display = 'block';

                resultsContainer.appendChild(instrumentLink);
            });
        }
    } catch (error) {
        console.error('Error fetching instrument details:', error);
    }
}
