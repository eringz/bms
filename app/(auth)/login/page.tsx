export default function Login ()
{
    return (
        <div
            className="flex justify-center items-center bg-linear-to-b from-[#CFE3F7]  via-[#A8CFF7] to-[#80BBF7] h-screen w-screen border"
        >
            <form
                className="flex flex-col justify-center p-6 w-160 h-150 gap-10  border border-blue-900/40"
            >
                <input 
                    type="text"
                    name="username"
                    id="username"
                    placeholder="User Name"
                    className="p-3 w-148 outline-none border-b-2 border-blue-900/40 text-blue-950/50 shadow-md/30"

                />
                <input 
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="p-3 w-148 outline-none border-b-2 border-blue-900/40 text-blue-950/50 shadow-md/30"
                />
                <button
                    className="p-4 mt-5 bg-blue-900 text-white/30 rounded-lg shadow-xl/30 text-shadow-lg/30"
                >
                    Log in
                </button>

            </form>
        </div>
    )
}