import { IInputPreset } from "./InputPresetInterface";

export interface IInputComponent {
  preset: IInputPreset;
  placeholder: string;
  name: string; // what this input field represents, for data extraction
}
