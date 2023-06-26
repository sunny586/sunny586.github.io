## B 端项目文件结构规范
首先：没有任何强制的标准！

### 参考
React 项目规范标准：[React 项目文件结构](https://legacy.reactjs.org/docs/faq-structure.html)

### 项目文件结构和命名规范
```Bash
/assets （静态文件）
	image.png
  logo.png	
/components （所有组件）
	ColorPicker.vue (使用 Pascal 命名方式)
  Dropdown.vue
  ...
/views （所有路由）
	Home.vue （使用 Pascal 命名方式）
    ...
/router （路由配置文件）
	index.ts
	...
/store （全局 store 配置文件）
	index.ts
	editor.ts
	user.ts
	...
/hooks （vue钩子函数）
	useURLLoader.ts （ 以use开头，使用驼峰命名方式 ）
    ...
/plugins （插件）
	hotKeys.ts （使用驼峰命名方式）
	...
/test （测试文件）
	ColorPicker.spec.ts （使用Pascal命名方式，和组件名称相同，以 spec.ts 结尾）
App.vue
main.ts
...
```

### 注意事项
* 避免多层嵌套
* 不要过度思考