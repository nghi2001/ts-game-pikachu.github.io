type Point = {
    x : number,
    y : number,
    id : number,
    el : HTMLElement
}

type Pokemon={
    id:number,
    urlimg:string
}
let score = 0


/*
    Check line X Y for checkRect Function
*/
function checkLineXRec(y1:number,y2:number,x:number,arr:any){
    let min =Math.min(y1,y2);
    let max = Math.max(y1,y2);
    let result = false;

    for(let y = min+1;y<=max;y++){

        if(arr[y][x] == null){
            result = true;
        }
        else{
            result = false
        }
    }
    return result;
}
function checkLineYRec( x1 : number,x2 : number,y : number,arr: any){
    let min =Math.min(x1,x2);
    let max = Math.max(x1,x2);
    let result = false
    if(max-min==1 && arr[y][max]==null){
        result = true
        return result;
    }
    
    for(let x = min+1;x<max;x++){
        if(arr[y][x] == null){
            result = true;
        }else{
            result = false
        }
    }
    
    return result;
}
//
function checkLineX(y1 : number,y2: number,x: number,arr: any,id?:number,condison= '<'){
    let min =Math.min(y1,y2);
    let max = Math.max(y1,y2);
    let result = false
    if(max - min == 1){
        return true
    }

    if( condison == '<=') {
        for(let y = min;y<=max;y++){

            if(arr[y][x] == null){
                result = true;
            }
            else{
                result = false
            }
        }
    }
    for(let y = min+1;y<max;y++){

        if(arr[y][x] == null){
            result = true;
        }
        else{
            result = false
        }
    }
    return result;
}
function checkLineY(x1: number,x2: number,y: number,arr : any, id?:number,condison = '<'){
    let min =Math.min(x1,x2);
    let max = Math.max(x1,x2);
    let result = false
    if(max - min == 1){
        return true
    }
    for(let x = min+1;condison == '<='? x <= max :x<max ;x++){
        if( arr[y] === undefined) {
            return false
        }
        if(arr[y][x] == null){
            result = true;
        }else{
            result = false
        }
    }
    
    return result;
}

function checkLineLY (point1 : any, point2 : any, arr: any) {
    let pMinY = point1;
    let pMaxY = point2;

    if( point1.y > point2.y ) {
        pMinY = point2;
        pMaxY = point1;
    }

    if( checkLineX(pMinY.y,pMaxY.y,pMinY.x,arr) && checkLineY(pMinY.x,pMaxY.x,pMaxY.y,arr)) {
        console.log('check L',true);
        return true
    }
}

function checkLineLX (point1 : any, point2 : any, arr: any) {
    let pMinY = point1;
    let pMaxY = point2;

    if( point1.x > point2.x ) {
        pMinY = point2;
        pMaxY = point1;
    }

    if( checkLineX(pMinY.y,pMaxY.y,pMinY.x,arr) && checkLineY(pMinY.x,pMaxY.x,pMaxY.y,arr)) {
        console.log('check L',true);
        return true
    }
}

function checkRectX(point1 : any,point2 : any, arr : any){
    let pMinY = point1;
    let pMaxY = point2;
    if(point1.x > point2.x){
        pMinY = point2;
        pMaxY = point1
    }
    console.log('CheckRecX');
    for(let y =parseInt(pMinY.x)+1;y<pMaxY.x;y++){
        checkLineYRec(pMinY.x,y,pMinY.y,arr)
        // console.log('x: '+y);
        // console.log(checkLineYRec(pMinY.x,y,pMinY.y,arr)+''+
        // checkLineXRec(pMinY.y,pMaxY.y,y,arr)+''+
        // checkLineY(y,pMaxY.x,pMaxY.y,arr));
        if(
            checkLineYRec(pMinY.x,y ,pMinY.y,arr)&&
            checkLineXRec(pMinY.y,pMaxY.y,y,arr)&&
            checkLineY(y,pMaxY.x,pMaxY.y,arr)
        ){
            return true;
        }
    }

    return false
    // checkLineY(pMinY.x,y,pMinY.y,arr)}
}

