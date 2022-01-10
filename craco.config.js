 const CracoLessPlugin = require('craco-less');
 
 module.exports = {
      babel: {//支持装饰器
          plugins: [
              [
                  "import",
                  {
                      "libraryName": "antd",
                      "libraryDirectory": "es",
                      "style": true //设置为true即是less 这里用的是css
                  }
              ]
          ]
      },
      plugins:[
       {
        plugin: CracoLessPlugin,
             options: {
               lessLoaderOptions: {
                 lessOptions: {
                   modifyVars: { '@primary-color': 'orange' },
                   javascriptEnabled: true,
                 },
               },
             },
      }
   ],
 };
