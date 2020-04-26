export interface GameInfo {
  _id: {
    game: string,
    version: number
  },

  viewer: {
    // https://unpkg.com/@gaia-project/viewer@^4
    url: string,
    // gaiaViewer, launch is window.gaiaViewer.launch
    topLevelVariable: string
  },
  // Todo
  engine: {

  },
  // [{label: "Do not fill planets with faction color", name: 'noFactionFill', type: 'checkbox'}]
  preferences: Array<{
    label: string,
    type: 'checkbox',
    name: string
  }>,

  // [2, 3, 4]
  players: number[],

  // [{label: "Last player rotates sectors before faction selection", name: "advancedRules", type: 'checkbox'}]
  options: Array<{
    label: string,
    type: 'checkbox',
    name: string
  }>,
  // ['spaceships']
  expansions: string[],

  meta: {
    public: boolean
  }
}
