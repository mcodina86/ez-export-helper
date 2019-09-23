function doToEZSubmit() {
  try {
    var txt = document.querySelector("textarea[name='to-ez-text']");
    var arr = txt.value.split(/\n/g).map(function(item) {
      return item.trim();
    });
    var ntxt = arr.join(" ");
    txt.value = ntxt;
  } catch (error) {
    console.log(error);
  }

  return false;
}

function doToEditorSubmit() {
  try {
    var separator = document.querySelector("input[name='separator']").value.trim();
    var txt = document.querySelector("textarea[name='to-editor-text']");
    var arr = txt.value.split(separator).map(function(item) {
      return item.trim();
    });
    var ntxt = arr.join("\n" + separator + "\n");
    txt.value = ntxt;
  } catch (error) {
    console.log(error);
  }

  return false;
}
