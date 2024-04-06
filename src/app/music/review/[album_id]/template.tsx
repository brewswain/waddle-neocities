import PageTransition from "@/components/Transitions/PageTransition";
import { ReactNode } from "react";

export default function Template({ children }: { children: ReactNode }) {
  return <PageTransition>{children}</PageTransition>;
}
