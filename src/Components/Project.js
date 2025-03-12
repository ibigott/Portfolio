import './Project.css';
import icon from '../Images/sample.jpg'; 

const Project = () => {
    return (
        <div className='Project'>
            <img src={icon} alt='Project Icon' />
            <h1>Project</h1>
        </div>
    );
}

export default Project;