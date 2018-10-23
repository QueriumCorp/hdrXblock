/* Javascript for RoverHeaderXBlock. */
function RoverHeaderXBlock(runtime, element) {
    // tag the enclosing .vert element so it doesnt get numbered like questions
    var vert = element.closest(".vert");
    if( vert ){
        vert.classList.add("dont_number");
    }

    showHide( '.hdr_book' );
    showHide( '.hdr_video' );
    showHide( '.hdr_playground' );
    
    function showHide( selector ){
        var url_ele = $(selector, element);
        var url_href = $('a', url_ele).attr('href');
        var src_href = $('img', url_ele).attr('src');
        var x_src_href = $('img', url_ele).attr('x_src');
                
        if( validUrl(url_href) ){
            url_ele.removeClass("hdr_icon_hidden");
            if( validUrl( x_src_href ) ){
                $('img', url_ele).attr('src', x_src_href);
            }else if( selector=='.hdr_book' ){
                $('img', url_ele).attr('src', "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMi4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAxMi41IDE0LjI4NTciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEyLjUgMTQuMjg1NzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6I0ZGN0Y0MDt9DQoJLnN0MXtmaWxsOm5vbmU7fQ0KPC9zdHlsZT4NCjxnPg0KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xMi41LDEwLjA0NDZjMCwwLjIyMzItMC4wODM3LDAuMzk5OS0wLjI1MTEsMC41MzAxYy0wLjA1NTgsMC4yMDQ2LTAuMDgzNywwLjU0ODctMC4wODM3LDEuMDMyNA0KCQljMCwwLjQ4MzYsMC4wMjc5LDAuODI3OCwwLjA4MzcsMS4wMzI0QzEyLjQxNjMsMTIuNzg4MywxMi41LDEyLjk2NSwxMi41LDEzLjE2OTZ2MC40NDY0YzAsMC4xODYtMC4wNjUxLDAuMzQ0MS0wLjE5NTMsMC40NzQzDQoJCXMtMC4yODgzLDAuMTk1My0wLjQ3NDMsMC4xOTUzSDIuNjc4NmMtMC43NDQsMC0xLjM3NjUtMC4yNjA0LTEuODk3My0wLjc4MTJTMCwxMi4zNTEyLDAsMTEuNjA3MVYyLjY3ODYNCgkJYzAtMC43NDQsMC4yNjA0LTEuMzc2NSwwLjc4MTItMS44OTczUzEuOTM0NSwwLDIuNjc4NiwwaDkuMTUxOGMwLjE4NiwwLDAuMzQ0MSwwLjA2NTEsMC40NzQzLDAuMTk1M1MxMi41LDAuNDgzNiwxMi41LDAuNjY5Ng0KCQlWMTAuMDQ0NnogTTEwLjYzMDYsMTIuNWMtMC4wMTg2LTAuMjQxOC0wLjAyNzktMC41Mzk0LTAuMDI3OS0wLjg5MjljMC0wLjM1MzQsMC4wMDkzLTAuNjUxLDAuMDI3OS0wLjg5MjloLTcuOTUyDQoJCWMtMC4yNDE4LDAtMC40NTExLDAuMDg4NC0wLjYyNzgsMC4yNjUxYy0wLjE3NjcsMC4xNzY3LTAuMjY1MSwwLjM4Ni0wLjI2NTEsMC42Mjc4YzAsMC4yNDE4LDAuMDg4NCwwLjQ1MTEsMC4yNjUxLDAuNjI3OA0KCQlTMi40MzY4LDEyLjUsMi42Nzg2LDEyLjVIMTAuNjMwNnogTTMuNTcxNCwzLjczODh2MC41NThjMCwwLjAzNzIsMC4wMTg2LDAuMDc0NCwwLjA1NTgsMC4xMTE2czAuMDc0NCwwLjA1NTgsMC4xMTE2LDAuMDU1OEg5LjY1NA0KCQljMC4wMzcyLDAsMC4wNzQ0LTAuMDE4NiwwLjExMTYtMC4wNTU4czAuMDU1OC0wLjA3NDQsMC4wNTU4LTAuMTExNnYtMC41NThjMC0wLjAzNzItMC4wMTg2LTAuMDc0NC0wLjA1NTgtMC4xMTE2DQoJCVM5LjY5MTIsMy41NzE0LDkuNjU0LDMuNTcxNEgzLjczODhjLTAuMDM3MiwwLTAuMDc0NCwwLjAxODYtMC4xMTE2LDAuMDU1OFMzLjU3MTQsMy43MDE2LDMuNTcxNCwzLjczODh6IE0zLjU3MTQsNS41MjQ2djAuNTU4DQoJCWMwLDAuMDM3MiwwLjAxODYsMC4wNzQ0LDAuMDU1OCwwLjExMTZTMy43MDE2LDYuMjUsMy43Mzg4LDYuMjVIOS42NTRjMC4wMzcyLDAsMC4wNzQ0LTAuMDE4NiwwLjExMTYtMC4wNTU4DQoJCXMwLjA1NTgtMC4wNzQ0LDAuMDU1OC0wLjExMTZ2LTAuNTU4YzAtMC4wMzcyLTAuMDE4Ni0wLjA3NDQtMC4wNTU4LTAuMTExNlM5LjY5MTIsNS4zNTcxLDkuNjU0LDUuMzU3MUgzLjczODgNCgkJYy0wLjAzNzIsMC0wLjA3NDQsMC4wMTg2LTAuMTExNiwwLjA1NThTMy41NzE0LDUuNDg3NCwzLjU3MTQsNS41MjQ2eiIvPg0KPC9nPg0KPC9zdmc+DQo=" );
            }else if( selector=='.hdr_video' ){
                $('img', url_ele).attr('src', "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMi4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTcuOTk5OSAxMS45OTk5IiBoZWlnaHQ9IjEyIiB3aWR0aD0iMTgiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6I0ZGN0Y0MDt9DQoJLnN0MXtmaWxsOm5vbmU7fQ0KPC9zdHlsZT4NCjxnPg0KCTxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iNC41LDguNTYyNSA4Ljk2ODcsNiA0LjUsMy40Njg4IAkiLz4NCgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTcuNTYyMywwLjQzNzVDMTcuMjcwNywwLjE0NTgsMTYuOTE2NiwwLDE2LjQ5OTksMGgtMC4zNzVjLTAuNDE2NywwLTAuNzcwOCwwLjE0NTgtMS4wNjI0LDAuNDM3NQ0KCQlMMTEuOTk5OSwzLjV2LTJjMC0wLjQxNjctMC4xNDU4LTAuNzcwOC0wLjQzNzUtMS4wNjI1UzEwLjkxNjYsMCwxMC40OTk5LDBIMS41QzEuMDgzMywwLDAuNzI5MSwwLjE0NTgsMC40Mzc1LDAuNDM3NQ0KCQlDMC4xNDU4LDAuNzI5MiwwLDEuMDgzNCwwLDEuNVYxMC41YzAsMC40MTY3LDAuMTQ1OCwwLjc3MDgsMC40Mzc1LDEuMDYyNWMwLjI5MTYsMC4yOTE2LDAuNjQ1OCwwLjQzNzUsMS4wNjI0LDAuNDM3NWg4Ljk5OTkNCgkJYzAuNDE2NywwLDAuNzcwOC0wLjE0NTgsMS4wNjI1LTAuNDM3NWMwLjI5MTctMC4yOTE3LDAuNDM3NS0wLjY0NTksMC40Mzc1LTEuMDYyNXYtMmwzLjA2MjUsMy4wNjI1DQoJCWMwLjI5MTYsMC4yOTE2LDAuNjQ1OCwwLjQzNzUsMS4wNjI0LDAuNDM3NWgwLjM3NWMwLjQxNjcsMCwwLjc3MDgtMC4xNDU4LDEuMDYyNC0wLjQzNzUNCgkJYzAuMjkxNy0wLjI5MTcsMC40Mzc1LTAuNjQ1OSwwLjQzNzUtMS4wNjI1VjEuNUMxNy45OTk5LDEuMDgzNCwxNy44NTQsMC43MjkyLDE3LjU2MjMsMC40Mzc1eiBNNC41LDguNTYyNVYzLjQ2ODhMOC45Njg3LDYNCgkJTDQuNSw4LjU2MjV6Ii8+DQo8L2c+DQo8L3N2Zz4NCg==" );
            }else if( selector=='.hdr_playground' ){
                $('img', url_ele).attr('src', "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMi4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAyMi41IDExLjI1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyMi41IDExLjI1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojRkY3RjQwO30NCgkuc3Qxe2ZpbGw6bm9uZTt9DQo8L3N0eWxlPg0KPGc+DQoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTE2Ljg3NSwwYzEuMDA3OCwwLDEuOTQ1MywwLjI1MiwyLjgxMjUsMC43NTU5czEuNTUyNywxLjE4OTUsMi4wNTY2LDIuMDU2NlMyMi41LDQuNjE3MiwyMi41LDUuNjI1DQoJCXMtMC4yNTIsMS45NDUzLTAuNzU1OSwyLjgxMjVzLTEuMTg5NSwxLjU1MjctMi4wNTY2LDIuMDU2NlMxNy44ODI4LDExLjI1LDE2Ljg3NSwxMS4yNWMtMC43NzM0LDAtMS41MDU5LTAuMTQ2NS0yLjE5NzMtMC40Mzk1DQoJCXMtMS4yOTQ5LTAuNzA5LTEuODEwNS0xLjI0OEg5LjYzMjhjLTAuNTE1NiwwLjUzOTEtMS4xMTkxLDAuOTU1MS0xLjgxMDUsMS4yNDhTNi4zOTg0LDExLjI1LDUuNjI1LDExLjI1DQoJCWMtMS4wMDc4LDAtMS45NDUzLTAuMjUyLTIuODEyNS0wLjc1NTlTMS4yNTk4LDkuMzA0NywwLjc1NTksOC40Mzc1UzAsNi42MzI4LDAsNS42MjVzMC4yNTItMS45NDUzLDAuNzU1OS0yLjgxMjUNCgkJczEuMTg5NS0xLjU1MjcsMi4wNTY2LTIuMDU2NlM0LjYxNzIsMCw1LjYyNSwwSDE2Ljg3NXogTTksNi4zMjgxVjQuOTIxOUM5LDQuODA0Nyw4Ljk1OSw0LjcwNTEsOC44NzcsNC42MjNTOC42OTUzLDQuNSw4LjU3ODEsNC41DQoJCUg2Ljc1VjIuNjcxOWMwLTAuMTE3Mi0wLjA0MS0wLjIxNjgtMC4xMjMtMC4yOTg4UzYuNDQ1MywyLjI1LDYuMzI4MSwyLjI1SDQuOTIxOWMtMC4xMTcyLDAtMC4yMTY4LDAuMDQxLTAuMjk4OCwwLjEyMw0KCQlTNC41LDIuNTU0Nyw0LjUsMi42NzE5VjQuNUgyLjY3MTljLTAuMTE3MiwwLTAuMjE2OCwwLjA0MS0wLjI5ODgsMC4xMjNTMi4yNSw0LjgwNDcsMi4yNSw0LjkyMTl2MS40MDYyDQoJCWMwLDAuMTE3MiwwLjA0MSwwLjIxNjgsMC4xMjMsMC4yOTg4UzIuNTU0Nyw2Ljc1LDIuNjcxOSw2Ljc1SDQuNXYxLjgyODFjMCwwLjExNzIsMC4wNDEsMC4yMTY4LDAuMTIzLDAuMjk4OFM0LjgwNDcsOSw0LjkyMTksOQ0KCQloMS40MDYyQzYuNDQ1Myw5LDYuNTQ0OSw4Ljk1OSw2LjYyNyw4Ljg3N1M2Ljc1LDguNjk1Myw2Ljc1LDguNTc4MVY2Ljc1aDEuODI4MWMwLjExNzIsMCwwLjIxNjgtMC4wNDEsMC4yOTg4LTAuMTIzDQoJCVM5LDYuNDQ1Myw5LDYuMzI4MXogTTE1LjQ2ODgsOC43MTg4YzAuNDY4OCwwLDAuODY3Mi0wLjE2NDEsMS4xOTUzLTAuNDkyMlMxNy4xNTYyLDcuNSwxNy4xNTYyLDcuMDMxMg0KCQlzLTAuMTY0MS0wLjg2NzItMC40OTIyLTEuMTk1M3MtMC43MjY2LTAuNDkyMi0xLjE5NTMtMC40OTIycy0wLjg2NzIsMC4xNjQxLTEuMTk1MywwLjQ5MjJzLTAuNDkyMiwwLjcyNjYtMC40OTIyLDEuMTk1Mw0KCQlzMC4xNjQxLDAuODY3MiwwLjQ5MjIsMS4xOTUzUzE1LDguNzE4OCwxNS40Njg4LDguNzE4OHogTTE4LjI4MTIsNS45MDYyYzAuNDY4OCwwLDAuODY3Mi0wLjE2NDEsMS4xOTUzLTAuNDkyMg0KCQlzMC40OTIyLTAuNzI2NiwwLjQ5MjItMS4xOTUzcy0wLjE2NDEtMC44NjcyLTAuNDkyMi0xLjE5NTNTMTguNzUsMi41MzEyLDE4LjI4MTIsMi41MzEycy0wLjg2NzIsMC4xNjQxLTEuMTk1MywwLjQ5MjINCgkJUzE2LjU5MzgsMy43NSwxNi41OTM4LDQuMjE4OHMwLjE2NDEsMC44NjcyLDAuNDkyMiwxLjE5NTNTMTcuODEyNSw1LjkwNjIsMTguMjgxMiw1LjkwNjJ6Ii8+DQo8L2c+DQo8L3N2Zz4NCg==" );
            }
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