function checkRectY(point1: any,point2 : any,arr : any){
    
    let pMinY = point1;
    let pMaxY = point2;
    if(point1.y > point2.y){
        pMinY = point2;
        pMaxY = point1;
    }
    
    console.log('CheckRecY');
    for(let y=parseInt(pMinY.y)+1;y<pMaxY.y;y++){
        // console.log(y);
        // console.log(checkLineXRec(pMinY.y,y,pMinY.x,arr)+''+
        // checkLineYRec(pMinY.x,pMaxY.x,y,arr)+''+
        // checkLineX(y,pMaxY.y,pMaxY.x,arr));
        if(
            checkLineXRec(pMinY.y,y,pMinY.x,arr)&&
            checkLineY(pMinY.x,pMaxY.x,y,arr)&&
            checkLineX(y,pMaxY.y,pMaxY.x,arr)
        ){
            return true;
            console.log(true);
        }
    }

    return false

}

function checkMoreLineX (point1 : any , point2 : any, type : number, arr : any) {
    console.log('Check More Line X');

    let pMinY = point1;
    let pMaxY = point2;
    if(point1.y > point2.y){
        pMaxY = point1;
        pMinY = point2;
    }

    let y = parseInt(pMaxY.y);
    let row = pMinY.x;

    if(pMinY.y == pMaxY.y) {
        let newy = y;

        (type == -1 ? newy -= 1 : newy +=1);
        // console.log('a',arr[newy][pMinY.x],checkLineY(pMinY.x,pMaxY.x,newy,arr,0,'<='));
        if(arr[newy] === undefined) {
            return false
        }
        while(arr[newy][pMinY.x] == null && arr[newy] [pMaxY.x] == null) {
            console.log(11);
            if(checkLineY(pMinY.x,pMaxY.x,newy,arr,0,'<=')){
                return true;
            
            }
            newy += type
        }
    }

    if( checkLineX(pMinY.y,pMaxY.y,row,arr,0,'<=') === true) {
        (type == -1 ?(y=parseInt(pMinY.y), y-=1) : y +=1);
        console.log('ok',y,pMinY.x , y,pMaxY.x,checkLineY(pMinY.x,pMaxY.x,y,arr));
        if(arr[y] === undefined) {
            return false
        }
        while(arr[y][pMinY.x] == null && arr[y][pMaxY.x] == null) {
            console.log(11);
            if( checkLineY(pMinY.x,pMaxY.x,y,arr)){
                console.log(true);
                return true
            }
            y +=type
        }
    }
    
}
function checkMoreLineY(point1 : any,point2:any, type :number, arr : any) {
    console.log('Check More Line');
    let pMinX = point1;
    let pMaxX = point2;

    if(point1.x > point2.x) {
        pMaxX = point1;
        pMinX = point2;
    }

    let x = parseInt(pMaxX.x);
    let row = pMinX.y;

    if(pMinX.x == pMaxX.x){
        
        let newx = x;
        (type == -1 ? newx-=1 : newx +=1);
        while(arr[pMinX.y][newx] == null && arr[pMaxX.y][newx] == null) {
            console.log(11);
            if(checkLineX(pMinX.y,pMaxX.y,newx,arr,0,'<=')){
                return true
            }
            newx +=type
        }
    }


    // console.log(pMinX,pMaxX,`row: ${row}  x: ${x}`);
    // console.log(checkLineY(pMinX.x,pMaxX.x,row,arr,0,type == -1 ? '<': '<='));
    if (checkLineY(pMinX.x,pMaxX.x,row,arr,0,'<=') === true){
        // console.log('jaja');
        (type == -1 ? x-=1 : x +=1);

        // console.log(pMinX.y,x, pMaxX.y,x);
        while(arr[pMinX.y][x] == null && arr[pMaxX.y][x] == null) {
            // console.log(11);
            if( checkLineX(pMinX.y,pMaxX.y,x,arr)){
                // console.log(true);
                return true
            }
            x +=type
        }
    }

}
const pokemon_number = 1  
var queue:Point[] = [];
var list_pokemon:any= new Array;


