
# react-native-cz-navigationview

## Getting started

`$ npm install react-native-cz-navigationview --save`

### Mostly automatic installation

`$ react-native link react-native-cz-navigationview`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-cz-navigationview` and add `RNCzNavigationview.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNCzNavigationview.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.chenzhe.navigationview.RNCzNavigationviewPackage;` to the imports at the top of the file
  - Add `new RNCzNavigationviewPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-cz-navigationview'
  	project(':react-native-cz-navigationview').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-cz-navigationview/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-cz-navigationview')
  	```


## Usage
```javascript
import RNCzNavigationview from 'react-native-cz-navigationview';

// TODO: What to do with the module?
RNCzNavigationview;
```
  