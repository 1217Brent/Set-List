import React from "react";
import { useNavigate } from "react-router-dom";
function UserProfileCard({ title, instrument, description, image }) {
    const navigate = useNavigate();
    const handleNav = () => {
        navigate('/chat');
    }
    return (
        <div 
            className="card"
            style={{
                width: "50vw", 
                borderRadius: "10px", 
                overflow: "hidden", 
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                backgroundColor: "white",
                marginTop: "5px",
                marginBottom: "5px",
            }}
        >
            <img 
                src={image} 
                className="card-img-top" 
                alt="Profile"
                style={{ width: "100%", height: "150px", objectFit: "cover" }} 
            />
            <div className="card-body" style={{ padding: "10px", textAlign: "center" }}>
                <p className="card-name" style={{ color: "black", fontSize: "1rem", fontWeight: "bold", marginBottom: "5px" }}>
                    {title}
                </p>
                <p className="card-instrument" style={{ fontSize: "0.9rem", color: "#666", marginBottom: "5px" }}>
                    {instrument}
                </p>
                <p className="card-description" style={{ fontSize: "0.8rem", color: "#333" }}>
                    {description}
                </p>
                <button onClick={handleNav}>Message Me!</button>
            </div>
        </div>
    );
}

export default UserProfileCard;
