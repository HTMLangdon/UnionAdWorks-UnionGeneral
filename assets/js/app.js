var count = 0;

function initCupcallery() {
    console.log('initCupcallery() called...');
    $('.gallery').each(function () { // the containers for all your galleries
        $(this).magnificPopup({
            delegate: 'a', // the selector for gallery item
            type: 'image',
            callbacks: {
                close: function () {

                    $("body,html").css("overflow", "initial");
                }
            },
            gallery: {
                enabled: true
            }

        });
    });
}

function onSiteImagesLoadComplete() {
    $('img').error(function () {
        var imageContainerW = $($(this).parent).attr("width");
        var imageContainerH = $($(this).parent).attr("height");
        console.log("image not found, or not loaded - intended container's dimensions (wxh):");
        //        $(this).attr('src', 'assets/slices/img-placeholder.png');
    });
}


function setupFullBrowserSections() {
    console.log('setup full screen browser sections function called. When "FULLPAGE.JS has finished loading, "initCupcallery()" will be called [in "afterRender" handler]');
    count = $("nav.navigation-main ul").children().length;
    $('.fullBrowserSections').fullpage({
        csss3: true,
        fitToSection: false,
        autoScrolling: false,
        afterRender: function () {
            initCupcallery();
        }
    });
}

function checkDisplayDimensions() {
    console.log("checkDisplayDimensions");
}

function initMainMenu() {
    // Clicking away from dropdown will remove the dropdown class
    $('html').click(function () {
        $('.nav-dropdown').hide();
    });

    // Toggle open and close nav styles on click
    $('#btn-hamburgerX').click(function () {
        $('nav ul').slideToggle();
    });

    // Hamburger to X toggle
    $('#btn-hamburgerX').on('click', function () {
        this.classList.toggle('active');
    });

    $("nav ul li a.nav-title, nav ul li a:visited.nav-title").click(function (e) {
        alert("cleek!");
        $('#btn-hamburgerX').click(null);
    });

}

function setupSignUpEmailForm() {

    // Get the form.
    var form = $('#email-subscription-signup');

    // Get the messages div.
    var firstName = $(".newsletter-input-fName")
    var lastName = $(".newsletter-input-lName");
    var email = $(" .newsletter-input-eMail");
    var statusMessage = $('#form-mailing-list-status-text.form-status-text-container .form-status-message');


    // Set up an event listener for the contact form.
    $(form).submit(function (e) {
        // Stop the browser from submitting the form.
        e.preventDefault();

        // Serialize the form data.
        var formData = $(form).serialize();
        // Submit the form using AJAX.
        $.ajax({
                type: 'POST',
                url: $(form).attr('action'),
                data: formData
            })
            .done(function (response) {
                
            
                console.log("done. ");
                console.log("RESPONSE:");

                console.log(response);
                console.log("");




                // Make sure that the email div has the 'success' class.
                $(email).removeClass('error');
                $(firstName).removeClass('error');
                $(lastName).removeClass('error');

                $(email).addClass('success');
                $(firstName).addClass('success');
                $(lastName).addClass('success');



                // Set the message text.
                $(statusMessage).text(response);


                // Clear the form.
                $('.newsletter-input-fName').val('');
                $('.newsletter-input-lName').val('');
                $('.newsletter-input-eMail').val('');
                $('#message').val('');

            })
            .fail(function (data) {
                // Make sure ethat the email div has the 'error' class.
                $(email).removeClass('success');
                $(email).addClass('error');
                console.log('warning something has caused an error while attempting to send your email. [DOT]Fail:');
                console.log(data);
                
                // Set the message text.
                if (data.responseText !== '') {
                    console.log(data);
                    //				$(email).text(data.responseText);
                } else {
                    $(statusMessage).text('Oops! An error occured and your message could not be sent.');
                }
            });

    });
}



