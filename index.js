// 1st step - Movement animation
 
// I change document.querySelector $ sign para mapalitan ng jquery ang vanilla js para pamaiksi ang code at madaling gawin at tandaan.
const card = $('.card');
const container = $('.container');
 
 
// same here i change addEventlistener I used "on" para sa jquery at para din mapaiksi ang code at para madaling matandaan at maintindihan.
 
container.on('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20; //rotating the element into x axis
    let yAxis = (window.innerWidth / 2 - e.pageY) / 20; //rotating the element into y axis
    card.css('transform', `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`);
});
 
// 4th step - Adding animation in
container.mouseenter(function(e) {
    card.css('transform', 'none');
 
    // gamit ang $ sign of jquery hindi mo na na kailangan tawagin ang classes para mag animate pwede ng idirect
 
    $('.photo img').css('transform', 'translateZ(50px)');
    $('.title').css('transform', 'translateZ(50px)');
    $('.social').css('transform', 'translateZ(50px)');
    $('.info h4').css('transform', 'translateZ(50px)');
    $('.profile').css('transform', 'translateZ(50px)');
  });
 
// 3rd step - Removing animation
 
// i change the "addEventListener" into "on" using jquery
 
container.on('mouseleave', e => {
    card.css('transform', "all 0.5s ease");
    card.css('transform', `rotateY(0deg) rotateX(0deg)`);
});