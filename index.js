function insert(num) {
  document.form.textview.value = document.form.textview.value + num;
}

function clean(num) {
  document.form.textview.value = "";
}

function backSpace() {
  const exp = document.form.textview.value
  document.form.textview.value = exp.substring(0,exp.length-1);
}

function equal() {
  const exp = document.form.textview.value
  if (exp) {
    document.form.textview.value = eval(exp);
  }
}