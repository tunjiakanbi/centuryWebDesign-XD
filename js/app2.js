$(document).ready(function () {
    /////////////////// jquery starts here
    const btn1 = $("#button-1");
    const btn2 = $("#button-2");
    const btn3 = $("#button-3");

    const para1 = $("#para1");
    const para2 = $("#para2");
    const para3 = $("#para3");
    const formVal = $("#form-val");
    const someText = "Here is Some Text";
    $(btn1).click(() => {
        // $(para2).animate({right: '2em'});
        $(para2).hide();
        // $(para3).animate({right: '2em'});
        $(para3).hide();
        $(para1).slideToggle("fast");
        $(para1).animate({
            left: "2em",
            opacity: 1,
        });
    });
    $(btn2).click(() => {
        // $(para1).animate({right: '2em'});
        $(para1).hide();
        // $(para3).animate({right: '2em'});
        $(para3).hide();
        $(para2).slideToggle("fast");
        $(para2).animate({
            left: "2em",
            opacity: 1,
        });
    });
    // $(btn3).click(() => {
    //   // $(para1).animate({right: '2em'});
    //   $(para1).hide();
    //   // $(para2).animate({right: '2em'});
    //   $(para2).hide();
    //   $(para3).slideToggle("fast", () => {
    //     $(para3).animate(
    //       {
    //         left: "2em",
    //         opacity: 1,
    //       },
    //       "1s",
    //       () => {
    //         $(para3).animate({ width: "+=220px" });
    //       }
    //     );
    //   });
    // });
    $(btn3).click(() => {

        $(para1).hide();
        $(para2).hide();
        $(para3).slideToggle("fast")
            .animate({
                left: "2em",
                opacity: 1
            }, '1s')
            .animate({
                width: "+=220px"
            })
    });

    // let myAnimation = function(x, y, z) {
    //     x.hide();
    //     // $(para2).animate({right: '2em'});
    //     y.hide();
    //     z.slideToggle('fast');
    //     z.animate({
    //         left: '2em',
    //         opacity: 1
    //     });
    // }
    // $(btn3).click({
    //     myAnimation(para1, para2, para3);
    // })


    const span1 = $('#span1');
    const span2 = $('#span2');
    // console.log(span1);
    span1.text('Page One');
    span2.html('<b>Page Two</b>' + ' &copy');

    let fname = $('#fname');
    let lname = $('#lname');
    let email = $('#email');
    let phone = $('#phone');
    let mySubmit = $('#mySubmit');

//    mySubmit.click(()=> {
   mySubmit.click((e)=> {
       e.preventDefault()
       let f_name = fname.val();
       let l_name = lname.val();
       let _email = email.val();
       let _phone = phone.val();
       //alert(
            //'First Name: '+ f_name + ', ' //+
            // 'Last Name: '+l_name + ', '+ 
            // 'Email: '+_email +', ' +
            // 'Phone: ' +_phone
           // );

        //    formVal.innerHTML( `
        //     <div>${f_name}</div>
        //     <div>${l_name}</div>
        //     <div>${_email}</div>
        //     <div>${_phone}</div>
        //    `);
            const res = document.getElementById('form-val');
            res.innerHTML = `
                <div>${f_name}</div>
                <div>${l_name}</div>
                <div>${_email}</div>
                <div>${_phone}</div>
               `

        //    formVal.html('h1').text(f_name);
        //    formVal.html('h1').text(l_name);
        //    formVal.html('h1').text(_email);
        //    formVal.html('h1').text(_phone);
    //    formVal.text(
    //       '<b>' + f_name + '</b><br>' 
    //        + '<b>' + l_name + '</b><br>' 
    //        + '<b>' + _email + '</b><br>' 
    //        + '<b>' + _phone + '</b><br>' 
    //       );
        
         //    + '<b>' + l_name + '</b><br>' 
         //    + '<b>' + _email + '</b><br>' 
         //    + '<b>' + _phone + '</b><br>' 
        //  alert(f_name);
    // formVal.append(f_name);
    // formVal.text(f_name);
       
   })


// formVal.prepend(someText);
const demo4P = $('#demo4p');
const btn4 = $('.demo4 button');

btn4.click(()=>{
    demo4P.toggleClass('blue')
        .toggleClass('demo4p')
    
})

    /////////////////////////////document.ready ends here
});