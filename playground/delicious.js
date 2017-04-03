/**
 * Created by cyk on 14-6-20.
 */
javascript: (function(e, t) {
    var doc = e.document;
    setTimeout(function() {
        function a(e) {
            if (e.data === "destroy_bookmarklet") {
                var r = doc.getElementById(t);
                if (r) {
                    doc.body.removeChild(r);
                    r = null
                }
            }
        }
        var t = "DELI_bookmarklet_iframe",
            r = doc.getElementById(t);
        if (r) {
            return;
        }
        var i = "https://delicious.com/save?source=bookmarklet&",
            s = doc.createElement("iframe");
        s.id = t;
        s.src = i + "url=" + encodeURIComponent(e.location.href) + "&title=" + encodeURIComponent(doc.title) + "&note=" + encodeURIComponent("" + (e.getSelection ? e.getSelection() : doc.getSelection ? doc.getSelection() : doc.selection.createRange().text)) + "&v=1.1";
        s.style.position = "fixed";
        s.style.top = "0";
        s.style.left = "0";
        s.style.height = "100%";
        s.style.width = "100%";
        s.style.zIndex = "16777270";
        s.style.border = "none";
        s.style.visibility = "hidden";
        s.onload = function() {
            this.style.visibility = "visible"
        };
        doc.body.appendChild(s);
        var o = e.addEventListener ? "addEventListener" : "attachEvent";
        var u = o == "attachEvent" ? "onmessage" : "message";
        e[o](u, a, false)
    }, 1)
})(window)
