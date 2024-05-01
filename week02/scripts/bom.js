const input = document.querySelector('#favchap');
const button = document.querySelector('#add-chapter');
const list = document.querySelector('#list');

button.addEventListener("click", function() {
    if (input.value.trim() !== ''){ //if value is diferent of none... 

        const deleteButton = document.createElement('button');
        const li = document.createElement('li');

        // add the item in screen
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        list.append(li);

        //back to start
        input.value = "";
        input.focus();

        deleteButton.addEventListener("click", function() {
            list.removeChild(li);
            input.focus();
        });

    } else{

        window.alert('Please add a chapter');
        input.focus();
    }
});


