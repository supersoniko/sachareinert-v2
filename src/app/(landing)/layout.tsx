import { CubeCloudCanvasWrapper } from "./components/cube-cloud-canvas";

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CubeCloudCanvasWrapper>
      <main className="px-24 py-12">{children}</main>
    </CubeCloudCanvasWrapper>
  );
}
