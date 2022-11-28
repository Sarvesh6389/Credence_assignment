import myJson from './index.json' assert {type: 'json'}


let addnew_btn = document.getElementById('addnew-btn');
function addNewWindow() {
    document.getElementById("exampleModal").style.display = "block";
    
};

addnew_btn.addEventListener('click', addNewWindow);

let dashBoardGroup = [];
var save_btnId = document.getElementById('save_btnId');
var save_btnId = document.getElementById('save_btnId');

for (let data in myJson) {

    if (dashBoardGroup.indexOf(myJson[data]['dashboard_group']) === -1) {

        let elmInsert = document.getElementById('sub-container1_left');

        var ul = document.createElement('ul');

        var li = document.createElement('li');

        var p = document.createElement('p');

        var span = document.createElement('span');

        var img = document.createElement('img');


        ul.className = 'dashboard-list';
        li.className = 'dashboard-list_item';
        p.className = 'list-para';
        span.className = 'library-icon';
        img.className = 'library-img';
        
        img.setAttribute('src', 'library-add_icon.png');

        ul.appendChild(li);
        li.appendChild(p);
        p.appendChild(span);
        span.appendChild(img);

        elmInsert.appendChild(ul);
        let jsonData = myJson[data]['dashboard_group'];

        ul.insertAdjacentHTML('beforeend', jsonData);

        dashBoardGroup.push(myJson[data]['dashboard_group'])

        ul.addEventListener("click", function (e) {

            if (e.target.classList[0] === 'dashboard-list') {

                showDashBoard(data);

            }
        })
    }
}

function showDashBoard(data) {

    var rightSide2 = document.querySelector('.right-side_2');

    rightSide2.innerHTML = "";

    let testDemo = myJson.filter(function (jdata) {
        return jdata.dashboard_group === myJson[data]['dashboard_group'];
    })


    for (let index = 0; index < testDemo.length; index++) {

        var rightside_Child_divs = document.createElement('div');

        var divfordash_Group = document.createElement('div');

        var divfordash_Group_Items = document.createElement('div');

        var pfordash_Para = document.createElement('span')
        var pfordashGroup_Item = document.createElement('span')

        var spanforStar = document.createElement('div');


        rightside_Child_divs.className = 'right-side_divs';

        spanforStar.className = 'fa fa-star';

        divfordash_Group.className = ' divfordash_Group';

        divfordash_Group_Items.className = 'divfordash_Group_Items';

        pfordash_Para.className = 'pfordash_Para';

        pfordashGroup_Item.className = 'dashGroup_Item';

        rightside_Child_divs.appendChild(divfordash_Group);

        divfordash_Group.appendChild(spanforStar);

        divfordash_Group.appendChild(divfordash_Group_Items);
        let dashPara = 'Dashboard';
        pfordash_Para.innerHTML = dashPara;
        divfordash_Group_Items.appendChild(pfordash_Para);
        divfordash_Group_Items.appendChild(pfordashGroup_Item);

        pfordashGroup_Item.insertAdjacentHTML('beforeend', myJson[data]['dashboard_group']);

        rightSide2.appendChild(rightside_Child_divs);
    }
}

function save_btn() {
    var dtype = document.getElementById('dtype').value;
    var dname = document.getElementById('dname').value;
    var dgroup = document.getElementById('dgroup').value;
    var did = document.getElementById('did').value;
    var roleid = document.getElementById('role_id').value;
    
    let Objjson = {
        dashboard_type:dtype,
        dashboard_name: dname,
        dashboard_group: dgroup,
        dashboard_id: did,
        dashboard_role: roleid
    }

    myJson[myJson.length] = Objjson;
   
    for (let data in myJson) {
    showDashBoard(data);
    }
    document.getElementById('dtype').value="";
    document.getElementById('dname').value="select";
    document.getElementById('dgroup').value="select";
    document.getElementById('did').value="select";
    document.getElementById('role_id').value="select";
}
 
save_btnId.addEventListener('click', save_btn);








