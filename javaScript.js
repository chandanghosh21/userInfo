var arr = [];
var counter = 1;

function myFunc(x,z,p) {
  
  var name = {
    id   : counter,
    fname: document.getElementById(x).value || '',
    lname: document.getElementById(z).value || '',
    action: 'actionDelete'
  };
  if(!name.fname || !name.lname) {
    alert('FN or LN can not be empty');
    return false;
  }
  arr.push(name);
  clearFunc(x,z);
  tableRender(p,name);
}


function clearFunc(x,z) {
  document.getElementById(x).value = '';
  document.getElementById(z).value = '';
}



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
  let rowNumber = "row- + counter";
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
      deleteRow(rowNumber,name,toc);
      })

    } else {
      data = document.createTextNode(name[nameObjKey[j]]);
    }
    td.appendChild(data);
    tr.appendChild(td);
  }
  table.appendChild(tr);
  if (tables.length === 0) {
    tarea.appendChild(table);
  }
}

function deleteRow(rowNumber,user,toc) {
 console.log(arr)
 let row = document.getElementsByClassName(rowNumber)[0];
 row.remove();
 arr = arr.filter(usr => user.id != usr.id)
 if(arr.length===0) {
   let tbl = document.getElementsByClassName(toc)[0];
   tbl.remove();
 }
};



function showName(y) {
  console.log("wait! I am creating Table")
  var tarea = document.getElementById(y);
  var tables = tarea.getElementsByTagName("table")
  if (tables.length > 0) {  
    table = tables[0];
    table.remove();
  }
  var table = document.createElement("table");
  table.style.width = '20%';
  table.setAttribute('border', '1'); 
  for(let i=0; i<arr.length; i++) {
    var tr = document.createElement("tr");
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
  }
};
