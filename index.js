export function launchWeApp(info) {
	if(info.active)
	{
		var btn = document.getElementById(info.eleId); 
		let script = document.createElement("script"); 
		script.type = "text/wxtag-template"; 
		script.text = info.content
		let html =
			`<wx-open-launch-weapp style="width:100%;height:100%;display:block;" username="${info.username}" path="${info.url}">${script.outerHTML}</wx-open-launch-weapp>`;
		btn.innerHTML = html;
		btn.addEventListener("launch", info.launchEvent);
		btn.addEventListener("error", info.errorEvent);
	}else{
		var btn = document.getElementById(info.eleId); //获取元素
		let html =
			`<view style="width:100%;height:100%;display:block;">${info.content}</view>`;
		btn.innerHTML = html;
		btn.addEventListener("click", info.noAtiveEvent);
	}	
}

export function launchApp(info) {
	if(info.active)
	{
		var btn = document.getElementById(info.eleId); 
		let script = document.createElement("script"); 
		script.type = "text/wxtag-template"; 
		script.text = info.content
		let html =
			`<wx-open-launch-app style="width:100%;height:100%;display:block;" appid="${info.appid}" extinfo="${info.extinfo}">${script.outerHTML}</wx-open-launch-app>`;
		btn.innerHTML = html;
		btn.addEventListener("launch", info.launchEvent);
		btn.addEventListener("error", info.errorEvent);
	}else{
		var btn = document.getElementById(info.eleId); //获取元素
		let html =
			`<view style="width:100%;height:100%;display:block;">${info.content}</view>`;
		btn.innerHTML = html;
		btn.addEventListener("click", info.noAtiveEvent);
	}	
}
