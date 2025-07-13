// Grab references to the button and the output container
const btn    = document.getElementById('loadBtn');
const output = document.getElementById('output');

// Attach a click handler to the Load button
btn.addEventListener('click', async () => {
  // Disable the button and show a loading state
  btn.disabled    = true;
  btn.textContent = 'Loading…';

  try {
    // Fetch the blends from our Express API
    const res = await fetch('/api/blends');
    if (!res.ok) throw new Error(res.statusText);

    // Parse the JSON response
    const blends = await res.json();

    // Map each blend into an HTML card and inject into the page
    output.innerHTML = blends.map(b => `
      <div class="card">
        <img src="${b.image}" alt="${b.name}">
        <h3>${b.name}</h3>
        <p><strong>Origin:</strong> ${b.origin}</p>
        <p>${b.notes}</p>
      </div>
    `).join('');

  } catch (err) {
    // If an error occurs, display a message
    output.innerHTML = `<p class="error">Error loading blends: ${err.message}</p>`;
  } finally {
    // Re-enable the button and update its text
    btn.textContent = 'Reload';
    btn.disabled    = false;
  }
});
