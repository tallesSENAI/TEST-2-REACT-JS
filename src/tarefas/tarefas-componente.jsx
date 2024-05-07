import { useState } from "react";

function Tarefas() {
    //valor     /     função    /   se usa '[]' dentro de '()' para 
    //dizer que 'listaTarefas' tem uma lista vazia como valor inicial
    const [listaTarefas, setListaTarefas] = useState([]);

    function adicionaTarefa() {

        listaTarefas.push(
            {
                descricao: "Tarefa",
                finalizado: false
            }
        );

        //retorna uma cópia do elemento do começo até o final da lista
        //retorna a lista inteira
        setListaTarefas(listaTarefas.slice());

        console.log("Tarefas:", listaTarefas);
        console.log("Cadastrado");
    }

    function AtualizarTarefa(TarefaAtual) {

        //'!' é para negação, se algo é false, se transforma em true e vice-versa
        TarefaAtual.finalizado = !TarefaAtual.finalizado;
        setListaTarefas(listaTarefas.slice());
    }

    function pegaEstilo(TarefaAtual){
        if(TarefaAtual.finalizado){
            return 'line-through';
        }
        return 'none';
    }

    return (
        <>
            <div>
                <button onClick={adicionaTarefa}>Cadastrar</button>
                <br />

                <div>
                    {
                        //"map" pega a lista de texto criada na linha 9
                        //e transforma em uma lista de elementos <h2></h2 > 
                        listaTarefas.map(TarefaAtual => {
                            return <div style={
                                {
                                    margin: "10px",
                                    color: "White",
                                    backgroundColor: 'Black',
                                    textDecoration: pegaEstilo(TarefaAtual)
                                }
                            } onClick={() => AtualizarTarefa(TarefaAtual)}>{TarefaAtual.descricao}</div>

                        })
                    }
                </div>
            </div>
        </>
    );


}
export default Tarefas;