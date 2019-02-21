
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
topSpace: 有时候就算调用了RNCzNavigationview.getTopSpace，获取到了Space高度，有的页面还先于创建的话，可以直接赋值进来。
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

###  5.重要说明!
因为iPhoneX顶部遮挡了，所以支持整体下移topSpace高度，但是需要在RN入口初始化高度，如果第一个Component加载时有可能异步还没获取高度，所以也可以在NavigationView传入属性topSpace高度（理论上最多只有一个Component需要这么做）。
```
//如果没有调用过原生方法获取Space，则获取一次
RNCzNavigationview.getTopSpace( (result) => {
    NavigationView.TopSpace = result;
});
```

  
测试123
