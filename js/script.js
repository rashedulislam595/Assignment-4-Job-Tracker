
let interviewList = [];
let rejectedList = [];
let currentStatus = "all";

// select all count element
let totalCount = document.getElementById("total-count");
let interviewCount = document.getElementById("interview-count");
let rejectedCount = document.getElementById("rejected-count");
let availableJobCount = document.getElementById("available-job-count");

// section select
const allCardSection = document.getElementById("all-card-container");
const mainSection = document.querySelector("main");
const filterSection = document.getElementById("filter-section");


// all count element 
const totalCard = allCardSection.children.length;

// select filter btn
const allFilterBtn = document.getElementById("all-filter-btn");
const interviewFilterBTn = document.getElementById("interview-filter-btn");
const rejectedFilterBtn = document.getElementById("rejected-filter-btn");

// count function
function calculateCount() {
    totalCount.innerText = totalCard;
    availableJobCount.innerText = totalCard;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
}
calculateCount()

// tab toggling
function togglingBtn(id) {
    // class remove
    removeClass(allFilterBtn);
    removeClass(interviewFilterBTn);
    removeClass(rejectedFilterBtn);

    // class add 
    addClass(allFilterBtn);
    addClass(interviewFilterBTn);
    addClass(rejectedFilterBtn);

    const selected = document.getElementById(id);
    currentStatus = id ;

    // class remove
    selected.classList.remove("bg-[#FFFFFF]", "text-[#64748B]", "border", "border-[#F1F2F4]")
    selected.classList.add("bg-[#3B82F6]", "text-[#FFFFFF]", "border")


    if(id == "interview-filter-btn"){
        classAdd(allCardSection);
        classRemove(filterSection);
        renderInterview()
    }
    else if(id == "all-filter-btn"){
        classAdd(filterSection);
        classRemove(allCardSection)
    }
    else if(id == "rejected-filter-btn"){
        classAdd(allCardSection);
        classRemove(filterSection);
        renderRejected()
    }
}

// delegate
mainSection.addEventListener("click", function (event) {
    if (event.target.classList.contains("interview-btn")) {
        const parent = event.target.parentNode.parentNode;

        // parent value get 
        const companyName = parent.querySelector(".company-name").innerText;
        const jobPosition = parent.querySelector(".job-position").innerText;
        const typeSalary = parent.querySelector('.type-salary').innerText;
        // const jobStatus = parent.querySelector(".job-status").innerText;
        const description = parent.querySelector(".description").innerText;

        // set status
        const status = parent.querySelector(".job-status");

        status.innerText = "INTERVIEW"; 
        const jobStatus = status.innerText;
        
        status.className = "job-status text-[#FFFFFF] text-sm font-medium py-2 px-3 bg-[#10B981] w-[114px] rounded-sm mb-2"



        // value stor from object
        const jobCardInfo = {
            companyName,
            jobPosition,
            typeSalary,
            jobStatus,
            description
        }

        const companyExist = interviewList.find(item => item.companyName == jobCardInfo.companyName);

        if (!companyExist) {
            interviewList.push(jobCardInfo);
        }

        rejectedList = rejectedList.filter(item => item.companyName != jobCardInfo.companyName);

        if(currentStatus == "rejected-filter-btn"){
            renderRejected()
        }

        
        calculateCount()
    }
    else if (event.target.classList.contains("rejected-btn")) {
        const parent = event.target.parentNode.parentNode;

        // parent value get 
        const companyName = parent.querySelector(".company-name").innerText;
        const jobPosition = parent.querySelector(".job-position").innerText;
        const typeSalary = parent.querySelector('.type-salary').innerText;
        // const jobStatus = parent.querySelector(".job-status").innerText;
        const description = parent.querySelector(".description").innerText;

        // set status
        const status = parent.querySelector(".job-status");

        status.innerText = "REJECTED"; 
        const jobStatus = status.innerText;
        
        status.className = "job-status text-[#FFFFFF] text-sm font-medium py-2 px-3 bg-[#EF4444] w-[114px] rounded-sm mb-2"



        // value stor from object
        const jobCardInfo = {
            companyName,
            jobPosition,
            typeSalary,
            jobStatus,
            description
        }

        const companyExist = rejectedList.find(item => item.companyName == jobCardInfo.companyName);

        if (!companyExist) {
            rejectedList.push(jobCardInfo);
        }

        interviewList = interviewList.filter(item => item.companyName != jobCardInfo.companyName);

        if(currentStatus == "interview-filter-btn"){
            renderInterview()
        }

        calculateCount();
    }
})

