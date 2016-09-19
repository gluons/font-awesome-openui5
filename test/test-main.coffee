require.config
  baseUrl: '/base'
  paths:
    'font-awesome-openui5': 'dist/font-awesome-openui5.min'
    'jQuery': 'https://openui5.hana.ondemand.com/1.38.4/resources/sap-ui-core'
    'test': 'test/test'
  deps: ['test']
  shim:
    'font-awesome-openui5': ['jQuery']
    'test': ['font-awesome-openui5']
  callback: window.__karma__.start
