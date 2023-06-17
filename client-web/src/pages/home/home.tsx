import Players from "../../components/players/players";
import {data} from "../../data-set/dataSet";
import tennisBall from "../../assets/balle.png"
import './home.scss'

const Home = () => {
    return (
        <div className='home-main'>
            <Players playersList={data.players}/>
            <div className='home-right'>
                <img alt="balle de tennis" src={tennisBall}/>
            </div>
        </div>
    )
}
export default Home