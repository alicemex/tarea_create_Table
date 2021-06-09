var parentTable = document.getElementById("users-table");
var redes = document.getElementById("redes");



function createTable(a) {

    for (let i = 0; i < a.length; i++) {
        if (a[i].email.endsWith("@academlo.com")) {
            for (var j = 0; j < a[i].social.length; j++) {
                //  console.log("for del social")
                var red = a[i].social[j].url;
                /*     redes.innerHTML += `           
                    <td>${red} </td>`;

                    console.log(red); */

                parentTable.innerHTML += `<tr>
                <td>${a[i].name} </td>
                <td>${a[i].age} </td>
                <td>${a[i].email} </td>
                                                 
                <td>${a[i].gender} </td>  
                <td>${a[i].social[j].url} </td>
                </tr>`;
            }



            // let tr = document.createElement("tr");
            // let td = document.createElement("td");
            // tr.setAttribute("id", "tr");
            // td.setAttribute("id", "td");
            // tr.innerText = a[i].name;
            // parentTable.appendChild(tr);
        }
    }
}


let students = ([{
        name: "Erikc",
        age: 29,
        email: "erik@academlo.com",
        social: [
            { name: "facebook", url: "facebook/erik" },
            { name: "twitter", url: "twitter/erik" }
        ],
        gender: "Male"
    },
    {
        name: "Georg",
        age: 33,
        email: "georg@academlo.com",
        social: [
            { name: "facebook", url: "facebook/georg" },
            { name: "twitter", url: "twitter/georg" }
        ],
        gender: "Male"
    },
    {
        name: "Andrea",
        age: 42,
        email: "andrea@hotmail.com",
        social: [
            { name: "facebook", url: "facebook/andrea" },
            { name: "twitter", url: "twitter/andrea" }
        ],
        gender: "Female"
    },
    {
        name: "Oscar",
        age: 31,
        email: "oscar@academlo.com",
        social: [
            { name: "facebook", url: "facebook/oscar" },
            { name: "twitter", url: "twiter/oscar" }
        ],
        gender: "Male"
    },
    {
        name: "Daniela",
        age: 22,
        email: "andrea@uaq.mx",
        social: [
            { name: "facebook", url: "facebook/andrea" },
            { name: "twitter", url: "twitter/andrea" }
        ],
        gender: "Female"
    }
]);