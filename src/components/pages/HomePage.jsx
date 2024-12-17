import'./HomePage.css';
import {useParams} from 'react-router-dom';

const HomePage = () => {
    const {id} = useParams();
    return(
        <div className='bodyHome'>
    <h1>HomePage</h1>
    </div>
    )
}
export default HomePage;