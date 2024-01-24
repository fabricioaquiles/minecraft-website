import $ from "jquery";

function handleModal() {
    const modal = $("#modal-open");
    if(modal.hasClass("app-modal-active")) {
        $("#modal-section").removeClass("app-modal-opened");
        $("body").css("overflow-y", "auto");
        setTimeout(() => {
            modal.removeClass("app-modal-active");
        }, 400);
        return;
    }

    modal.addClass("app-modal-active");
    $("body").css("overflow-y", "hidden");
    $("#modal-section").addClass("app-modal-opened");
}

export {handleModal}