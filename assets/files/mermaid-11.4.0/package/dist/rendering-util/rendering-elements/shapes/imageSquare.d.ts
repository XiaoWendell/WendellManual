import type { Node, ShapeRenderOptions } from '../../types.js';
import type { D3Selection } from '../../../types.js';
export declare function imageSquare<T extends SVGGraphicsElement>(parent: D3Selection<T>, node: Node, { config: { flowchart } }: ShapeRenderOptions): Promise<import("d3-selection").Selection<SVGGElement, unknown, Element | null, unknown>>;