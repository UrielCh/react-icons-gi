import { GenIcon, type IconBaseProps } from "../deps.ts";

export function GiHamburgerMenu(props: IconBaseProps) {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"}}]})(props);
}
export default GiHamburgerMenu;