const getPokemon = async (id:number) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url);
    const pokemon =await res.json();

    return pokemon.sprites.front_shiny
}

const createListPokemon = async (list_pokemon:any) => {
    for(let i=0;i<10;i++){
        let list:Pokemon[] = []
        for(let j=0;j<10;j++){
            let id_poke = Math.floor(Math.random()*pokemon_number)+1;
            let url = await getPokemon(id_poke)
            let poke:Pokemon = {
                id: id_poke,
                urlimg: url
            }
            list.push(poke)
        }
        list_pokemon.push(list)
    }

    return list_pokemon
}

const renderListPokemon = async (list:any) => {
    for(let i=0;i<list.length;i++){
        let tr = document.createElement('tr');
        for(let j=0; j< list[i].length;j++){
            let td = `
                <td data-id="${list[i][j].id}" data-x="${j}" data-y="${i}" class='pokemon'><img src="${list[i][j].urlimg}" /> </td>
            `;
            tr.innerHTML += td;
        }
        document.querySelector('table')?.appendChild(tr)
    }
}
createListPokemon(list_pokemon)
    .then(data => {
        renderListPokemon(data)
        
        const pokemon = document.querySelectorAll('.pokemon')

        pokemon.forEach((el:any) => {
            el.addEventListener('click',()=>{
                addWaitCheck(el.dataset.x,el.dataset.y,el.dataset.id,el)
            })
        })
    })



    function addWaitCheck(x : number,y : number,id : number,el : HTMLElement){

        if(list_pokemon[y][x] == null){
            return
        } else{
            queue.push({
                x,
                y,
                id,
                el
            })
            el.classList.add('boder')
        }
        function del() {
            queue[0].el.querySelector('img')?.remove();
            queue[1].el.querySelector('img')?.remove();
            list_pokemon[queue[0].y][queue[0].x]=null;
            list_pokemon[queue[1].y][queue[1].x]=null;
            score ++;
            document.querySelector('h2 span')!.textContent = (score +1).toString();
        }
        if(queue.length > 1){
            console.log(queue);
            if(queue[0].id === queue[1].id){
                
                if(queue[0].x === queue[1].x){
                    console.log('check x');
                    
                   let result = checkLineX(queue[0].y,queue[1].y,queue[0].x,list_pokemon,queue[0].id as number);
                   if(result === true){
                       del()
                       return end()
                   }
               
           }
           
           if(queue[0].y == queue[1].y){
                   console.log('check y');
                   
                   let result = checkLineY(queue[0].x,queue[1].x,queue[0].y,list_pokemon,queue[0].id);
                   
                   if(result === true){

                       del() 
                       return end()   
                   }

           }
                if(checkLineLY(queue[0],queue[1],list_pokemon)){
                    del()
                    return end()
                }if(checkLineLX(queue[0],queue[1],list_pokemon)){
                    del()
                     return end()
                }
                if (checkMoreLineX(queue[0],queue[1],-1,list_pokemon) || checkMoreLineX(queue[0],queue[1],1,list_pokemon)) {
                    del()
                    return end()
                }
                if(checkMoreLineY( queue[0] , queue[1], -1 , list_pokemon ) || checkMoreLineY( queue[0] , queue[1], 1 , list_pokemon )) {
                    console.log('check U');
                    
                    del()
                    return end()
                }
                    
                    
                    if(checkRectX(queue[0],queue[1],list_pokemon)){
                        // console.log(checkRectX(queue[0],queue[1],list_pokemon));
                        del()
                        return end()
                    }
    
                    if(checkRectY(queue[0],queue[1],list_pokemon)){
                        // console.log(checkRectY(queue[0],queue[1],list_pokemon));
                        del()
                        return end()
                    }
                
                
    
            }
            function end () {
                
                let elems = document.querySelectorAll(".boder");
        
                elems.forEach(el => {
                    el.classList.remove('boder')
                })
                return queue = []
            }
        }
    }