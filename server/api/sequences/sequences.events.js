/**
 * Sequences model events
 */

'use strict';

import {EventEmitter} from 'events';
import Sequences from './sequences.model';
var SequencesEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
SequencesEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Sequences.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    SequencesEvents.emit(event + ':' + doc._id, doc);
    SequencesEvents.emit(event, doc);
  }
}

export default SequencesEvents;
