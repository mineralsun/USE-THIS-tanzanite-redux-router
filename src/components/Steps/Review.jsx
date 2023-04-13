import { useSelector } from 'react-redux';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Review() {

    const personName = useSelector(store => store.personName);
    const activityType = useSelector(store => store.activityType);
    const minutes = useSelector(store => store.minutes);
    const miles = useSelector(store => store.miles);

    const dispatch = useDispatch();
    const history = useHistory();

    const sendToServer = (event) => {
        axios.post('/activity', {
            name: personName,
            type: activityType,
            minutes: minutes,
            miles: miles
        }).then((response) => {
            dispatch({ type: 'CLEAR_FORM '});
            history.push('/activity-list');
        }).catch((error) => {
            alert(`Error in POST ${error}, please try again!`)
        });
    }

    return (
        <>
            <h3>Review</h3>
            <div>Name: {personName} </div>
            <div>Type: {activityType} </div>
            <div>Minutes: {minutes} </div>
            <div>Miles: {miles} </div>
            <button onClick={sendToServer}>Submit</button>
        </>
    )
}


export default Review;