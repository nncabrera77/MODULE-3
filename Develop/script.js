// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function () {


  // TODO: Get user input to create and return an array of employee objects
  const employees = [];
  let continueAdding = true;
  while (continueAdding) {
    const firstName = prompt("Enter the First Name");
    const lastName = prompt("Enter the Last Name");
    let salary = prompt("Enter Salary Amount");
    if (isNaN(salary)) {
      salary = 0;
    }
    else {
      salary = Number(salary)
    }
    employees.push({ firstname, lastname, salary });
    continueAdding = confirm("DO you want to add another employee?");

  }
  return employees;
}


// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  const totalSalary = employees.reduce((sum, employee) => sum + employee.salary, 0);
  const averageSalary=(employees.length >0)?(totalSalary/employees.length):0;
  console.log(`average Salary;$${averageSalary.toFixed(2)}`);
  console.log(`number of Employees:${employees.length}`);
  


  

}



// Select a random employee
const getRandomEmployee = function (employeesArray){

}
  // TODO: Select and display a random employee
  if(employees.length===0){
    console.log("noemployeesfound");
    return;
}
  const randomIndex=Math.floor(math.random()*employees.length);
  const randomEmployee=employees[randomIndex];
  console.log(`randomEmployees:${randomEmployee.firstName} ${randomEmployee.lastName}`)
 
  



/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table tbody');
  tableBody.InnerHTML="";
  
  
 
  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
