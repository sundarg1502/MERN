// import './app.css';
import Counter from "./components/counter"

function Welcome(){
    return <h2>Dtaa From React Component

    </h2>
}
function App(){
    return (
        <div> <Welcome/>
        <Counter/>
        
        </div>
    )
}

function Header(){
    return <h2>Header For Body</h2>
}

ReactDOM.render(<App/>,document.getElementById('root'))
ReactDOM.render(<Header/>,document.getElementById('header'))