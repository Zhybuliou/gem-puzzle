'use strict'

const field = document.createElement('div');
document.body.append(field);
field.className = 'field';
field.id = 'field';

const pause = document.createElement('div');
document.body.append(pause);
pause.className = 'pause';
pause.id = 'pause';
pause.innerHTML = "<div id =\"time\">Time: 00:00</div><div id =\"steps\">Steps: 0</div><button id = \"solveGame\" type=\"button\">solve game</button><button id = \"pauseGame\" type=\"button\">pause game</button>";

const sound = document.createElement('div');
document.body.append(sound);
sound.className = 'sound';
sound.id = 'sound';
sound.innerHTML = "<div id=\"sound\"><audio id=alarm><source id=\"vol\" src= sound/1.mp3></audio>";

const control = document.createElement('div');
document.body.append(control);
control.className = 'control';

const name = "<select name = \"select_path\" id = \"select_path\"><option disabled>level</option><option value = \"3\" >3x3 easy</option><option selected value = \"4\" >4x4 normal</option><option value = \"5\">5x5 hard</option><option value = \"6\">6x6 very hard</option><option value = \"7\">7x7 extra hard</option><option value = \"8\">8x8 death match</option></select><button id = \"start\" type=\"button\">New game</button><button id = \"best\" type=\"button\">Best Scores</button><button id = \"soundButton\" type=\"button\">sound off</button>";
control.innerHTML = name;

const topWin = document.createElement('div');
document.body.append(topWin);
topWin.className = 'win';
let buttonTop = document.getElementById("best");
buttonTop.addEventListener('click', ()=>{
  const winTop = `<table style="width:100%">
  <tr>
    <th>Level</th>
    <th>Steps</th>
    <th>Time</th>
  </tr>
  <tr>
    <td>4x4</td>
    <td>30</td>
    <td>00:50</td>
  </tr>
  <tr>
    <td>3x3</td>
    <td>68</td>
    <td>01:31</td>
  </tr>
  <tr>
    <td>3x3</td>
    <td>68</td>
    <td>01:31</td>
  </tr>
  <tr>
    <td>3x3</td>
    <td>68</td>
    <td>01:31</td>
  </tr>
  <tr>
    <td>3x3</td>
    <td>68</td>
    <td>01:31</td>
  </tr>
  <tr>
    <td>3x3</td>
    <td>68</td>
    <td>01:31</td>
  </tr>
  <tr>
    <td>3x3</td>
    <td>68</td>
    <td>01:31</td>
  </tr>
  <tr>
    <td>3x3</td>
    <td>68</td>
    <td>01:31</td>
  </tr>
  <tr>
    <td>3x3</td>
    <td>68</td>
    <td>01:31</td>
  </tr>
  <tr>
  <td>3x3</td>
  <td>68</td>
  <td>01:31</td>
</tr>
</table>`;
 
    topWin.innerHTML = winTop;
    topWin.style.width = `${num * cellSize }px`;
    topWin.style.height = `${num * cellSize }px`;
    topWin.style.visibility = "visible"; 
  topWin.addEventListener('click',()=>{
    topWin.style.visibility = "hidden";
  })
    
});


const win = document.createElement('div');
document.body.append(win);
win.className = 'win';

// const win = document.createElement('div');
// document.body.append(win);
// win.className = 'win';



var m = 0;
        function hod(){
            m++;
            document.getElementById("steps").innerHTML = "Steps:   " + m;
        }
var t = 0;
var min  = 0;

        function myTime(){
          t++;
          if(t > 59){
            t = 0;
           min++;
          }
          document.getElementById("time").innerHTML = "Time: "+ String(min).padStart(2,'0')  + ':' + String(t).padStart(2,'0') ;

          if(control.style.visibility === "visible" || pauseLevel.textContent === "menu"){
         
            return;
            
          }
          setTimeout(myTime, 1000);
      }
      let img = 1;
const pauseLevel = document.getElementById('pauseGame');
      
pauseLevel.addEventListener('click', () => {
        if(control.style.visibility != "visible" && t > 0){
           control.style.visibility = "visible";
          //  clearTimeout(myTime);
           pauseLevel.textContent = 'resume'
        }else if( t != 0){
          control.style.visibility = "hidden";
          pauseLevel.textContent = 'pause'
          setTimeout(myTime, 1000);
        }
          });
var soundMute = document.getElementById('soundButton');
soundMute.addEventListener('click', () => {
    
        if(soundMute.textContent === 'sound on'){
          soundMute.textContent = 'sound off';
          document.getElementById('alarm').play();
        }else{
          soundMute.textContent = 'sound on';
        }
});

