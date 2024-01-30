let select = document.querySelector("select");
let filter = document.querySelector('.filter');
let reset = document.querySelector('.reset');
let input = document.querySelector('input');
let search = document.querySelector('.find');
let section1 = document.querySelector('.section1');

let section = document.querySelector('.section2');
const nameUrlMap = {};
const allData = [];



// onload 

window.onload = async () => {
    section.innerHTML = '';
    await fetchData();

    await storeAllPokemon(allData);

    setAllData();

}





// storing all data 

async function fetchData() {

    for (let i = 1; i <= 151; i++) {
        const allPokData = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const datas = await allPokData.json();

        let name = datas.name;
        let pokImg = datas.sprites.front_default;

        let type = datas.types[0].type.name;

        let ab1 = datas.abilities[0].ability.name;
        // console.log(ab1);
        // let ab2 = datas.abilities[1].ability.name;
        allData.push({ name: name, pokImg: pokImg, pokType: type, Abilities: ab1 })
    }

}




// storing all types data 

async function storeAllPokemon(allData) {

    let fetchdata = await fetch('https://pokeapi.co/api/v2/type/')
    let data = await fetchdata.json();
    // console.log(data.results);

    data.results.forEach((item) => {
        let itemName = item.name;
        let itemURL = item.url;
        let option = document.createElement('option');
        option.innerHTML = item.name;
        option.setAttribute('value', itemName);
        option.setAttribute('data-url', itemURL)
        select.append(option)
        nameUrlMap[itemName] = itemURL;
    })


}




// after loading website all data will shows 

function setAllData() {
    section.innerHTML = ''
    count = 1;
    for (let i = 0; i < allData.length; i++) {
        let item = allData[i];
        console.log(item);
        let cardMain = document.createElement('div');
        let card = document.createElement('div');
        let backcard = document.createElement('div');
        let type = document.createElement('span');
        let countDiv = document.createElement('div');


        cardMain.classList.add('cardmain');
        card.classList.add('card');
        countDiv.classList.add('countdiv');
        backcard.classList.add('backcard');
        type.classList.add('span');

        type.innerHTML = item.pokType;

        let img = document.createElement('img');
        img.setAttribute('src', item.pokImg);
        img.style.marginTop = '2rem';

        countDiv.innerHTML = `#${count}`;

        let p = document.createElement('p');
        p.innerHTML = item.name;

        let div = document.createElement('div');
        div.classList.add('backdiv');

        let para = document.createElement('p');
        para.innerHTML = `Abilities: `;
        let para2 = document.createElement('p');
        para2.innerHTML = `${item.Abilities}`

        div.append(para, para2)
        card.append(countDiv, img, p, type);
        backcard.append(div)
        cardMain.append(card, backcard);

        section.append(cardMain)

        count++;

    }
}



// after clicking filter 

filter.addEventListener('click', fetchPokemon);

function fetchPokemon() {

    section.innerHTML = '';

    const selectedType = document.querySelector('select').value;
    console.log(selectedType);
    let count = 1;

    for (let i = 0; i < allData.length; i++) {

        let item = allData[i];

        if (selectedType == item.pokType) {
            console.log('Ok');
            console.log(item.pokType);
            console.log(selectedType);

            let cardMain = document.createElement('div');
        let card = document.createElement('div');
        let backcard = document.createElement('div');
        let type = document.createElement('span');
        let countDiv = document.createElement('div');


        cardMain.classList.add('cardmain');
        card.classList.add('card');
        countDiv.classList.add('countdiv');
        backcard.classList.add('backcard');
        type.classList.add('span');

        type.innerHTML = item.pokType;

        let img = document.createElement('img');
        img.setAttribute('src', item.pokImg);
        img.style.marginTop = '2rem';

        countDiv.innerHTML = `#${count}`;

        let p = document.createElement('p');
        p.innerHTML = item.name;

        let div = document.createElement('div');
        div.classList.add('backdiv');

        let para = document.createElement('p');
        para.innerHTML = `Abilities: `;
        let para2 = document.createElement('p');
        para2.innerHTML = `${item.Abilities}`

        div.append(para, para2)
        card.append(countDiv, img, p, type);
        backcard.append(div)
        cardMain.append(card, backcard);

        section.append(cardMain)

        count++;
        }
    }

    if (section.innerHTML == '') {
        let p = document.createElement('p');
        p.innerHTML = 'Opps, this type has not found!!!!!';
        p.innerHTML = 'Opps, this type has not found!!!!!';
        p.style.display = 'block';
        p.style.width = '100%';
        p.style.margin = '1rem';
        p.style.textAlign = 'center'
        p.style.fontSize = '2rem';
        let pp = document.createElement('p');
        pp.style.width = '100%';
        pp.style.textAlign = 'center'
        pp.style.fontSize = '2rem';
        pp.innerHTML = 'You can try another types';
        section.append(p, pp);
    }

}







// by using searching option 

search.addEventListener('click', searchPok);

document.addEventListener('keyup', (key) => {
    if(key.code == 'Enter'){
        searchPok();
    }
})

function searchPok(){

    section.innerHTML = '';

    let query = input.value;
    console.log(query);
    let count = 1;

    for (let i = 0; i < allData.length; i++) {

        let item = allData[i];

        if (query == item.pokType || query == item.name) {
            console.log('Ok');
            console.log(item.pokType);

            let cardMain = document.createElement('div');
        let card = document.createElement('div');
        let backcard = document.createElement('div');
        let type = document.createElement('span');
        let countDiv = document.createElement('div');


        cardMain.classList.add('cardmain');
        card.classList.add('card');
        countDiv.classList.add('countdiv');
        backcard.classList.add('backcard');
        type.classList.add('span');

        type.innerHTML = item.pokType;

        let img = document.createElement('img');
        img.setAttribute('src', item.pokImg);
        img.style.marginTop = '2rem';

        countDiv.innerHTML = `#${count}`;

        let p = document.createElement('p');
        p.innerHTML = item.name;

        let div = document.createElement('div');
        div.classList.add('backdiv');

        let para = document.createElement('p');
        para.innerHTML = `Abilities: `;
        let para2 = document.createElement('p');
        para2.innerHTML = `${item.Abilities}`

        div.append(para, para2)
        card.append(countDiv, img, p, type);
        backcard.append(div)
        cardMain.append(card, backcard);

        section.append(cardMain)

        count++;
        }
    }

    if (section.innerHTML == '') {
        let p = document.createElement('p');
        p.innerHTML = 'Opps, this type has not found!!!!!';
        p.style.display = 'block';
        p.style.width = '100%';
        p.style.margin = '1rem';
        p.style.textAlign = 'center'
        p.style.fontSize = '2rem';
        let pp = document.createElement('p');
        pp.style.width = '100%';
        pp.style.textAlign = 'center'
        pp.style.fontSize = '2rem';

        pp.innerHTML = 'You can try another types';
        section.append(p, pp);
    }


    input.value = '';

}






// reseting the selected value 

reset.addEventListener('click', setAllData)