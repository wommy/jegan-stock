// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: 'gridsome-source-google-sheets',
      options: {
        sheetId: '1iv6j2U6Zh-0mA4reumMzKaz_8ZJ60dhJ4tdPAc2qdhQ', 
        apiKey: 'AIzaSyCd7SyzTtsCfK4coIfnsbtj-jZ7NBR9zzw',
        // type: 'TYPE_NAME', //Optional - default is googleSheet. Used for graphql queries.
      }
    }
  ]
}
