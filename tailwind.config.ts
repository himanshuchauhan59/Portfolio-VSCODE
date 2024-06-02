import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        'general-background': '#1b1b1b',
        'general-foreground': '#5e5d5d',
        'general-foreground-sidebar-icons': '#222222',
        'general-foreground-sidebar-files': '#383838',
        'general-footer-background': '#3486eb',
        'general-selection-background': '#264F78',
        'general-inactive-selection-background': '#3A3D41',
        'general-highlight': '#ADD6FF',
        'general-cursor': '#AEAFAD',

        'file-header-background': 'rgb(144 144 144 / 15%)',
        'file-background': '#4b4a4a',
        'file-header-foreground': '#3a3a3a',
        'file-foreground': 'rgb(61 61 61)',
        'file-selected-foreground': 'rgb(27 27 27 / 1)',
        'file-text-color': 'rgb(217 217 217)',

        'editor-background': '#1E1E1E',
        'editor-foreground': '#D4D4D4',
        'editor-line-number': '#858585',
        'editor-line-highlight': '#2A2A2A',
        'editor-selection': '#264F78',
        'editor-inactive-selection': '#3A3D41',
        'editor-find-match-highlight': '#515C6A',
        'editor-cursor': '#AEAFAD',

        'syntax-keyword': '#569CD6',
        'syntax-string': '#CE9178',
        'syntax-variable': '#9CDCFE',
        'syntax-function': '#DCDCAA',
        'syntax-comment': '#6A9955',
        'syntax-number': '#B5CEA8',
        'syntax-operator': '#D4D4D4',
        'syntax-class': '#4EC9B0',
      }
    },
  },
  plugins: [],
};
export default config;



//  #### ---------------------------------
//  General UI Colors
//  --------------------------------- ####

// Backgorund : #1E1E1E
// Foreground: #D4D4D4
// Selection Background: #264F78
// Inactive Selection Background: #3A3D41
// Highlight: #ADD6FF
// Cursor: #AEAFAD

// #### ---------------------------------
// Editor Colors
// --------------------------------- ####

// Editor Background: #1E1E1E
// Editor Foreground: #D4D4D4
// Line Number: #858585
// Editor Line Highlight: #2A2A2A
// Editor Selection: #264F78
// Editor Inactive Selection: #3A3D41
// Editor Find Match Highlight: #515C6A
// Editor Cursor: #AEAFAD


// #### ---------------------------------
// Syntax Highlighting
// --------------------------------- ####

// Keyword: #569CD6
// String: #CE9178
// Variable: #9CDCFE
// Function: #DCDCAA
// Comment: #6A9955
// Number: #B5CEA8
// Operator: #D4D4D4
// Class: #4EC9B0