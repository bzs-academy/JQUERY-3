/*
remove() - Removes THE SELECTED ELEMENT (and its child elements)
empty() - Removes THE CHILD ELEMENTS from the selected element

*/

$(document).ready( () => {

    $('#btn1').click( () => {

        $('#div1').remove();
        $('#div2').before("<p>removed COMPLETELY THE SELECTED ELEMENT DIV-1 </p>")
    })


    $('#btn2').click( () => {

        $('#div2').empty().after("<p>removed COMPLETELY THE CHILDREN OF ELEMENT DIV-2 </p>")
        $('p').css('color', 'red')
    })

   



})