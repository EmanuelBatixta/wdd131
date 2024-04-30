Myinfo = {
    name: 'Emanuel Jonatas',
    photo: '..//images/myprofile.jpg',
    favoritefoods: ['Pizza','Acaraje','Brazilian barbecue', 'Hamburguers'],
    hobbies: ['Draw','Whatch movies','Run'],
    placeslived: [
        {
            place: "São José dos Campos, SP",
            length: '18 years'
        },
        {
            place: 'Campo Grande, MS',
            length: '7 months'
        },
        {
            place: 'Rondonópolis, MT',
            length: '3 months'
        },
        {
            place: 'Primavera do leste, MT',
            length: '3 months'
        },
        {
            place: 'Cuiabá, MT',
            length: '11 months'
        },
    ],

}

/*
//using forEach
Myinfo.favoritefoods.forEach(function(food) {
    favoritefood = document.createElement('li')
    favoritefood.textContent = food
    document.querySelector("#favorite-foods").appendChild(favoritefood)
});
*/

//using map
Myinfo.favoritefoods.map(function(food){
    favoritefood = document.createElement('li')
    favoritefood.textContent = food
    document.querySelector("#favorite-foods").appendChild(favoritefood)
});


