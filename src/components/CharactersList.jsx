const CharactersList = ({ list, search, click }) => {
    return (
        list.filter(item => {
            if (search === '') {
                return item
            } else if (item.name.toLowerCase().includes(search.toLowerCase())) {
                return item
            }
        }).map(item =>
            <div key={item.id} className="characters__info" onClick={click} >
                <p>
                    {item.name}
                </p>
            </div>)
    )
}

export default CharactersList;