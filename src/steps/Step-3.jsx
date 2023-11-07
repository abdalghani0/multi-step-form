import { Link } from "react-router-dom";
import { useState } from "react";

export default function Step3({onStepChange, duration, setAddons, addons}) {
    onStepChange(3);
    let prices = duration === "monthly" ? [1, 2, 2] : [10, 20, 20];

    function handleClick(event, i) {
        let el = event.target;
        el.classList.add("selected");
        if(el.checked){
            addons.push({ name: el.id, price: prices[i]});
            el.parentNode.classList.add("selected");
        }
        else {
            setAddons(addons.filter((a) => (a.name!==el.id)));
            el.parentNode.classList.remove("selected");
        }
        console.log(addons);
    }
    return(
        <>
            <section className="step">
                <div class= "step-container">
                    <h3>Pick add-ons</h3>
                    <h5>Add-ons help enhance your gaming experience.</h5>
                
                    <div class= "addons">
                    
                        <div class= "addon">
                        
                            <input type= "checkbox" onClick={(e) => handleClick(e, 0)} id= "online-service"/>
                            
                            <div class= "addon-text">
                                <h5>Online service</h5>
                                <p>Access to multiplayer games</p>
                            </div>
                            
                            <div class= "addon-price">${prices[0]}/{duration === "monthly" ? "mo" : "yr"}</div>
                            
                        </div>
                        
                        <div class= "addon">
                        
                            <input type= "checkbox" onClick={(e) => handleClick(e, 1)} id= "larger-storage"/>
                            
                            <div class= "addon-text">
                                <h5>Larger storage</h5>
                                <p>Extra 1TB of cloud save</p>
                            </div>
                            
                            <div class= "addon-price">${prices[1]}/{duration === "monthly" ? "mo" : "yr"}</div>
                            
                        </div>
                        
                        <div class= "addon">
                        
                            <input type= "checkbox" onClick={(e) => handleClick(e, 2)} id="customizable-profile"/>
                            
                            <div class= "addon-text">
                                <h5>Customizable Profile</h5>
                                <p>Custom theme on your profile</p>
                            </div>
                            
                            <div class= "addon-price">${prices[2]}/{duration === "monthly" ? "mo" : "yr"}</div>
                            
                        </div>
                    
                    </div>
                    
                </div>

                <Link className="show back-btn" to="/steps/Step-2">Go Back</Link>
                <Link className="show btn" to={addons.length > 0 ? "/steps/Step-4" : ""}>Next step</Link>

            </section>

            <div className="mobile-btns hide">
                <Link className="back-btn" to="/steps/Step-2">Go Back</Link>
                <Link className="btn" to={addons.length > 0 ? "/steps/Step-4" : ""}>Next step</Link>
            </div>

        </>
        );
}