const task3Element = document.getElementById('task-3');

function alpha(){
    alert('Hello')
};

function beta(name){
    alert(name)
};

alpha();
beta('Patrick')

task3Element.addEventListener('click', alpha);

function merge(string1, string2, string3){
    return string1 + string2 + string3
};
merge('Prince', 'John', 'Elton')
alert(merge('Prince', 'John', 'Elton'))