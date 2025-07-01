import React from "react";

const Scroll = (props) => {
    return (
        <div
            style={{
                overflowY: "auto",
                border: "5px solid #3d246c", // teal border
                borderRadius: "0 0 24px 24px",
                minHeight: "300px",
                maxHeight: "80vh", // autosize to 80% of viewport height
                background: "rgba(26,38,57,0.35)",
                boxShadow: "0 8px 32px 0 rgba(26,38,57,0.18)",
                padding: "1.5rem 2vw",
                margin: "2rem auto",
                width: "90vw",
                maxWidth: "1800px",
                backdropFilter: "blur(4px)", // subtle glass effect
                WebkitBackdropFilter: "blur(4px)", // for Safari
            }}
        >
            {props.children}
        </div>
    );
};

export default Scroll;