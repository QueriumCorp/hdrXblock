/* Javascript for RoverHeaderXBlock. */
function RoverHeaderXBlock(runtime, element) {
    // Stub notify so xblock doesnt crash in dev
    if( typeof runtime.notify === "undefined" ){
        runtime.notify = function(){ console.info(arguments); }
    }

    var hdr_book_link_valid = false;
    var hdr_book_icon_valid = false;
    var hdr_video_link_valid = false;
    var hdr_video_icon_valid = false;
    var hdr_playground_link_valid = false;
    var hdr_playground_icon_valid = false;

    validateLinks();

    var handlerUrl = runtime.handlerUrl(element, 'save_header');

    $('.save-button', element).click(function(eventObject) {

        if( !( hdr_book_link_valid && hdr_book_icon_valid && hdr_video_link_valid && 
            hdr_video_icon_valid && hdr_playground_link_valid && hdr_playground_icon_valid ) ){
            console.error("invalid links");
            return;
        }

        var data = {

            hdr_html : $('#hdr_html', element).val(),

            hdr_book_link : $('#hdr_book_link', element).val().trim(),
            hdr_book_icon : $('#hdr_book_icon', element).val().trim(),
            hdr_book_help : ( $('#hdr_book_help', element).val() ? $('#hdr_book_help', element).val().trim() : "" ),
    
            hdr_video_link : $('#hdr_video_link', element).val().trim(),
            hdr_video_icon : $('#hdr_video_icon', element).val().trim(),
            hdr_video_help : ( $('#hdr_video_help', element).val() ? $('#hdr_video_help', element).val().trim() : "" ),
    
            hdr_playground_link : $('#hdr_playground_link', element).val().trim(),
            hdr_playground_icon : $('#hdr_playground_icon', element).val().trim(),
            hdr_playground_help : ( $('#hdr_playground_help', element).val() ? $('#hdr_playground_help', element).val().trim() : "" )
        }

        runtime.notify('save', {state:'start'});
        $.ajax({
            type: "POST",
            url: handlerUrl,
            data: JSON.stringify(data),
            success: null
        }).done( function(response){
            console.info('done', response)
            runtime.notify('save', {state:'end'});
            //toggleEditor();
            $('.content_text', element).html(data.hdr_html);

            $('.hdr_book a', element).attr('href', data.hdr_book_link);
            $('.hdr_book a img', element).attr('src', data.hdr_book_icon + '?' + new Date().getTime());

            $('.hdr_video a', element).attr('href', data.hdr_video_link);
            $('.hdr_video a img', element).attr('src', data.hdr_video_icon + '?' + new Date().getTime());

            $('.hdr_playground a', element).attr('href', data.hdr_playground_link);
            $('.hdr_playground a img', element).attr('src', data.hdr_playground_icon + '?' + new Date().getTime());

    

        }).fail( function(response){
            console.error(response)
            alert( "Save Failed. Please contact support.")
            runtime.notify('save', {state:'end'});
            //toggleEditor();
        });
    });

    $('.cancel-button', element).click(function(eventObject) {
        runtime.notify('cancel', {});
        //toggleEditor();
    });

    // EDIT MODE
    var edit_mode = false;
    toggleEditor();

    function toggleEditor(){
        edit_mode = !edit_mode;
        var editor_el = $('#hdr_editing_panel', element);
        var edit_btn = $('.hdr_edit_button', element);
        if( edit_mode ){
            editor_el.removeClass("hdr_editor_hidden");
            edit_btn.addClass("hdr_editor_hidden");
        }else{
            editor_el.addClass("hdr_editor_hidden")
            edit_btn.removeClass("hdr_editor_hidden");
        }
    }

    /*
    $('.hdr_edit_button', element).click(function(eventObject) {
        toggleEditor();
    });
    */

    $('.url-input', element).on('input',function(e){
        validateLinks();
    });

    function validateLinks(){
        hdr_book_link_valid = validUrl( $('#hdr_book_link', element).val() );
        indicateUrlStatus( $('#hdr_book_link', element), hdr_book_link_valid );
        hdr_book_icon_valid = validUrl( $('#hdr_book_icon', element).val() );
        indicateUrlStatus( $('#hdr_book_icon', element), hdr_book_icon_valid );
        showHideIcon( '.hdr_book', hdr_book_link_valid, hdr_book_icon_valid );

        hdr_video_link_valid = validUrl( $('#hdr_video_link', element).val() );
        indicateUrlStatus( $('#hdr_video_link', element), hdr_video_link_valid );        
        hdr_video_icon_valid = validUrl( $('#hdr_video_icon', element).val() );
        indicateUrlStatus( $('#hdr_video_icon', element), hdr_video_icon_valid );
        showHideIcon( '.hdr_video', hdr_video_link_valid, hdr_video_icon_valid );

        hdr_playground_link_valid = validUrl( $('#hdr_playground_link', element).val() );
        indicateUrlStatus( $('#hdr_playground_link', element), hdr_playground_link_valid);        
        hdr_playground_icon_valid = validUrl( $('#hdr_playground_icon', element).val() );
        indicateUrlStatus( $('#hdr_playground_icon', element), hdr_playground_icon_valid);
        showHideIcon( '.hdr_playground', hdr_playground_link_valid, hdr_playground_icon_valid );
    }

    function indicateUrlStatus( el, status ){
        
        console.info( el.parent().parent() );

        if( status ){
            el.removeClass("url-invalid");
        }else{
            el.addClass("url-invalid");
        }
    }

    function showHideIcon( selector, visible, icon ){
        var icon_el = $(selector, element);

        if( visible ){
            icon_el.removeClass("hdr_icon_hidden");
            if( icon ){
                $('img', icon_el).attr('src', icon );
            }
        }else{
            icon_el.addClass("hdr_icon_hidden");
        }
    }


    // from ChristianDavid's accepted answer
    // https://stackoverflow.com/questions/8667070/javascript-regular-expression-to-validate-url
    function validUrl(value) {
        if( typeof value=='string' ){
            value = value.trim();
        }

        if( typeof value=='string' && value.length==0 ){
            return false;
        }else if(  typeof value=='string' ){
            if( /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value) ){
                return value;
            }else{
                return false;
            }
        }else{
            return false;
        }
    }

    // ON PAGE LOAD
    $(function ($) {
        /* Here's where you'd do things on page load. */
    });
}
