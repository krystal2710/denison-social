import React from "react";
function Home() {
    const user = getUser();

    if (!user) {
      return <div>Loading!</div>;
    }
    
    return (
        <div>
            <h1>Profile</h1>
            <p> Welcome!</p>
        </div>
    );
}
export default Home;