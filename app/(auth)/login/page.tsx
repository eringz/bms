export default function Login ()
{
    return (
        <div
            className="flex justify-center w-96 bg-blue-900"
        >
            <form
                className="flex flex-row justify-center w-96 bg-red-400"
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
            </form>
        </div>
    )
}