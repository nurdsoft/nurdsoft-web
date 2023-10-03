declare module "*.jpg";
declare module "*.gif";
declare module "*.svg";
declare module "*.png";
declare module "*.webp";

declare module "*.json" {
  const value: any;
  export default value;
}
