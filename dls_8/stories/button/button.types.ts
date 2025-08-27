export interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
  onPress?: () => void; // single event handler for all platforms
  style?: any;
}
