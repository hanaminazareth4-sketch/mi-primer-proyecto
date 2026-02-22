// 1. Importamos el componente desde su ubicación
import Header from './componentes/header/Header'; 

function App() {
return (
    <div className="App">
      {/*  Usamos el componente como si fuera una etiqueta HTML personalizada */}
    <Header />
    
      
    <main style={{ height: '200vh', padding: '100px 20px' }}>
        <h1>Variedades Laupa</h1>
        <a href="#contacto" className="btn-destacado">Compra ahora</a>
        
    </main>
    </div>
);
}

export default App;