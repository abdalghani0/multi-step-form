import { Link } from "react-router-dom";

export default function Step4({onStepChange, plan, duration, addons, setAddons}) {
    onStepChange(4);
    let addonsSet = new Set(addons);
    let addonsArr = [...addonsSet];
    let addonsPrice = 0;
    addonsArr.forEach((a, index) => {
        if(index > 0)
            addonsPrice += a.price;
    })
    let total = addonsPrice + parseFloat(plan.price);
    return(
        <>
            <section className="step">
                <div class= "step-container">
                    <h3>Finishing up</h3>
                    <h5>Double-check everything looks OK before confirming.</h5>
                    
                    <div class= "details">
                    
                        <section class= "plan-and-addons">
                            
                            <div class= "picked-plan">
                                <p id= "picked-plan">{plan.name}</p>
                                <p id= "picked-plan-price">${plan.price}/{duration === "monthly" ? "mo" : "yr"}</p>
                            </div>
                                    
                            <Link onClick={() => setAddons([""])} className="chng-btn" to="/">Change</Link>

                            <hr />
                            
                            <ul id="selected-addons">
                                
                                {addonsArr.map((addon, index) => index > 0 && (
                                    <li class= "selected-addon"> 
                                        <p class= "selected-addon-name">{addon.name}</p> 
                                        <p class= "selected-addon-price">${addon.price}/{duration === "monthly" ? "mo" : "yr"}</p>
                                    </li>
                                ))}

                            </ul>
                        
                        </section>
                        
                        <section class= "total">
                            <p class= "per">Total(per {duration==="monthly" ? "month" : "year"})</p> 
                            <p id= "total-price">
                                ${total}/{duration === "monthly" ? "mo" : "yr"}
                            </p>
                        </section>
                        
                    </div>

                </div>

                <Link onClick={() => setAddons([""])} className="show back-btn" to="/steps/Step-3">Go Back</Link>
                <Link className="show btn" to="/steps/Step-5">Next step</Link>
        
            </section>

            <div className="mobile-btns hide">
                <Link className="back-btn" to="/steps/Step-3">Go Back</Link>
                <Link className="btn" to="/steps/Step-5">Next step</Link>
            </div>

        </>
        );
}