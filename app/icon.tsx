import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          background: "#2f2f2f",
          color: "#faf8f6",
          fontSize: 19,
          fontWeight: 500,
          letterSpacing: "-0.04em",
        }}
      >
        N
      </div>
    ),
    {
      ...size,
    },
  );
}