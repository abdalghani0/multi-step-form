import { useState } from 'react';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Step1 from "./steps/Step-1";
import Step2 from "./steps/Step-2";
import Step3 from "./steps/Step-3";
import Step4 from "./steps/Step-4";
import Step5 from './steps/Step-5';
import Sidebar from "./SideBar";
import "./App.css"

export default function App() {
    const [currentStep, setCurrentStep] = useState(1);
    const [form, setForm] = useState({
        name: "",
        email: "",
        number: "",
    });
    const [plan, setPlan] = useState({
        name: "",
        price: 0,
    });
    const [duration, setDuration] = useState("monthly");
    const [addons, setAddons] = useState([Array(0).fill(null)]);

    return (
        <main className="app" style={{display: "flex"}}>
            <Sidebar currentStep={currentStep}/>

            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Routes>
                    <Route path="/" element={<Step1 onStepChange={setCurrentStep} form={form} setForm={setForm}/>}/>
                    <Route path="/steps/Step-2" element={<Step2 plan={plan} duration={duration} setDuration={setDuration} setPlan={setPlan} onStepChange={setCurrentStep}/>}/>
                    <Route path="/steps/Step-3" element={<Step3 addons={addons} duration={duration} setAddons={setAddons} onStepChange={setCurrentStep}/>}/>
                    <Route path="/steps/Step-4" element={<Step4 setAddons={setAddons} plan={plan} duration={duration} addons={addons} onStepChange={setCurrentStep}/>}/>
                    <Route path="/steps/Step-5" element={<Step5/>}/>
                </Routes>
            </BrowserRouter>

            <Outlet/>
        </main>
    )
}
