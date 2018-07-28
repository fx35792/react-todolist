# react-todolist
一个简单的todolist的demo，来展示react一些基本用法

一、constructor
```
constructor(props){
  super(props);
  this.state={};
  //等等
  
  this.handle=this.handle.bind(this);//优化一
}
```
二、子组件和父组件之间的传值  

1.父组件是通过“属性”向子组件传递参数的，而子组件是通过“props”来接受父组件传递过来的参数的  
2.子组件如果想要和父组件通信，那么子组件要调用父组件传递过来的“方法” 

三、react生命周期  
    1.getDefaultProps  
    2.getInitialState  
    //挂在   
    3.componentWillMount  
    4.render  
    5.componentDidMount  
    6.shouldComponentUpdate(nextProps,nextState)//优化二    
    // 当state发生变化的时候回出发Update  
    7.componentWillUpdate
    8.render
    9.componentDidUpdate    
    10.componentWillUnmount  //当离开页面的时候，触发    
    //当props发生变化的时候会触发  
    11.componentWillReceiveProps(nextProps,nextState)  
    ![生命周期图片](https://images2015.cnblogs.com/blog/588767/201612/588767-20161205190022429-1074951616.jpg)
    
      
    
    
    
  
