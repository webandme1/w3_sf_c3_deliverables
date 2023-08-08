import './profile.css'
import profileImage from '../../Images/sdDG-generic.png';
import Card from './card';
function GetProfile(){
    return (
        <>
            <div className='row'>
                <img src={profileImage} width="250px" height="250px" ></img>
            </div>
            <div className='row-1'>
                John Smith
            </div>
            <div className='row-2'>
                Software Engineer
            </div>
            <div className='rowCenter'>
                <Card 
                Item1="About me"
                Item2="I am an advocate of self-improvement and I want to help people improve their lives through knowledge and application "
                ></Card>
            </div>
            <div className='rowCenter'>
                <Card
                Item1="Contact me"
                Item2="Email: sample_john_smith@mail.com | LinkedIn: https://www.linkedin.com/"
                ></Card>
            </div>
        </>    
    );
}

export default GetProfile;


