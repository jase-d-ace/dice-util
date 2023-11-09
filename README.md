# Dice Util

Got bored, built a dice rolling program.

Needed a bunch of D6s to build a new character, but I didn't have a whole bunch of D6s on me (I know, I'm the worst DnD player).

So I figured why not build an entire dice util. 3 functions total, a bunch of constants so that I don't have to continually replace values everywhere just in case by some miracle I decide to expand this.

React app has been *tentatively* finished and is now merged to `main`. It's also live [here](https://rollsomedice.surge.sh). The original node util is under the branch `node-util`.

## Feature List
> Features listed here have also already been merged to `main`, but separate branches have been listed anyway for clarity and tracking purposes

* Stat-rolling algorithm re-rolls any result less than 7 (04/12/2020). Branch: `drop-sevens`
* Open route for searching the free 5e SRD via [this API](https://api.open5e.com) (04/14/2020). Branch: `routing`
* Initiative tracker for adding and removing members from battle (04/21/2020). Branch: `initiatives`

## Installation Instructions

It's probably important to have installation instructions if by some miracle people see this and feel like "hey, this is kinda going in vaguely the right direction, let me nudge it forward."

1. Fork/clone to your machine 
2. `cd dice-client`
3. `npm install`
4. `npm start`

