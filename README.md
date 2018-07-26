# react-todolist
一个简单的todolist的demo，来展示react一些基本用法

一、constructor
```
constructor(props){
  super(props);
  this.state={};
  //等等
  
  this.handle=this.handle.bind(this);
}
```
二、子组件和父组件之间的传值  

1.父组件是通过“属性”向子组件传递参数的，而子组件是通过“props”来接受父组件传递过来的参数的  
2.子组件如果想要和父组件通信，那么子组件要调用父组件传递过来的“方法” 


