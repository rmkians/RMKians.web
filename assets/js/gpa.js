const add = document.querySelector("#add");
const courseCode = document.querySelector("#course-code");
const grade = document.querySelector("#grade");
const unitLoad = document.querySelector("#credit");
const tbody = document.querySelector("#tbody");
const tfoot = document.querySelector("#tfoot");
const table = document.querySelector("#table");
const calcgpa = document.querySelector("#calculate-gpa");
const clear = document.querySelector("#clear");
let gpArry = [];
add.addEventListener("click", () => {
  if (
    courseCode.value === "" ||
    unitLoad.value <= 0 ||
    grade.selectedIndex === 0
  ) {
    alert("Input is empty. Enter all Inputs");
  } else {
    const tr = document.createElement("tr");
    const tdCourseCode = document.createElement("td");
    tdCourseCode.innerHTML = courseCode.value;
    const tdGrade = document.createElement("td");
    tdGrade.innerHTML = grade.options[grade.selectedIndex].text;
    const tdUnitLoad = document.createElement("td");
    tdUnitLoad.innerHTML = unitLoad.value;
    tr.appendChild(tdCourseCode);
    tr.appendChild(tdGrade);
    tr.appendChild(tdUnitLoad);
    tbody.appendChild(tr);
    table.classList.remove("display-none");
    calcgpa.classList.remove("display-none");
    clear.classList.remove("display-none");
    gpArry.push({
      unitLoad: unitLoad.value,
      grade: grade.options[grade.selectedIndex].value,
    });
    console.log(gpArry);
    courseCode.value = "";
    grade.selectedIndex = "0";
    unitLoad.value = "";
  }
});

calcgpa.addEventListener("click", () => {
  let unitLoads = 0,
    productOfUnitLoadsAndGrades = 0,
    sumOfProductOfUnitLoadsAndGrades = 0;

  gpArry.forEach((result) => {
    unitLoads += parseInt(result.unitLoad);
    productOfUnitLoadsAndGrades =
      parseInt(result.unitLoad) * parseInt(result.grade);
    sumOfProductOfUnitLoadsAndGrades += productOfUnitLoadsAndGrades;
  });
  const tr = document.createElement("tr");

  tdTotalUnitLoad = document.createElement("td");
  tdTotalUnitLoad.innerHTML = `Total Credits Earned = ${unitLoads}`;

  tdGpa = document.createElement("td");
  tdGpa.setAttribute("colspan", "2");
  tdGpa.innerHTML = `GPA = ${(
    sumOfProductOfUnitLoadsAndGrades / unitLoads
  ).toFixed(2)} `;

  tr.appendChild(tdTotalUnitLoad);
  tr.appendChild(tdGpa);
    if (tfoot.querySelector("tr") !== null) {
        tfoot.querySelector("tr").remove();
    }
  tfoot.appendChild(tr);
});
clear.addEventListener("click", () => {
  gpArry = [];
  tbody.querySelectorAll("*").forEach((child) => child.remove());
  if (tfoot.querySelector("tr") !== null) {
    tfoot.querySelector("tr").remove();
  }
  table.classList.add("display-none");
  calcgpa.classList.add("display-none");
  clear.classList.add("display-none");
});