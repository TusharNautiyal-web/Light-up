const programs = [
    {
        name: 'Project Phoenix',
        description: 'Project Phoenix is a one-year program that incorporates social-emotional learning, trauma-informed therapy, safety sessions and parent sensitisation skills to build emotional resilience and vital skills to break the cycle of intergenerational trauma.',
        image: 'Assets/Projects/phoenix.JPG',
        link: '/Programs/project-phoenix'
    },
    {
        name: 'Rishta Khud Se',
        description: 'Rishta Khud Se is a comprehensive SEL intervention is a form of a three year continued support through Social and Emotional Learning workshops with children, capacity building sessions for teachers and awareness sessions with parents that aims to bring a positive shift in their emotional well-being and mental health.',
        image: 'Assets/Projects/Rishtakhudse.JPG',
        link: '/Programs/rishta-khud-se'
    },
    {
        name: 'Light Up Academy',
        description: 'Innovative learning and development and advocacy interventions to drive capacity building and public engagement with young adults and professionals to understand the role of preventive and promotive mental health from an intersectional lens to address stigma, social inequities, and foster integrated problem-solving approaches and create a more equitable world.',
        image: 'Assets/Projects/lightupacademy.JPG',
        link: '/Programs/light-up-academy'
    },
    {
        name: 'Wings of Azadi',
        description: 'Wings of Azadi is a scholarship initiative that empowers youth (trauma survivors from sex workers community, child care homes and high risk urban slums) with opportunities to complete their education and access to foundational, skill development resources and sustainable livelihood options to overcome economic deprivation.',
        image: 'Assets/Projects/wingsofazadi.jpg',
        link: '/Programs/wings-of-azadi'
    },
    {
        name: 'Covid-19 Relief Work',
        description: 'An initiative to support the communities in the form of relief kits inclusive of food, healthcare and hygiene needs , bridging the gap to provide access to social-security schemes and covid SEL kits to last mile parts of India.',
        image: 'Assets/Projects/Reliefwork.jpg',
        link: '/Programs/covid19-relief-work'
    }
];

const programList = document.getElementById('programList');
const programName = document.getElementById('programName');
const programDescription = document.getElementById('programDescription');
const programImage = document.getElementById('programImage');

function createProgramList() {
    programs.forEach((program, index) => {
        const div = document.createElement('div');
        div.className = `program-item p-4 rounded-lg cursor-pointer ${index === 0 ? 'active' : ''}`;
        div.innerHTML = `
            <div class="flex justify-between items-center">
                <span>${program.name}</span>
                <img src="Assets/Forward Button.png" class="forward-button" alt="Forward">
            </div>
        `;
        div.addEventListener('click', () => selectProgram(program, div));
        programList.appendChild(div);
    });
}

function selectProgram(program, element) {
    document.querySelectorAll('.program-item').forEach(item => {
        item.classList.remove('active');
        item.querySelector('.forward-button').src = 'Assets/Forward Button.png';
    });
    element.classList.add('active');
    element.querySelector('.forward-button').src = 'Assets/Diagonal Button.png';
    
    programName.textContent = program.name;
    programDescription.textContent = program.description;
    programImage.src = program.image;
    programImage.alt = program.name;
}

createProgramList();
selectProgram(programs[0], document.querySelector('.program-item'));