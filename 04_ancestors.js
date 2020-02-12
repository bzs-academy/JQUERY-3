
/*
parent()        - Ancestors
parents()       - Ancestors
parentsUntil()  - Ancestors
children        - Descendants
find            - Descendants

*/

$(document).ready( () => {

    $('#btn1').click( () => {
        $('span').parent().css({'color': 'red', 'border': '2px solid red'});
    })

    $('#btn2').click( () => {
        $('span').parents().css({'color': 'red', 'border': '2px solid red'});
    })

    $('#btn3').click( () => {
        $('span').parentsUntil('div').css({'color': 'red', 'border': '2px solid red'});
    })

    $('#btn4').click( () => {
        //$("div.one").children().css({'color': 'red', 'border': '2px solid red'});
        //$("div.one").children('ul').css({'color': 'red', 'border': '2px solid red'});
        $("div.one").children('p').css({'color': 'red', 'border': '2px solid red'});
    })

    $('#btn5').click( () => {
        //$("div").find('span').css({'color': 'red', 'border': '2px solid red'});
        $("ul").find('span').css({'color': 'red', 'border': '2px solid red'});
    })

})