const mainEle=document.querySelector("main");
    // Create a container div
    const container = document.createElement("div");
    mainEle.appendChild(container);

    // Create textboxes and labels for name, age, and qualification
    const nameLabel = document.createElement("label");
    nameLabel.textContent = "Name:";
    container.appendChild(nameLabel);

    const nameTextbox = document.createElement("input");
    nameTextbox.type = "text";
    nameTextbox.placeholder = "Enter your name";
    container.appendChild(nameTextbox);

    container.appendChild(document.createElement("br"));
// age
    const ageLabel = document.createElement("label");
    ageLabel.textContent = "Age:";
    container.appendChild(ageLabel);

    const ageTextbox = document.createElement("input");
    ageTextbox.type = "text";
    ageTextbox.placeholder = "Enter your age";
    container.appendChild(ageTextbox);

    container.appendChild(document.createElement("br"));
//qualification
    const qualificationLabel = document.createElement("label");
    qualificationLabel.textContent = "Qualification:";
    container.appendChild(qualificationLabel);

    const qualificationTextbox = document.createElement("input");
    qualificationTextbox.type = "text";
    qualificationTextbox.placeholder = "Enter your qualification";
    container.appendChild(qualificationTextbox);
   
    const tableele=document.querySelector("table");
    const tablebody=document.querySelector("tbody");
     var count = 0;
    const submitBut=document.getElementById("submitButton");
    submitBut.addEventListener("click",()=>{
        const tabrow=document.createElement('tr');
        const nameTab=document.createElement('td');
        const agetab=document.createElement('td');
        const quatab=document.createElement('td');

        nameTab.innerText=nameTextbox.value;
        agetab.innerText=ageTextbox.value;
        quatab.innerText=qualificationTextbox.value;
        count++;

        tabrow.append(count,nameTab,agetab, quatab);
        tablebody.append(tabrow)

    })



    function resetInput(){

        nameTextbox.value = '';
        ageTextbox.value = '';
        qualificationTextbox.value='';
    }