import ReactDOM from 'react-dom'
import { Logo } from '@pmndrs/branding'
import './styles.css'
import App from './App'

function Overlay() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%' }}>
      <a href="#" style={{ position: 'absolute', bottom: 40, left: 90, fontSize: '13px' }}>
        mogura
        <br />
        software
      </a>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate3d(-50%,-50%,0)' }}>
        <h1 style={{  margin: 0, padding: 0, fontSize: '5em', fontWeight: 500, letterSpacing: '-0.05em' }}>hello! it's under construction btw...</h1>
      </div>
      <div style={{ position: 'absolute', top: 40, left: 40, fontSize: '13px' }}>C.A.L.S. system init —</div>
      <div style={{ position: 'absolute', bottom: 40, right: 40, fontSize: '13px' }}>by Maria "Nol" Belmonte</div>
    </div>
  )
}

ReactDOM.render(
  <>
    <App /> <Overlay />
    <Logo style={{ position: 'absolute', bottom: 40, left: 40, width: 30 }} />
  </>,
  document.getElementById('root')
)
