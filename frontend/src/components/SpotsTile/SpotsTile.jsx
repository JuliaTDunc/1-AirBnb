import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import {useModal} from '../../context/Modal';
import DeleteSpot from '../DeleteSpot/DeleteSpot';
import './SpotsTile.css'

const SpotsTile = ({spot, manage}) => {
    price = spot.price ? parseFloat(spot.price) : 0;
    const {setModalContent} = useModal();
    return (
        <div>
        <Link key={spot.id} to={`/spots/${spot.id}`} title={spot.name}>
            <div className='spot-tile'>
                <p className='spot-title'>{spot.name}</p>
                <img src={spot.previewImage} alt={spot.name} className='spot-image'/>
                <div className='spot-tile-details'>
                    <div>
                        <p>{spot.city},{spot.state}</p>
                        {spot.avgRating ? (
                            <p className='c-stars'><FaStar/>{(spot.avgRating.toFixed(1))}</p>
                        ): ('New!')}
                    </div>
                    <p>{price.toFixed(2)} /night</p>
                </div>
            </div>
        </Link>
        {manage && (
            <div className='manage-spots'>
            <Link to={`/spots/${spot.id}/edit`}>
            <button>Update</button>
            </Link>
            <button onClick={()=> setModalContent(<DeleteSpot spotId={spot.id}/>)}>Delete</button>
            </div>
        )}
        </div>
    )
}

export default SpotsTile;