$(document).ready(function () {

    console.log("document ready.");

    // bind buttons
    $("#btnConnect").bind("click", connect);
});

const applicationId = "A4136689";

/**
 * Connect to chrome cast
 */
connect = function () {
    var castSession = cast.framework.CastContext.getInstance().getCurrentSession();

    var mediaInfo = new chrome.cast.media.MediaInfo("https://ricebean.net/static/media/ricebean-net.2a920808.png", "image/png");
    var request = new chrome.cast.media.LoadRequest(mediaInfo);
    castSession.loadMedia(request).then(
        function () { console.log('Load succeed'); },
        function (errorCode) { console.log('Error code: ' + errorCode); });
}

/**
 * Init cast API
 */
initializeCastApi = function () {
    
    var THE_INSTANCE = cast.framework.CastContext.getInstance();
    THE_INSTANCE.setOptions({
        receiverApplicationId: applicationId,
        autoJoinPolicy: chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED
    });

    console.log(THE_INSTANCE);
    console.log("init completed.");

    // cast.framework.CastContext.getInstance().setOptions({
    //     receiverApplicationId: applicationId,
    //     autoJoinPolicy: chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED
    // });

    // console.log("cast api has been initialized...");

    // console.log("initinig cast api");
    // var sessionRequest = new chrome.cast.SessionRequest(applicationId);
    // var apiConfig = new chrome.cast.ApiConfig(
    //     sessionRequest,
    //     _session => {
    //         session = _session;
    //         log("has config", session);
    //     },
    //     receiver => console.log("has receiver", receiver)
    // );
    // chrome.cast.initialize(
    //     apiConfig,
    //     () => console.log("cast init success"),
    //     err => console.log("cast init error", err)
    // );
};

window['__onGCastApiAvailable'] = function (isAvailable) {
    if (isAvailable) {
        console.log("Init cast api...");
        initializeCastApi();
    } else {
        console.log("No cast api...");
    }
};