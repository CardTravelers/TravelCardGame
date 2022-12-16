# User Stories

## User Story 1 (general function)

As a user, I want to see a picture of a location and be able to guess the location.

### US1 Feature Tasks

- Build 10 locations, each with: Main picture, background image, 2 hints
- Display main picture of location
- Display background image
- Display 2 prompts for hints.
- Display hint when clicked
- Display 4 options for answer

### US1Acceptance Tests

- Ensure each location comes up only once.
- Ensure initial round only shows background image and main image
- Ensure hints are displayed only when clicked
- Ensure answer options are displayed

## User Story 2 (Score)

I want to have the ability to capture my score as I work through the card game.

### US2 Feature Tasks

- Show the score each round
- Have functions options for the user to input their answer.
- Reflect rather the user got the answer right or wrong
- Save the score as the user progresses
- Assign a point based system for each guess based on how many hints they used

### US2 Acceptance Tests

- Ensure the score is accurately tracked, using the hints to also track scoring options
- Make sure the input field is functional
- Make sure click functions can generate accurate reporting results with a message;
- User local storage to ensure progressed is tracked throughout

## User Story 3 (Instructional Page)

As a user, I want the ability to clearly understand the rules and instructions of the game.

### US3 Feature Tasks

- Instructions are explained prior to start of the game
- Adding hints that are recognizable
- Define game length

### US3 Acceptance Tests

- Having the user prompt information
- Ensure that the instruction page is available throughout the game.
- Ensure the the helper functions are functioning and in view
- Ensure that time to complete the game is tracked

## User Story 4 (Complicity, Operations)

As a user, I want something to pass my time while learning about different places I can visit.

### US4 Feature Tasks

- Smooth UI without distracting ads.
- Enough locations to keep the end-user busy for a given period of time.
- Information about the location
- Timer to track (stretch goal)

### US4 Acceptance Tests

- Time the length of the game and grow the locations to 15-20 minutes
- Result card shows what the location is. (city, state, country)

## User Story 5 (Visuals , Experience)

As a user, I want to be able to see the results of each guess

### US5 Feature Tasks

- Render an animation for the user when they get it correct
- Render an animation for the user when they get it wrong
- Render high score ranking board
- If user gets highest score render show confetti animation
- Render static background image hint pertaining to location

### US5 Acceptance Tests

- Provide the user a notification they got the answer wrong
- Provide the user a notification they got the answer correct
- Provide the user with a notification for the results at the end of the game

### Stretch Goals

- Have background animations pertaining to the current location
- Have audio to match the location

## User Story 6

As a user, I want to see information about the developers

### US6 Feature Tasks

- Separate ‘About Me’ page
- Display picture and short bio for each dev

### US6 Acceptance Tests

- Ensure page properly loads
- Ensure page is visually pleasing
