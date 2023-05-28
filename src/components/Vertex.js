import './Vertex.css';

function Vertex(props) {
    const name = props.name;
    const position = props.position;
    const onClick = props.onClick;
    const id = props.id;
    return (
        <div className="vertex" style={ { top: `${position.y}px`, left: `${position.x}px` } }
             onClick={ onClick } id={ `div-${ id }` }>
            <p id={ `p-${ id }` }>{ name }</p>
        </div>
    )
}

export default Vertex;