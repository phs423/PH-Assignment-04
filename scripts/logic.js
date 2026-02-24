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

let interviewList = [];
let rejectList = [];

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



const mainContainer = document.querySelector('main');
mainContainer.addEventListener('click', function (event) {
    const parentNode = event.target.parentNode.parentNode;
    const companyName = parentNode.querySelector('.companyName').innerText;
    const jobCat = parentNode.querySelector('.jobCat').innerText;
    const jobType = parentNode.querySelector('.jobType').innerText;
    const statuss = parentNode.querySelector('.statuss').innerText;
    const descrpt = parentNode.querySelector('.descrpt').innerText;

    const cardInfo = {
        companyName,
        jobCat,
        jobType,
        statuss,
        descrpt
    }
    const companyExist = interviewList.find(item => item.companyName == cardInfo.companyName)
    if(!companyExist){
        interviewList.push(cardInfo)
    }
    
})

