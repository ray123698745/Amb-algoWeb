'use strict';

import mongoose from 'mongoose';

var SequencesSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

export default mongoose.model('Sequences', SequencesSchema);
