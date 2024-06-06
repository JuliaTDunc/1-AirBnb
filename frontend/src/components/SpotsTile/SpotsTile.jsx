import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import './SportsTile.css';

const SpotsTile = ({spot}) => {
    return (
        <Link key={spot.id} to={`/spots/${spot.id}`} title={spot.name}>
            <div className='tile'>
                <img src={spot.previewImage} alt={spot.name} className='spot-image'/>
                <div className='details'>
                    <div className='c-stars'>
                        <p>{spot.city},{spot.state}</p>
                        {spot.avgRating ? (
                            <p><FaStar/>{(spot.avgRating.toFixed(1))}</p>
                        ): ('New!')}
                    </div>
                    <p>{spot.price} /night</p>
                </div>
            </div>
        </Link>
    )
}

export default SpotsTile;