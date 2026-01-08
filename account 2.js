let newItem = {};
let mainObject = [];

//彈跳視窗＿顯示
function showPopup(){ 
    document.getElementById('popup').style.display = 'block';
}

//彈跳視窗＿提交
function submitRecord(){
    //收入
    let newIncome = parseInt(document.getElementById('popupIncome').value || 0);
    //支出
    let newＥxpense = parseInt(document.getElementById('popupExpense').value || 0);
    newItem = {'Income':newIncome,'Expense':newＥxpense};
    mainObject.push(newItem);
    console.log('mainObj:',mainObject);
    updateTable();
    //彈跳視窗＿關閉
    closePopup(); 
}

//更新紀錄
function updateTable(){
    let totalProfit = 0;
    let totalIncome = 0;
    let totalExpense = 0;
    let table = document.getElementById('recordTable');

    table.innerHTML = '<tr><th>收入</th><th>支出</th><th>操作</th></tr>';

    mainObject.forEach((item, index) => {
        let row = table.insertRow(); //在表格的末尾插入一行
        let income = parseFloat(item.Income) || 0; // 确保是数字
        let expense = parseFloat(item.Expense) || 0; // 确保是数字

        row.insertCell(0).innerText = income;//在新行的第一列插入收入金额
        row.insertCell(1).innerText = expense;
        
        let deleteBtn = document.createElement('button');
        deleteBtn.innerText = '刪除';
        deleteBtn.onclick = function() { deleteRecord(index); };
        row.insertCell(2).appendChild(deleteBtn);//在 row 中插入一个新单元格（第 3 列）把 deleteBtn 按钮插入到这个单元格里

        totalIncome += income;
        totalExpense += expense;
    })
    //計算淨利
    totalProfit = totalIncome - totalExpense;
    //更新數字
    document.getElementById('plusNum').innerText = totalIncome;
    document.getElementById('neNum').innerText = totalExpense;
    document.getElementById('netIncome').innerText = totalProfit;
}
    
//刪除紀錄
function deleteRecord(index) {
    console.log('index:',index);
    mainObject.splice(index, 1);
    updateTable();
}

//彈跳視窗_關閉
function closePopup(){
    //彈跳視窗＿關閉
    document.getElementById('popup').style.display = 'none';
    let newIncome =document.getElementById('popupIncome').value = "";
    let newＥxpense = document.getElementById('popupExpense').value = "";
    //歸零
    console.log('newIncome:',newIncome);
    console.log('newＥxpense:',newＥxpense);
    console.log("newItem:",newItem);
    console.log("mainObject:",mainObject);
}
