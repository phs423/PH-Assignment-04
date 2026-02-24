

document.getElementById('inter-btn').addEventListener('click', function () {
    if (interviewList.length == 0) {
        document.getElementById('allCards').classList.add('hidden');
        document.getElementById('interviewSection').classList.remove('hidden');
        document.getElementById('rejectSection').classList.add('hidden');
        document.getElementById('noJobs1').classList.remove('hidden');
    }
    else {
        document.getElementById('allCards').classList.add('hidden');
        document.getElementById('interviewSection').classList.remove('hidden');
        document.getElementById('rejectSection').classList.add('hidden');
        document.getElementById('noJobs1').classList.add('hidden');
    }
    document.getElementById('all-btn').classList.remove('btn-cl');
    document.getElementById('inter-btn').classList.add('btn-cl');
    document.getElementById('reject-btn').classList.remove('btn-cl');
    document.getElementById('ac1').classList.add('hidden');
    document.getElementById('ac2').classList.remove('hidden');
    document.getElementById('ac3').classList.add('hidden');



    renderInterview();
})
document.getElementById('all-btn').addEventListener('click', function () {
    document.getElementById('allCards').classList.remove('hidden');
    document.getElementById('interviewSection').classList.add('hidden');
    document.getElementById('rejectSection').classList.add('hidden');
    document.getElementById('all-btn').classList.add('btn-cl');
    document.getElementById('inter-btn').classList.remove('btn-cl');
    document.getElementById('reject-btn').classList.remove('btn-cl');
    document.getElementById('ac1').classList.remove('hidden');
    document.getElementById('ac2').classList.add('hidden');
    document.getElementById('ac3').classList.add('hidden');
    document.getElementById('noJobs1').classList.add('hidden');

})
document.getElementById('reject-btn').addEventListener('click', function () {
    if (rejectList.length == 0) {
        document.getElementById('allCards').classList.add('hidden');
        document.getElementById('interviewSection').classList.add('hidden');
        document.getElementById('rejectSection').classList.add('hidden');
        document.getElementById('noJobs1').classList.remove('hidden');
    }
    else {
        document.getElementById('allCards').classList.add('hidden');
        document.getElementById('interviewSection').classList.add('hidden');
        document.getElementById('rejectSection').classList.remove('hidden');
        document.getElementById('noJobs1').classList.add('hidden');
    }
    document.getElementById('all-btn').classList.remove('btn-cl');
    document.getElementById('inter-btn').classList.remove('btn-cl');
    document.getElementById('reject-btn').classList.add('btn-cl');
    document.getElementById('ac1').classList.add('hidden');
    document.getElementById('ac2').classList.add('hidden');
    document.getElementById('ac3').classList.remove('hidden');


    renderRejected();
})



const interviewSection = document.getElementById('interviewSection');
const rejectSection = document.getElementById('rejectSection');
let interviewList = [];
let rejectList = [];
let currentStatus = 'all';

let total = document.getElementById('total');
let interCount = document.getElementById('interCount');
let rejectCount = document.getElementById('rejectCount');
let availCount = document.getElementById('availCount');
let availCount1 = document.getElementById('availCount1');
let availCount2 = document.getElementById('availCount2');
let availCountInter = document.getElementById('availCountInter');
let availCountReject = document.getElementById('availCountReject');

const allCardSection = document.getElementById('allCards')

function toggleStyle(id) {
    currentStatus = id;

}



function calculateCount() {
    total.innerText = allCardSection.children.length;
    availCount.innerText = allCardSection.children.length;
    availCount1.innerText = allCardSection.children.length;
    availCount2.innerText = allCardSection.children.length;
    interCount.innerText = interviewList.length;
    availCountInter.innerText = interviewList.length;
    rejectCount.innerText = rejectList.length;
    availCountReject.innerText = rejectList.length;

}
calculateCount()



