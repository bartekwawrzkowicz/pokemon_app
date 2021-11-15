import { useState, useEffect } from 'react';
import axios from 'axios';

import loadingGif from '../images/unnamed.gif';

import SingleCharacter from './SingleCharacter';
import { StyledContainer, StyledLink, StyledListItem } from '../styles/layout';

const CharactersList = ({ list, search }) => {
    const [singleCharacterData, setSingleCharacterData] = useState('');
    const [singleCharacterURL, setSingleCharacterURL] = useState([]);
    const [activeList, setActiveList] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const { name, base_experience, height, weight, sprites } = singleCharacterData;

    useEffect(() => {
        axios
            .get(singleCharacterURL)
            .then(res => setSingleCharacterData(res.data))
            .catch(err => console.log(err))
    }, [singleCharacterURL]);

    useEffect(() => {
        if (singleCharacterData.name) {
            setIsLoading(false)
        }
    }, [singleCharacterData.name]);

    const getSingleCharacter = (event) => {
        event.preventDefault();
        const href = event.target.getAttribute('href');
        setSingleCharacterURL(href);
        setActiveList(false);
        setIsLoading(true);
    }

    const backButtonHandler = () => {
        setActiveList(true);
        setSingleCharacterData('');
    }

    return (
        activeList ?
            list.filter((item) => {
                if (search === '') {
                    return item
                } else if (item.name.toLowerCase().includes(search.toLowerCase())) {
                    return item
                }
                return null
            }).map((el, index) =>
                <StyledListItem key={index} >
                    <StyledLink href={el.url} onClick={getSingleCharacter} >
                        {el.name}
                    </StyledLink>
                </StyledListItem>
            ) : (
                <>
                    {isLoading ? (
                        <StyledContainer>
                            <img src={loadingGif} alt="loading" />
                        </StyledContainer>
                    ) : (
                            <SingleCharacter name={name} height={height} experience={base_experience} weight={weight} sprites={sprites} click={backButtonHandler} />
                        )}
                </>
            )
    )
}

export default CharactersList;