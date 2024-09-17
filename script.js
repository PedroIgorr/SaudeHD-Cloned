//Pricing table functions
let month = document.querySelector('.pricing-toggler .mensal');
let year = document.querySelector('.pricing-toggler .anual');
let monthAmmount = document.querySelectorAll('.dvmes');
let yearAmmount = document.querySelectorAll(['.dvano', '.del-txt']);

year.onclick = () =>{
    year.classList.add('box-active');
    month.classList.remove('box-active');

    monthAmmount.forEach(mo =>{
        mo.style.display = 'none';
    });

    yearAmmount.forEach(yr =>{
        yr.style.display = 'block';
    })
}

month.onclick = () =>{
    year.classList.remove('box-active');
    month.classList.add('box-active');

    monthAmmount.forEach(mo =>{
        mo.style.display = 'block';
    });

    yearAmmount.forEach(yr =>{
        yr.style.display = 'none';
    })
}