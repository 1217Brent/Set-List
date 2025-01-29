import React from "react";
import zanderWhite from "../assets/zander-white-picture.png";

function UserProfileCard() {
    return (
        <div 
            className="card"
            style={{
                width: "14rem", 
                borderRadius: "10px", 
                overflow: "hidden", 
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                backgroundColor: "white"
            }}
        >
            <img 
                src={zanderWhite} 
                className="card-img-top" 
                alt="Profile"
                style={{ width: "100%", height: "150px", objectFit: "cover" }} 
            />
            <div className="card-body" style={{ padding: "10px", textAlign: "center" }}>
                <p className="card-name" style={{ color: "black", fontSize: "1rem", fontWeight: "bold", marginBottom: "5px" }}>
                    Zander White
                </p>
                <p className="card-instrument" style={{ fontSize: "0.9rem", color: "#666", marginBottom: "5px" }}>
                    Violin & Bass
                </p>
                <p className="card-description" style={{ fontSize: "0.8rem", color: "#333" }}>
                    Probably the best bassist you will ever meet in your life
                </p>
            </div>
        </div>
    );
}

export default UserProfileCard;
