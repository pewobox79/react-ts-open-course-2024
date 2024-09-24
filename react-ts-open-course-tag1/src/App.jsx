import './App.css'
import Paragraph from './components/Paragraph'


export default function App() {
  
  //hier kann ich vanilla JS verwenden....

  //ein RETURN MUSS ein Element übergeben...
  return (
    <>
      <h1>React TS Open Course</h1>
      <Paragraph text="Das ist mein Prop"/>
      <Paragraph text="zweiter paragraph"/>
    </>
  )
}
