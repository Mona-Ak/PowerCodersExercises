import  {CellState}  from "./cellState";
export  class Cell{
    constructor(){
        this.currentState = new CellState(false);
        this.nextState = new CellState(false);
    }
    applyRules(){}
    toggleState(){
        this.currentState = JSON.parse(JSON.stringify(this.nextState));
    }
    setNextState(isAlive){
        this.nextState.isAlive = isAlive;

    }
    
}