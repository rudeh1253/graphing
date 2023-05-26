import './Vertex.css';

function Vertex(props) {
    const name = props.name;
    const position = props.position;
    const onClick = props.onClick;
    const key = props.key;
    return (
        <div className="vertex" style={ { top: `${position.y}px`, left: `${position.x}px` } }
             onClick={ onClick }>
            <p style={ { display: "none" } }>{ key }</p>
            <p>{ name }</p>
        </div>
    )
}

export default Vertex;