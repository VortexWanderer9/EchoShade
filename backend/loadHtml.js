import {gitCheatSheet} from './command.js'

console.log(gitCheatSheet);

let html = "";
gitCheatSheet.forEach((cmd) =>{
    html += `
    <div class="grid" style="--i:1">
       <div class="upper">
        <p class="task">${cmd.name}</p>
        <p class="action">${cmd.action}</p></div>
        <div class="command">
          <code>${cmd.command}</code>
        </div>
      </div>
    `
});
document.querySelector('.grid-cmds').innerHTML = html