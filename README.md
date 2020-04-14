# Dice Util

Got bored, built a dice rolling program.

Needed a bunch of D6s to build a new character, but I didn't have a whole bunch of D6s on me (I know, I'm the worst DnD player).

So I figured why not build an entire dice util. 3 functions total, a bunch of constants so that I don't have to continually replace values everywhere just in case by some miracle I decide to expand this.

~~Yes, I'm still using old school `require`. I'll get around to changing it later.~~ This is also no longer true

Used four separate files just for giggles and for `separation of concerns` because importance.

~~Currently working on a React front end for this project; progress can be seen under the `react-refactor` branch of this repo~~

React app has been *tentatively* finished and is now merged to `master`. It's also live [here](https://rollsomedice.surge.sh). The original node util is under `node-util`.

## Installation Instructions

It's probably important to have installation instructions if by some miracle people see this and feel like "hey, this is kinda going in vaguely the right direction, let me nudge it forward."

1. Fork/clone to your machine 
2. `cd dice-client`
3. `npm install`
4. `npm start`

## Update as of 04/12/2020

I've started working on separate rules for character creation. There are different iterations of the `rollStatLine` function found in `dice-client/src/services.js` in different branches on this repo.

* `drop-ones` implements a rule where your stat generation will never include a 1.
* `drop-sevens` adds up the total number after rolling 4d6-drop-lowest, and re-rolls any totals less than 7.

### Update EOD 04/12/2020:
I've decided that I really like the `drop-sevens` logic a lot. So it's been merged into `master` as well. It is now the default rule to drop any stat lower than 7.

## Update as of 04/14/2020
New functionality in the works to hit a free D&D 5e API as a sort of bestiary. Work is currently under the `routing` branch. Data will probably be very incomplete since it only hits the SRD and not the entire PHB, which makes sense. If the PHB were readily available online for free, then there wouldn't be a point to charge for it. So anything you can find in the SRD will be avaiable on this app on a new route.

### EOD 04/14/2020:
Searching the SRD has been merged to `master`. Yay.

~~I'll fully flesh out this readme some other time.~~ I guess "some other time" has already happened.