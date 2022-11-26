import Button from '@material-ui/core/Button';
import TicketIcon from "../../resources/images/icons/ticket.png";

function MyButton(props) {
    return (
        <Button
        href={props.link}
        variant="contained"
        size={props.size ? props.size : "large"}
        style={{
            background:'#8e8e8e',
            color: '#fff',
            ...props.style
        }}
        >
            <img src={TicketIcon} className='iconImage' alt='btn'/>
           {props.text} 
        </Button>
    );
}

export default MyButton;