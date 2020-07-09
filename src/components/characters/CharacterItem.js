import React from 'react';


const CharacterItem = ({item}) => {
    const statusClass = item.status === "Alive" ? "alive" : "dead";
    return (
        <div className="card">
            <div className="card-inner">
                <div className="card-front">
                    <img src={item.img} alt=""/>
                </div>
                <div className="card-back">
                    <h1>{item.name}</h1>
                    <ul>
                        <li>
                            <strong>Nickname: </strong>{item.nickname}
                        </li>
                        <li>
                            <strong>Portrayed by: </strong>{item.portrayed}
                        </li>
                        <li>
                            <strong>Birthday: </strong>{item.birthday}
                        </li>
                       <li>
                           <strong>Status: </strong><span className={statusClass}>{item.status}</span>
                       </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CharacterItem
