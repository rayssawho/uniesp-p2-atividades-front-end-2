$(document).ready(function(){
  $('#selectAll').click(function(){
    $('input:checkbox').not(this).prop('checked', this.checked);
  })
})

$(document).ready(function () {
  $("#botao").click(function () {
      let msg;
      let check = $('input:checkbox:checked').length;
      if(check >= 8){
          check = check - 1;
      }
      if(check == 0){
        msg = "Nenhum item foi selecionado!"
      } else {
        msg = "Foram selecionados " + check + " itens da lista!";
      }
      alert(msg);
      
  });
});
