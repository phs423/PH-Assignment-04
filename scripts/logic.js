document.getElementById('all-btn').addEventListener('click', function () {
    document.getElementById('all-btn').classList.add('btn-cl');
    document.getElementById('inter-btn').classList.remove('btn-cl');
    document.getElementById('reject-btn').classList.remove('btn-cl');
})
document.getElementById('inter-btn').addEventListener('click', function () {
    document.getElementById('all-btn').classList.remove('btn-cl');
    document.getElementById('inter-btn').classList.add('btn-cl');
    document.getElementById('reject-btn').classList.remove('btn-cl');
})
document.getElementById('reject-btn').addEventListener('click', function () {
    document.getElementById('all-btn').classList.remove('btn-cl');
    document.getElementById('inter-btn').classList.remove('btn-cl');
    document.getElementById('reject-btn').classList.add('btn-cl');
})
document.getElementById('dlt').addEventListener('mouseover', function () {
    document.getElementById('dlt').classList.add('btn-cl');
})
document.getElementById('dlt').addEventListener('mouseout', function () {
    document.getElementById('dlt').classList.remove('btn-cl');
})


let total = document.getElementById('total');
let interCount = document.getElementById('interCount');
let rejectCount = document.getElementById('rejectCount');
const allCardSection = document.getElementById('allCards')
function calculateCount() {
    total.innerText = allCardSection.children.length;
    interCount.innerText = interviewList.length;
    rejectCount.innerText = rejectList.length;
}
calculateCount()

let interviewList = [];
let rejectList = [];


