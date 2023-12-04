// import { ImageResponse } from 'next/og';

 
// export const runtime = 'edge';
 
// export async function GET() {
//   const image = await fetch(new URL('./image.png', import.meta.url)).then(
//     (res) => res.arrayBuffer(),
//   );
 
//   return new ImageResponse(
//     (
//       <div
//         style={{
//           display: 'flex',
//           background: '#f6f6f6',
//           width: '100%',
//           height: '100%',
//           flexDirection: 'column',
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}
//       >
//         <Image alt="my Image" width="256" height="256" src={imageData} />
//       </div>
//     ),
//     {
//       width: 1200,
//       height: 630,
//     },
//   );
// }