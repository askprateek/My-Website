<section id = 'aa_particles'>

<div><i class=" help-icon medium material-icons" onclick="openHelp()">info_outline</i></div>
<div class="row main">
  <div class="col s12 m10 offset-m1 l6 offset-l3">
    <div class="browser">

      <div class="top-bar">
        <ul class="list">
        <li class="red circle"></li>
        <li class="yellow circle"></li>
        <li class="green circle"></li>
        <li class="terminal" id= 'title'>dap@askprateek.com:~</li>
      </ul>

      </div>
      <div class="browser-window">
        <h2 class="thin">Digital Artist Prateek</h2>
        <div class="content" id= 'term'>
          <p><span id="login" class= "user"><b>dap</b>@askprateek.com:~ </span> $ ls </p>
          </div>
          <div class="input-area">

          <span id= "root"><b>dap</b>@askprateek.com:~ </span>&nbsp$  <input id = "command" type = "text" value = 'help' autofocus>
        </div>
      </div>
    </div>

  </div>
</div>
<!-- Modal Structure -->
  <div id="help" class="modal modal-fixed-footer">
    <div class="modal-content">
      <h4>Help | How to use ?</h4>
      <p id = "helptext"></p>
    </div>
    <div class="modal-footer">
      <a onclick="$('#help').closeModal();$('#command').focus()" class="modal-action modal-close waves-effect waves-red btn-flat ">close</a>
    </div>
  </div>


</section>