

import { participantTemplate, successTemplate } from './Templates.js';

// initial
let participantCount = 1;

//
// function participantTemplate(count) {
//     return `
//         <section class="participant${count}">
//             <p>Participant ${count}</p>
//             <div class="item">
//                 <label for="fname${count}"> First Name<span>*</span></label>
//                 <input id="fname${count}" type="text" name="fname${count}" value="" required />
//             </div>
//             <div class="item activities">
//                 <label for="activity${count}">Activity #<span>*</span></label>
//                 <input id="activity${count}" type="text" name="activity${count}" />
//             </div>
//             <div class="item">
//                 <label for="fee${count}">Fee ($)<span>*</span></label>
//                 <input id="fee${count}" type="number" name="fee${count}" />
//             </div>
//             <div class="item">
//                 <label for="date${count}">Desired Date <span>*</span></label>
//                 <input id="date${count}" type="date" name="date${count}" />
//             </div>
//             <div class="item">
//                 <p>Grade</p>
//                 <select>
//                     <option selected value="" disabled selected></option>
//                     <option value="1">1st</option>
//                     <option value="2">2nd</option>
//                     <option value="3">3rd</option>
//                     <option value="4">4th</option>
//                     <option value="5">5th</option>
//                     <option value="6">6th</option>
//                     <option value="7">7th</option>
//                     <option value="8">8th</option>
//                     <option value="9">9th</option>
//                     <option value="10">10th</option>
//                     <option value="11">11th</option>
//                     <option value="12">12th</option>
//                 </select>
//             </div>
//         </section>
//     `;
// }

// Add Participant Implementation
document.getElementById('add').addEventListener('click', function() {
    participantCount++;
    const newParticipant = participantTemplate(participantCount);
    this.insertAdjacentHTML('beforebegin', newParticipant);
});

document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  form.addEventListener('submit', submitForm);
});




//Submit Form plan
//05 Submit Form Implementation
function submitForm(event) {
  event.preventDefault();
  
  const adultName = document.getElementById('adult_name').value;
  const totalFee = totalFees();
  const participantCount = document.querySelectorAll("[id^=fee]").length;
  
  displaySummary(adultName, participantCount, totalFee);
  hideForm();
  showSummary();
}

function totalFees() {
  let feeElements = document.querySelectorAll("[id^=fee]");
  feeElements = [...feeElements];
  
  return feeElements.reduce((total, feeInput) => {
      return total + (parseFloat(feeInput.value) || 0);
  }, 0);
}

// function successTemplate(info) {
//   return `Thank you ${info.name} for registering. You have registered ${info.participants} participants and owe $${info.fees} in Fees.`;
// }

function displaySummary(name, participants, fees) {
  const summaryElement = document.getElementById('summary');
  const message = successTemplate({ name, participants, fees });
  summaryElement.textContent = message;
}

function hideForm() {
  document.querySelector('form').style.display = 'none';
}

function showSummary() {
  document.getElementById('summary').style.display = 'block';
}