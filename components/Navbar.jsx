'use client';
import { Search, ShoppingCart, User, LogOut, Menu, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useSupabase } from "@/components/providers/SupabaseProvider";

const Navbar = () => {
    const router = useRouter();
    const [search, setSearch] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const cartCount = useSelector(state => state.cart.total);
    const { supabase, user } = useSupabase();
    const [userEmail, setUserEmail] = useState('');

    useEffect(() => {
        if (user) {
            setUserEmail(user.email || 'User');
        } else {
            setUserEmail('');
        }
    }, [user]);

    const handleSearch = (e) => {
        e.preventDefault();
        if (search.trim()) {
            router.push(`/shop?search=${encodeURIComponent(search)}`);
            setSearch('');
            setIsMenuOpen(false);
        }
    };

    const handleLogout = async () => {
        try {
            await supabase.auth.signOut();
            router.push('/login');
            router.refresh();
            setIsUserMenuOpen(false);
            setIsMenuOpen(false);
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    return (
        <nav className="relative bg-blue-100 shadow-sm">
            <div className="mx-6">
                <div className="flex items-center justify-between max-w-7xl mx-auto py-4 transition-all">
                    <Link href="/" className="flex items-center gap-2">
                        <span className="text-4xl font-semibold text-slate-700">
                            <span className="text-green-600">e</span>Shop
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden sm:flex items-center gap-4 lg:gap-6 text-slate-600">
                        <Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link>
                        <Link href="/shop" className="hover:text-indigo-600 transition-colors">Shop</Link>
                        <Link href="/about" className="hover:text-indigo-600 transition-colors">About</Link>
                        <Link href="/contact" className="hover:text-indigo-600 transition-colors">Contact</Link>

                        <form onSubmit={handleSearch} className="hidden xl:flex items-center w-64 text-sm gap-2 bg-slate-100 px-4 py-2 rounded-full">
                            <Search size={18} className="text-slate-600" />
                            <input 
                                className="w-full bg-transparent outline-none placeholder-slate-600" 
                                type="text" 
                                placeholder="Search products" 
                                value={search} 
                                onChange={(e) => setSearch(e.target.value)} 
                                required 
                            />
                        </form>

                        <Link href="/cart" className="relative flex items-center gap-2 text-slate-600 hover:text-indigo-600 transition-colors">
                            <ShoppingCart size={18} />
                            <span className="hidden md:inline">Cart</span>
                            {cartCount > 0 && (
                                <span className="absolute -top-2 -right-2 text-[10px] flex items-center justify-center w-5 h-5 text-white bg-indigo-600 rounded-full">
                                    {cartCount}
                                </span>
                            )}
                        </Link>

                        {user ? (
                            <div className="relative">
                                <button 
                                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                                    className="flex items-center gap-2 px-4 py-2 text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
                                    aria-haspopup="true"
                                    aria-expanded={isUserMenuOpen}
                                >
                                    <User size={18} />
                                    <span className="hidden md:inline">{userEmail.split('@')[0]}</span>
                                </button>
                                
                                {isUserMenuOpen && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-100">
                                        <div className="px-4 py-2 text-sm text-slate-500 border-b border-gray-100">
                                            {userEmail}
                                        </div>
                                        <button
                                            onClick={handleLogout}
                                            className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
                                        >
                                            <LogOut size={16} />
                                            Logout
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link 
                                href="/login" 
                                className="px-6 py-2 bg-indigo-500 hover:bg-indigo-600 transition-all text-white rounded-full text-sm font-medium"
                            >
                                Login
                            </Link>
                        )}
                    </div>

                    {/* Mobile menu button */}
                    <div className="sm:hidden flex items-center gap-4">
                        <Link href="/cart" className="relative text-slate-600">
                            <ShoppingCart size={20} />
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 text-[10px] flex items-center justify-center w-4 h-4 text-white bg-indigo-600 rounded-full">
                                    {cartCount}
                                </span>
                            )}
                        </Link>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-slate-600 hover:text-slate-900 focus:outline-none"
                            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="sm:hidden bg-white border-t border-gray-200">
                    <div className="px-6 py-4 space-y-4">
                        <form onSubmit={handleSearch} className="flex items-center w-full text-sm gap-2 bg-slate-100 px-4 py-2 rounded-full">
                            <Search size={18} className="text-slate-600" />
                            <input 
                                className="w-full bg-transparent outline-none placeholder-slate-600" 
                                type="text" 
                                placeholder="Search products" 
                                value={search} 
                                onChange={(e) => setSearch(e.target.value)} 
                                required 
                            />
                        </form>
                        
                        <Link 
                            href="/" 
                            className="block py-2 text-slate-700 hover:bg-slate-50 px-2 rounded"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link 
                            href="/shop" 
                            className="block py-2 text-slate-700 hover:bg-slate-50 px-2 rounded"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Shop
                        </Link>
                        <Link 
                            href="/about" 
                            className="block py-2 text-slate-700 hover:bg-slate-50 px-2 rounded"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About
                        </Link>
                        <Link 
                            href="/contact" 
                            className="block py-2 text-slate-700 hover:bg-slate-50 px-2 rounded"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contact
                        </Link>
                        
                        {user ? (
                            <div className="pt-2 border-t border-gray-200 mt-2">
                                <p className="px-2 py-1 text-sm text-slate-500">Logged in as {userEmail}</p>
                                <button
                                    onClick={handleLogout}
                                    className="flex items-center gap-2 w-full text-left py-2 px-2 text-slate-700 hover:bg-slate-50 rounded"
                                >
                                    <LogOut size={16} />
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <Link
                                href="/login"
                                className="block w-full text-center mt-4 px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Login
                            </Link>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;