import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { itemsNavbar } from "../utils/data";

const Navbar = () => {
    const location = useLocation(); // Obtén la ruta actual

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed z-40 flex flex-col items-center justify-center w-full mt-auto h-max bottom-10"
        >
            <nav>
                <div className="flex items-center justify-center gap-4 px-6 py-2 rounded-full bg-white/30 backdrop-blur-md border border-white/10">
                    {itemsNavbar.map((item) => (
                        <div
                            key={item.id}
                            className={`px-3 py-2 transition duration-150 rounded-full cursor-pointer hover:bg-secondary ${
                                location.pathname === item.link ? 'bg-secondary' : ''
                            }`}
                        >
                            <Link to={item.link}>
                                <span className="text-2xl">{item.icon}</span>
                            </Link>
                        </div>
                    ))}
                </div>
            </nav>
        </motion.div>
    );
};

export default Navbar;
