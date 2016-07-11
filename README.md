# wl-toast
网兰的toast组件


#使用方法

$.toast(<text>,<type>,<callback>)

text:<必填>
要输入的文字
type:<必填>
参数有：
cancel 取消操作
stop 禁止操作
loading loading加载
error 错误提示
ok 成功提示
text 文本显示(默认项目)
callback:<选项>

外带一个方法用于关闭loading
$.hideloading(<callback>) 可带入callback