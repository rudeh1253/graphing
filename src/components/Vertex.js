import { useEffect, useRef, useState } from 'react';
import './Vertex.css';

function Vertex(props) {
    const name = props.name;
    const position = props.position;
    const onClick = props.onClick;
    const id = props.id;

    const rectRef = useRef();
    const textRef = useRef();

    useEffect(() => {
        const r = rectRef.current.getBoundingClientRect();
        const t = textRef.current.getBoundingClientRect();
        textRef.current.setAttribute("x", `${position.x + (r.width - t.width) / 2}`);
        textRef.current.setAttribute("y", `${position.y + (r.height - t.height) / 2 + t.height}`);
    }, [position]);
    return (
        <>
            <rect className="vertex" id={`rect-${id}`} width="100" height="100" x={position.x} y={position.y} fill='#1c7ed6'
                onClick={ onClick } ref={rectRef} />
            <text x={position.x} y={position.y} fontSize={18} ref={textRef}>{name}</text>
        </>
    )
}

export default Vertex;