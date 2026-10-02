// import './css/style.css';
import style from './css/UserProfile.module.css'
function UserProfile() {
    return (
        <div>
            <h1 className={style.heading}>User Profile</h1>
            <div>
                <img src="https://images.unsplash.com/photo-1764139134764-e3b60a9ae11c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDk4fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"></img>
                <div>
                    <h4>Anshika Aggarwal</h4>
                    <p>Software Developer</p>
                </div>
            </div>
        </div>
    )
}
export default UserProfile;