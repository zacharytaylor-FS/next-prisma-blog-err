'use client'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Header = () => {
  const router = useRouter()

  const isActive = (pathname) => router.pathname === pathname

  return(
    <nav className='bg-purple-700'>
      <div className="left">
        <Link href="/" className='bold ml-4' data-active={isActive('/')}>
        <span className=''>
        <svg width="357.12031249999995" height="357.12031249999995" viewBox="0 0 312.5 312.5" className="css-1j8o68f" style="width: 82px;"><defs id="SvgjsDefs1932"></defs><g id="SvgjsG1933" featurekey="rootContainer" transform="matrix(6.25,0,0,6.25,0,0)" fill="#111111"><path xmlns="http://www.w3.org/2000/svg" d="M50 25c0 8.88-3.62 15.67-10.6 20.11C35.53 47.58 29.93 50 25 50c-8.63 0-14.24-1.37-18.73-8C3.57 38 0 30.2 0 25c0-6.85 1.76-14.06 6.22-18.58S18.04 0 25 0c9.5 0 16.77 5.3 21 13.11 1.88 3.53 4 7.58 4 11.89z"></path></g><g id="SvgjsG1934" featurekey="symbolFeature-0" transform="matrix(2.036296861048202,0,0,2.036296861048202,98.27811410436814,64.15114480720764)" fill="#d7eef2"><path xmlns="http://www.w3.org/2000/svg" d="M24.65,23.134c-1.74,0-3.147,1.41-3.147,3.15s1.407,3.15,3.147,3.15c1.738,0,3.151-1.41,3.151-3.15  S26.389,23.134,24.65,23.134z M24.65,27.968c-0.93,0-1.684-0.756-1.684-1.684c0-0.931,0.754-1.684,1.684-1.684  c0.929,0,1.683,0.753,1.683,1.684C26.333,27.212,25.579,27.968,24.65,27.968z M44.322,6.801h-31.95  c-2.023,0-3.669,1.648-3.669,3.672v30.809c0,2.023,1.646,3.671,3.669,3.671h31.95c2.021,0,3.668-1.647,3.668-3.671V10.473  C47.99,8.449,46.344,6.801,44.322,6.801z M42.283,37.565c0,1.011-0.823,1.835-1.835,1.835H16.242c-1.012,0-1.835-0.824-1.835-1.835  V14.188c0-1.012,0.823-1.835,1.835-1.835h24.206c1.012,0,1.835,0.823,1.835,1.835V37.565z M40.448,13.871H16.242  c-0.171,0-0.316,0.145-0.316,0.316v23.378c0,0.17,0.146,0.316,0.316,0.316h24.206c0.171,0,0.316-0.146,0.316-0.316V14.188  C40.765,14.016,40.619,13.871,40.448,13.871z M35.804,22.84c0.729,0.045,1.391,0.335,1.907,0.789l-0.96,0.96  c-0.267-0.213-0.592-0.354-0.947-0.394V22.84z M35.393,22.84v1.357c-0.354,0.039-0.68,0.181-0.945,0.394l-0.959-0.961  C34.003,23.177,34.664,22.888,35.393,22.84z M33.198,23.921l0.96,0.96c-0.212,0.265-0.353,0.591-0.393,0.945h-1.356  C32.456,25.098,32.744,24.436,33.198,23.921z M30.116,21.925c0.124-0.072,0.265-0.11,0.405-0.11c0.259,0,0.484,0.122,0.603,0.328  c0.091,0.154,0.108,0.34,0.053,0.524c-0.059,0.192-0.19,0.355-0.37,0.458l-1.854,1.07c-0.205-0.421-0.47-0.806-0.783-1.147  L30.116,21.925z M23.958,19.173c0-0.425,0.311-0.771,0.692-0.771c0.377,0,0.694,0.354,0.694,0.771v2.379  c-0.227-0.033-0.457-0.057-0.694-0.057c-0.235,0-0.465,0.023-0.692,0.057V19.173z M18.179,22.141  c0.118-0.204,0.343-0.326,0.602-0.326c0.143,0,0.283,0.038,0.408,0.11l1.943,1.121c-0.313,0.342-0.577,0.727-0.783,1.147  l-1.853-1.068c-0.187-0.106-0.325-0.285-0.379-0.486C18.07,22.466,18.093,22.29,18.179,22.141z M19.189,29.828  c-0.355,0.205-0.829,0.102-1.013-0.218c-0.19-0.332-0.046-0.771,0.32-0.982l1.583-0.914c0.142,0.448,0.347,0.869,0.604,1.252  L19.189,29.828z M25.345,32.582c0,0.423-0.312,0.768-0.694,0.768c-0.382,0-0.692-0.345-0.692-0.768v-1.566  c0.228,0.032,0.457,0.057,0.692,0.057c0.237,0,0.468-0.024,0.694-0.057V32.582z M24.65,30.457c-2.301,0-4.173-1.872-4.173-4.173  c0-2.302,1.872-4.173,4.173-4.173c2.302,0,4.171,1.871,4.171,4.173C28.821,28.585,26.952,30.457,24.65,30.457z M31.125,29.61  c-0.184,0.319-0.656,0.423-1.013,0.218l-1.498-0.864c0.26-0.381,0.466-0.802,0.605-1.252l1.586,0.916  C31.172,28.839,31.316,29.28,31.125,29.61z M32.409,26.236h1.356c0.04,0.355,0.181,0.681,0.394,0.944l-0.961,0.961  C32.744,27.626,32.456,26.965,32.409,26.236z M35.393,29.222c-0.729-0.048-1.39-0.337-1.903-0.79l0.959-0.96  c0.265,0.213,0.59,0.352,0.944,0.394V29.222z M34.164,26.032c0-0.792,0.645-1.438,1.437-1.438c0.79,0,1.434,0.646,1.434,1.438  c0,0.79-0.644,1.434-1.434,1.434C34.809,27.466,34.164,26.822,34.164,26.032z M35.804,29.222v-1.356  c0.355-0.04,0.681-0.179,0.946-0.394l0.961,0.962C37.194,28.887,36.533,29.176,35.804,29.222z M38,28.144l-0.96-0.963  c0.212-0.264,0.354-0.589,0.393-0.944h1.356C38.742,26.965,38.453,27.628,38,28.144z M37.433,25.826  c-0.04-0.356-0.181-0.681-0.393-0.947l0.961-0.958c0.452,0.515,0.74,1.177,0.788,1.905H37.433z M18.394,45.877v1.8  c0,1.224-0.992,2.216-2.216,2.216c-1.226,0-2.218-0.992-2.218-2.216v-1.8H18.394z M42.733,45.877v1.8  c0,1.224-0.992,2.216-2.218,2.216c-1.224,0-2.216-0.992-2.216-2.216v-1.8H42.733z"></path></g><g id="SvgjsG1935" featurekey="nameFeature-0" transform="matrix(1.4204725255956423,0,0,1.4204725255956423,54.901054068653714,173.67030075367234)" fill="#d7eef2"><path d="M8.08 21.64 c0.52 -0.28 0.28 -4.2 -0.04 -5 c-0.12 -0.32 -0.6 -0.24 -0.68 0 c-0.48 1.32 -0.44 3.48 -0.24 4.64 c0.08 0.4 0.6 0.56 0.96 0.36 z M9.52 15.600000000000001 c0.56 1.2 0.88 7.24 -0.76 7.96 c-0.96 0.4 -3.32 0.72 -3.76 -1.44 c-0.24 -1.2 -0.52 -4.2 0.12 -6 c0.36 -1 3.28 -3 4.4 -0.52 z M12.96 22.4 c-0.36 -7.24 -0.88 -9.44 -1.76 -10.68 c-0.36 -0.52 -6.28 -1.04 -7.8 0.2 s-1.12 13.2 0.08 14.16 c1.28 1 3.76 0.92 6.44 0.32 c0.32 2.12 0.48 5.8 -0.16 7.92 c-0.48 1.64 -3.52 2.68 -4.24 0.44 c-0.28 -0.84 -0.36 -1.76 -0.4 -2.64 c-0.68 -0.04 -1.32 0.04 -2.2 0.32 c0.04 2.44 0.48 6.04 1.48 6.68 c1.84 1.2 6.92 -0.52 7.68 -1.8 c0.52 -0.88 1.08 -11.32 0.88 -14.92 z M14.92 22 c0.04 3.36 -0.76 14.8 -1.68 16.4 c-1.32 2.2 -7.56 4.72 -10.36 2.88 c-1.32 -0.84 -2.2 -6.12 -2.04 -9.88 c2.52 -1.08 3.8 -1.24 6.04 -0.96 c0.04 1.28 0.04 1.88 0.08 2.44 c0 0.28 0.28 1.6 0.6 1.04 c0.36 -0.64 0.56 -3.64 0.52 -5.08 c-1.76 0.32 -4.24 0.36 -5.84 -0.96 c-2.04 -1.68 -2.04 -15.44 0.56 -17.64 c2.08 -1.76 9.28 -1.96 10.48 -0.16 s1.52 4.72 1.64 11.92 z M25.880000000000003 35.28 c-2.12 0.28 -4.76 0.4 -4.76 0.4 c-0.28 -5.72 -0.48 -18 0.12 -23.84 c-0.92 0 -1.92 0.12 -2.76 0.36 c-0.28 9.12 -0.2 20.76 0.12 27.12 c2.52 -0.04 5.28 -0.44 7.24 -1.12 c0.04 -0.96 0.08 -2.08 0.04 -2.92 z M27.240000000000002 32.92 c0.24 2 0.12 4.48 -0.12 6.72 c-3.04 1.44 -6.88 2.12 -10.88 2.16 c-0.16 -7.32 0.24 -20.48 0.96 -31.08 c2.32 -1.08 4.44 -1.2 6.84 -1.2 c-1 5.88 -1.36 18.36 -1.32 24.16 c0.92 -0.12 2.28 -0.28 4.52 -0.76 z M36.76 27.16 c0.12 -0.2 0.12 -3.04 -0.12 -5.4 c-0.08 -0.76 -0.48 -0.76 -0.64 -0.08 c-0.48 2.24 -0.88 5.08 -0.56 5.52 c0.2 0.24 1.28 0.04 1.32 -0.04 z M38.519999999999996 28.2 c-0.84 1.36 -3.6 1.44 -4.6 0.16 c-0.64 -0.84 0.16 -7.88 0.56 -9.64 c0.32 -1.36 2.24 -2.68 3.2 -0.48 c0.72 1.68 1.56 8.76 0.84 9.96 z M42.599999999999994 38.32 c-0.44 -8.08 -1.56 -20.44 -2.56 -27.04 c-1.96 -0.08 -5.24 0.2 -7.6 0.76 c-0.88 7.92 -1.8 19.76 -2.24 27.04 c1.08 0.16 1.8 0.2 2.8 0.16 c0.08 -1.52 0.12 -3.56 0.52 -5.04 c0.52 -1.88 4.76 -2.28 5.4 -0.36 c0.48 1.4 0.52 3.72 0.48 5.2 c1.08 -0.16 2.16 -0.44 3.2 -0.72 z M44 39.88 c-2.64 0.76 -4.48 1.48 -7.32 1.52 c0.24 -2 0.44 -5.32 0 -6.76 c-0.12 -0.4 -1.4 -0.2 -1.56 0.32 c-0.56 1.8 -0.56 4.64 -0.72 6.52 c-2.8 0.32 -3.84 0.32 -6.72 -0.12 c0.76 -8.44 2.24 -21.88 3.56 -31 c3.52 -1.12 8.04 -1.68 10.96 -1.44 c0.92 7.48 1.68 21.52 1.8 30.96 z M55.8 38.96 c0.08 -1.2 -0.04 -2.56 -0.2 -3.72 c-2.88 0.4 -4.44 0 -4.84 -0.56 c-0.28 -0.4 -0.88 -4.48 -0.88 -8.64 c0 -4.12 0.44 -9 1.16 -9.92 c0.84 -1.12 2.68 -1.4 4.64 -1.2 c0.04 -1.12 0.08 -2.48 0 -3.52 c-3.88 -0.52 -5.64 -0.28 -6.28 0.28 c-1.2 1.04 -2.52 10.48 -2.4 14.44 c0.08 3.52 0.96 12.68 2.04 13.2 c0.92 0.44 3.88 0.32 6.76 -0.36 z M57.92 9.120000000000001 c0.2 2.28 0.08 5.16 -0.24 7.8 c-3.4 -0.6 -4.56 -0.08 -4.76 0.2 s-0.92 4.32 -1.08 8.92 c-0.16 3.64 0 6.88 0.24 7.2 c0.28 0.4 1.48 0.36 4.76 -0.36 c0.4 2.64 0.52 5.08 0.12 7.76 c-3.68 1.16 -7.6 1.72 -9.28 0.92 c-1.2 -0.56 -2.6 -11.08 -2.56 -15.16 c0.04 -3.72 1.52 -14.48 3.56 -16.4 c1.52 -1.4 4.48 -1.44 9.24 -0.88 z M72.64 36.56 c-1.28 -4.28 -4.4 -12.12 -6.36 -15.56 c2 -1.52 4 -3.44 5.04 -4.76 c-0.32 -1.28 -0.84 -2.6 -1.28 -3.56 c-1.2 1.24 -2.72 2.72 -4.88 4.32 c-0.56 0.4 -1.32 0.44 -1.28 -0.6 l0.16 -5.16 c-0.92 -0.08 -1.88 -0.12 -2.68 -0.04 c0.24 7.36 -0.04 21.12 -0.36 27.44 c1.08 -0.04 2.2 -0.24 3 -0.44 c0.12 -2.36 0.2 -5.88 0 -9.04 c-0.04 -0.88 1.28 -1.64 2 -0.4 c1.6 2.76 2.96 7.32 3.92 10.56 c1.04 -0.88 2.08 -1.84 2.72 -2.76 z M74.24 36.8 c-1.32 2.12 -3.24 3.96 -6.08 6.2 c-0.6 -2.8 -1.48 -5.92 -2.28 -8.48 c-0.12 1.92 -0.28 3.96 -0.44 5.56 c-1.8 0.64 -4.04 1.08 -6.92 1.08 c0.64 -7.04 1.52 -23.24 1.48 -31.72 c2.2 -0.48 4.2 -0.56 6.68 -0.28 l-0.28 4.52 c1.28 -1.16 2.52 -2.56 4.52 -4.84 c1.24 2.12 2.24 4.68 2.76 7.4 c-1.16 1.68 -3.16 3.8 -4.68 5.12 c1.6 3.48 4.16 11.04 5.24 15.44 z M92.03999999999999 16 l3.6 -0.64 c0.04 -1.24 0.04 -2.88 -0.12 -4.12 c-5 0.12 -8.32 0.6 -9.6 0.8 c-0.24 1.16 -0.36 3.28 -0.32 4.72 l3.56 -0.4 c-0.32 6.8 -0.44 17.08 -0.16 23.4 c1.04 0 1.84 -0.12 2.48 -0.44 c-0.2 -5.8 -0.08 -16.88 0.56 -23.32 z M97.63999999999999 16.68 l-3.56 0.76 c-0.72 6.16 -1.16 17.16 -1.12 23.08 c-1.88 1.6 -4 1.64 -6.4 1.6 c-0.08 -6.84 0.4 -17.24 0.84 -23.52 l-3.2 0.48 c-0.24 -2.6 0.04 -6.76 0.84 -8.88 c0 0 4.56 -1.12 12.6 -1.52 c0.36 2.48 0.36 5.52 0 8 z M109.88 15.16 c0.04 -1 -0.04 -2.32 -0.24 -3.4 c-2.24 0 -5.8 0.16 -8.28 0.44 c-0.44 6.44 -0.8 18.96 -0.32 27.56 c3.32 0.2 6.52 -0.48 8.36 -1.2 c0.08 -0.96 0.04 -1.92 -0.08 -2.8 c-1.52 0.2 -3.88 0.4 -5.32 0.36 c-0.28 -2.2 -0.32 -5.2 -0.04 -7.6 l5.6 -2.04 c0.08 -0.8 0 -1.72 -0.12 -2.48 l-5.76 0.6 c-0.08 -3.24 0.24 -6.04 0.52 -8.44 c1.84 -0.48 4.2 -0.8 5.68 -1 z M111.88 16.56 c-1.76 0.24 -4.04 0.64 -5.6 1.04 c-0.2 1.36 -0.44 3.12 -0.52 4.72 l5.24 -0.72 c0.52 2 0.56 4.12 0.16 6.2 l-5.52 2.24 c-0.12 1.32 -0.2 3 -0.16 4.24 c1.32 -0.12 3.4 -0.44 5.04 -1 c0.36 2.56 0.48 4.28 0.12 6.76 c-2.68 1.32 -6.88 2.48 -11.92 2.08 c-0.32 -10.04 0.68 -24.44 1.44 -31.8 c3.56 -0.64 8.48 -1.04 11.52 -1.08 c0.56 2.4 0.56 5.08 0.2 7.32 z M123.19999999999999 38.96 c0.08 -1.2 -0.04 -2.56 -0.2 -3.72 c-2.88 0.4 -4.44 0 -4.84 -0.56 c-0.28 -0.4 -0.88 -4.48 -0.88 -8.64 c0 -4.12 0.44 -9 1.16 -9.92 c0.84 -1.12 2.68 -1.4 4.64 -1.2 c0.04 -1.12 0.08 -2.48 0 -3.52 c-3.88 -0.52 -5.64 -0.28 -6.28 0.28 c-1.2 1.04 -2.52 10.48 -2.4 14.44 c0.08 3.52 0.96 12.68 2.04 13.2 c0.92 0.44 3.88 0.32 6.76 -0.36 z M125.32 9.120000000000001 c0.2 2.28 0.08 5.16 -0.24 7.8 c-3.4 -0.6 -4.56 -0.08 -4.76 0.2 s-0.92 4.32 -1.08 8.92 c-0.16 3.64 0 6.88 0.24 7.2 c0.28 0.4 1.48 0.36 4.76 -0.36 c0.4 2.64 0.52 5.08 0.12 7.76 c-3.68 1.16 -7.6 1.72 -9.28 0.92 c-1.2 -0.56 -2.6 -11.08 -2.56 -15.16 c0.04 -3.72 1.52 -14.48 3.56 -16.4 c1.52 -1.4 4.48 -1.44 9.24 -0.88 z M139.28 38.68 c0.4 -6.32 0.44 -17.84 -0.08 -26.4 c-0.96 0.04 -2.08 0.2 -2.96 0.44 c0.16 2.28 0.36 7.48 0.12 9.36 c-0.16 1.28 -1.64 1.88 -2.4 2.04 c-1.44 0.32 -2.72 -0.32 -2.8 -1.28 c-0.2 -2.04 -0.16 -8.04 -0.08 -11.24 c-0.76 0 -1.64 0.12 -2.52 0.28 c-0.6 8.36 -0.44 21.24 -0.32 27.92 c1 0.04 2.04 -0.12 2.96 -0.4 c-0.04 -2.52 0 -4.76 0.08 -8.56 c0 -0.84 1.16 -1.76 2.52 -1.96 c1.48 -0.2 2.76 0.52 2.8 1.6 c0.08 1.76 0.24 6 0.16 8.36 c0.84 0 1.68 0 2.52 -0.16 z M141.48 9.879999999999999 c0.32 10.04 -0.24 23.16 -1 30.44 c-2.52 0.8 -3.88 0.72 -6.44 0.72 c0.4 -2.72 0.4 -7.4 0.36 -9.6 c0 -0.92 -1.24 -0.32 -1.28 0.36 c-0.24 4.2 -0.4 5.72 -0.44 9.28 c-2.24 1 -4.16 1.4 -6.84 1.08 c0.16 -7.56 0.44 -22.32 1.56 -32 c2.28 -0.64 4.08 -0.84 6.32 -0.72 c-0.24 3.68 -0.56 10.08 -0.44 12.36 c0.04 0.84 1.12 -0.08 1.2 -0.48 c0.32 -2 0.24 -8.2 0.08 -10.32 c1.96 -0.76 4.44 -1.36 6.92 -1.12 z"></path></g></svg>

        </span>
        </Link>
      </div>

      <div className="right">
        <Link href="/signup" className='mr-3' data-active={isActive('/signup')}>
          Signup
        </Link>
        <Link href="/drafts" data-active={isActive('/drafts')}>
          Drafts
        </Link>
        <Link href="/create" data-active={isActive('/create')}>
          + Create draft
        </Link>
      </div>

     
    </nav>
  )
}

export default Header