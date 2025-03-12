import './Home.css';
import headshot from '../Images/headshot.jpg'; 

const Home = () => {
    return (
        <div className='Home'>
            <div className='Hero'>
                <div>
                    <h1>Hey, I'm Ignacio Bigott</h1>
                    <h3>Crafting Code, Creating Experiences</h3>
                    <h3>Building the Web, One Pixel at a Time</h3>
                    <h3>Software Engineer | CS Graduate</h3>
                </div>
                <img src={headshot} alt='Ignacio Bigott' />
            </div>
        </div>
    );
}

export default Home;