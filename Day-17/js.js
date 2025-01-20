
// table 1
// task 1
const employees = [ 
    { id: 1, name: "John", age: 28, department: "HR" }, 
    { id: 2, name: "Jane", age: 34, department: "Finance" }, 
    { id: 3, name: "Mike", age: 25, department: "IT" }, 
    { id: 4, name: "Emma", age: 30, department: "Marketing" }, 
    { id: 5, name: "Chris", age: 40, department: "Operations" }, 
    { id: 6, name: "Sophia", age: 29, department: "HR" },
    { id: 7, name: "Daniel", age: 32, department: "Finance" }, 
    { id: 8, name: "Olivia", age: 27, department: "IT" }, 
    { id: 9, name: "Liam", age: 35, department: "Sales" }, 
    { id: 10, name: "Noah", age: 26, department: "Logistics" }, 
    ];
    
    const tablebody=document.getElementById('table_body1');

for (const x of employees) {
    console.log(x);
    tablebody.innerHTML+=`<tr>
        <td>${x.id}</td>
        <td>${x.name}</td>
        <td>${x.age}</td>
        <td>${x.department}</td>
    </tr>`;
}


// table 2
// task 2

const data = [ 
        { id: 1, name: "John", tasks: [ 
            { taskId: 101, description: "Complete report", status: "Pending" }, { taskId: 102, description: "Review code", status: "Completed" }, ], 
        }, 
        { id: 2, name: "Jane", tasks: [
            { taskId: 103, description: "Prepare slides", status: "In Progress" }, { taskId: 104, description: "Team meeting", status: "Pending" }, ], 
        }, 
    ];

    for (const y of data) {
        console.log(y);   
        for (const z of y.tasks) {
            console.log(z);   
            document.getElementById('table_body2').innerHTML+=`<tr>
            <td>${y.name}</td>
            <td>${z.description}</td>
            <td>${z.status}</td>
        </tr>`
        }

    }
    
    