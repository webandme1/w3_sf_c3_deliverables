import './card.css';
function Card(props){
    return(
        <>
            <div className='rowBox'>
                <div className='row1'></div>
                <div className='row2'>{props.Item1}</div>
                <div className='row3'></div>

                <div className='row4'></div>
                <div className='row5'>{props.Item2} </div>
                <div className='row6'></div>
            </div>
           
        </>
    );
}

export default Card;