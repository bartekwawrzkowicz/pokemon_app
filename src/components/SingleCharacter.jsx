import { Card } from 'react-bootstrap';
import { StyledButton, StyledContainer } from '../styles/layout';

const SingleCharacter = ({ name, experience, height, weight, sprites, click }) => {

    return (
        <StyledContainer>
            <Card>

                <Card.Header
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        textTransform: "uppercase"
                    }}>
                    {name}
                </Card.Header>

                <Card.Body>
                    {sprites && sprites.front_default && (
                        <Card.Img
                            src={sprites.front_default}
                            alt={name}
                            cascade
                        />
                    )}
                    <Card.Text>
                        base experience: {experience}
                    </Card.Text>
                    <Card.Text>
                        height : {height}
                    </Card.Text>
                    <Card.Text>
                        weight : {weight}
                    </Card.Text>
                </Card.Body>

                <StyledButton onClick={click}>BACK</StyledButton>

            </Card>
        </StyledContainer>
    );
}

export default SingleCharacter;