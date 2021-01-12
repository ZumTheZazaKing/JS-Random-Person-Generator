let image = document.getElementById('image');

let nname = document.getElementById('name');

let llocation = document.getElementById('location');

let phone = document.getElementById('phone');

let email = document.getElementById('email');

let pictures = ['person1.jpeg','person2.jpeg','person3.jpeg'];

let names = ['Johnny Joestar', 'Jeff Geek','Nicolas Bothersome'];

let locations = ['New York, Europe', 'Palmerston North, New Zealand', 'Kyoto, Japan'];

let phoneNumbers = ['+60-142069696', '+01-16666666','+14-13423896'];

let emails = ['jojolion@gmail.com','jeffygeeky@gmail.com','nikkybothe@gmailcom'];




function generateRandomPerson(){

    let personPicker = Math.floor(Math.random()*Math.floor(names.length));

    image.src = pictures[personPicker];

    nname.innerHTML = names[personPicker];

    llocation.innerHTML = locations[personPicker];

    phone.innerHTML = phoneNumbers[personPicker];

    email.innerHTML = emails[personPicker];

}