# Record interview questions about CSS

## 盒模型
盒模型都是由四个部分组成的，分别是margin、border、padding和content。

标准盒模型和IE盒模型的区别在于设置width和height时，所对应的范围不同。标准盒模型的width和height属性的
范围只包含了content，而IE盒模型的width和height属性的范围包含了border、padding和content。

一般来说，我们可以通过修改元素的box-sizing属性来改变元素的盒模型。

## 如何居中 div

一般常见的几种居中的方法有：

对于宽高固定的元素

（1）我们可以利用margin:0 auto来实现元素的水平居中。

（2）利用绝对定位，设置四个方向的值都为0，并将margin设置为auto，由于宽高固定，因此对应方向实现平分，可以实现水
平和垂直方向上的居中。

（3）利用绝对定位，先将元素的左上角通过top:50%和left:50%定位到页面的中心，然后再通过margin负值来调整元素
的中心点到页面的中心。

（4）利用绝对定位，先将元素的左上角通过top:50%和left:50%定位到页面的中心，然后再通过translate来调整元素
的中心点到页面的中心。

（5）使用flex布局，通过align-items:center和justify-content:center设置容器的垂直和水平方向上为居中对
齐，然后它的子元素也可以实现垂直和水平的居中。

对于宽高不定的元素，上面的后面两种方法，可以实现元素的垂直和水平的居中。

## CSS3 的 Flex box（弹性盒布局模型）
flex布局是CSS3新增的一种布局方式，我们可以通过将一个元素的display属性值设置为flex从而使它成为一个flex
容器，它的所有子元素都会成为它的项目。

一个容器默认有两条轴，一个是水平的主轴，一个是与主轴垂直的交叉轴。我们可以使用flex-direction来指定主轴的方向。
我们可以使用justify-content来指定元素在主轴上的排列方式，使用align-items来指定元素在交叉轴上的排列方式。还
可以使用flex-wrap来规定当一行排列不下时的换行方式。

对于容器中的项目，我们可以使用order属性来指定项目的排列顺序，还可以使用flex-grow来指定当排列空间有剩余的时候，
项目的放大比例。还可以使用flex-shrink来指定当排列空间不足时，项目的缩小比例。

## 经常遇到的浏览器的兼容性有哪些？原因，解决方法是什么，常用 hack 的技巧？
（1）png24位的图片在iE6浏览器上出现背景
解决方案：做成PNG8，也可以引用一段脚本处理。

（2）浏览器默认的margin和padding不同
解决方案：加一个全局的*{margin:0;padding:0;}来统一。

（3）IE6双边距bug：在IE6下，如果对元素设置了浮动，同时又设置了margin-left或
margin-right，margin值会加倍。

#box{float:left;width:10px;margin:0 0 0 10px;}

这种情况之下IE会产生20px的距离
解决方案：在float的标签样式控制中加入_display:inline;将其转化为行内属性。(_这个符号只有ie6会识别)

（4）渐进识别的方式，从总体中逐渐排除局部。
首先，巧妙的使用"\9"这一标记，将IE游览器从所有情况中分离出来。
接着，再次使用"+"将IE8和IE7、IE6分离开来，这样IE8已经独立识别。
.bb{
background-color:#f1ee18;/*所有识别*/
.background-color:#00deff\9;/*IE6、7、8识别*/
+background-color:#a200ff;/*IE6、7识别*/
_background-color:#1e0bd1;/*IE6识别*/
}

（5）IE下，可以使用获取常规属性的方法来获取自定义属性，也可以使用getAttribute()获取自定义
属性；Firefox下，只能使用getAttribute()获取自定义属性
解决方法：统一通过getAttribute()获取自定义属性。

（6）IE下，event对象有x、y属性，但是没有pageX、pageY属性;Firefox下，event对象有
pageX、pageY属性，但是没有x、y属性。
解决方法：（条件注释）缺点是在IE浏览器下可能会增加额外的HTTP请求数。

（7）Chrome中文界面下默认会将小于12px的文本强制按照12px显示
解决方法：

