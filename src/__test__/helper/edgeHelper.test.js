import { getPath } from "../../helper/edgeHelper";

it("Get path correctly", () => {
    const testCases = require("./edgeHelperTestCases.json").getPath;
    console.log(testCases);
    for (let i = 0; i < testCases.length; i++) {
        expect(getPath(testCases[i].case.source, testCases[i].case.target))
                .toBe(testCases[i].expected);
    }
});