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
    topLevelVariable: string,
    /**
     * Set to true if you want the game iframe to be full width / full height (instead of resizing height based on content)
     */
    fullScreen: boolean,
    /**
     * Set to true if you implicitly trust the viewer. They will have access to your local storage!
     *
     * Can be useful when cross-site fingerprinting protections mess with the game. Or maybe we should find a way to display
     * a warning instead when we detect the lack of feature!
     */
    trusted: boolean,
  },
  engine: {
    package: {
      name: string,
      version: string
    },
    entryPoint: string
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
