import { vertexHeight, vertexWidth } from '../data/Constants';
import './Vertex.css';

function Vertex(props) {
    const name = props.name;
    const position = props.position;
    const onClick = props.onClick;
    const id = props.id;
    return (
        <div className="vertex" style={ { width: `${vertexWidth}px`, height: `${vertexHeight}px`, top: `${position.y}px`, left: `${position.x}px` } }
             onClick={ onClick } id={ `div-${ id }` }>
            <p className="vertex-name" id={ `p-${ id }` }>{ name }</p>
        </div>
    )
}

export default Vertex;