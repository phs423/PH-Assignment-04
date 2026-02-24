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


document.getElementById('inter-btn').addEventListener('click', function () {
    document.getElementById('allCards').classList.add('hidden');
    document.getElementById('interviewSection').classList.remove('hidden');
    document.getElementById('').classList.add('hidden');
})
document.getElementById('all-btn').addEventListener('click', function () {
    document.getElementById('allCards').classList.remove('hidden');
    document.getElementById('interviewSection').classList.add('hidden');
    document.getElementById('').classList.add('hidden');
})


// document.getElementById('dlt').addEventListener('mouseover', function () {
//     document.getElementById('dlt').classList.add('btn-cl');
// })
// document.getElementById('dlt').addEventListener('mouseout', function () {
//     document.getElementById('dlt').classList.remove('btn-cl');
// })





const interviewSection = document.getElementById('interviewSection');
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
        renderInterview();
    }

})

function renderInterview() {
    interviewSection.innerHTML = '';
    for (let inter of interviewList) {
        console.log(inter);
        let div = document.createElement('div');
        div.className = 'bg-white p-6 rounded-xl mt-6';
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
                    <button class="border-2 border-green-600 px-4 py-2 rounded font-semibold text-green-600">INTERVIEW</button>
                    <button class="border-2 border-red-600 px-4 py-2 rounded font-semibold text-red-600">REJECTED</button>
                </div>
        `;

        interviewSection.appendChild(div);
    }
}

