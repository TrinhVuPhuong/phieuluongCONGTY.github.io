function getAllUrlParams(url) {
    // get query string from url (optional) or window
    var queryString = url ? url.split('?')[1] : window.location.search.slice(1);

    // we'll store the parameters here
    var obj = {};

    // if query string exists
    if (queryString) {

        // stuff after # is not part of query string, so get rid of it
        queryString = queryString.split('#')[0];

        // split our query string into its component parts
        var arr = queryString.split('&');

        for (var i = 0; i < arr.length; i++) {
            // separate the keys and the values
            var a = arr[i].split('=');

            // set parameter name and value (use 'true' if empty)
            var paramName = a[0];
            var paramValue = typeof (a[1]) === 'undefined' ? true : a[1];

            // (optional) keep case consistent
            paramName = paramName.toLowerCase();
            if (typeof paramValue === 'string') paramValue = paramValue.toLowerCase();

            // if the paramName ends with square brackets, e.g. colors[] or colors[2]
            if (paramName.match(/\[(\d+)?\]$/)) {

                // create key if it doesn't exist
                var key = paramName.replace(/\[(\d+)?\]/, '');
                if (!obj[key]) obj[key] = [];

                // if it's an indexed array e.g. colors[2]
                if (paramName.match(/\[\d+\]$/)) {
                    // get the index value and add the entry at the appropriate position
                    var index = /\[(\d+)\]/.exec(paramName)[1];
                    obj[key][index] = paramValue;
                } else {
                    // otherwise add the value to the end of the array
                    obj[key].push(paramValue);
                }
            } else {
                // we're dealing with a string
                if (!obj[paramName]) {
                    // if it doesn't exist, create property
                    obj[paramName] = paramValue;
                } else if (obj[paramName] && typeof obj[paramName] === 'string'){
                    // if property does exist and it's a string, convert it to an array
                    obj[paramName] = [obj[paramName]];
                    obj[paramName].push(paramValue);
                } else {
                    // otherwise add the property
                    obj[paramName].push(paramValue);
                }
            }
        }
    }

    return obj;
}
function titleCase(str) {
    var convertToArray = str.toLowerCase().split(' ');
    var result = convertToArray.map(function(val) {
      return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
    });
    
    return result.join(' ');
  }

