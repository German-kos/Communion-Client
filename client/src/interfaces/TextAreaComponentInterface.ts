import { IInputPreset } from "./InputPresetInterface";

export interface ITextAreaComponent {
  preset: IInputPreset;
  placeholder: string;
  name: string;
  rows: number;
}
