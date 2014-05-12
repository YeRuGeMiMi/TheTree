//创建一个二级菜单控制js
function TheTree(tlist,eljson){
	this.list = document.querySelector(tlist);
	this.create(eljson);
	this.start();
}

//开始载入
TheTree.prototype.start=function(){
	this.list.style.display="none";
}

//动作
TheTree.prototype.jh=function(){
	if (this.list.style.display == "none") {
		this.list.style.display = "block";
	}else{
		this.list.style.display = "none";
	}
}

//创建节点
TheTree.prototype.create=function(eljson){
	if(!eljson){
		return false;
	}

	var ul=document.createElement("ul");
	//var eljson=eval(elements);
	for(var i=0;i<eljson.length;i++){
		var li=document.createElement("li");
		var a=document.createElement("a");
		a.setAttribute("href",eljson[i].link);
		var text=document.createTextNode(eljson[i].name);
		a.appendChild(text);
		li.appendChild(a);
		ul.appendChild(li);
	}

	this.list.appendChild(ul);

}