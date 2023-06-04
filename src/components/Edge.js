import { getPath } from "../helper/edgeHelper";

function Edge(props) {
    const source = props.source;
    const target = props.target;
    const sourcePosition = source.position;
    const targetPosition = target.position;
    const path = getPath(sourcePosition, targetPosition);
    return (
        <path fill="none" stroke="red" width={5} d={path} />
    );
}

export default Edge;