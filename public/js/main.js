// Carga pagina principal

// Comportamiento de los hipervínculos
$('.intlink').on('click', function(e) {
    e.stopPropagation()
    e.preventDefault()
    c = $(this).attr('href')
    $('#main_content').load(c)

})