import { Link } from "react-router-dom";

export default function Step2({onStepChange, setPlan, setDuration, duration, plan}) {
    onStepChange(2);
    const plans = ["arcade", "advanced", "pro"];
    let prices = duration === "monthly" ? [9, 12, 15] : [90, 120, 150];

    function handlePlanClick(event) {
        let plan = event.currentTarget, i=0;
        let p1 = document.getElementById(plans[i++]);
        let p2 = document.getElementById(plans[i++]);
        let p3 = document.getElementById(plans[i]);
        setPlan({
            name: plan.id,
            price: plan.id===plans[0] ? prices[0] : plan.id===plans[1] ? prices[1] : prices[2]});
        plan.classList.add("selected");
        if(p1.id !== plan.id)
            p1.classList.remove("selected");
        if(p2.id !== plan.id)
            p2.classList.remove("selected");
        if(p3.id !== plan.id)
            p3.classList.remove("selected");
    }

    function handleDurClick() {
        let slider = document.getElementById("slider");
        if(duration === "monthly") {
            setDuration("yearly");
            slider.style.transform = "translateX(18px)";
        }
        else {
            setDuration("monthly");
            slider.style.transform = "translateX(0)";
        }
        document.getElementById(plans[0]).classList.remove("selected");
        document.getElementById(plans[1]).classList.remove("selected");
        document.getElementById(plans[2]).classList.remove("selected");
        setPlan({});
    }

    return(
        <>
            <section className="step">
                <div className= "step-container">
        
                    <h3>Select your plan</h3>
                    <h5>You have the option of monthly or yearly billing.</h5>

                    <div className="plans">

                        <div className= "plan" id= "arcade" onClick={(e) => handlePlanClick(e)}>
                        
                            <img src= "/images/icon-arcade.svg"/>
                            
                            <section>
                                <p className= "plan-name">Arcade</p>
                                <p className= "plan-price">${prices[0]}/{duration === "monthly" ? "mo" : "yr"}</p>
                                <p style= {duration === "monthly" ? {display: "none"} : {}}>2 months free</p>
                            </section>
                            
                        </div>
                        
                        <div className= "plan" id= "advanced" onClick={(e) => handlePlanClick(e)}>
                        
                            <div><img src= "/images/icon-advanced.svg"/></div>
                            
                            <section>
                                <p className= "plan-name">Advanced</p>
                                <p className= "plan-price">${prices[1]}/{duration === "monthly" ? "mo" : "yr"}</p>
                                <p style= {duration === "monthly" ? {display: "none"} : {}}>2 months free</p>
                            </section>
                            
                        </div>
                        
                        <div className= "plan" id= "pro" onClick={(e) => handlePlanClick(e)}>
                        
                            <div><img src= "/images/icon-pro.svg"/></div>
                            
                            <section>
                                <p className= "plan-name">Pro</p>
                                <p className= "plan-price">${prices[2]}/{duration === "monthly" ? "mo" : "yr"}</p>
                                <p style= {duration === "monthly" ? {display: "none"} : {}}>2 months free</p>
                            </section>
                            
                        </div>

                    </div>

                    <div className= "toggle">
                    
                        <span id= "monthly" className= "toggled">Monthly</span>
                        
                        <div className= "rect" onClick= {() => handleDurClick()}><div id= "slider"></div></div>
                        
                        <span id= "yearly">Yearly</span>
                        
                    </div>
                </div>

                <Link className="show back-btn" to="/">Go Back</Link>
                <Link className="show btn" to={plan.name ? "/steps/Step-3" : ""}>Next step</Link>

            </section>

            <div className="mobile-btns hide">
                <Link className="back-btn" to="/">Go Back</Link>
                <Link className="btn" to={plan.name ? "/steps/Step-3" : ""}>Next step</Link>
            </div>

        </>
        );
}