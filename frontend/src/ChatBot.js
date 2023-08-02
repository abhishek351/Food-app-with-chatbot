const ChatBot=()=>{
    const iframeStyle = {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        width: '350px',
        height: '600px',
        border: 'none',
      };
    return (
        <div>
            <iframe
    allow="microphone;"
    style={iframeStyle}
    
    src="https://console.dialogflow.com/api-client/demo/embedded/21105ea5-d1f1-4242-9478-df6caa55b317">
</iframe> 
        </div>
        
    )
    
}

export default ChatBot;