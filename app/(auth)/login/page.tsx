export default function Login ()
{
    return (
        <div
            className="flex justify-center items-center bg-linear-to-b from-[#CFE3F7]  via-[#A8CFF7] to-[#80BBF7] h-screen w-screen border"
        >
            <form
                className="flex flex-col justify-center p-6 w-96 h-fit  border-blue-900"
            >
                <input 
                    type="text"
                    name="username"
                    id="username"
                    placeholder="User Name"
                    className="p-3"
                />
                <input 
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"

                />
                <button
                    className="p-4 bg-blue-900 text-white/30 text-xl text-shadow-lg/30 rounded "
                >
                    Log in
                </button>

            </form>
        </div>
    )
}