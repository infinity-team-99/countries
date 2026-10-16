const dark = document.getElementById('dark');
const inp = document.getElementById('inp');
const setka = document.getElementById('setka');


let i = 0;
let allcountries = [];


fetch(`https://cdn.jsdelivr.net/npm/world-countries@5.1.0/countries.json`)
    .then(res => res.json())
    .then(countries => {
        allcountries = countries;
        displayCountries(allcountries);
    })
    .catch(error => console.error('Error'));

function displayCountries(countries) {
    const container = document.getElementById('countries');
    container.innerHTML = countries.map(card => `
      
<div class="card">
     <img src="https://flagcdn.com/${card.cca2.toLowerCase()}.svg" alt="Flag of ${card.name.common}">
<h3>${card.name.common}</h3>
</div>
  `).join("");
}
    
if (inp) {
    inp.addEventListener('input', (e1) => {
        const t1 = e1.target.value.toLowerCase().trim();

        const toza = allcountries.filter(nimadr =>
            (nimadr.name.common && nimadr.name.common.toLowerCase().includes(t1))
        );

        displayCountries(toza);
    });
}


dark.addEventListener('click', () => {
    i++;

    if (i % 2 == 0) {
        document.head.innerHTML = `
   <style>

*{
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
}

input{
    margin-top:30px ;
    background-color: #263440;
    border: none;
    border-radius: 10px;
        padding: 10px 20px ;
        width: 300px;

}
input::placeholder{
color: white;
}

body{
    background-color: #1a242c;
}
header{
    background-color: #202C36;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
}
.container{
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    align-items: center;
    max-width: 100%;
    width: 80%;
    flex-wrap: wrap;
}
.card{
    background-color: #202C36;
    border-radius: 5px;
    display: flex;
    height: 250px;
    width: 264px;
    justify-content: start;
    align-items: center;
    gap: 30px;
    flex-direction: column;
    margin: 20px 0px ;
}
h3{
    text-align: center;
}
.card img{
    border-radius: 5px;
    width: 264px;
    object-fit: cover;
        height: 150px;

}
button{
    background-color: #3c5366;
    padding: 10px 20px ;
    border: none;
    border-radius: 10px;
    cursor: pointer;
}
    
select{
    background-color: #3c5366;
    padding: 10px 20px ;
    border: none;
    border-radius: 10px;
    cursor: pointer;
}
.option{
    background-color: #3c5366;
    padding: 10px 20px ;
    border: none;
    border-radius: 10px;
    cursor: pointer;
}
    </style>
   `}
    else {
        document.head.innerHTML = `
   <style>
*{
    color: black;
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
}

input{
    margin-top:30px ;
    background-color: #e9e8e8;
    border: none;
    border-radius: 10px;
        padding: 10px 20px ;
        width: 300px;
        

}
input::placeholder{
color: black;
}

body{
background-color: white;
}
header{
    background-color: #f1f1f1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
}
.container{
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    align-items: center;
    max-width: 100%;
    width: 80%;
    flex-wrap: wrap;
}
.card{
    background-color: #e4e4e4;
    border-radius: 5px;
    display: flex;
    height: 250px;
    width: 264px;
    justify-content: start;
    align-items: center;
    gap: 30px;
    flex-direction: column;
    margin:20px 0px;
}
.card img{
    border-radius: 5px;
    width: 264px;
    object-fit: cover;
    height: 150px;

}
button{
    background-color: #ffff;
    padding: 10px 20px ;
    border: none;
    border-radius: 10px;
    cursor: pointer;
}

select{
    background-color: #f1f1f1;
    padding: 10px 20px ;
    border: none;
    border-radius: 10px;
    cursor: pointer;
}
.option{
    background-color: #f1f1f1;
    padding: 10px 20px ;
    border: none;
    border-radius: 10px;
    cursor: pointer;
}
</style>


   `}


})
if (setka) {

    setka.addEventListener('change', (a1) => {
        const x1 = a1.target.value;

        if (x1 === "all" || x1 === "") {

            displayCountries(allcountries);
        }
        else {

            const isIndependent = x1 === "true";

            const xren = allcountries.filter(krisa => krisa.independent === isIndependent);
            displayCountries(xren);

        }
    });
}



console.log(i)

// independent

































































































































































































