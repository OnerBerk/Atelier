import {useState} from "react";
import {Player} from "../../domain/domain";
import PlayerCard from "./player-card/player-card";
import PlayersSearch from "./players-search/players-search";
import {returnFilteredList} from "../../utils/filtered-players-list";

export type PlayersProps = {
    playersList: Player[]
}
const Players = ({playersList}: PlayersProps) => {
    const [search, setSearch] = useState('')

    return (
        <div>
            <PlayersSearch search={search} setSearch={setSearch}/>
            {returnFilteredList(playersList, search).map((player: Player) => {
                return (
                    <PlayerCard player={player}/>
                )
            })}
        </div>
    )
}
export default Players