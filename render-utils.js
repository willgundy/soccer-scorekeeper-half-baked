import { deleteGame } from './games/games.js';

export function renderGame(game) {
    const div = document.createElement('div');
    const team1Div = renderTeam(game.name1, game.score1);
    const team2Div = renderTeam(game.name2, game.score2);

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('deleteButton');
    deleteButton.textContent = 'Delete';

    deleteButton.addEventListener('click', deleteGame);

    div.append(team1Div, team2Div, deleteButton);

    div.classList.add('game');
    div.id = game.id;

    return div;
}

export function renderTeam(name, score) {
    const teamDiv = document.createElement('div');
    const nameDiv = document.createElement('p');
    const scoreDiv = document.createElement('p');
    

    teamDiv.classList.add('team');
    nameDiv.classList.add('name');
    scoreDiv.classList.add('score');

    nameDiv.textContent = name;
    scoreDiv.textContent = score;

    teamDiv.append(nameDiv, scoreDiv);

    return teamDiv;
}