import Card from './Components/Card'
import './index.css'
import img1 from './asserts/pexels-markus-spiske-2004161.jpg'
import img2 from './asserts/img2.jpeg'
import img3 from './asserts/img3.jpeg'

const Log = () => {
    console.log('GEEKMAN')
}
const Alert = ()=>{
    alert('GEEKS')
}
const log = ()=>{
    console.log('GEEkWOMAN')
}


export function App(){
    return(
        <>
            <Card img={img1}
                  title='Hello!'
                  desc='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aspernatur beatae consequuntur esse est id incidunt nesciunt nisi reiciendis rem.'
                  nameBtn='Click me'
                  btn={Log}/>
            <Card img={img2}
                  title='Hello GEEK!'
                  desc='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aspernatur'
                  nameBtn='Press'
                  btn={Alert}/>
            <Card img={img3}
                  title='Hello GEEK STUDIO!'
                  desc='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                  nameBtn='Tap me'
                  btn={log}/>
        </>
    )
}

