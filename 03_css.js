
/*
addClass()      - Adds one or more classes to the selected elements
removeClass()   - Removes one or more classes from the selected elements
toggleClass()   - Toggles between adding/removing classes from the selected elements
css()           - Sets or returns the style attribute

*/

$(document).ready( () => {

    $('#btn1').click( () => {

        $('div').addClass('active chnbg bord')
    })

    $('#btn2').click( () => {

        $('div').removeClass('active')
    })

    $('#btn3').click( () => {

        $('div').toggleClass('active')
    })
})