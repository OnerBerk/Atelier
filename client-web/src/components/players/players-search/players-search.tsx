import './players-search.scss'
import {Dispatch, SetStateAction} from "react";

type PlayerSearchProps = {
    search: string
    setSearch: Dispatch<SetStateAction<string>>
}
const PlayersSearch = ({search, setSearch}: PlayerSearchProps) => {
    const handleChange = (e: any) => setSearch(e.target.value);
    return (
        <input onChange={handleChange} value={search} type='text'/>
    )
}
export default PlayersSearch