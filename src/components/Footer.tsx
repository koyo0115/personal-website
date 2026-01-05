export default function Footer() {
    return (
        <footer className="bg-black text-white py-12 px-6 md:px-12 border-t border-gray-900">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="text-center md:text-left">
                    <h2 className="text-lg font-bold tracking-widest uppercase mb-1">Vision Partner Agency</h2>
                    <p className="text-gray-600 text-xs uppercase tracking-wide">Tokyo / Global</p>
                </div>

                <div className="text-xs text-gray-600 uppercase tracking-widest">
                    &copy; {new Date().getFullYear()} Vision Partner. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
}