const output = document.querySelector('body');
var obj = getAllUrlParams();
function maker() {

    var p = document.createElement('p');
    p.setAttribute("class", "diachi");
    console.log(obj['thang']);
    p.textContent = titleCase(decodeURIComponent(obj['thang']));
    output.append(p);

    
    div = document.createElement('div');
    div.setAttribute("class", "line");
    output.append(div);

    console.log(obj);
    
    p = document.createElement('p');
    p.setAttribute("class", "title");
    p.textContent = "MSTL: "+  obj['mstl'].toUpperCase();

    output.append(p);


    p = document.createElement('p');
    p.setAttribute("class", "title");
    console.log(obj['nhanvien']);
    p.textContent = "Nhân viên: " + titleCase(decodeURIComponent(obj['nhanvien']));
    output.append(p);

    p = document.createElement('p');
    p.setAttribute("class", "title");
    console.log(obj['bophan']);
    p.textContent = "Bộ phận: " + titleCase(decodeURIComponent(obj['bophan']));
    output.append(p);

    var table, tr, td,div;
    table = document.createElement('table');

   
    div = document.createElement('div');
    div.setAttribute("class", "line2");
    output.append(div);


     table = document.createElement('table');

         tr = document.createElement('tr');

             td = document.createElement('td');
            td.setAttribute("class", "title");
            td.textContent="Giờ công";
            tr.append(td);

            td = document.createElement('td');
            td.setAttribute("class", "content");
            td.textContent=  obj['giocong']+ " tiếng"
            tr.append(td);

        table.append(tr);


        

         tr = document.createElement('tr');

             td = document.createElement('td');
            td.setAttribute("class", "title");
            td.textContent="Tăng ca";
            tr.append(td);

            td = document.createElement('td');
            td.setAttribute("class", "content");
            td.textContent=  obj['tangca']+ " tiếng"
            tr.append(td);

        table.append(tr);


       

        tr = document.createElement('tr');

            td = document.createElement('td');
           td.setAttribute("class", "title");
           td.textContent="Giờ vệ sinh";
           tr.append(td);

           td = document.createElement('td');
           td.setAttribute("class", "content");
           td.textContent=  obj['giovesinh']+ " tiếng"
           tr.append(td);

       table.append(tr);

        
        tr = document.createElement('tr');

            td = document.createElement('td');
            td.setAttribute("class", "title");
            td.textContent="Tiền công";
            tr.append(td);

            var x = obj['tiencong'];
            //x = x.toLocaleString('en-US');
            td = document.createElement('td');
            td.setAttribute("class", "content");
            td.textContent=  x + " đ";
            tr.append(td);

        table.append(tr);


        tr = document.createElement('tr');

            td = document.createElement('td');
            td.setAttribute("class", "title");
            td.textContent="Tiền tăng ca";
            tr.append(td);

            var x = obj['tientangca'];
            //x = x.toLocaleString('en-US');
            td = document.createElement('td');
            td.setAttribute("class", "content");
            td.textContent=  x + " đ";
            tr.append(td);

        table.append(tr);

        tr = document.createElement('tr');

            td = document.createElement('td');
            td.setAttribute("class", "title");
            td.textContent="Tiền vệ sinh";
            tr.append(td);

            var x = obj['tienvesinh'];
            //x = x.toLocaleString('en-US');
            td = document.createElement('td');
            td.setAttribute("class", "content");
            td.textContent=  x + " đ";
            tr.append(td);

        table.append(tr);


        tr = document.createElement('tr');

            td = document.createElement('td');
            td.setAttribute("class", "title");
            td.textContent="Tiền chuyên cần";
            tr.append(td);

            var x = obj['tienchuyencan'];
            //x = x.toLocaleString('en-US');
            td = document.createElement('td');
            td.setAttribute("class", "content");
            td.textContent=  x + " đ";
            tr.append(td);

        table.append(tr);


        tr = document.createElement('tr');

            td = document.createElement('td');
            td.setAttribute("class", "title");
            td.textContent="Tiền thưởng";
            tr.append(td);

            var x = obj['tienthuong'];
            //x = x.toLocaleString('en-US');
            td = document.createElement('td');
            td.setAttribute("class", "content");
            td.textContent=  x + " đ";
            tr.append(td);

        table.append(tr);


        tr = document.createElement('tr');

            td = document.createElement('td');
            td.setAttribute("class", "title");
            td.textContent="Tiền vi phạm";
            tr.append(td);

            var x = obj['tienvipham'];
            //x = x.toLocaleString('en-US');
            td = document.createElement('td');
            td.setAttribute("class", "content");
            td.textContent=  x + " đ";
            tr.append(td);

        table.append(tr);

        
        tr = document.createElement('tr');

            td = document.createElement('td');
            td.setAttribute("colspan", "2");
                div = document.createElement("div");
                div.setAttribute("class","lineTB")
                td.append(div);
            tr.append(td);

        table.append(tr);


    
    
   
        tr = document.createElement('tr');

            td = document.createElement('td');
            td.setAttribute("class", "title3");
            td.textContent="Tiền thực nhận";
            tr.append(td);

            x = obj['tienthucnhan'];
            //x = x.toLocaleString('en-US');
            td = document.createElement('td');
            td.setAttribute("class", "content");
            td.textContent=  x + " đ";
            tr.append(td);

        table.append(tr);    

    
    output.append(table);


    const myArray3 = obj['ngay'].split("%20");

    console.log(myArray3);
    
    var date = "";
    date += myArray3[0] + " " + myArray3[1];

    

    p = document.createElement('p');
    p.setAttribute("class", "footer");
    p.textContent =  date;
    output.append(p);
 

    // p=document.createElement('p');
    // p.setAttribute("class","");
    // p.textContent="Duy Phương cảm ơn quý khách!";
    // output.append(p);
    


 


}
maker();


window.print();
// if(obj['thietbi']=='computer'){
//     window.addEventListener('afterprint', function() {
//     window.close();
// });
// }
