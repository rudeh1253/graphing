import './Vertex.css';

function Vertex(props) {
    const name = props.name;
    const position = props.position;
    const onClick = props.onClick;
    const id = props.id;
    return (
        <rect className="vertex" id={`rect-${id}`} width="100" height="100" x={position.x} y={position.y}
             onClick={ onClick } />
    )
}

export default Vertex;