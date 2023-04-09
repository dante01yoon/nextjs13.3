import { ImageResponse } from "next/server";

export const alt = 'About Acme';
export const size = {
  width: 1200,
  height: 630,
};


export const og = () => {
  return ImageResponse(
    (
      <div
      style={{
        fontSize: 128,
        background: 'white',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
        >
          About Acme
        </div>
    ),
    size,
  )  
}