function insertAtCursor(myValue) {
var myField=document.getElementById("content");
if(myField==null)
myField=document.getElementById("comment");
if(myField==null)
myField=document.getElementById("qcontent");
if(myField==null)
myField=document.getElementById("acontent");
    //IE support
    if (document.selection) {
        myField.focus();

        //in effect we are creating a text range with zero
        //length at the cursor location and replacing it
        //with myValue
        sel = document.selection.createRange();
        sel.text = myValue;
//comment(myValue);
    //Mozilla/Firefox/Netscape 7+ support
    } else if (myField.selectionStart || myField.selectionStart == '0') {

        myField.focus();
        //Here we get the start and end points of the
        //selection. Then we create substrings up to the
        //start of the selection and from the end point
        //of the selection to the end of the field value.
        //Then we concatenate the first substring, myValue,
        //and the second substring to get the new value.
        var startPos = myField.selectionStart;
        var endPos = myField.selectionEnd;
        myField.value = myField.value.substring(0, startPos) + myValue + myField.value.substring(endPos, myField.value.length);
        myField.setSelectionRange(endPos+myValue.length, endPos+myValue.length);
//comment(myValue);
    } else {
        myField.value += myValue;
//comment(myValue);
    }
//test();
}
$(document).ready(function(){
  $("#operatorslink").click(function(){
  $(".buttonlinks").hide(1,function(){$("#operators").show();});
  });
});
$(document).ready(function(){
  $("#greeklowerslink").click(function(){
  $(".buttonlinks").hide(1,function(){$("#greeklowers").show();});
  });
});
$(document).ready(function(){
  $("#greekupperslink").click(function(){
  $(".buttonlinks").hide(1,function(){$("#greekuppers").show();});
  });
});
$(document).ready(function(){
  $("#bracketslink").click(function(){
  $(".buttonlinks").hide(1,function(){$("#brackets").show();});
  });
});
$(document).ready(function(){
  $("#arrowslink").click(function(){
  $(".buttonlinks").hide(1,function(){$("#arrows").show();});
  });
});
$(document).ready(function(){
  $("#setslink").click(function(){
  $(".buttonlinks").hide(1,function(){$("#sets").show();});
  });
});
$(document).ready(function(){
  $("#symbolslink").click(function(){
  $(".buttonlinks").hide(1,function(){$("#symbols").show();});
  });
});
$(document).ready(function(){
  $("#matrixlink").click(function(){
  $(".buttonlinks").hide(1,function(){$("#matrix").show();});
  });
});
$(document).ready(function(){
  $("#binarylink").click(function(){
  $(".buttonlinks").hide(1,function(){$("#binary").show();});
  });
});
$(document).ready(function(){
  $("#relationslink").click(function(){
  $(".buttonlinks").hide(1,function(){$("#relations").show();});
  });
});
$(document).ready(function(){
  $(".button").click(function(){
  $(".buttonlinks").hide();
  });
});
$(document).ready(function(){
  $("#addmath").click(function(){
  $(".buttonlinks").hide(1);
  $("#math").slideToggle("slow");
  });
});
$(document).ready(function(){
  $("#closemath").click(function(){
  $(".buttonlinks").hide();
  });
});
$(document).ready(function(){
  $("#functionslink").click(function(){
  $(".buttonlinks").hide(1,function(){$("#functions").show();});
  });
});

$(document).ready(function(){
  $("#helplink").click(function(){
    $(".buttonlinks").hide();
    $("#math-code-help-container").fadeIn("slow");
  });
});
$(document).ready(function(){
  $("#helplinktoolbar").click(function(){
    $(".buttonlinks").hide();
    $("#math-code-help-container").fadeIn("slow");
  });
});
$(document).ready(function(){
  $("#helpclose").click(function(){
    $("#math-code-help-container").fadeOut("slow");
  });
});
$(document).ready(function(){
  $(".buttonlinks").click(function(){
    $(".buttonlinks").hide();
  });
});
$(document).ready(function(){
  $("#math-code-help-container").click(function(){
    $(".buttonlinks").hide();
  });
});
$(document).ready(function(){
	$(document).keyup(function(e) {
		if (e.keyCode == 27) { $(".buttonlinks").hide(); $("#math-code-help-container").fadeOut("slow");}   // esc
	});
});

function showPreview()
{
var temp=document.getElementById('content');
var a=encodeURIComponent(temp.value);
var s="preview.php?content="+a;
document.getElementById('previewbox').src =s;
}

function reset()
{
	var temp=document.getElementById('content');
	temp.value="";
	showPreview();
}