const level = document.getElementById('start');
let num = parseInt(document.getElementById('select_path').value); 
level.addEventListener('click', () => {

const solveGame = document.getElementById('solveGame');
solveGame.addEventListener('click', () => {
  pauseLevel.textContent = 'menu'
  const solvedArr = [];
  const solveNumbers = [...Array( (num * num) -1 ).keys()]
  
    for(let q = 0; q <=  (num * num) - 2; q++){
      
      const solvedArrValue = solveNumbers[q] + 1
      const solvedArrLeft = q % num;
      const solvedArrTop = (q - solvedArrLeft) / num;
  
      solvedArr.push({
         value: solvedArrValue,
         left: solvedArrLeft,
         top: solvedArrTop,
      });
    }
    solvedArr.push(empty);
   for(let z = 0; z < cells.length-1; z++){
     for(let r = 0; r < solvedArr.length-1; r++){
       if(solvedArr[r].value === cells[z].value ){
        cells[z].element.style.left = `${solvedArr[r].left * cellSize}px`;
        cells[z].element.style.top = `${solvedArr[r].top * cellSize}px`;
       }
     }
   } 
    
});
 
control.style.visibility = "hidden";
field.innerHTML = '';
m = 0;
t = 0;
  if(t > 0){
    t = 0;
    min = 0;
  }else{
    myTime();
  }
  
num = parseInt(document.getElementById('select_path').value);
const cellSize = 100;
control.style.width = `${num * cellSize }px`;
control.style.height = `${num * cellSize }px`;
field.style.width = `${num * cellSize }px`;
field.style.height = `${num * cellSize }px`;
pause.style.width = `${(num * cellSize) + 20}px`;

const empty = {
  value: (num * num),
  top: num - 1,
  left: num - 1,
};

let cells = [];

function move(index){
  const cell = cells[index];
  const leftDiff = Math.abs(empty.left - cell.left);
  const topDiff = Math.abs(empty.top - cell.top);

  if(leftDiff + topDiff > 1){
    return;
  }
  
  cell.element.style.left = `${empty.left * cellSize}px`;
  cell.element.style.top = `${empty.top * cellSize}px`;
  
  const emptyLeft = empty.left;
  const emptyTop = empty.top;
  empty.left = cell.left;
  empty.top = cell.top;
  cell.left = emptyLeft;
  cell.top = emptyTop;

  const isFinished = cells.every(cell => {
  return cell.value === cell.top * num + (cell.left + 1);
  });
  hod();
  if(isFinished) {
    const winName = `<p>Ура! Вы решили головоломку за ${min}:${String(t).padStart(2,'0')} и ${m} ходов</p>`;
    win.innerHTML = winName;
    win.style.width = `${num * cellSize }px`;
    win.style.height = `${num * cellSize }px`;
    m = 0;
    t = -1;
    min = 0;
    win.style.visibility = "visible"; 
    control.style.visibility = "visible";
    pauseLevel.textContent = 'pause';
  }

}

win.addEventListener('click', () => {
   win.style.visibility = "hidden";
});

let numbers = [...Array( (num * num) -1 ).keys()]
.sort(() => Math.random() - 0.5);

  for(let i = 0; i <=  (num * num) - 2; i++){
    const cell = document.createElement('div');
    const value = numbers[i] + 1
    cell.className = 'cell';
    cell.id = 'cell';
    cell.innerHTML = value;
    cell.setAttribute("draggable","true");
    
    cell.style.backgroundImage = `url(/cut/${img}/${num}/${value}.jpg)`;
    cell.style.backgroundSize = `cover`;
   
    const left = i % num;
    const top = (i - left) / num;

    cells.push({
       value: value,
       left: left,
       top: top,
       element: cell
    });

    cell.style.left =  `${left * cellSize}px`;
    cell.style.top = `${top * cellSize}px`;

    field.append(cell);

    cell.addEventListener('click', () => {
      move(i);
      if(soundMute.textContent === 'sound off'){
      document.getElementById('alarm').play();
      }
    });

  }
    img++;
    if(img > 5){
      img = 1;
    }
    cells.push(empty);
});


const cellSize = 100;
control.style.width = `${num * cellSize }px`;
field.style.width = `${num * cellSize }px`;
field.style.height = `${num * cellSize }px`;
const empty = {
  value: (num * num),
  top: num - 1,
  left: num - 1
};

const cells = [];

function move(index){
  const cell = cells[index];
  const leftDiff = Math.abs(empty.left - cell.left);
  const topDiff = Math.abs(empty.top - cell.top);

  if(leftDiff + topDiff > 1){
    return;
  }

  cell.element.style.left = `${empty.left * cellSize}px`;
  cell.element.style.top = `${empty.top * cellSize}px`;
  
  const emptyLeft = empty.left;
  const emptyTop = empty.top;
  empty.left = cell.left;
  empty.top = cell.top;
  cell.left = emptyLeft;
  cell.top = emptyTop;

  const isFinished = cells.every(cell => {
    return cell.value === cell.top * num + (cell.left + 1);
  });

  if(isFinished) {
    alert('you won!!!');
  }
}

 const numbers = [...Array( (num * num) -1 ).keys()]

  for(let i = 0; i <=  (num * num) - 2; i++){
    const cell = document.createElement('div');
    const value = numbers[i] + 1
    cell.className = 'cell';
    cell.innerHTML = value;
    
    const left = i % num;
    const top = (i - left) / num;

    cells.push({
       value: value,
       left: left,
       top: top,
       element: cell
    });

    cell.style.left =  `${left * cellSize}px`;
    cell.style.top = `${top * cellSize}px`;

    field.append(cell);

    cell.addEventListener('click', () => {
      move(i);
    });
  }

  
  const solvedArr = [];
  const solveNumbers = [...Array( (num * num) -1 ).keys()]
    for(let q = 0; q <=  (num * num) - 2; q++){
      
      const solvedArrValue = solveNumbers[q] + 1
      const solvedArrLeft = q % num;
      const solvedArrTop = (q - solvedArrLeft) / num;
  
      solvedArr.push({
         value: solvedArrValue,
         left: solvedArrLeft,
         top: solvedArrTop,
      });

    }
    solvedArr.push(empty);

