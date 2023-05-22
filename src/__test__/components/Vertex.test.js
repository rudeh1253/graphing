import { render, screen } from "@testing-library/react";
import Vertex from "../../components/Vertex";

const testCases = [
    {
        name: "Hello",
    },
];

test("Vertex renders successfully", () => {
    const obj = testCases[0];
    render(<Vertex name={ obj.name } />);
    const element = screen.getByText(obj.name);
    expect(element).toBeInTheDocument();
});