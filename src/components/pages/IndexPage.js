import { useEffect, useRef, useState } from "react";
import "./IndexPage.css";
import Vertex from "../Vertex";

function IndexPage() {
    const [vertexSet, setVertexSet] = useState([]);
    const [inputName, setInputName] = useState("");
    const [pickedVertexId, setPickedVertexId] = useState(-1);
    const [isVertexFollowingPointer, setIsVertexFollowingPointer] = useState(false);
    const defaultPosition = { x: 100, y: 100 };
    const addVertex = (name) => {
        const newVertexSet = [...vertexSet];
        newVertexSet.push({
            key: vertexSet.length + 1,
            name: name,
            position: defaultPosition,
            id: vertexSet.length + 1
        });
        setVertexSet(newVertexSet);
    }

    const graphRef = useRef();
    const vertexRect = { x: 58, y: 224 };
    useEffect(() => {
        const rect = graphRef.current.getBoundingClientRect();
        console.log(rect.width);
        const followMouse = (e) => {
            const mousePos = { x: e.clientX, y: e.clientY };
            const vertexPos = {
                x: (mousePos.x - rect.x) / rect.width * 1000 - 25,
                y: (mousePos.y - rect.y) / rect.height * 500 - 25
            };
            if (isVertexFollowingPointer) {
                const newVertexSet = [...vertexSet];
                for (let vertex of newVertexSet) {
                    if (vertex.id == pickedVertexId) {
                        vertex.position = vertexPos;
                        console.log(vertexPos);
                        setVertexSet(newVertexSet);
                        break;
                    }
                }
            }
        };
        window.addEventListener("mousemove", followMouse);
        return () => {
            window.removeEventListener("mousemove", followMouse);
        }
    }, [pickedVertexId, isVertexFollowingPointer]);
    return (
        <div className="container">
            <header>
                <h1 className="title">Graph</h1>
            </header>
            <section>
                <div>
                    <input id="vertex-name" type="text" onChange={(e) => setInputName(e.target.value)} />
                    <button className="btn" onClick={(e) => {
                        const name = inputName;
                        document.getElementById("vertex-name").value = "";
                        addVertex(name);
                    }}>Add vertex</button>
                </div>
                <div className="vertex-container" ref={graphRef}>
                    <svg viewBox="0 0 1000 500">
                        {
                            vertexSet.map((elem) => <Vertex key={elem.key} name={elem.name} position={elem.position} id={elem.id}
                                onClick={(e) => {
                                    const id = e.target.id.split("-")[1];
                                    for (let vertex of vertexSet) {
                                        if (id == vertex.id) {
                                            setIsVertexFollowingPointer(!isVertexFollowingPointer);
                                            setPickedVertexId(id);
                                            break;
                                        }
                                    }
                                }} />)
                        }
                    </svg>
                </div>
            </section>
        </div>
    );
}

export default IndexPage;