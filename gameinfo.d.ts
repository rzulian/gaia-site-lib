export interface GameInfo {
  _id: {
    game: string,
    version: number
  },

  label: string,

  description: string,
  rules: string,

  viewer: {
    // https://unpkg.com/@gaia-project/viewer@^4
    url: string,
    dependencies: {
      scripts: string[],
      stylesheets: string[]
    },
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

  // [{label: "Last player <i>rotates</i> sectors before faction selection", name: "advancedRules", type: 'checkbox'}]
  options: Array<{
    label: string,
    type: 'checkbox',
    name: string
  }>,
  // ['spaceships']
  expansions: Array<{
    label: string,
    name: string
  }>,

  meta: {
    public: boolean
  }
}
