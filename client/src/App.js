import React, { useState } from "react";
import axios from "axios";

const App = () => {
    const [data, setData] = useState([]);

    const submitted = async () => {
        try {
            const response = await axios.post("http://localhost:8000/myapp/api/submit/");
            setData(response.data);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
            <h1>Click the button to check the console</h1>
            <br />
            {console.log(data)}
            {data.results &&
                data.results.map((item, index) => (
                    <div key={index}>
                        <h1>{item.name.first}</h1>
                        <img src={item.picture.large} alt="Profile" />
                    </div>
                ))}
            <button onClick={submitted}>Check</button>
        </>
    );
};

export default App;
