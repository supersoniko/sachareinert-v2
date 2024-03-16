import { CubeCloudCanvasWrapper } from "./components/cube-cloud-canvas";

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CubeCloudCanvasWrapper>
      <main>{children}</main>
    </CubeCloudCanvasWrapper>
  );
}
