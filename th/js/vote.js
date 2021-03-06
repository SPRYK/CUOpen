dictionary_of_name = {
    'C1': 'ผลงานที่ 1',
    'C2': 'ผลงานที่ 2',
    'C3': 'ผลงานที่ 3'
}

function ConfirmVote(html_link, b) {
    if (!b) {
        Modal_alert('Alert!', "Invalid");
    } else if ($('input[type="checkbox"]:checked').length < 1) {
        Modal_alert('Alert!', 'กรุณาเลือกหนึ่งผลงาน');
    } else {
        var selected_name = "",
            selected_id = ""
        $('input[type="checkbox"]:checked').each(function(index) {
            selected_id = $(this).val();
        })
        selected_name = dictionary_of_name[selected_id];
        selected_id = selected_id[1]
       Modal_agree('Warning!', 'คุณต้องการเลือก "' + selected_name + '" ใช่หรือไม่', function () {
           var args = getQueryStringArgs();
           var person = {
               "stuID": args["studentid"],
               "projectName": "CUOH-LOGO", //ProjectName
               "vote": [selected_id]
           };
           $("#loader-container").css("display", "flex");
           $("#my-modal-button-yes").attr("disabled", true);
           // TODO : api 
           $.ajax({
               url: "https://asia-east2-cunex-vote.cloudfunctions.net/api/vote",
               type: "POST",
               data: person,
               dataType: "json",
               success: function (result) {
                   console.log(result);
                   setTimeout(function () {
                       window.location.href = html_link + createURL(args);
                   }, 500);
               },
               error: function (error) {
                   console.log(error);
                   $("#loader-container").css("display", "none");
                   $("#my-modal-button-yes").attr("disabled", false);
                   Modal_alert('Error!', 'เกิดข้อผิดพลาด กรุณาลองใหม่ในช่วงเวลาถัดไป');
               }
           })
           
       })
    }
}