
function FeaturesSection() {
    return(
            <div className="features-section">
                {/* <h1>This is the features section</h1> */}
                <h2 style={{textAlign:"center",fontSize:"4rem",marginTop:"6rem"}}>What we provide at Zeus Fit  gym</h2>
                <p style={{textAlign:"center",marginTop:"2rem",fontSize:"1.5rem"}}>Our main goal is to ensure the customers that 
                    their experience here is the best of the best and <br></br>they can reach their peak potential
                    at any time of the day with the best equipment,staff and rejuvenating mediums
                </p>
                <div className="features-benefits-section">
                    <div className="features-benefit-div">
                        <img src="/schedule_24dp_33CDD8_FILL0_wght400_GRAD0_opsz24.png" alt="sauna icon" />
                        <h3>24/7 Acces</h3>
                        <p>We offer you the choice to build your own statue-like body at any time interval you so desire to
                        </p>
                    </div>
                    <div className="features-benefit-div">
                        <img src="/self_improvement_24dp_33CDD8_FILL0_wght400_GRAD0_opsz24.png" alt="time icon" /> 
                        <h3>Sauna Service</h3>
                        <p>We provide sauna services for both men and women so our
                           customers can properly rejuvenate and sooth the muscles
                           along with your spirit in this peaceful environment
                        </p>
                    </div>
                    <div className="features-benefit-div">
                        <img src="/fitness_center_24dp_33CDD8_FILL0_wght400_GRAD0_opsz24.png" alt="equipment icon" /> 
                        <h3>State of the art equipment</h3>
                        <p>We only provide the best of the best top grade workout equipment
                            for our customers
                        </p>
                    </div>
                    <div className="features-benefit-div">
                        <img src="/handshake_24dp_33CDD8_FILL0_wght400_GRAD0_opsz24.png" alt="trainer icon" />
                        <h3>Professional Personal Trainers</h3>
                        <p>We have an array of skilled personal trainers ready to be
                            guiding you across the process of shaping your own
                            greek statue-like body
                        </p>
                    </div>
                </div>
            </div>
    )
}
export default FeaturesSection