import { Card } from 'react-bootstrap';
import { Container } from '../styles/Container.style';
import { Button } from '../styles/Button.style';

const SingleCharacter = ({ name, experience, height, weight, sprites, click }) => {

    return (
        <Container>
            <Card>

                <Card.Header style={{ display: "flex", justifyContent: "center", alignItems: "center", textTransform: "uppercase" }}>
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

                <Button onClick={click}>BACK</Button>

            </Card>
        </Container>
    );
}

export default SingleCharacter;