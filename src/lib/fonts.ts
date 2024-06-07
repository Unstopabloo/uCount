import { Noto_Sans, Raleway as RalewayFont } from "next/font/google";

export const Noto = Noto_Sans({ subsets: ["latin"] });
export const Raleway = RalewayFont({ subsets: ["latin"], display: "swap" });