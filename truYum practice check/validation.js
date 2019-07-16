         function validateForm()
		 {		 
											  var name=document.forms["form"]["name"].value;
                                                var price=document.forms["form"]["price"].value;
                                                
                                                var dol=document.forms["form"]["dol"].value;
                                                
                                         
                                                var submit =document.forms["form"]["submit"].value;
                                               
                                                
            if (name=="" || name==null)
            {
                alert("Name cannot be empty");
                return false;
            }
           if (gross=="" || gross==null)
            {
                alert("price cannot be empty");
                return false;
            }
          if (dol=="" || dol==null)
            {
                alert("date of launch cannot be empty");
                return false;
            }
		  
             if(submit=="submit"){
                   alert("Detailed submitted sucessfully");
               }
           
		 }

