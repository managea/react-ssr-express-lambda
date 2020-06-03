import React from "react";

const App = (props: { name: string }) => (
    <div>
        <label> Hello {props.name} !</label>
    </div>
);

export default App;