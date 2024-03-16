import { CubeCloudCanvasWrapper } from "./components/cube-cloud-canvas";

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CubeCloudCanvasWrapper>
      <main className="py-12 pl-12">{children}</main>
    </CubeCloudCanvasWrapper>
  );
}
