var _i = 1;
function add_task() {
  var task_description = document.getElementById("input_text").value;
  if(task_description.length == 0){
    alert("Please enter the task description.");
    return 0;
  }
  var task_due_date = document.getElementById("input_date").value;

  var table = document.getElementById("list_table"),
      tbody = table.getElementsByTagName("tbody")[0];

  const tr = document.createElement("tr");
  // alert("i"+_i);
  var id = "i"+_i;
  tr.setAttribute('id', id);

  const td = document.createElement("td");
  td.setAttribute('class',"item");

  let span = document.createElement("span");
  span.setAttribute('class', "item_description");
  let text = document.createTextNode(task_description);
  span.appendChild(text);
  td.appendChild(span);

  let div = document.createElement("div");
  div.setAttribute('class',"check_item");
  let button = document.createElement("button");
  button.setAttribute('class',"check_item_button");
  button.setAttribute('onclick',"check_task("+_i+")");
  let i = document.createElement("i");
  i.setAttribute('class',"fa fa-square-o");
  button.appendChild(i);
  i = document.createElement("i");
  i.setAttribute('class',"fa fa-check-square-o");
  button.appendChild(i);
  div.appendChild(button);
  td.appendChild(div);

  const br = document.createElement("br");
  td.appendChild(br);

  if(task_due_date.length > 0){
    div = document.createElement("div");
    div.setAttribute('class',"due_date");
    i = document.createElement("i");
    i.setAttribute('class',"fa fa-calendar-o");
    div.appendChild(i);
    div.appendChild(document.createTextNode(" "));
    text = document.createTextNode(task_due_date);
    div.appendChild(text);
    td.appendChild(div);
  }

  div = document.createElement("div");
  div.setAttribute('class',"close_item");
  button = document.createElement("button");
  button.setAttribute('class',"close_item_button");
  button.setAttribute('onclick',"close_task("+_i+")");
  i = document.createElement("i");
  i.setAttribute('class',"fa fa-close");
  button.appendChild(i);
  div.appendChild(button);
  td.appendChild(div);

  tr.appendChild(td);

  tbody.appendChild(tr);

  _i = _i + 1;

  document.getElementById("input_text").value = "";
  document.getElementById("input_date").value = "";
}

function check_task(_id) {
  const item = document.getElementById("i"+_id);
  const style = document.createElement('style');
  style.innerHTML = `#i`+_id+` {opacity: 0.5;}`;
  item.appendChild(style);
  i = item.getElementsByClassName("check_item_button")[0].style.visibility='collapse';
}

function close_task(_id) {
  if(confirm("Do you want to delete the task permanently?")){
    const item = document.getElementById("i"+_id);
    const style = document.createElement('style');
    style.innerHTML = `#i`+_id+` {visibility: collapse;}`;
    // alert(item);
    item.appendChild(style);
  }
}