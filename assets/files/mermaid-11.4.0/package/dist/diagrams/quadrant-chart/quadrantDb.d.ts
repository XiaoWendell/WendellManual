import type { StylesObject } from './quadrantBuilder.js';
interface LexTextObj {
    text: string;
    type: 'text' | 'markdown';
}
declare function setQuadrant1Text(textObj: LexTextObj): void;
declare function setQuadrant2Text(textObj: LexTextObj): void;
declare function setQuadrant3Text(textObj: LexTextObj): void;
declare function setQuadrant4Text(textObj: LexTextObj): void;
declare function setXAxisLeftText(textObj: LexTextObj): void;
declare function setXAxisRightText(textObj: LexTextObj): void;
declare function setYAxisTopText(textObj: LexTextObj): void;
declare function setYAxisBottomText(textObj: LexTextObj): void;
declare function parseStyles(styles: string[]): StylesObject;
declare function addPoint(textObj: LexTextObj, className: string, x: number, y: number, styles: string[]): void;
declare function addClass(className: string, styles: string[]): void;
declare function setWidth(width: number): void;
declare function setHeight(height: number): void;
declare function getQuadrantData(): import("./quadrantBuilder.js").QuadrantBuildType;
declare const _default: {
    setWidth: typeof setWidth;
    setHeight: typeof setHeight;
    setQuadrant1Text: typeof setQuadrant1Text;
    setQuadrant2Text: typeof setQuadrant2Text;
    setQuadrant3Text: typeof setQuadrant3Text;
    setQuadrant4Text: typeof setQuadrant4Text;
    setXAxisLeftText: typeof setXAxisLeftText;
    setXAxisRightText: typeof setXAxisRightText;
    setYAxisTopText: typeof setYAxisTopText;
    setYAxisBottomText: typeof setYAxisBottomText;
    parseStyles: typeof parseStyles;
    addPoint: typeof addPoint;
    addClass: typeof addClass;
    getQuadrantData: typeof getQuadrantData;
    clear: () => void;
    setAccTitle: (txt: string) => void;
    getAccTitle: () => string;
    setDiagramTitle: (txt: string) => void;
    getDiagramTitle: () => string;
    getAccDescription: () => string;
    setAccDescription: (txt: string) => void;
};
export default _default;