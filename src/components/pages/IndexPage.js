import { useState } from "react";
import "./IndexPage.css";
import Vertex from "../Vertex";

function IndexPage() {
    const [ vertexSet, setVertexSet ] = useState([ ]);
    const [ inputName, setInputName ] = useState("");
    const defaultPosition = { x: 100, y: 100 };
    const addVertex = (name) => {
        const newVertexSet = [ ...vertexSet ];
        newVertexSet.push(<Vertex name={ name } position={ defaultPosition }/>);
        setVertexSet(newVertexSet);
    }
    return (
        <div className="container">
            <header>
                <h1 className="title">Graph</h1>
            </header>
            <section>
                <div>
                    <input type="text" onChange={ (e) => setInputName(e.target.value) }/>
                    <button className="btn" onClick={ (e) => {
                        console.log("here");
                        const name = inputName;
                        setInputName("");
                        addVertex(name);
                    } }>Add vertex</button>
                </div>
                <div>
                    {
                        vertexSet.map((elem) => elem)
                    }
                </div>
            </section>
        </div>
    );
}

export default IndexPage;