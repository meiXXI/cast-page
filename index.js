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
    alert("xxxx");
}

/**
 * Init cast API
 */
initializeCastApi = function () {
    cast.framework.CastContext.getInstance().setOptions({
        receiverApplicationId: applicationId,
        autoJoinPolicy: chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED
    });

    console.log("cast api has been initialized...");
};