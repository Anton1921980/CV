
<?php
 
?>

<style>
body{width:40%;}
.grey{background:}
.header{display:flex;width: 1330px;height: 50px;background:lightgrey;}
li{display:flex;}
.frmAdd-container{display:flex;}
.frmAdd-container div:nth-child(1){display: flex;flex-direction: column;text-align: center;font-style: italic;}
.message-content{max-height: 200px;height: 150px;overflow: hidden;}
.message-box{width:1300px;margin-bottom:20px;border-top:#F0F0F0 2px solid;background:#FAF8F8;padding:10px;display:flex;flex-direction: row;}
.message-box li{display: flex;flex-direction: column;border: 1px solid lightgrey;}
.message-box li:nth-child(1){width:2.3%;}
.message-box li:nth-child(1) div:nth-child(2){ margin: 0 auto;line-height:120px;}
.message-box li:nth-child(2){width:4%}
.message-box li:nth-child(3){width:4%}
.message-box li:nth-child(4){width:45%}
.message-box li:nth-child(5){width:45%}
.message-name{background-color:#f1eded;text-align: center;font-style: italic;font-weight: 600;border-bottom: 1px solid darkgrey;}
.btnEditAction{background-color:darkgray;border:0;padding:2px 10px;color:#FFF;}
.btnDeleteAction{background-color:#D60202;border:0;padding:2px 10px;color:#FFF;margin-bottom:15px;}
#btnAddAction{background-color:#09F;border:0;padding:5px 10px;color:#FFF;}
.top-buttons{margin-right:30px; width: 200px;}
button{cursor:pointer;}
button:hover{color:black;}
</style>


<header class="header">

  <p><button id="btnOpen" class="top-buttons" name="submit" onClick="$('#frmAdd').toggle()">Add article</button></p>
  <p><button class="top-buttons company-logo">Сhange site colors</button></p>
  <p><button class="top-buttons admin">Сhange page text</button></p>

  <?php include('button.php')?>



</header>
<div id="frmAdd" style="display:none"> 
  <div class="frmAdd-container">
    <div><div>Name</div><textarea id="Name" name="txtmessage"  cols="20" rows="2"></textarea></div>
    <div><div>alias</div><textarea id="alias" name="txtmessage"  cols="20" rows="2"></textarea></div>
    <div><div>introtext</div><textarea id="introtext" name="txtmessage"  cols="60" rows="6"></textarea></div>
	<div><div>images</div><textarea id="images" name="txtmessage"  cols="60" rows="6"></textarea></div>
  </div> 
  <p><button id="btnAddAction" name="submit" onClick="callCrudAction('add','','Name','alias','introtext','images')">Add</button></p>
</div>


<div class="form_style">
  <div id="comment-list-box">
<?php
if(!empty($comments)) {
foreach($comments as $k=>$v) {
?>

<ul class="message-box" id="message_<?php echo $comments[$k]["id"];?>">
  <li><div class="message-name">id</div><div class="message-content" ><?php echo $comments[$k]["id"]; ?></div> <button class="btnDeleteAction" name="delete" onClick="callCrudAction('delete',<?php echo $comments[$k]["id"]; ?>)">Delete</button></li>
  <li><div class="message-name">Name</div><div class="message-content" id='Name<?php echo $comments[$k]["id"];?>'><?php echo $comments[$k]["Name"]; ?></div><button class="btnEditAction" data-target="Name<?php echo $comments[$k]["id"];?>" name="edit" value='Name' onClick="showEditBox(this.dataset.target,<?php echo $comments[$k]["id"]; ?>,this.value)">Edit</button></li>
  <li><div class="message-name">alias</div><div class="message-content" id='alias<?php echo $comments[$k]["id"];?>'><?php echo $comments[$k]["alias"]; ?></div><button class="btnEditAction" data-target="alias<?php echo $comments[$k]["id"];?>" name="edit" value='alias' onClick="showEditBox(this.dataset.target,<?php echo $comments[$k]["id"]; ?>,this.value)">Edit</button></li>
  <li><div class="message-name" >introtext</div><div class="message-content" id='introtext<?php echo $comments[$k]["id"];?>'><?php echo $comments[$k]["introtext"];?></div><button class="btnEditAction" data-target="introtext<?php echo $comments[$k]["id"];?>" name="edit" value='introtext' onClick="showEditBox(this.dataset.target,<?php echo $comments[$k]["id"]; ?>,this.value)">Edit</button></li>  
  <li><div class="message-name" >images</div><div class="message-content" id='images<?php echo $comments[$k]["id"];?>'><?php echo $comments[$k]["images"];?></div><button class="btnEditAction" data-target="images<?php echo $comments[$k]["id"];?>" name="edit" value='images' onClick="showEditBox(this.dataset.target,<?php echo $comments[$k]["id"]; ?>,this.value)">Edit</button></li>
</ul>
<?php
}
} ?>
  </div>
  <img src="LoaderIcon.gif" id="loaderIcon" style="display:none" />
</div>