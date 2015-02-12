function Syllables() { 
    'use strict';

    var words, // words and its syllables used in the game
        wrapper = document.querySelector('#drag-and-drop'), // wrapper for draggable elements
        sourceContainers = document.querySelectorAll('.b-app__container--source'), // single container for 'source' syllable
        targetContainers = document.querySelectorAll('.b-app__container--target'), // single container for 'target' syllable
        nextGameButton = document.getElementById('next'), // "Next Game" button
        gameLevel = 0, // nth game level
        dragendEventTriggered = false, // flag to throttle stream of dragend events
        maxSyllables = 4, // max number of syllables in word
        modal = document.querySelector('.b-app__modal'); // modal window

    words = [ // max number of syllabes = 'maxSyllables'
                ['ry ','ba'], // game level 1
                ['ża','ba'], // game level 2
                ['cię','ża','rów','ka'], // ...
                ['pa','ra','sol','ka'],
                ['ko','ło'],
                ['ko','a','la'],
                ['no','gi'],
                ['ka','pi','tan'],
                ['so','wa'],
                ['hy','dra','u','lik'],
                ['o','ko'],
                ['ło','pa','ta'],
                ['bu','ty'],
                ['mi','kro','fon'],
                ['ku','la'],
                ['ko','ra','le'],
                ['ro','gi'],
                ['su','kien','ka'],
                ['mu','cha'],
                ['sa','mo','chód'],
                ['wą','sy'],
                ['za','pał','ki'],
                ['pa','ni'],
                ['a','na','nas'],
                ['fo','ka'],
                ['mo','to','ry'],
                ['dy','wan'],
                ['pił','ka'],
                ['wi','no','gro','na'],
                ['kro','wa'],
                ['po','ma','ra','ńcze'],
                ['ba','nan'],
                ['ko','ro','na'],
                ['ba','ran'],
                ['ko','le','żan','ka'],
                ['ha','mak'],
                ['fi','li','żan','ka'],
                ['san','ki'],
                ['ga','za','ta'],
                ['za','mek'],
                ['ka','lo','ry', 'fer'],
                ['buł','ki'],
                ['u','my','wa','lka'],
                ['pa','jac'],
                ['dłu','go','pis'],
                ['lal','ka'],
                [' że','laz','ko'],
                ['ba','lon'],
                ['ka','la','fior'],
                ['ła','zien','ka']
            ];

    window.addEventListener('load', newGame, false); // new game after page loaded
    nextGameButton.addEventListener('click', newGame, false); // new game after clicking button
    wrapper.addEventListener('dragend', checkGameStatus, false); // new game after clicking button
    modal.addEventListener('click', function() {modal.style.display = 'none';}, false); // close modal window after clicking it

    function newGame() {

        modal.style.display = 'none'; // hide alert window

        if (gameLevel == words.length) { // when all words used, start the game from the beggining
            gameLevel = 0;
        }

        for (var i = 0; i < maxSyllables; i ++) { // clean 'target' containers after previous game
            targetContainers[i].textContent = '';
            targetContainers[i].style.display = 'none';
        }

        for (var syllable = 0; syllable < words[gameLevel].length; syllable++) { // show empty 'target' containers for syllables
            targetContainers[syllable].style.display = 'inline-block';
        }

        for (var syllable = 0; syllable < maxSyllables; syllable++) { // show syllables propositions (source containers)
            sourceContainers[syllable].textContent = words[gameLevel][words[gameLevel].length - 1 - syllable];
        }
        gameLevel += 1;
    }

    function checkGameStatus() { // check if syllables are properly placed
        
        if (dragendEventTriggered == false) {
            
            dragendEventTriggered = true;
    
            if ((targetContainers[0].textContent == words[gameLevel - 1][0]) && 
                (targetContainers[1].textContent == words[gameLevel - 1][1]) && 
                (targetContainers[2].textContent == words[gameLevel - 1][2] || words[gameLevel - 1][2] == undefined) && 
                (targetContainers[3].textContent == words[gameLevel - 1][3] || words[gameLevel - 1][3] == undefined)) {
                
                modal.style.display = 'block'; // show modal window
            }
        dragendEventTriggered = false;
        }
    }
};

Syllables(); // start the game

