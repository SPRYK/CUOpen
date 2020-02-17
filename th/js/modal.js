function Modal_show(chead, ctext) {
    $("#my-modal").css("display", "flex");
    $("#my-modal-head").html(chead);
    $("#my-modal-content").html(ctext);
}

function Modal_agree(chead, ctext, myfn) {
    Modal_show(chead, ctext);
    $("#my-modal-button-one").css("display", "none");
    $("#my-modal-button-two").css("display", "flex");

    /* click "no" */
    $("#my-modal-button-no").click(function() {
        $("#my-modal").css("display", "none");
    })

    /* click "yes" */
    $("#my-modal-button-yes").click(function() {
        $("#my-modal").css("display", "none");
        myfn();
    })
}

function Modal_alert(chead, ctext) {
    Modal_show(chead, ctext);
    $("#my-modal-button-one").css("display", "flex");
    $("#my-modal-button-two").css("display", "none");

    /* click "Ok" */
    $("#my-modal-button-ok").click(function() {
        $("#my-modal").css("display", "none");
    })
}

window.onclick = function(event) {
    if (event.target == $("#my-modal")) {
        $("#my-modal").css("display", "none");
    }
}