const mainContainer = document.querySelector('main');
mainContainer.addEventListener('click', function (event) {

    if (event.target.classList.contains('interviewButton')) {
        const parentNode = event.target.parentNode.parentNode;
        const companyName = parentNode.querySelector('.companyName').innerText;
        const jobCat = parentNode.querySelector('.jobCat').innerText;
        const jobType = parentNode.querySelector('.jobType').innerText;
        const statuss = parentNode.querySelector('.statuss').innerText;
        const descrpt = parentNode.querySelector('.descrpt').innerText;

        parentNode.querySelector('.statuss').innerText = 'INTERVIEW';

        const cardInfo = {
            companyName,
            jobCat,
            jobType,
            statuss: 'INTERVIEW',
            descrpt
        }
        const companyExist = interviewList.find(item => item.companyName == cardInfo.companyName)

        if (!companyExist) {
            interviewList.push(cardInfo)
        }

        rejectList = rejectList.filter(item => item.companyName != cardInfo.companyName);

        if (currentStatus == 'reject-btn') {
            renderRejected();
        }

        calculateCount();


    }
    else if (event.target.classList.contains('rejectButton')) {
        const parentNode = event.target.parentNode.parentNode;
        const companyName = parentNode.querySelector('.companyName').innerText;
        const jobCat = parentNode.querySelector('.jobCat').innerText;
        const jobType = parentNode.querySelector('.jobType').innerText;
        const statuss = parentNode.querySelector('.statuss').innerText;
        const descrpt = parentNode.querySelector('.descrpt').innerText;

        parentNode.querySelector('.statuss').innerText = 'REJECTED';

        const cardInfo = {
            companyName,
            jobCat,
            jobType,
            statuss: 'REJECTED',
            descrpt
        }
        const companyExist = rejectList.find(item => item.companyName == cardInfo.companyName)

        if (!companyExist) {
            rejectList.push(cardInfo)
        }

        interviewList = interviewList.filter(item => item.companyName != cardInfo.companyName);

        if (currentStatus == 'inter-btn') {
            renderInterview();
        }

        calculateCount();

    }

})

function renderInterview() {
    interviewSection.innerHTML = '';
    for (let inter of interviewList) {
        console.log(inter);
        let div = document.createElement('div');
        div.className = 'bg-white p-6 rounded-xl mt-6 shadow space-y-2';
        div.innerHTML = `
            <div class="flex justify-between items-center">
                    <h2 class="companyName font-bold text-xl">${inter.companyName}</h2>
                    <button id="dlt" class="dlt rounded-full bg-blue-200 p-2"><i class="fa-regular fa-trash-can"></i></button>
                </div>
                <p class="jobCat text-[#64748B]">${inter.jobCat}</p>
                <p class="jobType text-[#64748B]">${inter.jobType}</p>
                <p class="statuss bg-blue-200 px-4 py-2 rounded font-semibold max-w-fit">${inter.statuss}</p>
                <p class="descrpt">${inter.descrpt}</p>
                <div class="flex gap-2 flex-wrap">
                    <button class="interviewButton border-2 border-green-600 px-4 py-2 rounded font-semibold text-green-600">INTERVIEW</button>
                    <button class="rejectButton border-2 border-red-600 px-4 py-2 rounded font-semibold text-red-600">REJECTED</button>
                </div>
        `;

        interviewSection.appendChild(div);
    }
}
function renderRejected() {
    rejectSection.innerHTML = '';
    for (let reject of rejectList) {
        console.log(reject);
        let div = document.createElement('div');
        div.className = 'bg-white p-6 rounded-xl mt-6 shadow space-y-2';
        div.innerHTML = `
            <div class="flex justify-between items-center">
                    <h2 class="companyName font-bold text-xl">${reject.companyName}</h2>
                    <button id="dlt" class="dlt rounded-full bg-blue-200 p-2"><i class="fa-regular fa-trash-can"></i></button>
                </div>
                <p class="jobCat text-[#64748B]">${reject.jobCat}</p>
                <p class="jobType text-[#64748B]">${reject.jobType}</p>
                <p class="statuss bg-blue-200 px-4 py-2 rounded font-semibold max-w-fit">${reject.statuss}</p>
                <p class="descrpt">${reject.descrpt}</p>
                <div class="flex gap-2 flex-wrap">
                    <button class="interviewButton border-2 border-green-600 px-4 py-2 rounded font-semibold text-green-600">INTERVIEW</button>
                    <button class="rejectButton border-2 border-red-600 px-4 py-2 rounded font-semibold text-red-600">REJECTED</button>
                </div>
        `;

        rejectSection.appendChild(div);
    }
}

