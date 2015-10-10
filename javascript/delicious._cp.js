/**
 * Created by cyk on 14-6-20.
 */
javascript: (function(e, t) {
    var doc = e.document;
    setTimeout(function() { //为毛这么麻烦? 引用这是异步非阻塞!

        var t = "myApp_iframe",
            r = doc.getElementById(t),
            i = "http://delicious.com/save?source=bookmarklet&",
            s = doc.createElement("iframe");

        function callback(e) {
            if (e.data === "ok") {
                var r = doc.getElementById(t);
                if (r) {
                    doc.body.removeChild(r);
                    r = null;
                }
            }
        }

        if (r) {
            return;
        }

        s.id = t;
        s.src = i
            + "url=" + encodeURIComponent(e.location.href)
            + "&title=" + encodeURIComponent(doc.title)
            + "&note=" + encodeURIComponent("" + (e.getSelection ? e.getSelection() : doc.getSelection ? doc.getSelection() : doc.selection.createRange().text))
            + "&v=1.1";
        s.style.position = "fixed";
        s.style.top = "0";
        s.style.left = "0";
        s.style.height = "100%";
        s.style.width = "100%";
        s.style.zIndex = "16777270";
        s.style.border = "none";
        s.style.visibility = "hidden";
        s.onload = function() {
            this.style.visibility = "visible"; //this 是谁?
        };
        doc.body.appendChild(s);
        var o = e.addEventListener ? "addEventListener" : "attachEvent";
        var u = o == "attachEvent" ? "onmessage" : "message";
        e[o](u, callback, false)
    }, 1)
})(window)
