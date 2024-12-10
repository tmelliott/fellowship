# iNZight rebuild workshop

## UoA Stats teaching team, 14 November 2024

- check out Research data office @ UoA (extension of the GUiNZ environment)

### Why you stay with iNZight

- change is hard
- design supports learners through visualisation
- teaching vs learning vs research (researchers still need to visualize data, though)
- visualisation first
- something immediate
- survey package - easy to use/intuitive
- uses R - easy to migrate from UI to R (same graphs, outputs)
- data management
  - e.g., rename variables really good (best UI for this)
  - rename variables into your own language
- doesn't try to do everything, does a few things very well
- import from a URL

### What's not so good

- some inconsistencies - most are likely shiny issues
- changes to outputs => quizz outputs
- code not necessarily a logical order
- no log of steps, reproducibilty
- idiosyncracies
  - p-values, rounding not consistent
  - more thought to how outputs are rounded, presented, formatted
- repeating the same steps to do some common things
  - e.g., when the default/standard not right
- response is always "Y" axis
  - discussion about cat x num charts that look the same regardless of variable order
  - not logical for moving into modelling

### Features that would be nice

- Codap: shareable link
- better separation of settings/config
  - e.g., global (size) vs current chart (colour, plot type, etc)
- option to set/choose 1st variable (e.g., when sharing a link)
- what to do first?
- better handling of errors on data import (weird characters etc)
  - for teaching, it has to be robust otherwise _some_ students will manage to run into issues
- reordering levels (e.g., by drag and drop)
- create graphics that users can recreate with code
  - "plot generator" - options => arguments

### Research opportunities

- how interface design aids learning
- Y ~ X plot where Y = cat - what should we do? Vis vs modelling
- Y12-13 - reeducating teachers on using data + tools
- spreadsheet -> iNZight -> R

### Barriers

- competition with Codap - data science research, heavily funded

## VUW Teaching team, 5 December 2024

- ## Monday 16 December 12.30 - 1.30
- display, information given, more comprehensive (than Jamovi)
- model fitting module for surveys
- sample surveys

- spine plots - option to turn off width scaling
- Lite: UI for confidence interval gets squashed on small screen
- clicking ok = forgets regression; dismiss, doesn't seem to
- inference
  - store residuals
  - don't need the rename option - perhaps this is causing issues?
- all good up until 2x numeric

  - inference tab doesn't do a default thing for the straight line
  - ability to set null hypothesis for linear regression

- some "frustrating" things are valuable teaching moments

Features to add:

- Confidence region for linear trend
- Prediction interval/region on the plot too?
- Example data - auto load Visualize tab too
- Data cleaning - using interactive graphics?
