//Import CSS Reset
import '../src/assets/css/normalize.css';
import '../src/assets/css/fonts.css';

//Storybook Settings
export const parameters = {
  actions: { 
  argTypesRegex: "^on[A-Z].*" },
  isFullscreen: false,
  showNav: true,
  showPanel: true,
  panelPosition: 'bottom',
  sidebarAnimations: true,
  enableShortcuts: true,
  isToolshown: true,
  theme: undefined,
  selectedPanel: undefined,
  initialActive: 'sidebar',
  showRoots: false,
  layout: 'fullscreen',
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}