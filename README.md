# wx-weapp
微信 H5 跳转小程序使用 wx-open-launch-weapp 标签 Vue、React 快速开发库

## 安装使用
HTML:
```html
<view id="launch-btn"></view>
```
JS/TS:
```javascript
let weappBtnStyle = `
<style>
	.menu-logo-wx-text {
		font-size: 14px;
		margin-top: 10%;
	}

	.menu-logo-wx {
		height: 30%;
		width: 60%;
	}

	...
</style>
`;
let content = `
<view class="uni-flex-wx uni-column-wx menu-logo-div-wx">
// image src 必须是外网可以访问到的图片，不能填写物理路劲，将无法访问
<image class="menu-logo-wx" src="https://xxxx/xxx/xx.png"></image>
<text class="menu-logo-wx-text">网校</text>
</view>
${weappBtnStyle}
`;

let launchParams = {
	eleId: "launch-btn", // 页面元素标签ID，必填
	url: "", // 小程序地址，非必填
	username: "gh_xxxxxxxxxx", // 小程序原始ID，必填
	content: content, // 按钮HTML元素及样式，必填
	launchEvent: function(e) {...}, // 点击按钮正常跳转触发，必填
	errorEvent: function(e) {...}, // 点击跳转抛出异常，必填
	active: true, // 按钮是否激活跳转小程序，为了满足个别情况下改按钮不需要跳转小程序
	noAtiveEvent: function() {...} // 按钮不跳转小程序时的点击时间，active 为 true 时必填
};
launchWeApp(launchParams); // 引入JS之后调用launchWeApp
```