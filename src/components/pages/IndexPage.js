import { useEffect, useRef, useState } from "react";
import "./IndexPage.css";
import Vertex from "../Vertex";
import { vertexHeight, vertexWidth } from "../../data/Constants";
import { addEdge } from "../../helper/edgeHelper";

function IndexPage() {
    const [vertexSet, setVertexSet] = useState([]);
    const [edgeSet, setEdgeSet] = useState([]);
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

    const edgeSourceInputRef = useRef();
    const edgeTargetInputRef = useRef();

    const graphRef = useRef();
    useEffect(() => {
        const rect = graphRef.current.getBoundingClientRect();
        const followMouse = (e) => {
            const mousePos = { x: e.clientX, y: e.clientY };
            const vertexPos = {
                x: (mousePos.x - rect.x) - (vertexWidth / 2),
                y: (mousePos.y - rect.y) - (vertexHeight / 2)
            };
            if (isVertexFollowingPointer) {
                const newVertexSet = [...vertexSet];
                for (let vertex of newVertexSet) {
                    if (vertex.id == pickedVertexId) {
                        vertex.position = vertexPos;
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
                <div>
                    <input type="number" onChange={(e) => null} ref={edgeSourceInputRef} />
                    <input type="number" onChange={(e) => null} ref={edgeTargetInputRef} />
                    <button type="button" className="btn" onClick={(e) => {
                        let sourceVertex = null;
                        let targetVertex = null;
                        for (let vertex of vertexSet) {
                            if (vertex.id == edgeSourceInputRef.current.value) {
                                sourceVertex = vertex;
                            }
                            if (vertex.id == edgeTargetInputRef.current.value) {
                                targetVertex = vertex;
                            }
                        }
                        addEdge(sourceVertex, targetVertex);
                    }}>Add edge</button>
                </div>
                <div className="graph-container" ref={graphRef}>
                    <svg viewBox="0 0 1250 800">
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