const Tweet = (props) => {
    return (
        <div>
            <p>{props.username} {props.name} {props.date}</p>
            <h3>{props.message}</h3>
        </div>
    );
};

ReactDOM.render(
<div>
    <Tweet username="username" name="TJ" date="Today" message="McDonalds is mid"/>
    <Tweet username="username2" name="TJ2" date="Today" message="McDonalds is very mid"/>
    <Tweet username="username3" name="TJ3" date="Today" message="McDonalds is still mid"/>
</div>,
document.getElementById("root")
);