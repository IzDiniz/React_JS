function Contato(){
    return(
        <>
            <h2>Entre em Contato</h2>
            <form>
                <input type="text" placeholder="Nome">
                <input type="email" placeholder="Email">
                <textarea placeholder="Mensagem"></textarea>
                <button type="submit">Enviar</button>
            </form>
        </>
    )
}
export default Contato