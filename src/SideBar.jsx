export default function Sidebar({ currentStep }) {
    let steps = ["Your info", "Select plan", "Add-ons", "Summary"], i=0;
    return (
        <section className="side-bar">
            <ul className="steps-list">
                {steps.map((step) => {
                    i++;
                    return(
                        <li>
                            <div className= {currentStep===i ? "circle current-step" : "circle"}>{i}</div>
		                    <div className="num">
		                        <p className= "step-number">Step {i}</p>
		                        <p>{step}</p>
		                    </div>
                        </li>
                    )
                })}
            </ul>
        </section>
    );
}