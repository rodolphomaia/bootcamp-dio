window.addEventListener('load', () => {
    let minus = document.querySelector('.minus');
    
    minus.addEventListener('click', () => {
        countDown()
    });

    let plus = document.querySelector('.plus');
    
    plus.addEventListener('click', () => {
        countUp()
    });
})

function countDown(){
    let value = Number(document.querySelector('.value').innerHTML)
    
    if(value > -1){
        value -= 1
    }

    document.querySelector('.value').innerHTML = value
    changeColor(value)
}

function countUp(){
    let value = Number(document.querySelector('.value').innerHTML)
    
    if(value < 10){
        value += 1
    }

    document.querySelector('.value').innerHTML = value
    changeColor(value)
}

function changeColor(value){
    if(value < 0){
        document.querySelector('.value').style.color = '#f00';
    } else {
        document.querySelector('.value').style.color = '#000';
    }
}