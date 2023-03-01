// Display the saved name and value in page
const recoverProduct = () => {
    // console.log(Object.entries(localStorage)); Its a convertion of object to array
    
        for (const pair of Object.entries(localStorage)) {
            console.log(pair[0]);
            const ul = document.getElementById('ul-container');
            const li = document.createElement('li');
            li.innerText = `
        Product Name=${pair[0]}.
        Product value=${pair[1]}.
        `
            ul.appendChild(li);
        }
    }
    // Take name and value from outside and instant show on webpage.
    
    const updateValue = () => {
        const inputName = document.getElementById('input-name').value;
        const inputvalue = document.getElementById('input-value').value;
    if(inputvalue<0){
        alert('Give a number in input value field')
        return;
    }
        if(!inputName || !inputvalue){
            return;
        }
        console.log(`The key is ${inputName} ,${inputvalue} `);
        localStorage.setItem(inputName, inputvalue)
    
        const ul = document.getElementById('ul-container');
        const li = document.createElement('li');
        li.innerText = `
        Product Name=${inputName}.
        Product value=${inputvalue}.
        `
        ul.appendChild(li);
    }
    recoverProduct();