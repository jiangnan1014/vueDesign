import Vue from 'vue'
Vue.filter("format", function (val) {
    if (val.length > 7) {
        val = val.slice(0, 7) + "..."
    }
    return val
})
Vue.filter("time",function(val){
    if(val){
      var minu =  Math.floor((val/1000/60))
      if(minu<10){
        minu = "0"+minu
      }
      var seconds = Math.floor((val/1000)%60)
      if(seconds<10){
        seconds = "0"+seconds
      }
      val = minu + ":" +seconds
    }
    return val
})
Vue.filter("number",function(val){
    if(val<10){
        val = "0"+val
        return val
    }else{
        return val
    }
})