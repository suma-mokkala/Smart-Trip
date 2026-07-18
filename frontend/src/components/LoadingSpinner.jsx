function LoadingSpinner() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white">
            <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>

            <h2 className="mt-6 text-2xl font-bold text-gray-700">
                Loading...
            </h2>

            <p className="text-gray-500 mt-2">
                Please wait...
            </p>
        </div>
    );
}

export default LoadingSpinner;