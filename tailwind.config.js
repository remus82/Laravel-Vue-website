 
module.exports = {
  content: [

    './src/**/*.{vue,vuex,jsx,html,js}',
    './src/views/**/*.{vue,vuex,jsx,html,js}',
    './src/components/**/*.{vue,vuex,jsx,html,js}',
    "./node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
     
  }
},
  plugins: [ 
    require('flowbite/plugin')
  ],
}

