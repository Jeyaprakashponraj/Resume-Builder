document.getElementById("savebtn").addEventListener("click", () => {
   
    const resumeData = {
        name : document.getElementById("fname").value,
        role : document.getElementById("role").value,
       
        phone : parseInt(document.getElementById("phone").value),
        email : document.getElementById("email").value,
        link : document.getElementById("link").value,
        github : document.getElementById("git").value,
        address : document.getElementById("add").value,
        technical : document.getElementById("tech").value,
        soft : document.getElementById("soft").value,
        Degree : document.getElementById("degree").value,
        college : document.getElementById("col").value,
        percentage :parseFloat( document.getElementById("per").value),
        obj : document.getElementById("obj").value,
        title : document.getElementById("title1").value,
        projectDes : document.getElementById("des").value,
        certification : document.getElementById("certification").value,
        company : document.getElementById("com").value,
        // techskill2 : document.getElementById("techskill1").value,
        // softskill2 : document.getElementById("softskill1").value,
        jobDes : document.getElementById("jdes").value
    }
    const fileInput = document.getElementById("file");
    
    // Check if a file is selected
    if (fileInput.files.length > 0) {
        const reader = new FileReader();
        reader.onload = function (e) {
            resumeData.image = e.target.result;
            localStorage.setItem('resumeData', JSON.stringify(resumeData));

            console.log("Resume data saved successfully");
        };
       
        reader.readAsDataURL(fileInput.files[0]);
    } else {
        localStorage.setItem('resumeData', JSON.stringify(resumeData));
    }

    localStorage.setItem('resumeData',JSON.stringify(resumeData));
    console.log("Resume data saved successfully")
});


document.getElementById("genbtn").addEventListener("click", () => {
    // Retrieve data from localStorage
    const storedData = localStorage.getItem('resumeData');
    const resumeData = JSON.parse(storedData);

    if (resumeData) {
        const gen = window.open("", "_blank");
        // Display name
        const resumePage = gen.document.createElement("div");
        resumePage.innerHTML = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" type="text/css" href="./style.css">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        </head>
        <body class="body1">
            <div class="container con1" >
                <div class="text-center">
                    <h1>${resumeData.name}</h1>
                    <h4>${resumeData.role}</h4>
                    <hr>
                </div>
                <div class="row">
                    <div class="col-12 col-md-12 col-sm-12 col-lg-5 content1">
                        <img class="img" src='${resumeData.image}'>
                        <h2>Contact Details</h2>
                        <h6>Phone : ${resumeData.phone}</h6>
                        <h6>Email : ${resumeData.email}</h6>
                        <h6>Linked In : ${resumeData.link}</h6>
                        <h6>Github : ${resumeData.github}</h6>
                        <h6>Address : ${resumeData.address}</h6>
                        <hr>
                        <br>
                        <h2>Technical Skills</h2>
                        <ul>
                            <li> ${resumeData.technical}</li>
                            
                        </ul>
                        <hr>
                        <br>
                        <h2>Soft Skills</h2>
                        <ul>
                            <li>${resumeData.soft}</li>
                            
                        </ul>
                    </div>
                    
                    <div class="col-12 col-md-12 col-sm-12 col-lg-7 content2">
                        <h2>Objective</h2>
                        <h6>${resumeData.obj}</h6>
                        <hr>
                        <br>
                        <h2>Education</h2>
                        <h6>Degree : ${resumeData.degree}</h6>
                        <h6>College : ${resumeData.college}</h6>
                        <h6>Percentage : ${resumeData.percentage}</h6>
                        <hr>
                        <br>
                        <h2>Projects</h2>
                        <h6>Title: ${resumeData.title}</h6>
                        <h6>Description : ${resumeData.projectDes}</h6>
                        <hr>
                        <br>
                        <h2>Certification</h2>
                        <ul>
                            <li>${resumeData.certification}</li>
                        </ul>
                        <hr>
                        <br>
                        <h2>Work Experience</h2>
                        <h6>Company Name : ${resumeData.company}</h6>
                        <h6>Job Description : ${resumeData.jobDes}</h6>
                        
                    </div>
                </div>
                <hr>
                <div class="text-center">
                    <button class="btn btn-primary" id="print">Print</button>
                </div>
            </div>
            <script>
                function printResume() {
                    window.print();
                }
                document.getElementById("print").addEventListener("click", printResume);
            </script>
        </body>
        </html>`;
        gen.document.body.appendChild(resumePage);
    }
});


//add technicalskills
document.getElementById("addTech").addEventListener("click", () => {
    let inputContainer = document.getElementById("technicSkill");
    let input = document.createElement("input");
  
    input.type = "text";
    input.placeholder = "Enter a technical skill";
    input.id = "techskill1"
    inputContainer.appendChild(input);

    let removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => {
        // Remove the entire set of inputs when the "Remove" button is clicked
        inputContainer.removeChild(input);
        inputContainer.removeChild(removeButton);
    });
    inputContainer.appendChild(removeButton);
});

///add soft skill
document.getElementById("addSoft").addEventListener("click", () => {
    let inputContainer = document.getElementById("softSkill");
    let input = document.createElement("input");
    input.type = "text";
   
    input.id = "softskill1"
    input.placeholder = "Enter a soft skill";
    inputContainer.appendChild(input);

    let removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => {
        // Remove the entire set of inputs when the "Remove" button is clicked
        inputContainer.removeChild(input);
        inputContainer.removeChild(removeButton);
    });
    inputContainer.appendChild(removeButton);
});

//add certification
document.getElementById("addCer").addEventListener("click", () => {
    let inputContainer = document.getElementById("certi");
    let input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Enter a certification";
    inputContainer.appendChild(input);

    let removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => {
        // Remove the entire set of inputs when the "Remove" button is clicked
        inputContainer.removeChild(input);
        inputContainer.removeChild(removeButton);
    });
    inputContainer.appendChild(removeButton);
});

