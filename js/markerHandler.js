AFRAME.registerComponent("markerHandler",{
    init:async function(){
        this.el.addEventListener("markerFound",()=>{
            console.log("Marker is found")
            this.handleMarkerFound()
        })
        this.el.addEventListener("markerLost",()=>{
            console.log("Marker is lost")
            this.handleMarkerLost()
        })

    },
    handleMarkerFound:function(){
        var buttonDiv = doucument.getElementById("button-div")
        buttonDiv.style.display="flex"
        var ratingButton = document.getElementByTd("rating-button")
        var orderButton = document.getElementByTd("order-button")
        ratingButton.addEventListener("click",function(){
            swal({
                icon:"warning",
                title:"Rate Dish",
                text:"Work in progress"
            })
        })
        orderButton.addEventListener("click",function(){
            swal({
                icon:"https://imgur.com/4NZ6uLY",
                title:"Thanks for ordering item.",
                text:"Your order will be served soon..."
            })
        })
    },
    handleMarkerLost:function(){
        var buttonDiv = doucument.getElementById("button-div")
        buttonDiv.style.display="none"
    }
})