const mealsDiv = document.querySelector('.meals');

const printMeals = meals => {
    mealsDiv.innerHTML = '';
    meals.map(taom => {
        let box = document.createElement('div')
        box.classList.add('box')
    
        let pic = document.createElement('img')
        pic.classList.add('pic')
        pic.src = taom.rasm
    
        let title = document.createElement('h3')
        title.classList.add('title2')
        title.innerHTML = taom.nom
    
        let span = document.createElement('span')
        span.classList.add('span')
        span.innerHTML = taom.tur
    
        box.appendChild(pic)
        box.appendChild(title)
        box.appendChild(span)
    
        mealsDiv.appendChild(box)
    });
}

printMeals(taomlar)

const categoriesDiv = document.querySelector('.categories');

categoriesDiv.addEventListener('click', e => {
    if(e.target.matches('.category')){
        let type = e.target.dataset.type;

        if(type === 'all'){
            printMeals(taomlar)
        } else {
            const filteredMeals = taomlar.filter(taom => taom.tur === type)
            printMeals(filteredMeals)
        }

        if(document.querySelector('.active')){
            document.querySelector('.active').classList.remove('active')
            e.target.classList.add('active')
        }
    }
})
