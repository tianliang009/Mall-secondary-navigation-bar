import React from 'react';
import './App.css';

class App extends React.Component{

constructor(props){
  super(props);
  this.state={}
}

componentDidMount(){
  // window.onload = function(){
  //   var Lis = document.getElementsByTagName('li');
  //   for (var i = 0; i < Lis.length; i++) {
  //     Lis[i].i = i;//由于Js中的闭包 for循环中的i是最后一个数 所以不能直接使用i
  //     Lis[i].onmouseover = function(){
  //       this.className = "lihover";
  //       // 为其添加lihover类的样式 后面的.submenu span等会自动继承
  //       var h0 = (this.i-1)*30+42;//当前的一级菜单的高度 30为每一行的高度 42为标题的高度
  //       var y = this.getElementsByTagName('div')[0].offsetHeight;//当前一级菜单下悬浮层的高度
  //       var h = this.getElementsByTagName('div')[0].style.top + y;
  //       if(h < h0){
  //         this.getElementsByTagName('div')[0] = h0+'px';
  //         //防止当悬浮层内容太少的时候其远离一级菜单
  //       }
  //       if(y>550){
  //         this.getElementsByTagName('div')[0].style.top = "3px";
  //         //防止当悬浮层内容太多的时候一屏无法展示完整将其上移
  //       }
  //     }
  //     Lis[i].onmouseout = function(){
  //       this.className = "";
  //     }
  //   }
  // }
}

render(){
  return (
    <ul className="topmenu">
      <div className="toptitle">
          LEFT
      </div>
      <li><a href="#">1</a><span></span>
            <div className="submenu">
                <div className="leftdiv">
                    <dl>
                        <dt><a href="#">1.1</a></dt>
                        <dd>
                            <a href="#">1.11</a> <a href="#">1.12</a> <a href="#">1.13</a> <a href="#">1.14</a>
                            <a href="#">1.15</a> <a href="#">1.16</a> <a href="#">1.17</a>
                        </dd>
                    </dl>
                    <dl>
                        <dt><a href="#">1.2</a></dt>
                        <dd>
                            <a href="#">1.21</a> <a href="#">1.22</a> <a href="#">1.23</a> <a href="#">1.24</a>
                            <a href="#">1.25</a> <a href="#">1.26</a>
                        </dd>
                    </dl>
                    <dl>
                        <dt><a href="#">1.3</a></dt>
                        <dd>
                            <a href="#">1.31</a> <a href="#">1.32</a> <a href="#">1.33</a> <a href="#">1.34</a>
                        </dd>
                    </dl>
                    <dl>
                        <dt><a href="#">1.4</a></dt>
                        <dd>
                            <a href="#">1.41</a> <a href="#">1.42</a> <a href="#">1.43</a> <a href="#">1.44</a> <a href="#">1.45</a>
                        </dd>
                    </dl>
                    <dl>
                        <dt><a href="#">1.5</a></dt>
                        <dd>
                            <a href="#">1.51</a> <a href="#">1.52</a> <a href="#">1.53</a> <a href="#">1.54</a>
                            <a href="#">1.55</a> <a href="#">1.56</a>
                        </dd>
                    </dl>
                    <dl>
                        <dt><a href="#">1.6</a></dt>
                        <dd>
                            <a href="#">1.61</a> <a href="#">1.62</a> <a href="#">1.63</a> <a href="#">1.64</a>
                        </dd>
                    </dl>
                    <dl className="fore7">
                        <dt><a href="#">1.7</a></dt>
                        <dd>
                            <a href="#">1.71</a> <a href="#">1.72</a> <a href="#">1.73</a> <a href="#">1.74</a>
                            <a href="#">1.75</a> <a href="#">1.76</a> <a href="#">1.77</a> <a href="#">1.78</a>
                            <a href="#">1.79</a> <a href="#">1.80</a>
                        </dd>
                    </dl>
                    <dl>
                        <dt><a href="#">1.8</a></dt>
                        <dd>
                            <a href="#">1.81</a> <a href="#">1.82</a> <a href="#">1.83</a> <a href="#">1.84</a> <a href="#">1.85</a> 
                            <a href="#">1.86</a> <a href="#">1.87</a> <a href="#">1.88</a>
                        </dd>
                    </dl>
                    <dl>
                        <dt><a href="#">1.9</a></dt>
                        <dd>
                            <a href="#">1.91</a> <a href="#">1.92</a> <a href="#">1.93</a> <a href="#">1.94</a>
                            <a href="#">1.95</a>
                        </dd>
                    </dl>
                    <dl>
                        <dt><a href="#">2.0</a></dt>
                        <dd>
                            <a href="#">2.01</a> <a href="#">2.02</a> <a href="#">2.03</a> <a href="#">2.04</a>
                        </dd>
                    </dl>
                    <dl>
                        <dt><a href="#">2.1</a></dt>
                        <dd>
                            <a href="#">2.11</a> <a href="#">2.12</a> <a href="#">2.13</a> <a href="#">2.14</a>
                            <a href="#">2.15</a>
                        </dd>
                    </dl>
                </div>
                <div className="rightdiv">
                    <dl>
                        <dd>
                            <a href="http://sale.jd.com/act/1XDZ6ShE5M7tTrl.html">
                                <img src="http://img30.360buyimg.com/erpVCAare/g16/M00/0B/1B/rBEbRlOCFcoIAAAAAAArMNB2tlkAACTlwDgVG8AACtI514.jpg"
                                    width="194" height="70" title="\家电" />
                            </a>
                        </dd>
                        <dd>
                            <a href="http://sale.jd.com/act/v8kJIaPmsMGuebpH.html">
                                <img src="http://img30.360buyimg.com/erpVCAare/g16/M00/0B/19/rBEbRlOAiHUIAAAAAAAx8X2c6oIAACTCAP56A4AADIJ112.jpg"
                                    width="194" height="70" title="小家电--三请聚宝盆" />
                            </a>
                        </dd>
                    </dl>
                    <dl>
                        <dt>title</dt>
                        <dd>
                            <a href="#">title-1</a>
                        </dd>
                        <dd>
                            <a href="#">title-2</a>
                        </dd>
                        <dd>
                            <a href="#">title-3</a>
                        </dd>
                        <dd>
                            <a href="#">title-4</a>
                        </dd>
                        <dd>
                            <a href="#">title-5</a>
                        </dd>
                        <dd>
                            <a href="#">title-6</a>
                        </dd>
                    </dl>
                </div>
            </div>
        </li>
      <li><a href="#">2</a></li>
      <li><a href="#">3</a></li>
      <li><a href="#">4</a></li>
      <li><a href="#">5</a></li>
      <li><a href="#">6</a></li>
      <li><a href="#">7</a></li>
      <li><a href="#">8</a></li>
      <li><a href="#">9</a></li>
      <li><a href="#">10</a></li>
      <li><a href="#">11</a></li>
      <li><a href="#">12</a></li>
      <li><a href="#">13</a></li>
    </ul>  
  );  
}
}

export default App;
