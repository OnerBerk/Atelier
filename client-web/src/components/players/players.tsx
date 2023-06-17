import {useState} from "react";
import {Player} from "../../domain/domain";
import PlayerCard from "./player-card/player-card";
import PlayersSearch from "./players-search/players-search";
import {returnFilteredList} from "../../utils/filtered-players-list";
import './players.scss'

export type PlayersProps = {
    playersList: Player[]
}
const Players = ({playersList}: PlayersProps) => {
    const [search, setSearch] = useState('')

    return (
        <div className='players-main'>
            <div className='search-container'>
                <PlayersSearch search={search} setSearch={setSearch}/>
            </div>
            <div className="players">
                {returnFilteredList(playersList, search).map((player: Player) => {
                    return (
                        <PlayerCard player={player}/>
                    )
                })}
            </div>
        </div>
    )
}
export default Players