import {Player} from "../../../domain/domain";
import './player-card.scss'
import {useNavigate} from "react-router-dom";

type PlayerCardProps = {
    player: Player
}
const PlayerCard = (props: PlayerCardProps) => {
    const navigate = useNavigate()
    return (
        <div onClick={() => navigate(`/detail/${props.player.id}/${props.player.firstname}`)}
             className='player-card-main'>
            <div className='img-container'>
                <img
                    alt={`${props.player.firstname} ${props.player.firstname}`}
                    src={props.player.picture}/>
            </div>
            <div className='player-infos'>
                <div className="player-name">{`${props.player.firstname} ${props.player.lastname}`}</div>
                <div className='info'>
                    <div className="detail">
                        <span>Rank</span>
                        <span>#{props.player.data.rank}</span>
                    </div>
                    <div className="detail">
                        <span>points</span>
                        <span>{props.player.data.points}</span>
                    </div>
                    <div className="detail">
                        <span>country</span>
                        <span>{props.player.country.code}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PlayerCard