
let interviewList = [];
let rejectedList = [];

// select all count element
let totalCount = document.getElementById("total-count");
let interviewCount = document.getElementById("interview-count");
let rejectedCount = document.getElementById("rejected-count");
let availableJobCount = document.getElementById("available-job-count");

// section select
const allCardSection = document.getElementById("all-card-container");

// all count element 
const totalCard = allCardSection.children.length;

// select filter btn
const allFilterBtn = document.getElementById("all-filter-btn");
const interviewFilterBTn = document.getElementById("interview-filter-btn");
const rejectedFilterBtn = document.getElementById("rejected-filter-btn");

// count function
function calculateCount(){
    totalCount.innerText = totalCard;
    availableJobCount.innerText = totalCard;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
}
calculateCount()

// tab toggling
function togglingBtn(id){
    // class remove
    removeClass(allFilterBtn);
    removeClass(interviewFilterBTn);
    removeClass(rejectedFilterBtn);

    // class add 
    addClass(allFilterBtn);
    addClass(interviewFilterBTn);
    addClass(rejectedFilterBtn);

    const selected = document.getElementById(id);
    // class remove
    selected.classList.remove("bg-[#FFFFFF]","text-[#64748B]","border","border-[#F1F2F4]")
    selected.classList.add("bg-[#3B82F6]","text-[#FFFFFF]","border")
}
