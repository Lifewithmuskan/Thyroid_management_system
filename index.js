// function printFilledFields() {
//     // Get all form input values
//     let name = document.querySelector("#name")?.value || "N/A";
//     let age = document.querySelector("#age")?.value || "N/A";
    
//     // Get selected gender
//     let gender = document.querySelector("input[name='gender']:checked")?.value || "N/A";

//     // Get Alcohol Consumption choice
//     let alcoholChoice = document.querySelector("input[name='alcohol']:checked")?.value || "N/A";

//     // Get Smoking choice
//     let smokingChoice = document.querySelector("input[name='smoking']:checked")?.value || "N/A";

//     // Get address, contact, and other fields if available
//     let address = document.querySelector("#address")?.value || "N/A";
//     let contact = document.querySelector("#contact")?.value || "N/A";
//     let email = document.querySelector("#email")?.value || "N/A";
    
//     // Get Thyroid Condition
//     let selectedCondition = document.getElementById("condition").value;
    
//     let conditionText = "";
//     if (selectedCondition === "hypothyroidism") {
//         conditionText = "Hypothyroidism\n";
//         document.querySelectorAll("#hypothyroidism input[type='checkbox']:checked").forEach(symptom => {
//             conditionText += "  - " + symptom.value + "\n";
//         });
//     } else if (selectedCondition === "hyperthyroidism") {
//         conditionText = "Hyperthyroidism\n";
//         document.querySelectorAll("#hyperthyroidism input[type='checkbox']:checked").forEach(symptom => {
//             conditionText += "  - " + symptom.value + "\n";
//         });
//     } else {
//         conditionText = "No thyroid condition selected.";
//     }

//     // Generate the print content
//     let printContent = `
//         <html>
//         <head>
//             <title>Print Form</title>
//             <style>
//                 body { font-family: Arial, sans-serif; background: white; padding: 20px; }
//                 .form-container { width: 60%; margin: auto; padding: 20px; background: white; border-radius: 10px; box-shadow: 0px 0px 10px gray; }
//                 label { font-weight: bold; display: block; margin-top: 10px; }
//                 pre { font-size: 16px; }
//                 @media print { 
//                     body { background: white; }
//                     .form-container { box-shadow: none; width: 100%; }
//                     button { display: none; } /* Hide print button */
//                 }
//             </style>
//         </head>
//         <body>
//             <div class='form-container'>
//                 <h2>Patient Information</h2>
//                 <p><strong>Name:</strong> ${name}</p>
//                 <p><strong>Age:</strong> ${age}</p>
//                 <p><strong>Gender:</strong> ${gender}</p>
//                 <p><strong>Address:</strong> ${address}</p>
//                 <p><strong>Contact:</strong> ${contact}</p>
//                 <p><strong>Email:</strong> ${email}</p>
//                 <p><strong>Alcohol Consumption:</strong> ${alcoholChoice}</p>
//                 <p><strong>Smoking:</strong> ${smokingChoice}</p>
//                 <h2>Thyroid Conditions</h2>
//                 <pre>${conditionText}</pre>
//             </div>
//         </body>
//         </html>
//     `;

//     // Open print window and print
//     let printWindow = window.open("", "_blank");
//     printWindow.document.open();
//     printWindow.document.write(printContent);
//     printWindow.document.close();

//     // Wait for content to load before printing
//     setTimeout(() => {
//         printWindow.print();
//     }, 500);
// }


// function printFilledFields() {
//     let name = document.getElementById("name").value;
//     let age = document.getElementById("age").value;
    
//     // Get selected gender
//     let gender = document.querySelector("input[name='gender']:checked");

//     // Get Alcohol Consumption choice
//     let alcoholChoice = document.querySelector("input[name='alcohol']:checked");

//     // Get Smoking choice
//     let smokingChoice = document.querySelector("input[name='smoking']:checked");

//     // Get Thyroid Condition
//     let selectedCondition = document.getElementById("condition").value;
    
