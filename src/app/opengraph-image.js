import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: "90px",
                    background: "linear-gradient(160deg, #0d2848 0%, #06080d 100%)",
                    color: "#ffffff",
                }}
            >
                <div
                    style={{
                        fontSize: 26,
                        color: "#60a5fa",
                        letterSpacing: 6,
                        textTransform: "uppercase",
                        marginBottom: 28,
                    }}
                >
                    {siteConfig.professionalTitle}
                </div>
                <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.15 }}>
                    {siteConfig.name}
                </div>
                <div style={{ fontSize: 26, color: "#9ca3af", marginTop: 32, maxWidth: 820 }}>
                    {siteConfig.description}
                </div>
            </div>
        ),
        { ...size }
    );
}
