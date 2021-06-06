// Carga pagina principal
$('#main_content').load('/dash.html')
// Comportamiento de los hipervínculos

$('.intlink').on('click', function(e) {
    e.stopPropagation()
    e.preventDefault()
    let c = $(this).attr('href')
    $('#main_content').load(c)
})
$('.outlink').on('click', function(e) {
    e.stopPropagation()
    e.preventDefault()
    let c = $(this).attr('href')
    $('#main_content').html(`<iframe id="main_frame" src="${c}" name="myIframe" frameborder="" width="100%" height="100%" allowfullscreen></iframe>`)
})
