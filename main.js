// create card
const createCard = (obj) => {
    let employeeHTML =  `
        <article class="employee">
            <header class="employee__name">
                <h1>${obj.name}</h1>
            </header>
            <section class="employee__department">
                Works in the ${obj.department.name} department
            </section>
            <section class="employee__computer">
                Currently using a ${obj.computer.name}
            </section>
        </article>
    `;

    document.querySelector("#container").innerHTML += employeeHTML;
};

// call employee database
const getEmployees = (empId) => {
    return fetch(`http://localhost:8088/employees/${empId}?_expand=computer&_expand=department`)
    .then(response => response.json())
}

for (let i = 1; i < 6; i++) {
    getEmployees(i).then(obj => {
        createCard(obj);
    });
}