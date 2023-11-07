import { Link } from "react-router-dom";

export default function Step1({onStepChange, form, setForm}) {
    onStepChange(1);
    
    function onFormChange(event) {
        let target = event.target;
        setForm({
            ...form,
            [target.name]: target.value,
        })
    }

    function validateForm() {
        if(!form.name)
            document.getElementById("name-alert").style.display = "block";
        else
            document.getElementById("name-alert").style.display = "none";
        if(!form.email)
            document.getElementById("email-alert").style.display = "block";
        else
            document.getElementById("email-alert").style.display = "none";
        if(!form.number)
            document.getElementById("number-alert").style.display = "block";
        else
            document.getElementById("number-alert").style.display = "none";
    }
    return(
        <>
            <section className="step">
                <div class= "step-container">
        
                    <h3>Personal info</h3>
                    <h5>Please provide your name, email address, and phone number.</h5>
        
                    <form name ="form">
        
                        <label>
                            <p>
                                Name 
                                <span class= "alert" id= "name-alert">This field is required</span> 
                            </p>
                            <input onChange={(e) => onFormChange(e)} type= "name" name= "name" placeholder= "e.g. Stephen King" value={form.name}/>
                        </label>
        
                        <label>
                            <p>
                            Email Address 
                            <span class= "alert" id= "email-alert">This field is required</span>
                            </p>
                            <input onChange={(e) => onFormChange(e)} type= "email" name= "email" placeholder= "e.g. stephenking@lorem.com" value={form.email}/>
                        </label>
        
                        <label>
                        <p>
                            Phone Number
                            <span class= "alert" id= "number-alert">This field is required</span></p>
                            <input onChange={(e) => onFormChange(e)} type= "number" name= "number" placeholder= "e.g. +1 234 567 890" value={form.number}/>
                        </label>
                    
                        
                        
                    </form>
                </div>

                <Link 
                    className="btn show" 
                    to={form.name && form.email && form.number ? "/steps/Step-2" : ""}
                    onClick={() => validateForm()}
                    >
                    Next step
                </Link>
            </section>

            <div className="mobile-btns hide">
                <Link 
                    className="btn" 
                    to={form.name && form.email && form.number ? "/steps/Step-2" : ""}
                    >
                    Next step
                </Link>
            </div>

        </>
        );
}