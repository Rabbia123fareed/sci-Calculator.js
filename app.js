function getNum(num) {
    // console.log(num)
     document.getElementById('result').value += num;
    }
function clearResult() {
    // console.log('')
     document.getElementById('result').value = '';
}
function removeNum() {
    let res = document.getElementById('result').value;
    document.getElementById('result').value = document.getElementById('result').value.slice(0, res.length - 1)
}
function getResult() {
    // console.log("result")
     document.getElementById('result').value = eval(document.getElementById('result').value)
}