function renderInterview() {
    filterSection.innerHTML = "";

    for (let interview of interviewList) {
        let div = document.createElement("div");
        div.className = "card border bg-[#FFFFFF] border-[#F1F2F4] p-6 rounded-lg mt-4 space-y-5";

        div.innerHTML = `
        <!-- card heading & delete btn container -->
                <div class="flex justify-between">
                    <!-- card title  -->
                    <div>
                        <h2 class="company-name text-lg font-semibold text-[#002C5C] mb-1">${interview.companyName}</h2>
                        <p class="job-position text-[#64748B]">${interview.jobPosition}</p>
                    </div>
                    <!-- delete btn -->
                    <div>
                        <button class="delete-btn"><i class="fa-regular fa-trash-can text-[#64748B]"></i></button>
                    </div>
                </div>
                <p class="type-salary text-[#64748B] text-sm">${interview.typeSalary}</p>
                <div>
                    <p class="job-status text-[#FFFFFF] text-sm font-medium py-2 px-3 bg-[#10B981] w-[114px] rounded-sm mb-2">${interview.jobStatus}</p>
                    <p class="description text-sm text-[#323B49]">${interview.description}</p>
                </div>
                <!-- button -->
                <div class="flex gap-2">
                    <button class="interview-btn py-2 px-3 border rounded-sm text-[#10B981] text-sm font-semibold ">INTERVIEW</button>
                    <button class="rejected-btn py-2 px-3 border rounded-sm text-[#EF4444] text-sm font-semibold ">REJECTED</button>
                </div>
        `
        filterSection.appendChild(div)
    }
}

function renderRejected() {
    filterSection.innerHTML = "";

    for (let rejected of rejectedList) {
        let div = document.createElement("div");
        div.className = "card border bg-[#FFFFFF] border-[#F1F2F4] p-6 rounded-lg mt-4 space-y-5";

        div.innerHTML = `
        <!-- card heading & delete btn container -->
                <div class="flex justify-between">
                    <!-- card title  -->
                    <div>
                        <h2 class="company-name text-lg font-semibold text-[#002C5C] mb-1">${rejected.companyName}</h2>
                        <p class="job-position text-[#64748B]">${rejected.jobPosition}</p>
                    </div>
                    <!-- delete btn -->
                    <div>
                        <button class="delete-btn"><i class="fa-regular fa-trash-can text-[#64748B]"></i></button>
                    </div>
                </div>
                <p class="type-salary text-[#64748B] text-sm">${rejected.typeSalary}</p>
                <div>
                    <p class="job-status text-[#FFFFFF] text-sm font-medium py-2 px-3 bg-[#EF4444] w-[114px] rounded-sm mb-2">${rejected.jobStatus}</p>
                    <p class="description text-sm text-[#323B49]">${rejected.description}</p>
                </div>
                <!-- button -->
                <div class="flex gap-2">
                    <button class="interview-btn py-2 px-3 border rounded-sm text-[#10B981] text-sm font-semibold ">INTERVIEW</button>
                    <button class="rejected-btn py-2 px-3 border rounded-sm text-[#EF4444] text-sm font-semibold ">REJECTED</button>
                </div>
        `
        filterSection.appendChild(div)
    }
}