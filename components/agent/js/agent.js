var AgentName = document.getElementById('AgentName');
var AgentEmail = document.getElementById('AgentEmail');
var AgentPassword = document.getElementById('AgentPassword');
var AgentConfirm = document.getElementById('AgentConfirm');
var AgentPhone = document.getElementById('AgentPhone');
var agentContainer;
var EditList;
function addAgent() {
    var postData = {
        Name: AgentName.value,
        Email: AgentEmail.value,
        Password: AgentPassword.value,
        Password_confirmation: AgentConfirm.value,
        PhoneNumber: AgentPhone.value,
        shipping_id: JSON.parse(localStorage.getItem('CurrentUser')).id,
    };
    console.log(postData);
    // agents-create
    const apiUrl = `${localStorage.getItem('API')}/agents-create`;
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
    };
    fetch(apiUrl, requestOptions).then((response) => {
        console.log(response);
        location.href = 'http://127.0.0.1:5502/components/agent/agent.html';
    });
}
(function displayAgent() {
    let agent = fetch(`${localStorage.getItem('API')}/ShippingAgent/${JSON.parse(localStorage.getItem('CurrentUser')).id}`)
        .then((response) => {
            return response.json();
        })
        .then((agent) => {
            var AgentList = '';
            for (var i = 0; i < agent.length; i++) {
                AgentList += `
            <tr>
                    <td>${agent[i].Name}</td>
                    <td>${agent[i].Email}</td>
                    <td>${agent[i].PhoneNumber}</td>
                    <td>
                    <button class="btn btn-danger h-25 my-0" onclick="update(${i})"> Update </button>
                </td>
                <td>
                    <button class="btn btn-danger h-25 my-0" onclick="deleteRow(${agent[i].id})"> Delete </button>
                </td>
            </tr>`;
            }
            document.getElementById('tBody').innerHTML = AgentList;
        });
})();
//  agents/destroy/{id};

function deleteRow(id) {
    fetch(`${localStorage.getItem('API')}/agents/destroy/${id}`).then((response) => {
        location.href = 'http://127.0.0.1:5502/components/agent/agent.html';
    });
}
