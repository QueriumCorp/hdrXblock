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
                $('img', url_ele).attr('src', "data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0NCjxzdmcgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCAyMSAyMSIgaGVpZ2h0PSIxMDAlIiB3aWR0aD0iMTAwJSIgdmVyc2lvbj0iMS4xIiB5PSIwcHgiIHg9IjBweCIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIj48bWV0YWRhdGE+PHJkZjpSREY+PGNjOldvcmsgcmRmOmFib3V0PSIiPjxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PjxkYzp0eXBlIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiLz48ZGM6dGl0bGUvPjwvY2M6V29yaz48L3JkZjpSREY+PC9tZXRhZGF0YT4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0MHtmaWxsOiNGRkJGM0I7fQ0KCS5zdDF7ZmlsbDojNzNBOTRFO30NCgkuc3Qye2ZpbGw6I0ZGRkZGRjt9DQoJLnN0M3tmaWxsOiM1NjU3NTk7fQ0KCS5zdDR7ZmlsbDojMDBDMURFO30NCjwvc3R5bGU+DQo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMS44NjQ1LC0xLjcxNzMwMDQpIj4NCgk8Y2lyY2xlIGQ9Im0gMjIuMzY0NSwxMi4yMTczIGMgMCw1LjUyMjg0OCAtNC40NzcxNTIsMTAgLTEwLDEwIC01LjUyMjg0NzUsMCAtMTAsLTQuNDc3MTUyIC0xMCwtMTAgMCwtNS41MjI4NDcxIDQuNDc3MTUyNSwtOS45OTk5OTk2IDEwLC05Ljk5OTk5OTYgNS41MjI4NDgsMCAxMCw0LjQ3NzE1MjUgMTAsOS45OTk5OTk2IHoiIGN4PSIxMi40IiBjeT0iMTIuMiIgcj0iMTAiIGNsYXNzPSJzdDAiIGZpbGw9IiNmZmJmM2IiLz4NCjwvZz4NCjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xLjg2NDUsLTEuNzE3MzAwNCkiPg0KCTxwYXRoIGZpbGw9IiNGRkYiIGNsYXNzPSJzdDIiIGQ9Ik0xNi4yLDE4aC03LjY5Yy0wLjQyMiwwLTAuNzY0LTAuMzQyLTAuNzY0LTAuNzY0di05Ljk2YzAtMC40MjIsMC4zNDItMC43NjQsMC43NjQtMC43NjRoNy43YzAuNDIyLDAsMC43NjQsMC4zNDIsMC43NjQsMC43NjR2OS45NWMtMC4wMDAxLDAuNDIyLTAuMzQyLDAuNzY0LTAuNzY1LDAuNzY0eiIvPg0KCQk8cGF0aCBmaWxsPSIjZmZiZjNiIiBjbGFzcz0ic3QwIiBkPSJtMTYuMSwxMS40YzAsMC4wNDg3LTAuMDExMywwLjA4ODUtMC4wMzQyLDAuMTE5LTAuMDIyNywwLjAzMTYtMC4wNTE4LDAuMDQ2OC0wLjA4NzIsMC4wNDY4aC0xLjk0Yy0wLjAzNTYsMC0wLjA2NDgtMC4wMTUyLTAuMDg3NC0wLjA0NjgtMC4wMjI5LTAuMDMxLTAuMDM0Mi0wLjA3MDgtMC4wMzQyLTAuMTE5di0wLjQxNWMwLTAuMDQ4NywwLjAxMTMtMC4wODg1LDAuMDM0Mi0wLjExOSwwLjAyMjctMC4wMzE2LDAuMDUxOC0wLjA0NjgsMC4wODc0LTAuMDQ2OGgxLjk0YzAuMDM1NCwwLDAuMDY0NSwwLjAxNTIsMC4wODcyLDAuMDQ2OCwwLjAyMjksMC4wMzEsMC4wMzQyLDAuMDcwOCwwLjAzNDIsMC4xMTl2MC40MTV6bS03LjU1LDEuODJjMCwwLjA0ODcsMC4wMjUyLDAuMDg4NSwwLjA3NjIsMC4xMiwwLjA1MDQsMC4wMzE2LDAuMTE1LDAuMDQ2OCwwLjE5NSwwLjA0NjhoNy4wM2MwLjA3OTMsMCwwLjE0NC0wLjAxNTIsMC4xOTUtMC4wNDY4LDAuMDUxLTAuMDMxLDAuMDc2Mi0wLjA3MDgsMC4wNzYyLTAuMTJ2LTAuNDE1YzAtMC4wNDg3LTAuMDI1Mi0wLjA4ODUtMC4wNzYyLTAuMTE5LTAuMDUwNC0wLjAzMTYtMC4xMTUtMC4wNDY4LTAuMTk1LTAuMDQ2OGgtNy4wNGMtMC4wNzkzLDAtMC4xNDQsMC4wMTUyLTAuMTk1LDAuMDQ2OC0wLjA1MSwwLjAzMS0wLjA3NjIsMC4wNzA4LTAuMDc2MiwwLjExOXYwLjQxNXptMC4yNCwyLjgxYy0wLjA3MDQsMC0wLjEyOCwwLjAxNTItMC4xNzMsMC4wNDY4LTAuMDQ1MywwLjAzMS0wLjA2NzcsMC4wNzA4LTAuMDY3NywwLjExOXYwLjQxNWMwLDAuMDQ4NywwLjAyMjQsMC4wODg1LDAuMDY3NywwLjExOSwwLjA0NDgsMC4wMzE2LDAuMTAyLDAuMDQ2OCwwLjE3MywwLjA0NjhoMy44NGMwLjA2OTksMCwwLjEyOC0wLjAxNTIsMC4xNzItMC4wNDY4LDAuMDQ1My0wLjAzMSwwLjA2NzctMC4wNzA4LDAuMDY3Ny0wLjExOXYtMC40MTVjMC0wLjA0ODctMC4wMjI0LTAuMDg4NS0wLjA2NzctMC4xMTktMC4wNDQ4LTAuMDMxNi0wLjEwMi0wLjA0NjgtMC4xNzItMC4wNDY4aC0zLjc3em03LjA2LTFjMC4wNzkzLDAsMC4xNDQtMC4wMTUyLDAuMTk1LTAuMDQ2OCwwLjA1MS0wLjAzMSwwLjA3NjItMC4wNzA4LDAuMDc2Mi0wLjExOXYtMC40MTVjMC0wLjA0ODctMC4wMjUyLTAuMDg4NS0wLjA3NjItMC4xMTktMC4wNTA0LTAuMDMxNi0wLjExNS0wLjA0NjgtMC4xOTUtMC4wNDY4aC02Ljk0Yy0wLjA3OTMsMC0wLjE0NCwwLjAxNTItMC4xOTUsMC4wNDY4LTAuMDUxLDAuMDMxLTAuMDc2MiwwLjA3MDgtMC4wNzYyLDAuMTE5djAuNDE1YzAsMC4wNDg3LDAuMDI1MiwwLjA4ODUsMC4wNzYyLDAuMTE5LDAuMDUwNCwwLjAzMTYsMC4xMTUsMC4wNDY4LDAuMTk1LDAuMDQ2OGg3LjAzeiIvPg0KCTxwYXRoIGZpbGw9IiNmZmJmM2IiIGNsYXNzPSJzdDAiIGQ9Ik0xMi41LDExLjZoLTMuNTdjLTAuMDk3OCwwLTAuMTc3LTAuMDc5My0wLjE3Ny0wLjE3N3YtMy42MWMwLTAuMTM4LDAuMTEyLTAuMjUsMC4yNS0wLjI1aDMuNDZjMC4xMzgsMCwwLjI1LDAuMTEyLDAuMjUsMC4yNXYzLjUzYzAsMC4xMzgtMC4xMTIsMC4yNS0wLjI1LDAuMjV6Ii8+DQo8L2c+DQo8L3N2Zz4NDQo=" );
            }else if( selector=='.hdr_video' ){
                $('img', url_ele).attr('src', "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciDQogaGVpZ2h0PSIxMDAlIiB3aWR0aD0iMTAwJSIgdmVyc2lvbj0iMS4xIiB5PSIwcHgiIHg9IjBweCINCiB2aWV3Qm94PSIwIDAgMjEgMjEiPg0KCTxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJCS5oZHJfdmlkX2ljb24gew0KCQkJZmlsbDogIzc3YWY0MjsNCgkJfQ0KDQoJCS5zdDEgew0KCQkJZmlsbDogIzczQTk0RTsNCgkJfQ0KDQoJCS5zdDIgew0KCQkJZmlsbDogI0ZGRkZGRjsNCgkJfQ0KDQoJCS5zdDMgew0KCQkJZmlsbDogIzU2NTc1OTsNCgkJfQ0KDQoJCS5zdDQgew0KCQkJZmlsbDogIzAwQzFERTsNCgkJfQ0KCTwvc3R5bGU+DQoJPGNpcmNsZSB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMiwtMikiIGN5PSIxMi41IiBjeD0iMTIuNSIgcj0iMTAiIGNsYXNzPSJoZHJfdmlkX2ljb24iIC8+DQoJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIsLTIpIj4NCgkJPHBhdGggZD0ibTE3LjksMTEuNWMwLjI1LDAuMTQxLDAuNDE4LDAuMzM2LDAuNTA0LDAuNTg2LDAuMDg1OSwwLjI1LDAuMDg1OSwwLjUsMCwwLjc1cy0wLjI1NCwwLjQ0NS0wLjUwNCwwLjU4NmwtOC4yNSw0Ljg4Yy0wLjIsMC4yLTAuNDUsMC4yLTAuNzEsMC4yLTAuMjctMC4xLTAuNDktMC4yLTAuNjctMC40cy0wLjI3LTAuNC0wLjI3LTAuN3YtOS43NWMwLTAuMzMsMC4wOS0wLjU5LDAuMjgtMC43OCwwLjE5LTAuMiwwLjQyLTAuMzIsMC42OC0wLjM1LDAuMjctMC4wNCwwLjUxLDAuMDEsMC43MywwLjE1bDguMjUsNC44OHoiDQoJCSBjbGFzcz0ic3QyIiAvPg0KCTwvZz4NCjwvc3ZnPg==" );
            }else if( selector=='.hdr_playground' ){
                $('img', url_ele).attr('src', "data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0NCjxzdmcgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCAyMSAyMSIgaGVpZ2h0PSIxMDAlIiB3aWR0aD0iMTAwJSIgdmVyc2lvbj0iMS4xIiB5PSIwcHgiIHg9IjBweCIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIj48bWV0YWRhdGE+PHJkZjpSREY+PGNjOldvcmsgcmRmOmFib3V0PSIiPjxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PjxkYzp0eXBlIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiLz48ZGM6dGl0bGUvPjwvY2M6V29yaz48L3JkZjpSREY+PC9tZXRhZGF0YT4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0MHtmaWxsOiNGRkJGM0I7fQ0KCS5zdDF7ZmlsbDojNzNBOTRFO30NCgkuc3Qye2ZpbGw6I0ZGRkZGRjt9DQoJLnN0M3tmaWxsOiM1NjU3NTk7fQ0KCS5zdDR7ZmlsbDojMDBDMURFO30NCjwvc3R5bGU+DQo8Y2lyY2xlIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yLC0yKSIgY3g9IjEyLjUiIGN5PSIxMi41IiByPSIxMCIgY2xhc3M9InN0NCIgZmlsbD0iIzAwYzFkZSIvPg0KPGcgZmlsbD0iI0ZGRiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIsLTIpIj4NCgkJPHBhdGggY2xhc3M9InN0MiIgZD0ibTE4LjEsNy4yNWMwLjI3MywwLDAuNTA2LDAuMDk1NywwLjY5NywwLjI4N3MwLjI4NywwLjQyNCwwLjI4NywwLjY5N3Y2LjU2YzAsMC4yNzMtMC4wOTU3LDAuNTA2LTAuMjg3LDAuNjk3cy0wLjQyNCwwLjI4Ny0wLjY5NywwLjI4N2gtNS4yNXYxLjMxaDMuMjhjMC4wOTU3LDAsMC4xNzQsMC4wMzA4LDAuMjM2LDAuMDkyMywwLjA2MTUsMC4wNjE1LDAuMDkyMywwLjE0LDAuMDkyMywwLjIzNiwwLDAuMDk1Ny0wLjAzMDgsMC4xNzQtMC4wOTIzLDAuMjM2LTAuMDYxNSwwLjA2MTUtMC4xNCwwLjA5MjMtMC4yMzYsMC4wOTIzaC03LjIxYy0wLjA5NTcsMC0wLjE3NC0wLjAzMDgtMC4yMzYtMC4wOTIzLTAuMDYxNS0wLjA2MTUtMC4wOTIzLTAuMTQtMC4wOTIzLTAuMjM2LDAtMC4wOTU3LDAuMDMwOC0wLjE3NCwwLjA5MjMtMC4yMzYsMC4wNjE1LTAuMDYxNSwwLjE0LTAuMDkyMywwLjIzNi0wLjA5MjNoMy4yOHYtMS4zMWgtNS4yNWMtMC4yNzMsMC0wLjUwNi0wLjA5NTctMC42OTctMC4yODctMC4yMi0wLjItMC4zMS0wLjQtMC4zMS0wLjd2LTYuNTdjMC0wLjI3NCwwLjA5LTAuNTA0LDAuMjgtMC42OTQsMC4yLTAuMTksMC40My0wLjI5LDAuNy0wLjI5aDExLjJ6bTAuMzI4LDcuNTV2LTYuNTdjMC0wLjA5NTctMC4wMzA4LTAuMTc0LTAuMDkyMy0wLjIzNiwwLTAuMDYtMC4xLTAuMDktMC4yLTAuMDloLTExLjJjLTAuMDkxOSwwLTAuMTcyLDAuMDMtMC4yMzIsMC4wOS0wLjA3LDAuMDYtMC4xLDAuMTQtMC4xLDAuMjN2Ni41NmMwLDAuMDk1NywwLjAzMDgsMC4xNzQsMC4wOTIzLDAuMjM2LDAuMDYxNSwwLjA2MTUsMC4xNCwwLjA5MjMsMC4yMzYsMC4wOTIzaDExLjJjMC4wOTU3LDAsMC4xNzQtMC4wMzA4LDAuMjM2LTAuMDkyMywwLjA2MTUtMC4wNjE1LDAuMDkyMy0wLjE0LDAuMDkyMy0wLjIzNnoiLz4NCgkJPHBhdGggY2xhc3M9InN0MiIgZD0ibTEzLjcsMTIuMmMwLjA2MDYsMC4wMzAzLDAuMTAyLDAuMDc3NiwwLjEyNSwwLjE0MiwwLjAyMjcsMC4wNjQ0LDAuMDE4OSwwLjEyNy0wLjAxMTQsMC4xODctMC4wNjgyLDAuMTk3LTAuMjI3LDAuNDQ3LTAuNDc3LDAuNzUtMC4wNDU0LDAuMDQ1NC0wLjEsMC4wNzM4LTAuMTY1LDAuMDg1Mi0wLjA2NDQsMC4wMTE0LTAuMTIzLDAuMDAxOS0wLjE3Ni0wLjAyODRsLTAuMzI5LTAuMTkzYy0wLjE4OSwwLjE1OS0wLjM5OCwwLjI4LTAuNjI1LDAuMzY0djAuMzg2YzAsMC4wNjA2LTAuMDIyNywwLjExNy0wLjA2ODIsMC4xNy0wLjA0NTQsMC4wNTMtMC4wOTg1LDAuMDgzMy0wLjE1OSwwLjA5MDktMC4yODgsMC4wNTMtMC41NzYsMC4wNTMtMC44NjMsMC0wLjA2ODItMC4wMDc2LTAuMTIzLTAuMDM3OS0wLjE2NS0wLjA5MDktMC4wNDE3LTAuMDUzLTAuMDYyNS0wLjExLTAuMDYyNS0wLjE3di0wLjM4NmMtMC4yMzUtMC4wODMzLTAuNDQzLTAuMjA0LTAuNjI1LTAuMzY0bC0wLjEyLDAuM2gtMC4xOWMtMC4wNiwwLTAuMTEtMC4xLTAuMTUtMC4xLTAuMjQtMC4zLTAuNC0wLjUtMC40OC0wLjgtMC4wMywwLTAuMDMtMC4xLTAuMDEtMC4xLDAuMDIyNy0wLjA2NDQsMC4wNjQ0LTAuMTEyLDAuMTI1LTAuMTQybDAuMzc1LTAuMTkzYy0wLjA0NTQtMC4yNDItMC4wNDU0LTAuNDgxLDAtMC43MTZsLTAuMzgtMC4zYy0wLjA3LDAtMC4xMS0wLjEtMC4xMy0wLjEtMC4wMi0wLjEtMC4wMi0wLjIsMC4wMS0wLjIsMC4wOC0wLjIsMC4yNC0wLjUsMC40OC0wLjgsMC4wNC0wLjAyLDAuMDktMC4wNSwwLjE1LTAuMDYsMC4wNy0wLjAxLDAuMTMsMCwwLjE5LDAuMDRsMC4zMjksMC4xODJjMC4xODktMC4xNTksMC4zOTgtMC4yNzYsMC42MjUtMC4zNTJ2LTAuNDI2YzAtMC4wNjgyLDAuMDIwOC0wLjEyNywwLjA2MjUtMC4xNzYsMC4wNDE3LTAuMDQ5MiwwLjA5NjYtMC4wNzc2LDAuMTY1LTAuMDg1MiwwLjI4OC0wLjA1MywwLjU3Ni0wLjA1NjgsMC44NjMtMC4wMTE0LDAuMDYwNiwwLjAxNTEsMC4xMTQsMC4wNDczLDAuMTU5LDAuMDk2NiwwLjA0NTQsMC4wNDkyLDAuMDY4MiwwLjEwOCwwLjA2ODIsMC4xNzZ2MC4zODZjMC4yMjcsMC4wODMzLDAuNDM2LDAuMjAxLDAuNjI1LDAuMzUybDAuMzI5LTAuMTgyYzAuMDUzLTAuMDM3OSwwLjExMi0wLjA1MTEsMC4xNzYtMC4wMzk4LDAuMDY0NCwwLjAxMTMsMC4xMTksMC4wNDM1LDAuMTY1LDAuMDk2NiwwLjI0MiwwLjI4OCwwLjQwMSwwLjUzOCwwLjQ3NywwLjc1LDAuMDIyNywwLjA2MDYsMC4wMjQ2LDAuMTIxLDAuMDA1NywwLjE4Mi0wLjAxODksMC4wNjA2LTAuMDU4NywwLjExLTAuMTE5LDAuMTQ4bC0wLjYsMC4yYzAuMDQ1NCwwLjIzNSwwLjA0NTQsMC40NzMsMCwwLjcxNmwwLjM4NiwwLjE5M3ptLTAuOTIyLTAuNjM0Yy0wLjAyNTgtMC4zNDktMC4xNjItMC42NDktMC40MDctMC45MDFzLTAuNTQ5LTAuMzkxLTAuOTExLTAuNDE3Yy0wLjM4OC0wLjAyNTgtMC43NTYsMC4xMDMtMS4xLDAuMzg4LTAuMjcxLDAuMzQ5LTAuMzk0LDAuNzE3LTAuMzY4LDEuMSwwLjAxMjksMC4zNDksMC4xNDUsMC42NDksMC4zOTcsMC45MDFzMC41NTIsMC4zODQsMC45MDEsMC4zOTdjMC4zODgsMC4wMjU4LDAuNzYyLTAuMDk2OSwxLjEyLTAuMzY4LDAuMjcxLTAuMzQ5LDAuMzk0LTAuNzE3LDAuMzY4LTEuMXptMS44OC0wLjQ3OWMtMC4wMTUxLDAuMDMwMy0wLjAzOTgsMC4wNTExLTAuMDczOCwwLjA2MjVzLTAuMDY2MywwLjAxMzMtMC4wOTY2LDAuMDA1N2MtMC4xMzYtMC4wNTMtMC4yNTgtMC4xMjUtMC4zNjQtMC4yMTYtMC4wMzAzLTAuMDIyNy0wLjA0NzMtMC4wNTExLTAuMDUxMS0wLjA4NTJzMC4wMDE5LTAuMDY2MywwLjAxNy0wLjA5NjZsMC4wOTA5LTAuMTU5YzAtMC4xLTAuMS0wLjItMC4xLTAuM2gtMC4xODJjLTAuMDM3OSwwLTAuMDcwMS0wLjAxMTQtMC4wOTY2LTAuMDM0MXMtMC4wMzk4LTAuMDUzLTAuMDM5OC0wLjA5MDljLTAuMS0wLjItMC4xLTAuMjksMC0wLjQzdi0wLjA4YzAtMC4wMywwLjEtMC4wNCwwLjEtMC4wNGgwLjE4MmMwLTAuMTEsMC4xLTAuMjIsMC4yLTAuMzJsLTAuMS0wLjE2di0wLjA5YzAuMDAzOC0wLjAzNDEsMC4wMjA4LTAuMDYyNSwwLjA1MTEtMC4wODUyLDAuMTA2LTAuMDgzMywwLjIyNy0wLjE1MiwwLjM2NC0wLjIwNCwwLjAzMDMtMC4wMTUxLDAuMDYyNS0wLjAxNywwLjA5NjYtMC4wMDU3LDAuMDM0MSwwLjAxMTQsMC4wNTg3LDAuMDMyMiwwLjA3MzgsMC4wNjI1bDAuMDkwOSwwLjE3YzAuMTIxLTAuMDIyNywwLjI0Mi0wLjAyMjcsMC4zNjQsMGwwLjA5MDktMC4xN2MwLjAxNTEtMC4wMzAzLDAuMDM5OC0wLjA1MTEsMC4wNzM4LTAuMDYyNSwwLjAzNDEtMC4wMTE0LDAuMDY2My0wLjAwOTUsMC4wOTY2LDAuMDA1NywwLjEzNiwwLjA0NTQsMC4yNTgsMC4xMTQsMC4zNjQsMC4yMDQsMC4wMzAzLDAuMDIyNywwLjA0NzMsMC4wNTExLDAuMDUxMSwwLjA4NTJzLTAuMDAxOSwwLjA2NjMtMC4wMTcsMC4wOTY2bC0wLjA5MDksMC4xNTljMC4wNzU3LDAuMDk4NSwwLjEzNiwwLjIwNCwwLjE4MiwwLjMxOGgwLjE4MmMwLjAzNzksMCwwLjA3MDEsMC4wMTE0LDAuMDk2NiwwLjAzNDFzMC4wMzk4LDAuMDQ5MiwwLjAzOTgsMC4wNzk1YzAuMDMwMywwLjE0NCwwLjAzMDMsMC4yODQsMCwwLjQyLDAsMC4wMzc5LTAuMDEzMywwLjA2ODItMC4wMzk4LDAuMDkwOXMtMC4wNTg3LDAuMDM0MS0wLjA5NjYsMC4wMzQxaC0wLjE4MmMtMC4wNDU0LDAuMTE0LTAuMTA2LDAuMjE2LTAuMTgyLDAuMzA3bDAuMDkwOSwwLjE1OWMwLjAxNTEsMC4wMzAzLDAuMDIwOCwwLjA2MjUsMC4wMTcsMC4wOTY2cy0wLjAyMDgsMC4wNjI1LTAuMDUxMSwwLjA4NTJjLTAuMTA2LDAuMDkwOS0wLjIyNywwLjE2My0wLjM2NCwwLjIxNi0wLjAzMDMsMC4wMDc2LTAuMDYyNSwwLjAwNTctMC4wOTY2LTAuMDA1N3MtMC4wNTg3LTAuMDMyMi0wLjA3MzgtMC4wNjI1bC0wLjA5MDktMC4xNTljLTAuMTIxLDAuMDIyNy0wLjI0MiwwLjAyMjctMC4zNjQsMGwtMC4wOTA4LDAuMTU5em0wLjQ4OC0wLjQxMmMwLjI1My0wLjA3NTMsMC40MTgtMC4yNCwwLjQ5My0wLjQ5MywwLjA3NTMtMC4yNTMsMC4wMTcxLTAuNTEtMC4xNzUtMC43Ny0wLjI0Ny0wLjE5Mi0wLjQ5Ni0wLjI0Ny0wLjc1LTAuMTY0LTAuMjUzLDAuMDgyMi0wLjQxOCwwLjI1LTAuNDkzLDAuNTAzLTAuMDc1MywwLjI1My0wLjAxNzEsMC41MDMsMC4xNzUsMC43NSwwLjI0NywwLjE5MiwwLjQ5NywwLjI1LDAuNzUsMC4xNzV6Ii8+DQo8L2c+DQo8L3N2Zz4NDQo=" );
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
