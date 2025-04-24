const thePublication = document.getElementById('publicatie-filter');
const buttons = document.querySelectorAll('button-filter');

buttons.forEach(button =>
  button.addEventListener('click', async function (event) {
    // Haal het juiste topic op uit de geklikte knop
    const publicationTopic = button.dataset.topic;

    // Log wat er gebeurt


    // Loading state
    thePublication.innerHTML = '<p>Loading...</p>';
    thePublication.classList.add('loading');

    try {
      // Simuleer data ophalen — dit moet je aanpassen aan jouw API of backend
      const response = await fetch(`/api/publications?topic=${encodeURIComponent(publicationTopic)}`);
      const publications = await response.json();

      // Bouw HTML op
      const html = publications.map(pub => `
        <article>
          <h2>${pub.title}</h2>
          <p>${pub.intro}</p>
          <a href="/publicatie/${pub.id}">Bekijk</a>
        </article>
      `).join('');

      // Injecteer de HTML
      thePublication.innerHTML = html;

      // Succes state
      thePublication.classList.remove('loading');
      thePublication.classList.add('success');

    } catch (error) {
      // Foutmelding
      thePublication.innerHTML = '<p>Fout bij laden van publicaties.</p>';
      console.error(error);
    }
  })
);


// met liquid de loading en succes state verwerken

// eventlistener

// loading state add

// html parsen

// html ophalen

// url maken van de status

// dynamische data `${form.}`

// verwijder de loading class

// success state toevoegen