
## Manual installation

npm install react-native-cz-navigationview --save

	

## Usage
###  1.引入组件
```
import NavigationView from 'react-native-cz-navigationview';
```

iOS: 在Podfile中加入
```
pod 'RNCzNavigationview', :path => '../node_modules/react-native-cz-navigationview/ios/RNCzNavigationview.podspec'
```
然后执行
```
pod install
```

使用
```
<NavigationView
    title={'测试标题'}
    back={this._back}
    evaluateView={ (navigationView) => {this.navigationView = navigationView}}
/>
```

###  2.属性:
```
title: 如果不自定义中间的组件，则默认显示标题 title字段
```
```
mainStyle: 总视图样式
```
```
leftView: 自定义左边视图 <View></View>
```
```
backTitle: 如果没有自定义左边视图，则默认有返回箭头，箭头右边也可加入文本信息backTitle
```
```
centerView: 自定义中间视图 <View></View>
```
```
rightView: 自定义右边视图 <View></View>
```
```
topSpace: 自定义顶部多余Space，比如iPhoneX会多出22。（PS：组件已处理这些了这些情况，如果不是特殊情况，不需要考虑）
```

###  3.属性方法:
```
evaluateView: 赋值当前视图对象
```

###  4.供外部调用的方法:
```
/*
* 修改显示的标题
* */
this.navigationView.modifyTitle(title = '')
```

  
