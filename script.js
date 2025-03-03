     const cvData = {
    "Contact": "📞 06  | 📧 driss.boukhamla@gmail.com | 📍 21 rue , 13003 Marseille",
    "Expérience": `
        - 🎬 Monteur et preneur de son - LES TÊTES DE L’ART (2017 - 2019)<br>
        - 🎥 Agent Multimédia - URBANPROD (2015 - 2017)<br>
        - 🏛️ Agent technique - VILLE DE MARSEILLE (2019 - 2020)<br>
        - 🏡 Ouvrier de quartier - RÉGIE NORD LITTORAL (2020 - 2022)<br>
        - 🤝 Médiateur Social Urbain - GROUPE ADDAP13 (2022 - 2024)
    `,
    "Formations": `
        - 📜 Certification Wordpress (2017)<br>
        - 📜 Certification Référent Digital (2016)<br>
        - 🎓 Médiateur Accès Droit Services (2023)<br>
        - 🎥 Formation Caméraman et Prise de Son (2018)<br>
        - 🎭 Certification Régie/Son/Lumières/Câblage (2019)<br>
        - 🎨 Bac Pro Enseigne et Signalétique (2014)
    `,
    "Compétences": `
        - 🖥️ Développement et maintenance de sites web<br>
        - 🎧 Production audiovisuelle et prise de son<br>
        - 🔧 Maintenance de matériel audiovisuel<br>
        - 🎨 Création de supports graphiques (affiches, flyers)<br>
        - 💻 Maîtrise des outils numériques et WordPress<br>
        - 📲 Formation et animation multimédia
    `,
    "Expériences complémentaires": `
        - 🎶 Animation musicale pour divers événements<br>
        - 🏛️ Engagement actif en associations<br>
        - 🔌 Installation et câblage numérique<br>
        - 🛠️ Petit dépannage informatique
    `
};

function search() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";

    Object.keys(cvData).forEach(key => {
        if (key.toLowerCase().includes(query) || cvData[key].toLowerCase().includes(query)) {
            resultsDiv.innerHTML += `<p><strong>${key}:</strong><br> ${cvData[key]}</p>`;
        }
    });

    if (resultsDiv.innerHTML === "") {
        resultsDiv.innerHTML = "<p>Aucun résultat trouvé.</p>";
    }
}
