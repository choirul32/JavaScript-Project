const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.key_button');
const display = calculator.querySelector('.display');

keys.addEventListener('click', e => {
    if(e.target.matches('button')){
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNum = display.textContent;
        const previousKeyType = calculator.dataset.previousKeyType;
        if(!action){
            if(displayedNum === '0' || previousKeyType === 'operator'){
                display.textContent = keyContent;
            }else{
                display.textContent = displayedNum + keyContent;
            }
        }
        if(action === 'decimal'){
            display.textContent = displayedNum + '.';
        }
        if(action === 'clear'){
            console.log(action);
        }
        if(action === 'equal'){
            console.log(action);
        }

        if (action === 'plus' || action === 'divide' || action === 'subtract' || action === 'multiply') {
            key.classList.add('is-depressed');
            calculator.dataset.previousKeyType = 'operator';
        }
    }
});