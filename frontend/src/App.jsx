function App() {
  return (
    <div style={{ backgroundColor: '#0f172a', minHeight: '100vh', padding: '20px', color: 'white', fontFamily: 'Arial' }}>

      <h1 style={{ textAlign: 'center', fontSize: '32px' }}>HireFlow </h1>

      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '40px' }}>

      {/*COLUNA 1 */}
      <div style={{ backgroundColor: '#1e293b', padding: '15px', borderRadius: '8px', width: '300px' }}>
        <h2>Candidatos Novos</h2>
            <div style={{ backgroundColor: '#334155', padding: '10px', borderRadius: '5px', marginTop: '10px' }}>
              Maria Silva - Dev Frontend
                </div>
               </div>

      {/*COLUNA 2 */}
      <div style={{ backgroundColor: '#1e293b', padding: '15px', borderRadius: '8px', width: '300px' }}>
        <h2>Em Entrevista</h2>
            <div style={{ backgroundColor: '#334155', padding: '10px', borderRadius: '5px', marginTop: '10px' }}>
              João Souza - Designer
                </div>
               </div>

         {/*COLUNA 3 */}
      <div style={{ backgroundColor: '#1e293b', padding: '15px', borderRadius: '8px', width: '300px' }}>       
        <h2>Contratado</h2>
    </div>

    </div>
    </div>
  )
}

export default App