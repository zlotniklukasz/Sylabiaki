(function() { // Multiple Drag & Drop with autofilling
/* This script should work for any HTML element, which: 
- has attribute 'draggable='true'
- has attribute 'id' with unique content
- its only content is text 
- parent element has ID = 'drag-and-drop' */
    'use strict';

    var wrapper = document.getElementById('drag-and-drop'), // wrapper for draggable elements
        data, // dragged dataW
        sourceElementID, // ID of 'source' element from which content has been dragged
        ddSupport; // browser support for Drag & Drop API

    wrapper.addEventListener('dragstart', drag); // start dragging
    wrapper.addEventListener('dragover', dragover); // dragging
    wrapper.addEventListener('drop', drop); // stop dragging (dropping)
    
    ddSupport = function () { // verify if browser supports Drag & Drop API
        var div = document.createElement('div');
        return ('draggable' in div) || ('ondragstart' in div && 'ondrop' in div);
    };

    if (!ddSupport()) { // browser doesn't support Drag & Drop API
        alert("Twoja przeglądarka nie obsługuje tej gry!");
        return false;
    }

    function drag(event) { // start dragging management
        sourceElementID = event.target.id; // remember the 'source' element, from which the content has been taken
        event.dataTransfer.setData('text', event.target.textContent); // set data to be dragged
    }

    function dragover(event) { // dragging management
        event.preventDefault();
    }

    function drop(event) { // top dragging (dropping) management
        event.preventDefault();
        
            if (event.target.hasAttribute('draggable')) {

                data = event.dataTransfer.getData('text'); // get dragged data

                document.getElementById(sourceElementID).textContent = event.target.textContent; // fill 'source' element with content of 'target' element
                event.target.textContent = data; // fill 'target' element with content of 'source' element
            }
            else {
                return;
            }
    }
})();