//     let conditionText = "";
//     if (selectedCondition === "hypothyroidism") {
//         conditionText = "Hypothyroidism\n";
//         document.querySelectorAll("#hypothyroidism input[type='checkbox']:checked").forEach(symptom => {
//             conditionText += "  - " + symptom.value + "\n";
//         });
//     } else if (selectedCondition === "hyperthyroidism") {
//         conditionText = "Hyperthyroidism\n";
//         document.querySelectorAll("#hyperthyroidism input[type='checkbox']:checked").forEach(symptom => {
//             conditionText += "  - " + symptom.value + "\n";
//         });
//     }

//     // Generate the print content
//     let printContent = `
//         <html>
//         <head>
//             <title>Print Form</title>
//             <style>
//                 body { font-family: Arial, sans-serif; background: white; padding: 20px; }
//                 .form-container { width: 60%; margin: auto; padding: 20px; background: white; border-radius: 10px; box-shadow: 0px 0px 10px gray; }
//                 label { font-weight: bold; display: block; margin-top: 10px; }
//                 pre { font-size: 16px; }
//                 @media print { 
//                     body { background: white; }
//                     .form-container { box-shadow: none; width: 100%; }
//                     button { display: none; } /* Hide print button */
//                 }
//             </style>
//         </head>
//         <body>
//             <div class='form-container'>
//                 <h2>Patient Information</h2>
//                 <p><strong>Name:</strong> ${name || "N/A"}</p>
//                 <p><strong>Age:</strong> ${age || "N/A"}</p>
//                 <p><strong>Gender:</strong> ${gender ? gender.value : "N/A"}</p>
//                 <p><strong>Alcohol Consumption:</strong> ${alcoholChoice ? alcoholChoice.value : "N/A"}</p>
//                 <p><strong>Smoking:</strong> ${smokingChoice ? smokingChoice.value : "N/A"}</p>
//                 <h2>Thyroid Conditions</h2>
//                 <pre>${conditionText || "No condition selected."}</pre>
//             </div>
//         </body>
//         </html>
//     `;

//     // Open print window and print
//     let printWindow = window.open("", "_blank");
//     printWindow.document.write(printContent);
//     printWindow.document.close();
//     printWindow.print();
// }


// function printFilledFields() {
//     let patientForm = document.getElementById("patientForm").cloneNode(true);
//     let selectedCondition = document.getElementById("condition").value;
    
//     let conditionText = ""; // Store the final thyroid condition text

//     if (selectedCondition === "hypothyroidism") {
//         conditionText = "Hypothyroidism\n";
//         let symptoms = document.querySelectorAll("#hypothyroidism input[type='checkbox']:checked");
//         symptoms.forEach(symptom => {
//             conditionText += "  " + symptom.value + "\n";
//         });
//     } else if (selectedCondition === "hyperthyroidism") {
//         conditionText = "Hyperthyroidism\n";
//         let symptoms = document.querySelectorAll("#hyperthyroidism input[type='checkbox']:checked");
//         symptoms.forEach(symptom => {
//             conditionText += "  " + symptom.value + "\n";
//         });
//     }

//     // Open a new window for printing
//     let printWindow = window.open("", "_blank");
//     printWindow.document.write(`
//         <html>
//         <head>
//             <title>Print Form</title>
//             <style>
//                 body { font-family: Arial, sans-serif; background: white; padding: 20px; }
//                 .form-container { width: 60%; margin: auto; padding: 20px; background: white; border-radius: 10px; box-shadow: 0px 0px 10px gray; }
//                 label { font-weight: bold; display: block; margin-top: 10px; }
//                 input, select, textarea { width: 100%; padding: 8px; margin-top: 5px; border-radius: 5px; border: 1px solid #ccc; }
//                 h2 { text-align: center; }
//                 pre { font-size: 16px; }
//                 @media print { 
//                     body { background: white; }
//                     .form-container { box-shadow: none; width: 100%; }
//                     button { display: none; } /* Hide print button */
//                 }
//             </style>
//         </head>
//         <body>
//             <div class='form-container'>
//                 <h2>Patient Information</h2>
//                 ${patientForm.innerHTML}
//                 <h2>Thyroid Conditions</h2>
//                 <pre>${conditionText}</pre>
//             </div>
//         </body>
//         </html>
//     `);
//     printWindow.document.close();
//     printWindow.print();
// }

