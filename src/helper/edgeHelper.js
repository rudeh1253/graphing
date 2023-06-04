/**
 * Get path from sPos to tPos,
 * following the format of "d" attribute of <path> tag.
 * The path consists of straight lines, allowing at most two
 * right angle curves.
 * If vertical displace is bigger than horizontal displace,
 * the edge goes forward vertically at first, otherwise
 * horizontally.
 * The first curve appears at the middle spot.
 * e.g. If sPos = (0, 0) and tPos = (200, 50)
 * "M0,0 L100,0 L100,50 L200,50"
 * @param {*} sPos the position (x, y) of source vertex
 * @param {*} tPos the position (x, y) of target vertex
 * @returns path
 */
export function getPath(sPos, tPos) {
    const verticalDisplace = tPos.y - sPos.y;
    const horizaontalDisplace = tPos.x - sPos.x;
    if (Math.abs(verticalDisplace) > Math.abs(horizaontalDisplace)) {
        return `M${sPos.x},${sPos.y} L${sPos.x},${sPos.y + (verticalDisplace / 2)} L${tPos.x},${sPos.y + (verticalDisplace / 2)} L${tPos.x},${tPos.y}`;
    } else {    
        return `M${sPos.x},${sPos.y} L${sPos.x + (horizaontalDisplace / 2)},${sPos.y} L${sPos.x + (horizaontalDisplace / 2)},${tPos.y} L${tPos.x},${tPos.y}`;
    }
}