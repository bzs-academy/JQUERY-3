/*
    append() - Inserts content AT THE END OF the selected elements
    prepend() - Inserts content AT THE BEGINNING OF the selected elements

    after() - Inserts content AFTER the selected elements
    before() - Inserts content BEFOREthe selected elements

*/

$(document).ready(function () {

    $('#btn1').click( () => {
        $('p.cls1').append(" - <b>Appended text</b>");
    })

    $('#btn2').click( () => {
        let newElem = "<li><b>Appended List Item</b></li>";
        $('ol').append(newElem);
    })


    $('#btn3').click( () => {
        $('p#id1').prepend("<b>Prepended Text </b> - ");
    })

    $('#btn4').click( () => {
        $('ol').prepend("<li><b>Prepended List Item</b></li>");
    })

    $('#btn5').click( () => {
        let newElem = " isminiz : <input type='text' placeholder='Isminiz' />";
        $('div').before(newElem);
    })

    $('#btn6').click( () => {
        let newElem = " <button onclick='doFunc()'>Send</button>";
        $('div').after(newElem);
    })

});

function doFunc () {
    let inputValue = $('input').val();
    let newElem = `<p>Hosgeldin ${inputValue}</p>`;
    $('div').append(newElem).css({'textAlign':'center', 'lineHeight': '250px'});

}