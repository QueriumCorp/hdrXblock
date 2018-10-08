/* Javascript for RoverHeaderXBlock. */
function RoverHeaderXBlock(runtime, element) {

    showHide( '.hdr_book' );
    showHide( '.hdr_video' );
    showHide( '.hdr_playground' );
    
    function showHide( selector ){
        var url_ele = $(selector, element);
        var url_href = $('a', url_ele).attr('href');
        var icon_href = $('img', url_ele).attr('src');
                
        if( validUrl(url_href) && validUrl(icon_href) ){
            url_ele.removeClass("hdr_icon_hidden");
        }else{
            url_ele.addClass("hdr_icon_hidden");
        }
    }

    // from ChristianDavid's accepted answer
    // https://stackoverflow.com/questions/8667070/javascript-regular-expression-to-validate-url
    function validUrl(value) {
        return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
    }

    $(function ($) {
        /* Here's where you'd do things on page load. */
    });
}
