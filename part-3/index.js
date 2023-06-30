const Person = (props) => {
    return (
        <div>
            <p>Learn more about this person</p>
            <p>{(props.name).slice(0,6)} {props.age}</p>
            <h3>{props.age >= 18 ? "Please go vote!" : "you must be 18"}</h3>
            <ul>
                {(props.hobbies).map(h => <li>{h}</li>)}
            </ul>
        </div>
    );
};

function App() {
    return (
        <div>
        <Person name="TJ" age="20" hobbies={["Video games", "Programming", "Dungeons and Dragons"]} />
        <Person name="TJ2" age="21" hobbies={["Video games", "Programming", "Dungeons and Dragons"]} />
        <Person name="TJ3" age="22" hobbies={["Video games", "Programming", "Dungeons and Dragons"]} />
    </div> 
    );
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
    );