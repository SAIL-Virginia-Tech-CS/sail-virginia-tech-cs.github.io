// add toggle functionality to abstract and bibtex buttons
$(document).ready(function() {
$('a.abstract').click(function() {
    console.log("clicked");
    $(this).parent().parent().find(".abstract.bib-hidden").toggleClass('open');
    $(this).parent().parent().find(".bibtex.bib-hidden.open").toggleClass('open');
});
$('a.bibtex').click(function() {
    $(this).parent().parent().find(".bibtex.bib-hidden").toggleClass('open');
    $(this).parent().parent().find(".abstract.bib-hidden.open").toggleClass('open');
});
$('a').removeClass('waves-effect waves-light');
});