// function printFilledFields() {
//     let name = document.querySelector("#name")?.value || "N/A";
//     let age = document.querySelector("#age")?.value || "N/A";
    
//     // Get selected gender
//     let gender = document.querySelector("input[name='gender']:checked")?.value || "N/A";

//     // Get Alcohol Consumption choice
//     let alcoholChoice = document.querySelector("input[name='alcohol']:checked")?.value || "N/A";

//     // Get Smoking choice
//     let smokingChoice = document.querySelector("input[name='smoking']:checked")?.value || "N/A";

//     // Get Thyroid Condition
//     let selectedCondition = document.getElementById("condition").value;
    
//     let conditionText = "";
//     if (selectedCondition === "hypothyroidism") {
//         conditionText = "Hypothyroidism\n";
//         document.querySelectorAll("#hypothyroidism input[type='checkbox']:checked").forEach(symptom => {
//             conditionText += "  - " + symptom.value + "\n";
//         });
//     } else if (selectedCondition === "hyperthyroidism") {
//         conditionText = "Hyperthyroidism\n";
//         document.querySelectorAll("#hyperthyroidism input[type='checkbox']:checked").forEach(symptom => {
//             conditionText += "  - " + symptom.value + "\n";
//         });
//     } else {
//         conditionText = "No thyroid condition selected.";
//     }

//     // Generate the print content
//     let printContent = `
//         <html>
//         <head>
//             <title>Print Form</title>
//             <style>
//                 body { font-family: Arial, sans-serif; background: white; padding: 20px; }
//                 .form-container { width: 60%; margin: auto; padding: 20px; background: white; border-radius: 10px; box-shadow: 0px 0px 10px gray; }
//                 label { font-weight: bold; display: block; margin-top: 10px; }
//                 pre { font-size: 16px; }
//                 @media print { 
//                     body { background: white; }
//                     .form-container { box-shadow: none; width: 100%; }
//                     button { display: none; } /* Hide print button */
//                 }
//             </style>
//         </head>
//         <body>
//             <div class='form-container'>
//                 <h2>Patient Information</h2>
//                 <p><strong>Name:</strong> ${name}</p>
//                 <p><strong>Age:</strong> ${age}</p>
//                 <p><strong>Gender:</strong> ${gender}</p>
//                 <p><strong>Alcohol Consumption:</strong> ${alcoholChoice}</p>
//                 <p><strong>Smoking:</strong> ${smokingChoice}</p>
//                 <h2>Thyroid Conditions</h2>
//                 <pre>${conditionText}</pre>
//             </div>
//         </body>
//         </html>
//     `;

//     // Open print window and print
//     let printWindow = window.open("", "_blank");
//     printWindow.document.open();
//     printWindow.document.write(printContent);
//     printWindow.document.close();

//     // Wait for content to load before printing
//     setTimeout(() => {
//         printWindow.print();
//     }, 500);
// }

// function printFilledFields() {
//     // Get all form field values
//     let name = document.querySelector("#name")?.value.trim() || "N/A";
//     let age = document.querySelector("#age")?.value.trim() || "N/A";
    
//     // Get selected gender
//     let genderElement = document.querySelector("input[name='gender']:checked");
//     let gender = genderElement ? genderElement.value : "N/A";

//     // Get Alcohol Consumption choice
//     let alcoholChoiceElement = document.querySelector("input[name='alcohol']:checked");
//     let alcoholChoice = alcoholChoiceElement ? alcoholChoiceElement.value : "N/A";

//     // Get Smoking choice
//     let smokingChoiceElement = document.querySelector("input[name='smoking']:checked");
//     let smokingChoice = smokingChoiceElement ? smokingChoiceElement.value : "N/A";

