function Edge(props) {
    const source = props.source;
    const target = props.target;
    const sourcePosition = source.position;
    const targetPosition = target.position;
    return (
        <path fill="red" width={5} />
    );
}

function Head(props) {
    return (
        <path />
    );
}

export default Edge;