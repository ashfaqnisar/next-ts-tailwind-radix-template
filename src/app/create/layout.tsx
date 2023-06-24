import { ReactNode } from "react";

export const metadata = {
  title: "Create - Interview Prepper",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}
