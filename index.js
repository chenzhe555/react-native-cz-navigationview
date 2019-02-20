import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, NativeModules } from 'react-native';
const { RNCzNavigationview } = NativeModules;

/*
* props:
* title: 如果不自定义中间的组件，则默认显示标题 title字段
* mainStyle: 总视图样式
* leftView: 自定义左边视图 <View></View>
* backTitle: 如果没有自定义左边视图，则默认有返回箭头，箭头右边也可加入文本信息backTitle
* centerView: 自定义中间视图 <View></View>
* rightView: 自定义右边视图 <View></View>
* topSpace: 有时候就算调用了RNCzNavigationview.getTopSpace，获取到了Space高度，有的页面还先于创建的话，可以直接赋值进来。
*
* func:
* evaluateView: 赋值当前视图对象
* 
* export func:
* modifyTitle: 修改显示的标题
* */
export default class CZNavigationView extends Component{

    /************************** 生命周期 **************************/
    constructor(props) {
        super(props);
        this.initializeParams();
    }

    componentDidMount() {
        if (this.props.evaluateView) this.props.evaluateView(this);
    }
    /************************** 继承方法 **************************/
    /************************** 通知 **************************/
    /************************** 创建视图 **************************/
    /************************** 网络请求 **************************/
    /************************** 自定义方法 **************************/
    /*
    * 初始化参数
    * */
    initializeParams() {
        //由于iPhoneX这些的页眉多出一些，topSpace就是>64的部分
        this.topSpace = this.props.topSpace ? this.props.topSpace : CZNavigationView.getTopSpace();
        this.state = {
            title: this.props.title ? this.props.title : ''
        };
    }

    /*
    * 获取高度64以外的高度
    * */
    static getTopSpace = () => {
        return CZNavigationView.TopSpace ? CZNavigationView.TopSpace : 0;
    }
    /************************** 子组件回调方法 **************************/
    /************************** 外部调用方法 **************************/
    /*
    * 修改显示的标题
    * */
    modifyTitle = (title = '') => {
        this.setState({
            title: title
        });
    }
    /************************** List相关方法 **************************/
    /************************** Render中方法 **************************/
    /*
    * 点击返回按钮事件
    * */
    _back = () => {
        if (this.props.back) this.props.back();
    }

    render() {
        const { topSpace } = this;
        const { title } = this.state;

        //总视图样式
        let mainStyles = [styles.MainView, {
            height: topSpace + 64
        }];
        if (this.props.mainStyle) mainStyles.push(this.props.mainStyle);

        //左边视图
        let leftView = this.props.leftView;
        if (!leftView) {
            leftView = (
                <TouchableOpacity onPress={this._back}>
                    <View style={[styles.DefaultLeftView]}>
                        <Image style={[styles.DefaultBackImageView]} source={require('./images/back-black.png')}/>
                        <Text>{this.props.backTitle ? this.props.backTitle : ''}</Text>
                    </View>
                </TouchableOpacity>
            );
        }

        //中间视图
        let centerView = this.props.centerView;
        if (!centerView) {
            centerView = (
                <Text style={[styles.DefaultCenterTextView]}>{title}</Text>
            );
        }

        //右边视图
        let rightView = this.props.rightView;

        return (
            <View style={[mainStyles]}>
                <View style={[{height: topSpace + 20}]}></View>
                <View style={[styles.CenterMainView]}>
                    {centerView}
                </View>
                <View style={[styles.LeftAndRightMainView, {marginTop: (20 + topSpace)}]}>
                    {leftView}
                    {rightView}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    MainView: {
        backgroundColor: 'white'
    },

    CenterMainView: {
        height: 44,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 80,
        marginRight: 80
    },

    DefaultCenterTextView: {
        fontSize: 18,
        color: '#111111',
        fontFamily: 'PingFangSC-Medium'
    },

    LeftAndRightMainView: {
        width: '100%',
        height: 44,
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: -2
    },

    DefaultLeftView: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1
    },

    DefaultBackImageView: {
        width: 10,
        height: 16,
        marginLeft: 15,
        marginRight: 15
    }
})