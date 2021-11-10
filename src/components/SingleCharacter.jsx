import { MDBCard, MDBCardHeader, MDBCardBody, MDBBtn, MDBCardText, MDBCardImage, MDBCol } from 'mdb-react-ui-kit';

const SingleCharacter = ({ name, experience, height, weight, sprites, click }) => {

    return (
        <div className="single-character">
            <MDBCol style={{ maxWidth: "30rem" }}>
                <MDBCard alignment="center">

                    <MDBCardHeader>
                        {name}
                    </MDBCardHeader>

                    <MDBCardBody>
                        {sprites && sprites.front_default && (
                            <MDBCardImage
                                src={sprites.front_default}
                                alt={name}
                                cascade
                            />
                        )}
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

                    <MDBBtn onClick={click}>BACK</MDBBtn>
                </MDBCard>
            </MDBCol>
        </div>
    );
}

export default SingleCharacter;