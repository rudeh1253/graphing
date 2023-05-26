import './Vertex.css';

function Vertex(props) {
    const name = props.name;
    const position = props.position;
    const onClick = props.onClick;
    return (
        <div className="vertex" style={ { top: `${position.y}px`, left: `${position.x}px` } }
             onClick={ onClick }>
            <p>{ name }</p>
        </div>
    )
}

export default Vertex;