//     // Get Address, Contact, and Email fields
//     let address = document.querySelector("#address")?.value.trim() || "N/A";
//     let contact = document.querySelector("#contact")?.value.trim() || "N/A";
//     let email = document.querySelector("#email")?.value.trim() || "N/A";
    
//     // Get Thyroid Condition
//     let selectedCondition = document.getElementById("condition").value;
    
//     let conditionText = "";
//     if (selectedCondition === "hypothyroidism") {
//         conditionText = "<strong>Hypothyroidism</strong><br>";
//         document.querySelectorAll("#hypothyroidism input[type='checkbox']:checked").forEach(symptom => {
//             conditionText += "&nbsp;&nbsp;• " + symptom.value + "<br>";
//         });
//     } else if (selectedCondition === "hyperthyroidism") {
//         conditionText = "<strong>Hyperthyroidism</strong><br>";
//         document.querySelectorAll("#hyperthyroidism input[type='checkbox']:checked").forEach(symptom => {
//             conditionText += "&nbsp;&nbsp;• " + symptom.value + "<br>";
//         });
//     } else {
//         conditionText = "No thyroid condition selected.";
//     }

//     // Generate the print content
//     let printContent = `
//         <html>
//         <head>
//             <title>Print Form</title>
//             <style>
//                 body { font-family: Arial, sans-serif; background: white; padding: 20px; }
//                 .form-container { width: 60%; margin: auto; padding: 20px; background: white; border-radius: 10px; box-shadow: 0px 0px 10px gray; }
//                 label { font-weight: bold; display: block; margin-top: 10px; }
//                 p { margin: 5px 0; font-size: 16px; }
//                 .section-title { font-size: 18px; font-weight: bold; margin-top: 20px; border-bottom: 2px solid #000; padding-bottom: 5px; }
//                 .info-block { padding: 10px; margin-top: 10px; background: #f9f9f9; border-radius: 5px; }
//                 @media print { 
//                     body { background: white; }
//                     .form-container { box-shadow: none; width: 100%; }
//                     button { display: none; } /* Hide print button */
//                 }
//             </style>
//         </head>
//         <body>
//             <div class='form-container'>
//                 <h2 class="section-title">Patient Information</h2>
//                 <div class="info-block">
//                     <p><strong>Name:</strong> ${name}</p>
//                     <p><strong>Age:</strong> ${age}</p>
//                     <p><strong>Gender:</strong> ${gender}</p>
//                     <p><strong>Address:</strong> ${address}</p>
//                     <p><strong>Contact:</strong> ${contact}</p>
//                     <p><strong>Email:</strong> ${email}</p>
//                 </div>

//                 <h2 class="section-title">Lifestyle</h2>
//                 <div class="info-block">
//                     <p><strong>Alcohol Consumption:</strong> ${alcoholChoice}</p>
//                     <p><strong>Smoking:</strong> ${smokingChoice}</p>
//                 </div>

//                 <h2 class="section-title">Thyroid Conditions</h2>
//                 <div class="info-block">
//                     ${conditionText}
//                 </div>
//             </div>
//         </body>
//         </html>
//     `;

//     // Open print window and print
//     let printWindow = window.open("", "_blank");
//     printWindow.document.open();
//     printWindow.document.write(printContent);
//     printWindow.document.close();

//     // Wait for content to load before printing
//     setTimeout(() => {
//         printWindow.print();
//     }, 500);
// }



