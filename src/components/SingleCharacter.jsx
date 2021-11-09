import { MDBCard, MDBCardHeader, MDBCardBody, MDBBtn, MDBCardText } from 'mdb-react-ui-kit';

const SingleCharacter = ({ name, height, experience, weight, click }) => {

    return (
        <div className="single-character">
            <MDBCard alignment="center">
                <MDBCardHeader>
                    Pokemon {name} details:
                </MDBCardHeader>
                <MDBCardBody>
                    <MDBCardText>
                        base experience: {experience}
                    </MDBCardText>
                    <MDBCardText>
                        height : {height}
                    </MDBCardText>
                    <MDBCardText>
                        weight : {weight}
                    </MDBCardText>

                </MDBCardBody>
                <MDBBtn onClick={click} style={{ width: 'auto' }} >BACK</MDBBtn>
            </MDBCard>


        </div>
    );
}

export default SingleCharacter;