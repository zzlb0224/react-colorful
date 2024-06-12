import React from "react";
interface Props {
    className?: string;
    hue: number;
    onChange: (newHue: {
        h: number;
    }) => void;
}
export declare const Hue: React.MemoExoticComponent<({ className, hue, onChange }: Props) => JSX.Element>;
export {};
