import React from 'react';
import { Jumbotron } from 'reactstrap';

function Home(props) {
    return(
        <div>
            <Jumbotron>
                <div className="container">
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                            <h1>Ristorante con Fusion</h1>
                            <p>Our mission is to make your life more convenient</p>
                        </div>
                    </div>
                </div>
            </Jumbotron>
        </div>
        
    );
}
export default Home;