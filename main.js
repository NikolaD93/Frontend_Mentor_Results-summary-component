const dataContainer = document.querySelector('.data-container');

const data = [
    {
        "category": "Reaction",
        "score": 80,
        "icon": "./assets/images/icon-reaction.svg",
        "background": "#fff6f6",
        "textColor": "#ff5555",
    },
    {
        "category": "Memory",
        "score": 92,
        "icon": "./assets/images/icon-memory.svg",
        "background": "#fffbf4",
        "textColor": "#FFB21E",
    },
    {
        "category": "Verbal",
        "score": 61,
        "icon": "./assets/images/icon-verbal.svg",
        "background": "#f2fcf9",
        "textColor": "#00BB8F",
    },
    {
        "category": "Visual",
        "score": 72,
        "icon": "./assets/images/icon-visual.svg",
        "background": "#f3f4fd",
        "textColor": "#1125D6",
    }
];

data.forEach((item, id) => {
    dataContainer.innerHTML += `<div class="wrapper" style="background:${item.background}">
    <div class="left">
    <img src="${item.icon}"/>
    <p class="text-category" style="color:${item.textColor}">${item.category}</p>
    </div>
    <div class="right">
    <p class="text-score">${item.score}<span>/100</span></p>
    </div>
    </div>`
})

