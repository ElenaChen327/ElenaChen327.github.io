// Base URL for OCHRE API
const OCHRE_BASE_URL = "https://ochre.lib.uchicago.edu/ochre?uuid=";

/**
 * Fetches and displays data from the OCHRE API
 * @param {string} uuid - The UUID of the item to fetch
 * @param {string} containerSelector - The selector of the container to display the data in
 */
function loadOchreData(uuid, containerSelector) {
    const url = OCHRE_BASE_URL + uuid;
    fetch(url)
        .then((response) => response.text())
        .then((xmlString) => {
            // Parse XML to a DOM object
            const parser = new DOMParser();
            const xml = parser.parseFromString(xmlString, "application/xml");

            // Extract the relevant data
            const title = xml.querySelector("title")?.textContent || "No Title";
            const properties = Array.from(xml.querySelectorAll("property")).map(
                (prop) => ({
                    name: prop.getAttribute("name"),
                    value: prop.textContent,
                })
            );
            const previewImage = xml.querySelector("previewImage")?.getAttribute("src") || null;

            // Build the HTML
            let html = `<h2>${title}</h2>`;
            if (previewImage) {
                html += `<img src="https://ochre.lib.uchicago.edu${previewImage}" alt="${title}" class="img-fluid mb-4">`;
            }
            if (properties.length > 0) {
                html += "<h3>Properties:</h3><ul>";
                properties.forEach((prop) => {
                    html += `<li><strong>${prop.name}:</strong> ${prop.value}</li>`;
                });
                html += "</ul>";
            } else {
                html += "<p>No properties available.</p>";
            }

            // Display the HTML in the container
            document.querySelector(containerSelector).innerHTML = html;
        })
        .catch((error) => {
            console.error("Error fetching OCHRE data:", error);
            document.querySelector(containerSelector).innerHTML = "<p>Error loading data.</p>";
        });
}
