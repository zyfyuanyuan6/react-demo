import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import colors from 'colors';


process.env.NODE_ENV = 'production';
// this assures the Babel dev config (for hot reloading)

console.log('Generating minified bundle for production via webpack , This will take a moment...'.blue);

webpack(webpackConfig).run((err, status)=> {
  if(err) { // so a fatal error occurred here.
    console.log(err.bold.red);
    return 1;
  }

  const jsonStatus = status.toJson();

  if(jsonStatus.hasErrors){
    return jsonStatus.errors.map(error=> {
      console.log(error.red);
    });
  }

  if(jsonStatus.hasWarnings){
    console.log('Webpack generated the following warning: ' .bold.yellow);
    jsonStatus.warnings.map(warning => console.log(warning.yellow));
  }

  console.log(`Webpack status: ${status}`);

  // if we got this far, the build succeeded;
  console.log('Your app has been compiled in production mode and written to /dist. it \'s read');

  return 0;
});
