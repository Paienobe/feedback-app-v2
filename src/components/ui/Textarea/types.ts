export type TextareaProps = {
  text: string;
  cols: number;
  rows: number;
  width: string;
  max?: number;
  onChangeFunc: (input: string) => void;
};
