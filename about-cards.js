const cards = [
    {
        title: 'JOY',
        description: 'A sense of inner peace and resilience, reminding us to cherish moments of connection, play, and self-discovery.',
        image_url: "joy.png",
        color: '#FF6B6B'
    },
    {
        title: 'TRUST',
        description: 'One voice, one team. We move together in a seamless bond, where every action is taken for the good of the whole, supporting one another in harmony.',
        image_url: "trust.png",
        color: '#4ECDC4'

    },
    {
        title: 'CAMARADERIE',
        description: 'A sense of oneness built through shared experiences, celebrating the spirit of friendly fellowship, embracing diversity, and fostering inclusivity.',
        image_url: "camaraderie.png",
        color: '#45B7D1'

    },
    {
        title: 'PROBLEM SOLVING',
        description: 'A culture which promotes that every individual in the organization is capable of becoming a social change agent and bringing solutions to unconventional problems.',
        image_url: "problemsolving.png",
        color: '#FF9F1C'

    },
    {
        title: 'AGENCY',
        description: 'Ensure that the voices, lived experiences, and aspirations of our children and youth are central to every program and decision we make.',
        image_url: "agency.png",
        color: '#98CE00'
    },
    {
        title: 'COLLABORATION',
        description: 'A culture of shared ownership and mutual support, building strong partnerships, and ensuring that every voice is heard and valued.',
        image_url: "collaboration.png",
        color: '#A364D9'
    }
];

const cardContainer = document.getElementById('card-container');


cards.forEach(card => {
    const cardElement = document.createElement('div');
    cardElement.className = 'w-full md:w-1/3 p-4';
    cardElement.innerHTML = `
                <div class="relative group items-center max-w-[300px] min-w-[260px]  mx-auto cursor-pointer">
                    <h2 class="text-2xl font-bold text-center mb-2">${card.title}</h2>
                    <div class="relative rounded-lg min-w-[260px] max-w-[300px] hover:border-2"  style="border-color: ${card.color};">
                        <img src="Assets/values/${card.image_url}" alt="${card.title}" class="w-[300px] object-contain rounded-lg">
                        <div class="absolute inset-0 bg-white bg-opacity-90 rounded-lg p-4 px-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <p class="text-lg">${card.description}</p>
                        </div>
                    </div>
                </div>
    `;
    cardContainer.appendChild(cardElement);
});
