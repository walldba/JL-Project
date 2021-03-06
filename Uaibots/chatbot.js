var changeBubble = null;

document.addEventListener("DOMContentLoaded", function(){

    var client = new BlipChat();

    var bubble;
    var bubbleContainer;
    var closeIcon;

    const iconId = "blip-chat-icon";
    const closeId = "blip-chat-close-icon";
    const chatContainer = "blip-chat-container";

    const startingColor = "#ffffff";
    const displayClassName = "display";
    const hideClassName = "hide";

    const appKey = "bG9yZWFsOjA4ZWEyNjBlLWVkOTQtNDY0Zi1iNTQyLWVjNGZlMmE5YjgzMQ==";

    const bottomImage = "https://s3-sa-east-1.amazonaws.com/infobots/fiat/customer-care/icon-white-vector.svg";
    const topImage = "https://s3-sa-east-1.amazonaws.com/infobots/fiat/customer-care/icon-gray-vector.svg";

    const bubbleMessage = "Fale com a gente, estamos online!";

	function displayBubble(){
        bubble.classList.add(displayClassName);
        bubble.classList.remove(hideClassName);
    }

    function hideBubble(){
        bubble.classList.add(hideClassName);
        bubble.classList.remove(displayClassName);
    }

    changeBubble = function () {
        if (bubble.classList.contains(displayClassName))
            hideBubble();
        else
            displayBubble();
    }

    function createBubble(){

        bubbleContainer = document.createElement("div");
        bubbleContainer.id = "bubble-container";

        bubble = document.createElement("div");
        bubble.id = "message-bubble";
        bubble.onclick = function(){ client.widget._openChat() }

        var triangle = document.createElement("div");
        triangle.id = "triangle";

        var message = document.createElement("div");
        message.id = "message";
        message.innerHTML = bubbleMessage;

        bubble.appendChild(message);
        bubble.appendChild(triangle);
        bubbleContainer.appendChild(bubble);

        document
        .querySelector(`#${chatContainer}`)
        .prepend(bubbleContainer);

    }

    function replaceImageStructure() {

        closeIcon = document.querySelector(`#${closeId}`);
        var oldImage = document.querySelector(`#${iconId}`);

        var container = document.createElement("div");
        container.id = iconId;
	}

    client
    .withAppKey(appKey)
    .withButton({"color":"#686868","icon":"https://s3-sa-east-1.amazonaws.com/msging.net/Services/Images/a1f361e0-5951-4066-b274-bd23bc6dd6a6"})
    .withEventHandler(BlipChat.ENTER_EVENT, function () {
        closeIcon.classList.add(displayClassName);
        closeIcon.classList.remove(hideClassName);
        hideBubble();
    })
    .withEventHandler(BlipChat.LEAVE_EVENT, function () {
        closeIcon.classList.add(hideClassName);
        closeIcon.classList.remove(displayClassName);
    })
	.withEventHandler(BlipChat.LOAD_EVENT, function () {
	    localStorage.removeItem('blipSdkUAccount');  
	})

    .build();

    replaceImageStructure();
    createBubble();

    displayBubble();
    setTimeout(function(){
        hideBubble();
    }, 10000);

});