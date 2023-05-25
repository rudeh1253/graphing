import './Vertex';

function Vertex(props) {
    const name = props.name;
    const position = props.position;
    return (
        <div className="vertex" style={ { top: position.y, left: position.x } }>
            <p>{ name }</p>
        </div>
    )
}

export default Vertex;