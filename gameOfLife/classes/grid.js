import { Cell } from "./cell";

export class Grid{
    constructor(rows,cols){
        this.rows = rows;
        this.cols = cols;
        this.matrix = this.creatMatrix()
    }

    creatMatrix(){
        let arr = [];
        for(let i = 0; i <this.rows;i++){
            arr.push([]);
            arr[i].push(new Array(this.cols));
            for(let j = 0; j < this.cols; j++){
                arr[i][j] = new Cell;
            }
        }
        return arr;
    }
    countNeighbourForPosition(row,col){
        let aliveNeighours = 0;
        // upper left hand 
        if(this.getCellForPosition(row-1,col-1).currentState.isAlive) aliveNeighours++;
        // above
        if(this.getCellForPosition(row-1,col).currentState.isAlive) aliveNeighours++;
        // upper right
        if(this.getCellForPosition(row-1,col+1).currentState.isAlive) aliveNeighours++;
        
        // left
        if(this.getCellForPosition(row,col-1).currentState.isAlive) aliveNeighours++;
        // right
        if(this.getCellForPosition(row,col+1).currentState.isAlive) aliveNeighours++;
        
        // lower left 
        if(this.getCellForPosition(row+1,col-1).currentState.isAlive) aliveNeighours++;
        // below
        if(this.getCellForPosition(row+1,col).currentState.isAlive) aliveNeighours++;
        // lower right
        if(this.getCellForPosition(row+1,col+1).currentState.isAlive) aliveNeighours++;
    }

    getCellForPosition(row,col){
        if(row < 0 || col < 0 || row >= this.rows || col >= this.cols){
            return new Cell();
        }
        return this.matrix[row][col];
    }


}