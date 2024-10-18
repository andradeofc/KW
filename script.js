document.addEventListener('DOMContentLoaded', () => {
    const filterSelect = document.getElementById('filter');
    const creativeCardsContainer = document.getElementById('creative-cards');

    // Função para carregar dados JSON
    async function loadCreatives() {
        const response = await fetch('criativos_com_detalhes_1_to_1.json');
        const creatives = await response.json();
        return creatives;
    }

    // Função para renderizar os cards
    function renderCards(creatives) {
        creativeCardsContainer.innerHTML = '';
        creatives.forEach(creative => {
            const card = document.createElement('div');
            card.className = 'bg-white p-4 rounded shadow-lg card';

            card.innerHTML = `
                <img src="${creative.coverUrl}" alt="${creative.name}" class="mb-4 rounded">
                <h2 class="text-xl font-bold">${creative.name}</h2>
                <p><strong>Cliques:</strong> ${creative.clickCntAll}</p>
                <p><strong>Conversões:</strong> ${creative.Conversões}</p>
                <p><strong>CTR:</strong> ${creative.ctr}</p>
                <p><strong>CVR:</strong> ${creative.cvr}</p>
            `;

            creativeCardsContainer.appendChild(card);
        });
    }

    // Função para filtrar os criativos
    function filterCreatives(creatives, filter) {
        if (filter === 'clicks') {
            return creatives.sort((a, b) => parseFloat(b.clickCntAll) - parseFloat(a.clickCntAll));
        } else if (filter === 'conversions') {
            return creatives.sort((a, b) => parseFloat(b.Conversões) - parseFloat(a.Conversões));
        }
        return creatives;
    }

    // Carregar e renderizar criativos com filtro
    loadCreatives().then(creatives => {
        renderCards(filterCreatives(creatives, filterSelect.value));

        filterSelect.addEventListener('change', () => {
            renderCards(filterCreatives(creatives, filterSelect.value));
        });
    });
});
