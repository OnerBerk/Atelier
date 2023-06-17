import "./detail.scss"
import close from '../../assets/close.svg'
import {useNavigate, useParams} from "react-router-dom";
import {data} from "../../data-set/dataSet";
import {Player} from "../../domain/domain";
import {useEffect, useState} from "react";

const Details = () => {
    const {id} = useParams()
    const navigate = useNavigate()

    const [isMount, setIsMount,] = useState(false)
    const [currentPlayer, setCurrentPlayer] = useState<Player | undefined>()
    const currentYear = new Date().getFullYear()

    useEffect(() => {
        if (id && !isMount) {
            const findPlayer = data.players.find((p: Player) => p.id === parseInt(id))
            setCurrentPlayer(findPlayer)
        }
        return () => setIsMount(true)
    }, [id, isMount])
    return (
        <div className='detail-main'>
            <div className="detail-top">
                <img onClick={() => navigate('/')} alt="retour à l'accueil" src={close}/>
            </div>
            <div className="detail-bottom">
                <div className='detail-paper'>
                    <div className="crop">
                        {currentPlayer &&
                            <img className={currentPlayer.id === 95 ? 'venus' : ''} alt={currentPlayer.firstname}
                                 src={currentPlayer.picture}/>}
                    </div>
                    <div className="detail-right">
                        <div className="detail-player-name">
                            <div className='title'>
                                <div className="f">{currentPlayer?.firstname}</div>
                                <div className="l">{currentPlayer?.lastname}</div>
                            </div>
                            <div className="detail-country">
                                <img alt="drapeau" src={currentPlayer?.country.picture}/>
                                <div>{currentPlayer?.country.code}</div>
                            </div>
                        </div>
                        <div className="detail-player-info">
                            <div className="detail-player-info-left">
                                <div className='row'>
                                    <div className="bloc">
                                        <div className='bloc-title'>rank</div>
                                        <div className="value">#{currentPlayer?.data.rank}</div>
                                    </div>
                                    <div className="bloc">
                                        <div className='bloc-title'>point</div>
                                        <div className="value">{currentPlayer?.data.points}</div>
                                    </div>
                                    <div className="bloc">
                                        <div className='bloc-title'>country</div>
                                        <div className="value">{currentPlayer?.country.code}</div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className="bloc">
                                        <div className='bloc-title'>birthday</div>
                                        <div
                                            className="value">{currentPlayer && currentYear - currentPlayer?.data.age}</div>
                                    </div>
                                    <div className="bloc">
                                        <div className='bloc-title'>age</div>
                                        <div className="value">{currentPlayer?.data.age}</div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className="bloc">
                                        <div className='bloc-title'>weight</div>
                                        <div
                                            className="value">{currentPlayer && ` ${currentPlayer?.data.weight / 1000} `}kg
                                        </div>
                                    </div>
                                    <div className="bloc">
                                        <div className='bloc-title'>height</div>
                                        <div className="value">{`${currentPlayer?.data.height} `}cm</div>
                                    </div>
                                </div>
                            </div>

                            <div className="detail-player-info-right">
                                <div className="bloc ">
                                    <div className="bloc-title">carrer titles</div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Details