// mouse events for the f----
function setupSocialMediaPostEvents() {
    var __this = $("li.post.facebook .hover-content-container .hover-content");
    __this.velocity("fadeOut", {
        duration: 10,
        queue: false
    });

    $("li.post.facebook").hover(
        function (e) {
            var __this = $(this);
            $(this).find(".hover-content-container .hover-content").velocity("fadeIn", {
                duration: 500,
                queue: false
            });
        },
        function (e) {
            var __this = $(this);
            $(this).find(".hover-content-container .hover-content").velocity("fadeOut", {
                duration: 500,
                queue: false
            });
        }

    );

    $("ul.social-media-posts li.post.facebook a").click(function (e) {});
    //assets/slices/icon-social-media_FaceBook.png
}




$(window).resize(function (e) {
    checkDisplayDimensions();
});


$(document).ready(function () {

    checkDisplayDimensions();
    setupFullBrowserSections();
    initMainMenu();
//    initCupcallery(); //initialized after fullpage .js is loaded and initialized due to strange conflicting issues
    onSiteImagesLoadComplete();
    setupSignUpEmailForm();


    setupSocialMediaPostEvents()


    var _rollbarConfig = {
        accessToken: "d16738fc471a40c3b1e1ab8a977ea60c",
        captureUncaught: true,
        payload: {
            environment: "test"
        }
    };
    ! function (r) {
        function e(t) {
            if (o[t]) return o[t].exports;
            var n = o[t] = {
                exports: {},
                id: t,
                loaded: !1
            };
            return r[t].call(n.exports, n, n.exports, e), n.loaded = !0, n.exports
        }
        var o = {};
        return e.m = r, e.c = o, e.p = "", e(0)
    }([function (r, e, o) {
        "use strict";
        var t = o(1).Rollbar,
            n = o(2);
        _rollbarConfig.rollbarJsUrl = _rollbarConfig.rollbarJsUrl || "https://d37gvrvc0wt4s1.cloudfront.net/js/v1.9/rollbar.min.js";
        var a = t.init(window, _rollbarConfig),
            i = n(a, _rollbarConfig);
        a.loadFull(window, document, !_rollbarConfig.async, _rollbarConfig, i)
    }, function (r, e) {
        "use strict";

        function o(r) {
            return function () {
                try {
                    return r.apply(this, arguments)
                } catch (e) {
                    try {
                        console.error("[Rollbar]: Internal error", e)
                    } catch (o) {}
                }
            }
        }

        function t(r, e, o) {
            window._rollbarWrappedError && (o[4] || (o[4] = window._rollbarWrappedError), o[5] || (o[5] = window._rollbarWrappedError._rollbarContext), window._rollbarWrappedError = null), r.uncaughtError.apply(r, o), e && e.apply(window, o)
        }

        function n(r) {
            var e = function () {
                var e = Array.prototype.slice.call(arguments, 0);
                t(r, r._rollbarOldOnError, e)
            };
            return e.belongsToShim = !0, e
        }

        function a(r) {
            this.shimId = ++c, this.notifier = null, this.parentShim = r, this._rollbarOldOnError = null
        }

        function i(r) {
            var e = a;
            return o(function () {
                if (this.notifier) return this.notifier[r].apply(this.notifier, arguments);
                var o = this,
                    t = "scope" === r;
                t && (o = new e(this));
                var n = Array.prototype.slice.call(arguments, 0),
                    a = {
                        shim: o,
                        method: r,
                        args: n,
                        ts: new Date
                    };
                return window._rollbarShimQueue.push(a), t ? o : void 0
            })
        }

        function l(r, e) {
            if (e.hasOwnProperty && e.hasOwnProperty("addEventListener")) {
                var o = e.addEventListener;
                e.addEventListener = function (e, t, n) {
                    o.call(this, e, r.wrap(t), n)
                };
                var t = e.removeEventListener;
                e.removeEventListener = function (r, e, o) {
                    t.call(this, r, e && e._wrapped ? e._wrapped : e, o)
                }
            }
        }
        var c = 0;
        a.init = function (r, e) {
            var t = e.globalAlias || "Rollbar";
            if ("object" == typeof r[t]) return r[t];
            r._rollbarShimQueue = [], r._rollbarWrappedError = null, e = e || {};
            var i = new a;
            return o(function () {
                if (i.configure(e), e.captureUncaught) {
                    i._rollbarOldOnError = r.onerror, r.onerror = n(i);
                    var o, a, c = "EventTarget,Window,Node,ApplicationCache,AudioTrackList,ChannelMergerNode,CryptoOperation,EventSource,FileReader,HTMLUnknownElement,IDBDatabase,IDBRequest,IDBTransaction,KeyOperation,MediaController,MessagePort,ModalWindow,Notification,SVGElementInstance,Screen,TextTrack,TextTrackCue,TextTrackList,WebSocket,WebSocketWorker,Worker,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload".split(",");
                    for (o = 0; o < c.length; ++o) a = c[o], r[a] && r[a].prototype && l(i, r[a].prototype)
                }
                return e.captureUnhandledRejections && (i._unhandledRejectionHandler = function (r) {
                    var e = r.reason,
                        o = r.promise,
                        t = r.detail;
                    !e && t && (e = t.reason, o = t.promise), i.unhandledRejection(e, o)
                }, r.addEventListener("unhandledrejection", i._unhandledRejectionHandler)), r[t] = i, i
            })()
        }, a.prototype.loadFull = function (r, e, t, n, a) {
            var i = function () {
                    var e;
                    if (void 0 === r._rollbarPayloadQueue) {
                        var o, t, n, i;
                        for (e = new Error("rollbar.js did not load"); o = r._rollbarShimQueue.shift();)
                            for (n = o.args, i = 0; i < n.length; ++i)
                                if (t = n[i], "function" == typeof t) {
                                    t(e);
                                    break
                                }
                    }
                    "function" == typeof a && a(e)
                },
                l = !1,
                c = e.createElement("script"),
                d = e.getElementsByTagName("script")[0],
                p = d.parentNode;
            c.crossOrigin = "", c.src = n.rollbarJsUrl, c.async = !t, c.onload = c.onreadystatechange = o(function () {
                if (!(l || this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState)) {
                    c.onload = c.onreadystatechange = null;
                    try {
                        p.removeChild(c)
                    } catch (r) {}
                    l = !0, i()
                }
            }), p.insertBefore(c, d)
        }, a.prototype.wrap = function (r, e) {
            try {
                var o;
                if (o = "function" == typeof e ? e : function () {
                        return e || {}
                    }, "function" != typeof r) return r;
                if (r._isWrap) return r;
                if (!r._wrapped) {
                    r._wrapped = function () {
                        try {
                            return r.apply(this, arguments)
                        } catch (e) {
                            throw e._rollbarContext = o() || {}, e._rollbarContext._wrappedSource = r.toString(), window._rollbarWrappedError = e, e
                        }
                    }, r._wrapped._isWrap = !0;
                    for (var t in r) r.hasOwnProperty(t) && (r._wrapped[t] = r[t])
                }
                return r._wrapped
            } catch (n) {
                return r
            }
        };
        for (var d = "log,debug,info,warn,warning,error,critical,global,configure,scope,uncaughtError,unhandledRejection".split(","), p = 0; p < d.length; ++p) a.prototype[d[p]] = i(d[p]);
        r.exports = {
            Rollbar: a,
            _rollbarWindowOnError: t
        }
    }, function (r, e) {
        "use strict";
        r.exports = function (r, e) {
            return function (o) {
                if (!o && !window._rollbarInitialized) {
                    var t = window.RollbarNotifier,
                        n = e || {},
                        a = n.globalAlias || "Rollbar",
                        i = window.Rollbar.init(n, r);
                    i._processShimQueue(window._rollbarShimQueue || []), window[a] = i, window._rollbarInitialized = !0, t.processPayloads()
                }
            }
        }
    }]);




    window.onerror("TestError: Hello world", window.location.href);




});
