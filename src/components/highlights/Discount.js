import { useState, useEffect } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import MyButton from "../utils/MyButton";

function Discount(props) {
    const end = 30
    const [start,setStart] = useState(0)

    const percentage =()=>{
        if(start < end){
            setStart(prevCount => prevCount +1 )
        }
    }
    useEffect(()=>{
        if( start >0 && start <30){
            setTimeout(() => {
                setStart(prevCount => prevCount +1 )
            }, 30);
        }
    },[start])

  return (
    <div className="center_wrapper">
      <div className="discount_wrapper">
        <Fade
        onVisibilityChange={(inView)=>{
            if(inView){
                percentage()
            }
        }}
        >
          <div className="discount_porcentage">
            <span>{start}%</span>
            <span>OFF</span>
          </div>
        </Fade>
        <Slide right>
          <div className="discount_description">
            <h3>Purchase ticker before 20th June</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sunt
              est animi recusandae nihil quisquam deserunt nostrum atque eum
              harum? At ad, autem quidem porro dolorum deserunt sed officiis,
              minus necessitatibus, 
            </p>
            <MyButton
            text = "Purchase tickets"
            link=""
            size={"small"}
            style={{
              background:'#ffa800',
              color: '#fff'
            }}
            />
          </div>
        </Slide>
      </div>
    </div>
  );
}

export default Discount;
