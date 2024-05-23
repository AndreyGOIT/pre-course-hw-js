// data
const info = {
    title: 'it-incubator',
    graduatesCount: 2000,
    areYouChampion: true,
    technologies: [
        {title: 'Front'},
        {title: 'Back'},
        {title: 'DevOps'} 
    ]
}

// render
let pageTitleElement = document.createElement('h1');
pageTitleElement.innerText = info.title;
document.body.append(pageTitleElement);

let graduatesCountElement = document.createElement('input');
graduatesCountElement.value = info.graduatesCount;
document.body.append(graduatesCountElement);

let areYouChampionElement = document.createElement('input');
areYouChampionElement.type = 'checkbox';
areYouChampionElement.checked = info.areYouChampion;
document.body.append(areYouChampionElement);

let techElement = document.createElement('select');

let techElement1Option = document.createElement('option');
techElement1Option.append(info.technologies[0].title);

let techElement2Option = document.createElement('option');
techElement2Option.append(info.technologies[1].title);

let techElement3Option = document.createElement('option');
techElement3Option.append(info.technologies[2].title);

techElement.append(techElement1Option, techElement2Option, techElement3Option);

document.body.append(techElement);
