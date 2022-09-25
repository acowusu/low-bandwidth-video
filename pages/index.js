import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from '../styles/Home.module.css';
// import Kalidok from './kalidok';

export default function Home() {
  const router = useRouter()
  const [roomName, setRoomName] = useState('')

  const joinRoom = () => {
    router.push(`/room/${roomName || Math.random().toString(36).slice(2)}`)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Native WebRTC API with NextJS</title>
        <meta
          name='description'
          content='Use Native WebRTC API for video conferencing'
        />
        <link rel='icon' href='/favicon.ico' />
        <script src="https://unpkg.com/three@0.133.0/build/three.js" async></script>
        <script src="https://unpkg.com/three@0.133.0/examples/js/loaders/GLTFLoader.js" async></script>
        <script src="https://unpkg.com/three@0.133.0/examples/js/controls/OrbitControls.js" async></script>
        <script src="https://unpkg.com/@pixiv/three-vrm@0.6.7/lib/three-vrm.js" async></script>
        <script src="https://cdn.jsdelivr.net/npm/@mediapipe/holistic@0.5.1635989137/holistic.js" async></script>
        <script src="https://cdn.jsdelivr.net/npm/@mediapipe/drawing_utils/drawing_utils.js" async></script>
        <script src="https://cdn.jsdelivr.net/npm/@mediapipe/camera_utils/camera_utils.js" async></script>
        <script src="https://cdn.jsdelivr.net/npm/kalidokit@1.1/dist/kalidokit.umd.js" async></script>
      </Head>
      {/* <RenderComponent /> */}
      <main className={styles.main}>
        {/* <Demo /> */}
        <h1>Lets join a room!</h1>
        <input
          onChange={(e) => setRoomName(e.target.value)}
          value={roomName}
          className={styles['room-name']}
        />
        <button
          onClick={joinRoom}
          type='button'
          className={styles['join-room']}
        >
          Join Room
        </button>
        {/* <Kalidok/> */}
      </main>
    </div >
  )
}
