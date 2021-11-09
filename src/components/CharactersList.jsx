import { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/main.scss';
import SingleCharacter from './SingleCharacter';

const CharactersList = ({ list, search }) => {
    const [singleCharacterData, setSingleCharacterData] = useState('');
    const [singleCharacterURL, setSingleCharacterURL] = useState([]);
    const [activeList, setActiveList] = useState(true)

    const { name, base_experience, height, weight } = singleCharacterData;

    useEffect(() => {
        axios
            .get(singleCharacterURL)
            .then(res => setSingleCharacterData(res.data))
            .catch(err => console.log(err))
    }, [singleCharacterURL]);

    const getSingleCharacter = event => {
        event.preventDefault()
        const href = event.target.getAttribute('href')
        setSingleCharacterURL(href)
        setActiveList(false)
    }

    const backButtonHandler = () => {
        setActiveList(true)
    }

    return (
        activeList ?
            list.filter(item => {
                if (search === '') {
                    return item
                } else if (item.name.toLowerCase().includes(search.toLowerCase())) {
                    return item
                }
                return null
            }).map((el, index) =>
                <li key={index} className="characters__info"  >
                    <a href={el.url} className="characters__link" onClick={getSingleCharacter} >
                        {el.name}
                    </a>
                </li>)
            :
            <SingleCharacter name={name} height={height} experience={base_experience} weight={weight} active={activeList} click={backButtonHandler} />
    )

}
export default CharactersList;