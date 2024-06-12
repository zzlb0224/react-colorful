/// <reference types="react" />
import { ColorModel, ColorPickerBaseProps, AnyColor } from "../../types";
interface Props<T extends AnyColor> extends Partial<ColorPickerBaseProps<T>> {
    colorModel: ColorModel<T>;
}
export declare const ColorPicker: <T extends AnyColor>({ className, colorModel, color, onChange, ...rest }: Props<T>) => JSX.Element;
export {};
