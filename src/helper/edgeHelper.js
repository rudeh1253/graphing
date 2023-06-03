/**
 * Get path from sPos to tPos,
 * following the format of "d" attribute of <path> tag.
 * The path consists of straight lines, allowing at most two
 * right angle curves.
 * If vertical displace is bigger than horizontal displace,
 * the edge starts to go forward vertically, otherwise
 * horizontally.
 * The first curve appears at the middle spot.
 * e.g. If sPos = (0, 0) and tPos = (200, 50)
 * "M0,0 L100,0 L100,50 L200,50"
 * @param {*} sPos the position (x, y) of source vertex
 * @param {*} tPos the position (x, y) of target vertex
 * @returns path
 */
export function getPath(sPos, tPos) {
    return null;
}