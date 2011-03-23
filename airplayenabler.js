//startconfig
//id=com.github.lsxi.airplayenabler
//icon=iVBORw0KGgoAAAANSUhEUgAAACwAAAAkCAMAAADFCSheAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAwBQTFRFAAAAAwMDBAQEBgYGCAgICgoKExMTGhoaGxsbHR0dISEhIiIiIyMjJiUlMDAwMjIyMzMzNDQzNDQ0NDU1Q0NDRUVERUVFSEhIS0tLU1NTVlZWV1dXWFhXWFhYXFxcZGRkaGhoaWlpdXV1fX18g4ODjY2MkJCPlZWUmpqZnZ2cnZ6cnp6dn5+foKCfoaGgoqKhpKSjp6emqKinq6uqra2sra2tra6ttLSztbW0t7e2t7e3uLi3urq6vr69vr6+wcHAwcHBwsLBxMTDxMTEx8fHyMjHysrKy8vLzs7Nzs7O0dHQ0dHR0dLR1NXU1dXV19jX2NjX2NjY29vb29zb3Nzb3t7e5eXl6Ojn6Ojo6+vr7Ozs7u7u7+/v8vLx8vLy9fX19fb19vb2+Pj4+fn5AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsMnJOgAAAQB0Uk5T////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AFP3ByUAAAAZdEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjbQg61aAAACA0lEQVQ4T7WU6W7aQBCAR+TALg0RttNcmKCchVwEHJAKyARIAsWmIGghgQQK7/8MdGY9mEZx6/Kj36yZndlP1gqvFmZLAEu4s/8ta76I3dI2dps/J9OJy3QyxTHB4WRiZO+y3BgJxqMxDmf+O9QfjyxH1gavfry8vgw1Rx76MxgOWH7y5/npmeVev9/7O/1ev8fyDyK+p8/Z39d1epi9uBBY/k5I8EckIbDc6SJBWAl99CC0AsFut9PtsPyt3W61grDZ8mQTgq02Bst2s2nbEqi2JypIos+y1WhYFsqNN1gMytZXDJbrNUQChdJ7FJBqtXqtzvLDI4IypfegTM0Hlqv3CMr4W72vEtvbVdEkUBaZ5UqlUi7LoJTnHAAcuIUCcrmCwfJdqWSaKJvMWQAgcDavUDZLZumO5SIhQ0TkYjG1Tt9yPcVlBGQxY7lAyKCKXLj94Hz30K1TqyCLzPKXPIJvppTPR+dnJJrPFzDwzaLPco6QYTWshA9zscV5iuUOw5HwKshCYDmbzRqGOHWqcby2kNeODZUqychisJxBjDge4Nh1Ev+IBYHEdUzXo3FczmRYvkmn0zcYyMbbQ71BPWc5zXLK5Ujb2vqEgYikHS3WWL649OPq8urCkWen5+cJl6TXNJlInvKNtHPy2ZeTHZZnM9wdDk9oCRfci/Gf7/OlLvNf2EV627460IUAAAAASUVORK5CYII=
//title=Airplay Enabler
//description=Enable Airplay for any web videos.
//var=confirmation;type=confirmation;default=false;
//var=language;type=language;
//endconfig

function iCabMobileEnableAirplay() {
    var n=document.getElementsByTagName("video");
    for(var i=0; i<n.length; i++) {
        var v=document.createAttribute("x-webkit-airplay");
        v.value="allow";
        var h=n[i].cloneNode(true);
        h.setAttributeNode(v);
        var p=n[i].parentNode;p.removeChild(n[i]);
        p.appendChild(h);
    };
    var n2=document.getElementsByTagName("embed");
    for(var i=0; i<n2.length; i++) {
        var v=document.createAttribute("airplay");
        v.value="allow";
        var h=n[i].cloneNode(true);
        h.setAttributeNode(v);
        var p=n[i].parentNode;
        p.removeChild(n[i]);
        p.appendChild(h);
    }
}

var doAction = (confirmation == false);
if (confirmation) {
    var text = "Enable Airplay?";
    doAction = confirm(text);
}
if (doAction) {
    iCabMobileEnableAirplay();
}