1.可通过加入CSS属性-webkit-text-size-adjust:none;解决。但是，在chrome
更新到27版本之后就不可以用了。

2.还可以使用-webkit-transform:scale(0.5);注意-webkit-transform:scale(0.75);
收缩的是整个span的大小，这时候，必须要将span转换成块元素，可以使用display：block/inline-block/...；

（8）超链接访问过后hover样式就不出现了，被点击访问过的超链接样式不再具有hover和active了
解决方法：改变CSS属性的排列顺序L-V-H-A

（9）怪异模式问题：漏写DTD声明，Firefox仍然会按照标准模式来解析网页，但在IE中会触发怪异模
式。为避免怪异模式给我们带来不必要的麻烦，最好养成书写DTD声明的好习惯。


## 绝对定位元素与非绝对定位元素的百分比计算的区别
绝对定位元素的宽高百分比是相对于临近的position不为static的祖先元素的padding box来计算的。

非绝对定位元素的宽高百分比则是相对于父元素的content box来计算的。

## margin 重叠问题的理解
margin重叠指的是在垂直方向上，两个相邻元素的margin发生重叠的情况。

一般来说可以分为四种情形：

第一种是相邻兄弟元素的marin-bottom和margin-top的值发生重叠。这种情况下我们可以通过设置其中一个元素为BFC
来解决。

第二种是父元素的margin-top和子元素的margin-top发生重叠。它们发生重叠是因为它们是相邻的，所以我们可以通过这
一点来解决这个问题。我们可以为父元素设置border-top、padding-top值来分隔它们，当然我们也可以将父元素设置为BFC
来解决。

第三种是高度为auto的父元素的margin-bottom和子元素的margin-bottom发生重叠。它们发生重叠一个是因为它们相
邻，一个是因为父元素的高度不固定。因此我们可以为父元素设置border-bottom、padding-bottom来分隔它们，也可以为
父元素设置一个高度，max-height和min-height也能解决这个问题。当然将父元素设置为BFC是最简单的方法。

第四种情况，是没有内容的元素，自身的margin-top和margin-bottom发生的重叠。我们可以通过为其设置border、pa
dding或者高度来解决这个问题。

## 对 BFC 规范（块级格式化上下文：block formatting context）的理解
BFC指的是块级格式化上下文，一个元素形成了BFC之后，那么它内部元素产生的布局不会影响到外部元素，外部元素的布局也
不会影响到BFC中的内部元素。一个BFC就像是一个隔离区域，和其他区域互不影响。

一般来说根元素是一个BFC区域，浮动和绝对定位的元素也会形成BFC，display属性的值为inline-block、flex这些
属性时也会创建BFC。还有就是元素的overflow的值不为visible时都会创建BFC。

触发BFC
- 文档的根元素（<html>）。
- 浮动元素（即 float 值不为 none 的元素）。
- 绝对定位元素（position 值为 absolute 或 fixed 的元素）。
- 行内块元素（display 值为 inline-block 的元素）。
- 表格单元格（display 值为 table-cell，HTML 表格单元格默认值）。
- 表格标题（display 值为 table-caption，HTML 表格标题默认值）。
- 匿名表格单元格元素（display 值为 table（HTML 表格默认值）、table-row（表格行默认值）、table-row-group（表格体默认值）、table-header-group（表格头部默认值）、table-footer-group（表格尾部默认值）或 inline-table）。
- overflow 值不为 visible 或 clip 的块级元素。
- display 值为 flow-root 的元素。
- contain 值为 layout、content 或 paint 的元素。
- 弹性元素（display 值为 flex 或 inline-flex 元素的直接子元素），如果它们本身既不是弹性、网格也不是表格容器。
- 网格元素（display 值为 grid 或 inline-grid 元素的直接子元素），如果它们本身既不是弹性、网格也不是表格容器。
- 多列容器（column-count 或 column-width (en-US) 值不为 auto，且含有 column-count: 1 的元素）。
- column-span 值为 all 的元素始终会创建一个新的格式化上下文，即使该元素没有包裹在一个多列容器中（规范变更、Chrome bug）

BFC作用
- 清除浮动
- 防止外边距重叠
