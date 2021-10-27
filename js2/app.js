
$(document).ready(function(){

// const links = $('div#content-wrapper>nav>ul>li');
// console.log(links);

const home = $('#home');
const courses = $('#courses');
const contact = $('#contact');
// console.log(links[0]);
const content_Wrapper_Section = $('#content-wrapper-section');

// console.log(content_Wrapper_Section);

// $('#home').click(function(){//same as below
home.click(function(){
    // $('#content-wrapper-section').hide(); //same as below
    content_Wrapper_Section.hide();
    console.log("it worked");
});
//()=> is an anonymous arrow function
// $('nav').mouseenter(()=>{
//     $('#content-wrapper-section').hide();
// });
// $('nav').mouseleave(()=>{
//     $('#content-wrapper-section').show();
// });
// $('nav').mousedown(()=>{
//     $('#content-wrapper-section').hide();
// });
// $('nav').mouseup(()=>{
//     $('#content-wrapper-section').show();
// });
$('nav').hover(()=>{
    $('#content-wrapper-section').show();
}, ()=> {
    $('#content-wrapper-section').hide();
});




/////////////////////////////decument.ready ends here
});