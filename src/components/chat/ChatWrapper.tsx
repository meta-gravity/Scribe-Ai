import Message from "./Message"
import ChatInput from "./ChatInput"

const ChatWrapper = () => {
    return(
        <div className="relative min-h-full bg-zinc-500 flex divide-y flex-col justify-between gap-2">
            <div className="flex-1 justify-betweern flex-col mb-28">
                <Message />
            </div>


            {/* <ChatInput /> */}
        </div>
    )
}

export default ChatWrapper