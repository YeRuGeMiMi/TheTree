//创建一个二级菜单控制js
function TheTree(tlist){
	this.list = document.querySelector(tlist);
}

TheTree.prototype.start=function(){
	this.list.style.display="none";
}

TheTree.prototype.jh=function(){
	if (this.list.style.display == "none") {
		this.list.style.display = "block";
	}else{
		this.list.style.display = "none";
	}
}