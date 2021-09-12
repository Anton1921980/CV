<?php
?>
<script src="https://code.jquery.com/jquery-2.1.1.min.js" type="text/javascript"></script>
<script>

function showEditBox(editobj,id,tableCol) {   

	// $('#frmAdd').hide();
	$(`#${editobj}`).prop('disabled','true');
	var currentMessage = $(`#${editobj}`).html();

	console.log("id", id);
	console.log("editobj", editobj);
    console.log('currentMessage',currentMessage);
    console.log("tableCol", tableCol);

	var editMarkUp = '<textarea rows="7" cols="80" id="txtmessage_'+id+'">'+currentMessage+'</textarea><button class="ok" name="ok" >Save</button><button name="cancel" onClick="cancelEdit(\''+currentMessage+'\','+editobj+')">Cancel</button>';
	$(`#${editobj}`).html(editMarkUp);

// вешеаем клик на родителя потому что "ок" появится потом и по другому его не находит
	document.getElementById(editobj).addEventListener("click", event => {
    if (event.target.classList.contains("ok")) {
		callCrudAction('edit',id,tableCol);
      }
    }) 
}

function cancelEdit(currentMessage,editobj) {

    console.log("editobj", editobj);
    console.log("currentMessage", currentMessage);

	$(editobj).html(currentMessage);
	// $('#frmAdd').show();
}

function callCrudAction(action,id,tableCol,tableCol2,tableCol3,tableCol4) {
	$("#loaderIcon").show();
	var queryString;
	switch(action) {
		case "add":
			queryString = 'action='+action+'&tableCol='+ tableCol +'&txtmessage='+ $(`#${tableCol}`).val()+'&tableCol2='+ tableCol2 +'&txtmessage2='+ $(`#${tableCol2}`).val()+'&tableCol3='+ tableCol3 +'&txtmessage3='+ $(`#${tableCol3}`).val()+'&tableCol4='+ tableCol4 +'&txtmessage4='+ $(`#${tableCol4}`).val();
            console.log("queryString", queryString)
			
		break;
		case "edit":
			queryString = 'action='+action+'&tableCol='+ tableCol + '&message_id='+ id + '&txtmessage='+ $("#txtmessage_"+id).val();
		break;
		case "delete":
			queryString = 'action='+action+'&message_id='+ id;
		break;
	}	 
	jQuery.ajax({
	url: "crud_action.php",
	data: queryString,
	type: "POST",
	success:function(data){
		switch(action) {
			case "add":
				$("#comment-list-box").append(data);
			break;
			case "edit":
				$("#message_" + id + " .message-content").html(data);
				// $('#frmAdd').show();
				$("#message_"+id+" .btnEditAction").prop('disabled','');	
			break;
			case "delete":
				$('#message_'+id).fadeOut();
			break;
		}
		$("#txtmessage").val('');
		$("#loaderIcon").hide();
	},
	error:function (){
		console.log("error")
	}
	});
}
</script>