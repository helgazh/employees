;
(function () {

    const tmpl = document.querySelector('#tmpl').innerHTML;
    const div = document.querySelector('#employeeList');
    const xhr = new XMLHttpRequest();

    xhr.open('GET', './data/employees.json');
    xhr.send();
    xhr.onload = function(){
        let object
        
        object = JSON.parse(this.response);

        inHTML = '';

        //check mas
        object.forEach(function(employees) {
        //in    
            if(employees.inoffice === true){
            inHTML += tmpl.replace(/{{status}}/ig, "in")
            .replace(/{{name}}/ig, employees.name)
            .replace(/{{class}}/ig, "in");
        }
        //out
            else if(employees.inoffice === false){
            inHTML += tmpl.replace(/{{status}}/ig, "out")
            .replace(/{{name}}/ig, employees.name)
            .replace(/{{class}}/ig, "out");
            
        }
    });
        //code to html        
        div.innerHTML = inHTML; 

       
         
    }
    
    
    
})();