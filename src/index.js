import ReactDOM from 'react-dom'
import { Suspense } from 'react';
import './styles.css'
import App from './App'

function Overlay() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%' }}>

      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate3d(-50%,-50%,0)' }}>
        <h1 style={{  margin: 0, padding: 0, fontSize: '7em', fontWeight: 500, letterSpacing: '-0.05em' }}>hello!?!...</h1>
        <h2 style={{  margin: 0, padding: 0, fontSize: '2em', fontWeight: 500, letterSpacing: '-0.05em' }}>...oh hi!, name's Maria and I do Web Stuffing for a living, pleased to meet you.</h2>
        <br />
        <h2 style={{  margin: 0, padding: 0, fontSize: '2em', fontWeight: 500, letterSpacing: '-0.05em' }}>I'm still building this landing in the meantime you can...visit my <a href="https://fori.io/mariajbelmonte">portfolio</a>, take a look at my <a href="https://github.com/nolrinale">github</a>, stalk my <a href="https://www.linkedin.com/in/mariajbelmonte/">linkedin</a> or mess around in my <a href="https://www.kiyomizu.moe/">other server</a>, or you can also get in touch with me via <a href="mailto:myriabelmonte@gmail.com">mail</a>.</h2>
        <br />
        <h2 style={{  margin: 0, padding: 0, fontSize: '2em', fontWeight: 500, letterSpacing: '-0.05em' }}>See you next time!</h2>
      </div>
      <div style={{ position: 'absolute', top: 40, left: 40, fontSize: '13px' }}>C.A.L.S. system init —</div>
      <div style={{ position: 'absolute', bottom: 40, right: 40, fontSize: '13px' }}>by Maria "Nol" Belmonte</div>
    </div>
  )
}

ReactDOM.render(
  <>
  <Suspense fallback={<Loading />}>
    <App /> <Overlay />
</Suspense>

  </>,
  document.getElementById('root')
)

function Loading() {
  return <span>Now Loading...</span>
}