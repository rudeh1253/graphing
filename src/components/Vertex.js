import './Vertex.css';

function Vertex(props) {
    const name = props.name;
    const position = props.position;
    return (
        <div className="vertex" style={ { top: `${position.y}px`, left: `${position.x}px` } }>
            <p>{ name }</p>
        </div>
    )
}

export default Vertex;