function printFilledFields() {
    // Get Full Name
    let firstName = document.querySelector("#firstName")?.value.trim() || "";
    let lastName = document.querySelector("#lastName")?.value.trim() || "";
    let fullName = firstName || lastName ? `${firstName} ${lastName}`.trim() : "Not Provided";

    // Get Age
    let age = document.querySelector("#age")?.value.trim() || "Not Provided";

    // Get Gender
    let gender = document.querySelector("#sex")?.value.trim() || "Not Provided";

    // Get Aadhar
    let aadhar = document.querySelector("#aadhar")?.value.trim() || "Not Provided";

    // Get Email
    let email = document.querySelector("#email")?.value.trim() || "Not Provided";

    // Get Address
    let address = document.querySelector("#address")?.value.trim() || "Not Provided";

    // Get Contact Number
    let mobile = document.querySelector("#mobile")?.value.trim() || "Not Provided";

    // Get Alcohol Consumption
    let alcoholChoice = document.querySelector("input[name='alcohol']:checked")?.value || "Not Provided";

    // Get Smoking Choice
    let smokingChoice = document.querySelector("input[name='smoking']:checked")?.value || "Not Provided";

    // Get Thyroid Condition
    let selectedCondition = document.getElementById("condition")?.value || "No thyroid condition selected.";
    
    let conditionText = "";
    if (selectedCondition === "hypothyroidism") {
        conditionText = "<strong>Hypothyroidism</strong><br>";
        document.querySelectorAll("#hypothyroidism input[type='checkbox']:checked").forEach(symptom => {
            conditionText += "&nbsp;&nbsp;• " + symptom.value + "<br>";
        });
    } else if (selectedCondition === "hyperthyroidism") {
        conditionText = "<strong>Hyperthyroidism</strong><br>";
        document.querySelectorAll("#hyperthyroidism input[type='checkbox']:checked").forEach(symptom => {
            conditionText += "&nbsp;&nbsp;• " + symptom.value + "<br>";
        });
    }

    // Generate the print content
    let printContent = `
        <html>
        <head>
            <title>Print Form</title>
            <style>
                body { font-family: Arial, sans-serif; background: white; padding: 20px; }
                .form-container { width: 60%; margin: auto; padding: 20px; background: white; border-radius: 10px; box-shadow: 0px 0px 10px gray; }
                label { font-weight: bold; display: block; margin-top: 10px; }
                p { margin: 5px 0; font-size: 16px; }
                .section-title { font-size: 18px; font-weight: bold; margin-top: 20px; border-bottom: 2px solid #000; padding-bottom: 5px; }
                .info-block { padding: 10px; margin-top: 10px; background: #f9f9f9; border-radius: 5px; }
                @media print { 
                    body { background: white; }
                    .form-container { box-shadow: none; width: 100%; }
                    button { display: none; } /* Hide print button */
                }
            </style>
        </head>
        <body>
            <div class='form-container'>
                <h2 class="section-title">Patient Information</h2>
                <div class="info-block">
                    <p><strong>Name:</strong> ${fullName}</p>
                    <p><strong>Age:</strong> ${age}</p>
                    <p><strong>Gender:</strong> ${gender}</p>
                    <p><strong>Aadhar:</strong> ${aadhar}</p>
                    <p><strong>Address:</strong> ${address}</p>
                    <p><strong>Contact:</strong> ${mobile}</p>
                    <p><strong>Email:</strong> ${email}</p>
                </div>

                <h2 class="section-title">Lifestyle</h2>
                <div class="info-block">
                    <p><strong>Alcohol Consumption:</strong> ${alcoholChoice}</p>
                    <p><strong>Smoking:</strong> ${smokingChoice}</p>
                </div>

                <h2 class="section-title">Thyroid Conditions</h2>
                <div class="info-block">
                    ${conditionText}
                </div>
            </div>
        </body>
        </html>
    `;

    // Open print window and print
    let printWindow = window.open("", "_blank");
    printWindow.document.open();
    printWindow.document.write(printContent);
    printWindow.document.close();

    // Wait for content to load before printing
    setTimeout(() => {
        printWindow.print();
    }, 500);
}


function toggleConditions() {
    var condition = document.getElementById("condition").value;
    var hypoSection = document.getElementById("hypothyroidism");
    var hyperSection = document.getElementById("hyperthyroidism");

    // Hide both sections initially
    hypoSection.style.display = "none";
    hyperSection.style.display = "none";

    // Show the selected section
    if (condition === "hypothyroidism") {
        hypoSection.style.display = "block";
    } else if (condition === "hyperthyroidism") {
        hyperSection.style.display = "block";
    }
}


