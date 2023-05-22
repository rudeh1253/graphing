import './Vertex';

function Vertex(props) {
    const name = props.name;
    return (
        <div className="vertex">
            <p>{ name }</p>
        </div>
    )
}

export default Vertex;