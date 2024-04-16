// 1st step - Movement animation to happen
 
// I change document.querySelector $ sign para mapalitan ng jquery ang vanilla js para pamaiksi and code at para mag run.
const card = $('.card');
const container = $('.container');
 
 
// same here i change addEventlistener I used "on" para sa jquery at para din mapaiksi and code at para madaling matandaan at maintindihan.
 
container.on('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20; //rotating the element into x axis
    let yAxis = (window.innerWidth / 2 - e.pageY) / 20; //rotating the element into y axis
    card.css('transform', `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`);
});
 
// 4th step - Adding animation in
container.mouseenter(function(e) {
    card.css('transform', 'none');
 
    // Popout animation for all items (consider using a class for reusability)
 
    // using the $ sign of jquery you dont need to call the classes you want to animate or change
    // you can call them directly using the $ sign without declaring  variables first
    // so i didn't use the 5th step
 
    $('.photo img').css('transform', 'translateZ(50px)');
    $('.title').css('transform', 'translateZ(50px)');
    $('.social').css('transform', 'translateZ(50px)');
    $('.info h4').css('transform', 'translateZ(50px)');
    $('.profile').css('transform', 'translateZ(50px)');
  });
 
// 3rd step - Removing animation in
 
// i change the "addEventListener" into "on" using jquery
 
container.on('mouseleave', e => {
    card.css('transform', "all 0.5s ease");
    card.css('transform', `rotateY(0deg) rotateX(0deg)`);
});