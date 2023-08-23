import React from "react";
import './Committee.css'

const Committee = () => {
    return(
        <div className="comms">
            <h2 className="co-head">Committees</h2>
            <hr className="co-line" />
            <div className="box">
                <div className="cb">
                    <h3 className="dcc-head">1. Department Curriculum Committee (DCC)</h3>
                    <p className="box-cont">Prof. Sachindeo Vaidya (Chair),<br/>
                                            Prof. Aninda Sinha,<br/>
                                            Prof. Biplob Bhattacherjee.</p>
                </div>
                <div className="cb">
                    <h3 className="dcc-head">2. Wellness Committee</h3>
                    <p className="box-cont">Prof. Jyothsna Komaragiri,<br/>
                                            Prof. Diptiman Sen,<br/>
                                            Ranjini Mondal,<br/>
                                            Pingal Pratyush Nath,<br/>
                                            Samudra Sur.</p>
                </div>
                <div className="cb">
                    <h3 className="dcc-head">3. Safety Champion</h3>
                    <p className="box-cont">Prof. Jyothsna Komaragiri</p>
                </div>
            </div>
            <div className="box">
                <div className="cb">
                    <h3 className="dcc-head">4. CHEP Integrated-Ph.D representative</h3>
                    <p className="box-cont">Prof. Ranjan Laha</p>
                </div>
                <div className="cb">
                    <h3 className="dcc-head">5. CHEP Batchelor of Science representatives</h3>
                    <p className="box-cont">Prof. Prasad Hegde (Chair),<br/>
                                            Prof. Chethan Krishnan</p>
                </div>
                <div className="cb">
                    <h3 className="dcc-head">6. CHEP Web page</h3>
                    <p className="box-cont">Prof. Biplob Bhattacherjee,<br/>
                                            Prof. Justin David,<br/>
                                            Prof. Nirmal Raj</p>
                </div>
            </div>
        </div>
    );
};
export default Committee