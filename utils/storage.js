export default {
	get: function(key){
		try{
			return JSON.parse(localStorage.getItem(k));
		}catch(e){
			return null;
		}
	},
	set: function(key, value){
		localStorage.setItem(k, JSON.stringify(value));
	}
};