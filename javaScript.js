var arr = [];

function myFunc(x,z,p) {
  
  var name = {
    fname: document.getElementById(x).value || '',
    lname: document.getElementById(z).value || ''
  };
  if(!name.fname || !name.lname) {
    alert('FN or LN can not be empty');
    return false;
  }
  name.action = 'actionDelete';
  console.log(name);
  arr.push(name);
  console.log(arr);
  clearFunc(x,z);
  tableRender(p,name);
}




function clearFunc(x,z) {
  document.getElementById(x).value = '';
  document.getElementById(z).value = '';
}


var counter = 0;
function tableRender(p,name) {
  console.log("wait! I am creating Table")
  var tarea = document.getElementById(p);
  var table;
  var tables = tarea.getElementsByTagName("table");
  if (tables.length === 0) {
    table = document.createElement("table");
    table.style.width = '50%';
    table.setAttribute('border', '1');
    toc = 'toc';
    table.className = toc;
  } else {
    table = tarea.getElementsByTagName("table")[0];
  }
  var tr = document.createElement("tr");
  let rowNumber = "row-" + counter;
  tr.className = rowNumber;
  counter++;
  var nameObjKey  = Object.keys(name);
  for(let j=0; j<nameObjKey.length; j++) {
    var td = document.createElement("td");
    var data;
    if(name[nameObjKey[j]] === 'actionDelete' ) {
      data = document.createElement("button");
      data.innerHTML = 'Delete';
      data.addEventListener('click', () => {
      deleteRow(rowNumber);
      })

    } else {
      data = document.createTextNode(name[nameObjKey[j]]);
    }
    //console.log(name);
    td.appendChild(data);
    tr.appendChild(td);
  }
  table.appendChild(tr);
  if (tables.length === 0) {
    tarea.appendChild(table);
  }
  console.log(table);
}

function deleteRow(CN) {
 console.log("I am clicking on delete button");
 var str = CN;
 let row = document.getElementsByClassName(CN)[0];
 row.remove();
 var splits = str.split('-');
 //arr.splice(splits[1],1)
 delete arr[splits[1]];
 console.log(arr);
};


function showName(y) {
  console.log("wait! I am creating Table")
  var tarea = document.getElementById(y);
  var table = document.createElement("table");
  table.style.width = '20%';
  table.setAttribute('border', '1');
  console.log(arr.length);
  for(let i=0; i<arr.length; i++) {
    var tr = document.createElement("tr");
    if(arr[i]===undefined) {
      console.log('Got the empty item');
    }
    var nameObjCopy = arr[i];
    var nameObjKey  = Object.keys(nameObjCopy);
    for(let j=0; j<nameObjKey.length-1; j++) {
      var td = document.createElement("td");
      var name = document.createTextNode(nameObjCopy[nameObjKey[j]]);
      td.appendChild(name);
      tr.appendChild(td);
      table.appendChild(tr);
  }
  tarea.appendChild(table);
  console.log(table);
  }
};
