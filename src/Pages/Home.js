import './Home.css';
import headshot from '../Images/headshot.jpg'; 
import Project from '../Components/Project';

const projects = [<Project />, <Project />, <Project />];

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
            <div className='FeaturedProjects'>
                <h1>Featured Projects</h1>
                <div style={{display: 'flex', justifyContent: 'space-between', width: '55%'}}>
                    {projects}
                </div>
            </div>
        </div>
    );
}

export default Home;