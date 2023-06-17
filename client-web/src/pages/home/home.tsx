import Players from "../../components/players/players";
import {data} from "../../data-set/dataSet";

const Home = () => {
    return (
        <div>
            <Players playersList={data.players}/>
        </div>
    )
}
export default Home