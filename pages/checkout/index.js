const Checkout = () => {
    return (
        <>
            <section>
                <form action="" className="mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl">
                    <div>
                        <label for="UserEmail" className="block text-xs font-medium text-gray-700">
                            Email
                        </label>

                        <input
                            type="email"
                            id="UserEmail"
                            placeholder="john@rhcp.com"
                            className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                        />
                    </div>
                </form>
            </section>
        </>
    )
}

export default Checkout