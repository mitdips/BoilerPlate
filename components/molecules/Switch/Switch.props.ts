export type SwitchProps = {
  status: boolean;
  onText: string;
  offText: string;
  onToggle: (status: boolean) => void;
};
