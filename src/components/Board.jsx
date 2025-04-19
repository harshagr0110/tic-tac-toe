import { useEffect, useState } from "react";
export default function Board(){
    const [state,setState]=useState(Array(9).fill(null));
    const [turn,setTurn]=useState("X");
    const handleClick=(index)=>{
        const temparr=[...state];
        temparr[index]=turn;
        setState(temparr);
        if(turn==="X"){
            setTurn("O");
        }
        else{
            setTurn("X");
        }
    }
    
    useEffect(() => {
        const winningCombos = [
            [0,1,2], [3,4,5], [6,7,8],
            [0,3,6], [1,4,7], [2,5,8],
            [0,4,8], [2,4,6],
        ];
    
        for (let combo of winningCombos) {
            const [a, b, c] = combo;
            if (state[a] && state[a] === state[b] && state[b] === state[c]) {
                setTimeout(() => {
                    alert("Winner is " + state[a]);
                }, 100);
               setTimeout(() => {
                    setState(Array(9).fill(null));
                    setTurn("X");
               }, 1000);
                return;
            }
        }
    
        if (state.every(cell => cell !== null)) {
            setTimeout(() => {
                alert("Match Drawn");
            }, 100);
        }
    }, [state]);
    

    return(
    <div className="wrapper">
        <h1>Tic Tac Toe</h1>
        <h2>Turn: {turn}</h2>
    <div className="board-container">
        
        <div className="board-row">
            <div className="board-cell" onClick={()=>handleClick(0)}>{state[0]}</div>
            <div className="board-cell" onClick={()=>handleClick(1)}>{state[1]}</div>
            <div className="board-cell" onClick={()=>handleClick(2)}>{state[2]}</div>
        </div>
        <div className="board-row">
            <div className="board-cell" onClick={()=>handleClick(3)}>{state[3]}</div>
            <div className="board-cell" onClick={()=>handleClick(4)}>{state[4]}</div>
            <div className="board-cell" onClick={()=>handleClick(5)}>{state[5]}</div>
        </div>
        <div className="board-row">
            <div className="board-cell" onClick={()=>handleClick(6)}>{state[6]}</div>
            <div className="board-cell" onClick={()=>handleClick(7)}>{state[7]}</div>
            <div className="board-cell" onClick={()=>handleClick(8)}>{state[8]}</div>
        </div>
        <button onClick={()=>{setState(Array(9).fill(null));setTurn("X");}}>Reset</button>
    </div>
    </div>
    )
}