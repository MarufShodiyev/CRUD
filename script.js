let selectedRow = null;
function onFormSubmit(e) {
  event.preventDefault();
  let formDate = readFormDate();
  if (selectedRow === null) {
    insertNewDate(formDate);
  } else {
    updateRecord(formDate);
  }
  resetForm();
  console.log(formDate);
}

function readFormDate() {
  let formDate = {};
  formDate["productCode"] = document.getElementById("productCode").value;
  formDate["product"] = document.getElementById("product").value;
  formDate["qty"] = document.getElementById("qty").value;
  formDate["perPrice"] = document.getElementById("perPrice").value;
  return formDate;
}
function insertNewDate(date) {
  let table = document
    .getElementById("storeList")
    .getElementsByTagName("tbody")[0];
  let newRow = table.insertRow(table.length);
  let cell1 = newRow.insertCell(0);
  cell1.innerHTML = date.productCode;
  let cell2 = newRow.insertCell(1);
  cell2.innerHTML = date.product;
  let cell3 = newRow.insertCell(2);
  cell3.innerHTML = date.qty;
  let cell4 = newRow.insertCell(3);
  cell4.innerHTML = date.perPrice;
  let cell5 = newRow.insertCell(4);
  cell5.innerHTML = `<button onclick="onEdit(this)">edit</button> <button onclick="onDelete(this)">delete</button>`;

}

function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("productCode").value = selectedRow.cells[0].innerHTML;
  document.getElementById("product").value = selectedRow.cells[1].innerHTML;
  document.getElementById("qty").value = selectedRow.cells[2].innerHTML;
  document.getElementById("perPrice").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formDate) {
  selectedRow.cells[0].innerHTML = formDate.productCode;
  selectedRow.cells[1].innerHTML = formDate.product;
  selectedRow.cells[2].innerHTML = formDate.qty;
  selectedRow.cells[3].innerHTML = formDate.perPrice;
}

// Delete

function onDelete(td) {
  if (confirm("o'chirmoqchimisiz")) {
    row = td.parentElement.parentElement;
    document.getElementById("storeList").deleteRow(row.rowIndex);
  }
  resetForm();
}

function resetForm() {
  document.getElementById("productCode").value = "";
  document.getElementById("product").value = "";
  document.getElementById("qty").value = "";
  document.getElementById("perPrice").value = "";
}
