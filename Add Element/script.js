
// $(function(){});// JQuery on ready long form

// $(() => {}); // JQuery on ready short form

//J-QUERY

// $(() => {
//     let result = $('#result');

//     $('#add').on('click', () => {
//         let tds = $('td');
//         console.log(tds);

//         for (let index = 0; index <tds.length; index++){
//             let td = $(tds[index]);
//             // td.append( "<button>Button "+ index + "</button>" )
//             let button = document.createElement("button");
//             button.innerHTML = `Button #${index+1}`;
//             button.addEventListener('click', ()=>{
//                 result.text(`Hi, I'am button #${index+1}`)
//             })


//             td.append(button);


//         }
//         $('#add').remove();
//     })

// });

//Java Script
document.addEventListener('DOMContentLoaded', (event) => {

    let result = document.getElementById('result');

    document.getElementById('add').addEventListener('click', (event) => {
        let tds = document.getElementsByTagName('td');
        console.log(tds);

        for (let index = 0; index < tds.length; index++) {
            let td = tds[index];
            console.log(td);

            let button = document.createElement('button');
            button.innerHTML = `Button #${index + 1}`;
            button.addEventListener('click', (event) => {
                result.innerHTML = `Hello I am button #${index + 1}`;
            })

            td.appendChild(button);

        }


    })

});
