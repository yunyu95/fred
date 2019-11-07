$(function () {
    $('#bottone').click(function () {
        let txt = $('#testo').val();
        $('#paragrafo').text(txt);
    });
    $('#aum').click(function () {
        let cur = parseInt($('#paragrafo').css('font-size'));
        $('#paragrafo').css('font-size', cur * 2);
    });
    $('#dim').click(function () {
        let cur = parseInt($('#paragrafo').css('font-size'));
        $('#paragrafo').css('font-size', cur / 2);
    });
});