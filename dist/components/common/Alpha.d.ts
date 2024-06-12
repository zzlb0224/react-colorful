/// <reference types="react" />
import { HsvaColor } from "../../types";
interface Props {
    className?: string;
    hsva: HsvaColor;
    onChange: (newAlpha: {
        a: number;
    }) => void;
}
export declare const Alpha: ({ className, hsva, onChange }: Props) => JSX.Element;
export {};
