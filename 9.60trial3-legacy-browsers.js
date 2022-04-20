/******************* 
 * 9.60Trial3 Test *
 *******************/


// store info about the experiment session:
let expName = '9.60trial3';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'pix',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(instructionRoutineBegin());
flowScheduler.add(instructionRoutineEachFrame());
flowScheduler.add(instructionRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'stimuli copy/daniela-cuevas-t7YycgAoVSw-unsplash.jpeg', 'path': 'stimuli copy/daniela-cuevas-t7YycgAoVSw-unsplash.jpeg'},
    {'name': 'stimuli copy/eberhard-grossgasteiger-fTlXjG24mQ0-unsplash.jpeg', 'path': 'stimuli copy/eberhard-grossgasteiger-fTlXjG24mQ0-unsplash.jpeg'},
    {'name': 'stimuli copy/aaron-burden-xNsoHwvoHnY-unsplash.jpeg', 'path': 'stimuli copy/aaron-burden-xNsoHwvoHnY-unsplash.jpeg'},
    {'name': 'stimuli copy/mae-mu-KXq1wGn_OXI-unsplash.jpeg', 'path': 'stimuli copy/mae-mu-KXq1wGn_OXI-unsplash.jpeg'},
    {'name': 'stimuli copy/jared-rice-WbOn78k-ywU-unsplash.jpeg', 'path': 'stimuli copy/jared-rice-WbOn78k-ywU-unsplash.jpeg'},
    {'name': 'stimuli copy/alexandre-chambon-ADqQgiStp4c-unsplash.jpeg', 'path': 'stimuli copy/alexandre-chambon-ADqQgiStp4c-unsplash.jpeg'},
    {'name': 'stimuli copy/marek-mucha-PfmNfCXcrdw-unsplash.jpeg', 'path': 'stimuli copy/marek-mucha-PfmNfCXcrdw-unsplash.jpeg'},
    {'name': 'stimuli copy/jordan-graff-87111nn8z_w-unsplash.jpeg', 'path': 'stimuli copy/jordan-graff-87111nn8z_w-unsplash.jpeg'},
    {'name': 'stimuli copy/ori-song-eK2YZq4a0fU-unsplash.jpeg', 'path': 'stimuli copy/ori-song-eK2YZq4a0fU-unsplash.jpeg'},
    {'name': 'stimuli copy/mathew-schwartz-3z56aMRpjJ0-unsplash.jpeg', 'path': 'stimuli copy/mathew-schwartz-3z56aMRpjJ0-unsplash.jpeg'},
    {'name': 'stimuli copy/library-of-congress-VFTxZaIsDAs-unsplash.jpeg', 'path': 'stimuli copy/library-of-congress-VFTxZaIsDAs-unsplash.jpeg'},
    {'name': 'stimuli copy/samuel-clara-HkZVyO9l_Ig-unsplash.jpeg', 'path': 'stimuli copy/samuel-clara-HkZVyO9l_Ig-unsplash.jpeg'},
    {'name': 'stimuli copy/darya-sev-QRdX9dO8poY-unsplash.jpeg', 'path': 'stimuli copy/darya-sev-QRdX9dO8poY-unsplash.jpeg'},
    {'name': 'stimuli copy/chuttersnap-6ELMRvIuJ1g-unsplash.jpeg', 'path': 'stimuli copy/chuttersnap-6ELMRvIuJ1g-unsplash.jpeg'},
    {'name': 'stimuli copy/michel-kimkongrath-EWpsHYyDL34-unsplash.jpeg', 'path': 'stimuli copy/michel-kimkongrath-EWpsHYyDL34-unsplash.jpeg'},
    {'name': 'stimuli copy/james-haworth-Hm7BtNRT6eE-unsplash.jpeg', 'path': 'stimuli copy/james-haworth-Hm7BtNRT6eE-unsplash.jpeg'},
    {'name': 'stimuli copy/jake-remy-QBAMncfwXr8-unsplash.jpeg', 'path': 'stimuli copy/jake-remy-QBAMncfwXr8-unsplash.jpeg'},
    {'name': 'stimuli copy/mwangi-gatheca-hvvNY6b8pE0-unsplash.jpeg', 'path': 'stimuli copy/mwangi-gatheca-hvvNY6b8pE0-unsplash.jpeg'},
    {'name': 'stimuli copy/chris-leipelt-fqoHScXjiW4-unsplash.jpeg', 'path': 'stimuli copy/chris-leipelt-fqoHScXjiW4-unsplash.jpeg'},
    {'name': 'stimuli copy/arjun-kapoor-Om3JbZp3CCo-unsplash.jpeg', 'path': 'stimuli copy/arjun-kapoor-Om3JbZp3CCo-unsplash.jpeg'},
    {'name': 'stimuli copy/max-saeling-ymfYqeKN-FU-unsplash.jpeg', 'path': 'stimuli copy/max-saeling-ymfYqeKN-FU-unsplash.jpeg'},
    {'name': 'stimuli copy/jack-b-JYZYRF0j_Uc-unsplash.jpeg', 'path': 'stimuli copy/jack-b-JYZYRF0j_Uc-unsplash.jpeg'},
    {'name': 'stimuli copy/drew-farwell-ScLYGfuCqQg-unsplash.jpeg', 'path': 'stimuli copy/drew-farwell-ScLYGfuCqQg-unsplash.jpeg'},
    {'name': 'no_quotes.xlsx', 'path': 'no_quotes.xlsx'},
    {'name': 'stimuli copy/daniel-mirlea-w4lzk2_Yasc-unsplash.jpeg', 'path': 'stimuli copy/daniel-mirlea-w4lzk2_Yasc-unsplash.jpeg'},
    {'name': 'stimuli copy/natalya-letunova-eCfCIwtKdsg-unsplash.jpeg', 'path': 'stimuli copy/natalya-letunova-eCfCIwtKdsg-unsplash.jpeg'},
    {'name': 'stimuli copy/anthony-intraversato-xr43RescWSA-unsplash.jpeg', 'path': 'stimuli copy/anthony-intraversato-xr43RescWSA-unsplash.jpeg'},
    {'name': 'stimuli copy/diego-ph-xW42e724p00-unsplash.jpeg', 'path': 'stimuli copy/diego-ph-xW42e724p00-unsplash.jpeg'},
    {'name': 'stimuli copy/dave-hoefler-oi65oz2xNag-unsplash.jpeg', 'path': 'stimuli copy/dave-hoefler-oi65oz2xNag-unsplash.jpeg'},
    {'name': 'stimuli copy/ryan-wu-9R5FnAn5tYM-unsplash.jpeg', 'path': 'stimuli copy/ryan-wu-9R5FnAn5tYM-unsplash.jpeg'},
    {'name': 'stimuli copy/long-truong-vRepMA0VQ54-unsplash.jpeg', 'path': 'stimuli copy/long-truong-vRepMA0VQ54-unsplash.jpeg'},
    {'name': 'stimuli copy/gritt-zheng-K88BVN6yMrU-unsplash.jpeg', 'path': 'stimuli copy/gritt-zheng-K88BVN6yMrU-unsplash.jpeg'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var frameDur;
async function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2021.2.3';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var instructionClock;
var text;
var key_resp;
var trialClock;
var image;
var mouse;
var pauseClock;
var text_2;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "instruction"
  instructionClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'Welcome! \n\nIn this experiment, you will see a total of 30 images. You will see each image for 5 seconds. In these 5 seconds, please click the part of the image that you find the most salient or attention-grabbing. \n\nPress any key to begin! ',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 24.0,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [500, 500],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  mouse = new core.Mouse({
    win: psychoJS.window,
  });
  mouse.mouseClock = new util.Clock();
  // Initialize components for Routine "pause"
  pauseClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _key_resp_allKeys;
var instructionComponents;
function instructionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'instruction'-------
    t = 0;
    instructionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    instructionComponents = [];
    instructionComponents.push(text);
    instructionComponents.push(key_resp);
    
    instructionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instructionRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'instruction'-------
    // get current time
    t = instructionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      key_resp.clock.reset();
      key_resp.start();
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: [], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instructionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructionRoutineEnd() {
  return async function () {
    //------Ending Routine 'instruction'-------
    instructionComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_resp.stop();
    // the Routine "instruction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var trials;
var currentLoop;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'no_quotes.xlsx',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials.forEach(function() {
      const snapshot = trials.getSnapshot();
    
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(trialRoutineBegin(snapshot));
      trialsLoopScheduler.add(trialRoutineEachFrame());
      trialsLoopScheduler.add(trialRoutineEnd());
      trialsLoopScheduler.add(pauseRoutineBegin(snapshot));
      trialsLoopScheduler.add(pauseRoutineEachFrame());
      trialsLoopScheduler.add(pauseRoutineEnd());
      trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


var gotValidClick;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'trial'-------
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(5.000000);
    // update component parameters for each repeat
    image.setImage(stimulus);
    // setup some python lists for storing info about the mouse
    mouse.clicked_name = [];
    mouse.clicked_image = [];
    gotValidClick = false; // until a click is received
    mouse.mouseClock.reset();
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(image);
    trialComponents.push(mouse);
    
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
var buttons;
function trialRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'trial'-------
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image* updates
    if (t >= 0.0 && image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image.tStart = t;  // (not accounting for frame time here)
      image.frameNStart = frameN;  // exact frame index
      
      image.setAutoDraw(true);
    }

    frameRemains = 0.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image.setAutoDraw(false);
    }
    buttons = mouse.getPressed();
    if (mouse.isPressedIn(image, {"buttons": [0]})) {
        continueRoutine = false;
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var _mouseXYs;
var time;
function trialRoutineEnd() {
  return async function () {
    //------Ending Routine 'trial'-------
    trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = mouse.getPos();
    psychoJS.experiment.addData("mouse.x", _mouseXYs[0]);
    psychoJS.experiment.addData("mouse.y", _mouseXYs[1]);
    time = mouse.mouseClock.getTime();
    psychoJS.experiment.addData("time", time);
    
    return Scheduler.Event.NEXT;
  };
}


var pauseComponents;
function pauseRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'pause'-------
    t = 0;
    pauseClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.500000);
    // update component parameters for each repeat
    // keep track of which components have finished
    pauseComponents = [];
    pauseComponents.push(text_2);
    
    pauseComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function pauseRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'pause'-------
    // get current time
    t = pauseClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_2.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    pauseComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function pauseRoutineEnd() {
  return async function () {
    //------Ending Routine 'pause'-------
    pauseComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
