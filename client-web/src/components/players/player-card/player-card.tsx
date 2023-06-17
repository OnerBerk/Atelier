import {Player} from "../../../domain/domain";
import './player-card.scss'

type PlayerCardProps = {
    player: Player
}
const PlayerCard = (props: PlayerCardProps) => {
    return (
        <div className='player-card-main'>
            {props.player.firstname}
        </div>
    )
}
export default PlayerCard