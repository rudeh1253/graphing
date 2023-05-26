import "./IndexPage.css";

function IndexPage() {
    return (
        <div className="container">
            <header>
                <h1 className="title">Graph</h1>
            </header>
            <section>
                <div>
                    <button className="btn">Add vertex</button>
                </div>
                <div>
                    (Graph will be presented here)
                </div>
            </section>
        </div>
    );
}

export default IndexPage;