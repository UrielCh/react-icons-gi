import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * PianoKeys icon from Game Icons
 * @module
 */
export function GiPianoKeys(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M24 80v352h64V288H72V80H24zm96 0v208h-16v144h64V288h-16V80h-32zm80 0v208h-16v144h64V288h-16V80h-32zm80 0v208h-16v144h64V80h-48zm64 0v352h64V288h-16V80h-48zm96 0v208h-16v144h64V80h-48z"}}]})(props);
}
export default GiPianoKeys;
